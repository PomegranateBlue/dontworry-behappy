'use client';

import ChatBox from '@/components/noteComponents/chatBox';
const NotePage = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            <span className="flex flex-col items-center justify-center gap-8 px-4 text-2xl">
                이야기 나누기
            </span>
            <p className="text-lg">
                말을 하거나 텍스트 입력으로 자유롭게 고민을 털어보세요
            </p>
            <ChatBox />
            <span className="text-sm text-gray-500">
                버튼을 누르시면 녹음을 할 수 있습니다
            </span>
        </main>
    );
};

export default NotePage;
