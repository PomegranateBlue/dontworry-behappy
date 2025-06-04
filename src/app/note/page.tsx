'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Web Speech API TypeScript declarations
interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
    resultIndex: number;
    error: Error | null;
}

interface SpeechRecognitionResultList {
    length: number;
    item(index: number): SpeechRecognitionResult;
    [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
    isFinal: boolean;
    length: number;
    item(index: number): SpeechRecognitionAlternative;
    [index: number]: SpeechRecognitionAlternative;
}

interface SpeechRecognitionAlternative {
    transcript: string;
    confidence: number;
}

interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onresult: (event: SpeechRecognitionEvent) => void;
    onerror: (event: SpeechRecognitionEvent) => void;
    start(): void;
    stop(): void;
}

interface SpeechRecognitionConstructor {
    new (): SpeechRecognition;
    prototype: SpeechRecognition;
}

declare global {
    interface Window {
        SpeechRecognition?: SpeechRecognitionConstructor;
        webkitSpeechRecognition?: SpeechRecognitionConstructor;
    }
}

const NotePage = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const [tempWords, setTempWords] = useState('');

    useEffect(() => {
        let recognition: SpeechRecognition | null = null;

        if (typeof window !== 'undefined') {
            const SpeechRecognition =
                window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognition = new SpeechRecognition();
                recognition.continuous = true;
                recognition.interimResults = true;
                recognition.lang = 'ko-KR';

                recognition.onresult = (event: SpeechRecognitionEvent) => {
                    let interimTranscript = '';
                    let finalTranscript = '';

                    for (
                        let i = event.resultIndex;
                        i < event.results.length;
                        i++
                    ) {
                        const transcript = event.results[i][0].transcript;
                        if (event.results[i].isFinal) {
                            finalTranscript += transcript + ' ';
                        } else {
                            interimTranscript += transcript;
                        }
                    }

                    setTranscript(
                        (prevTranscript) => prevTranscript + finalTranscript
                    );
                    setTempWords(interimTranscript);
                };

                recognition.onerror = (event: SpeechRecognitionEvent) => {
                    console.error('Speech recognition error:', event.error);
                };
            }
        }

        return () => {
            if (recognition) {
                recognition.stop();
            }
        };
    }, []);

    const toggleListening = () => {
        if (typeof window !== 'undefined') {
            const SpeechRecognition =
                window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                if (isListening) {
                    const recognition = new SpeechRecognition();
                    recognition.stop();
                } else {
                    const recognition = new SpeechRecognition();
                    recognition.continuous = true;
                    recognition.interimResults = true;
                    recognition.lang = 'ko-KR';
                    recognition.start();
                }
                setIsListening(!isListening);
            } else {
                alert('이 브라우저는 음성 인식을 지원하지 않습니다.');
            }
        }
    };

    return (
        <div className="mx-auto max-w-2xl p-4">
            <h1 className="mb-4 text-2xl font-bold">음성 메모</h1>

            <div className="space-y-4">
                <button
                    onClick={toggleListening}
                    className={`rounded-full px-4 py-2 ${
                        isListening
                            ? 'bg-red-500 hover:bg-red-600'
                            : 'bg-blue-500 hover:bg-blue-600'
                    } text-white transition-colors`}
                >
                    {isListening ? '녹음 중지' : '음성 녹음 시작'}
                </button>

                {isListening && (
                    <div className="rounded-lg bg-gray-100 p-3">
                        <p className="text-gray-600">
                            현재 말하는 중: {tempWords}
                        </p>
                    </div>
                )}

                {transcript && (
                    <div className="rounded-lg border bg-white p-4 shadow">
                        <h2 className="mb-2 font-semibold">녹음된 내용:</h2>
                        <p className="whitespace-pre-wrap">{transcript}</p>
                    </div>
                )}

                <Link href="/" className="text-blue-500 hover:underline">
                    홈으로 돌아가기
                </Link>
            </div>
        </div>
    );
};

export default NotePage;
