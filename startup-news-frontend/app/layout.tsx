import "./globals.css";
import Link from "next/link";

export const metadata = {
    title: "Startup News Platform",
    description: "Discover startups, news, and jobs in the ecosystem.",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white shadow p-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
                StartupNews
            </Link>
            <div className="space-x-4">
                <Link href="/startups" className="hover:underline">
                    Startups
                </Link>
                <Link href="/news" className="hover:underline">
                    News
                </Link>
                <Link href="/jobs" className="hover:underline">
                    Jobs
                </Link>
                <Link href="/auth/login" className="hover:underline">
                    Login
                </Link>
            </div>
        </nav>
        <main className="p-4">{children}</main>
        </body>
        </html>
    );
}
