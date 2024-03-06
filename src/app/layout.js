import './globals.css';

export const metadata = {
    title: {
        default: 'Next.js Page',
        template: '%s | Powered by Next.js',
    },
    description: 'Next.js tutorial',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='max-w-[100vw] h-[100vh] bg-white-300'>
                <header className='bg-blue-300 p-4 font-bold text-[2rem] text-black'>
                    <p>Header</p>
                </header>
                {children}
                <footer className='bg-gray-800 font-bold text-[2rem] text-white p-4'>
                    <p>Footer</p>
                </footer>
            </body>
        </html>
    )
}
