export default function Home() {
    return (
        <div className="p-8">
            <h1>Deep Linking Test</h1>
            <div className="mt-4 space-y-4">
                <a
                    href="kolnapp://profile?id=123"
                    className="text-blue-500 underline block"
                >
                    Open in App (URL Scheme)
                </a>
                <a
                    href="https://deep-linking-bice.vercel.app/profile?id=123"
                    className="text-blue-500 underline block"
                >
                    Open in App (Universal Link)
                </a>
                <a
                    href="/profile?id=123"
                    className="text-blue-500 underline block"
                >
                    Open Profile Page
                </a>
            </div>
        </div>
    );
}
