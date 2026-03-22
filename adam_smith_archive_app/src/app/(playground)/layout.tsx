import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';

export const metadata = {
    robots: {
        index: false,
        follow: false,
    },
};

export default function PlaygroundLayout({ children }: { children: ReactNode }) {
    if (process.env.NODE_ENV === 'production') {
        notFound();
    }

    return children;
}