'use client'
import localFont from 'next/font/local'
const axiforma = localFont({
    src: [
        {
            path: './fonts/Axiforma-Bold.ttf',
            weight: '700',
        },
        {
            path: './fonts/Axiforma-ExtraBold.ttf',
            weight: '800',
        },
        {
            path: './fonts/Axiforma-Medium.ttf',
            weight: '500',
        },
        {
            path: './fonts/Axiforma-Regular.ttf',
            weight: '400',
        },
        {
            path: './fonts/Axiforma-SemiBold.ttf',
            weight: '600',
        },
    ],
})

export default function Fonts() {
    return (
        <style jsx global>{`
            html, body {
                font-family: ${axiforma.style.fontFamily}, sans-serif;
            }
        `}</style>
    );
}
