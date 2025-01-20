export default function Profile() {
    return (
        <div className="p-8">
            <h1>Profile Page</h1>
            <p>This is the deep linked profile page</p>

            {/* Add buttons to test deep linking */}
            <div className="mt-4 space-y-4">
                <a
                    href="kolnapp://profile?id=123"
                    className="text-blue-500 underline"
                >
                    Open in App (URL Scheme)
                </a>
                <br/>
                <a
                    href="https://deep-linking-bice.vercel.app/profile?id=123"
                    className="text-blue-500 underline"
                >
                    Open in App (Universal Link)
                </a>
            </div>
        </div>
    );
}
