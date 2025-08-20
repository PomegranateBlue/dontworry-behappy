'use client';

import { Mic, ArrowUp } from 'lucide-react';

const ChatBox = () => {
    return (
        <section className="fixed bottom-0 left-0 right-0 p-4">
            <div className="mx-auto max-w-4xl">
                <form className="flex w-full items-center gap-2 rounded-full bg-primary400 px-6 py-3">
                    <input
                        className="flex-1 bg-transparent text-white placeholder-gray-600 transition-colors hover:text-gray-200"
                        placeholder="어떤 일이 있으셨나요?"
                        type="text"
                        aria-label="user input"
                    />
                    <Mic className="h-4 w-4" />
                    <button type="submit">
                        <ArrowUp className="bg-primary500 transition-colors hover:bg-primary300" />
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ChatBox;
