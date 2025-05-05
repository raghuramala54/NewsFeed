import { fetchStartups } from "@/lib/api";
import Link from "next/link";

export default async function StartupsPage() {
    const startups = await fetchStartups();

    return (
        <main className="p-6 max-w-7xl mx-auto">
            {/* Page Heading */}
            <h1 className="text-4xl font-bold mb-8">Discover Startups</h1>

            {/* Startups Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {startups.map((startup: any) => (
                    <div
                        key={startup.id}
                        className="bg-white rounded-2xl shadow-md p-5 hover:shadow-lg transition"
                    >
                        {/* Logo */}
                        {startup.logo_url && (
                            <img
                                src={startup.logo_url}
                                alt={startup.name}
                                className="w-16 h-16 object-cover rounded-full mb-3"
                            />
                        )}

                        {/* Startup Name */}
                        <h2 className="text-xl font-semibold mb-1">{startup.name}</h2>

                        {/* Tagline */}
                        <p className="text-gray-500 text-sm mb-2">{startup.tagline}</p>

                        {/* Location */}
                        <div className="text-sm text-gray-400 mb-2">
                            {startup.city || "Unknown Location"}
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm line-clamp-3">
                            {startup.description}
                        </p>

                        {/* Read More Button */}
                        <div className="mt-4">
                            <Link
                                href={`/startups/${startup.id}`}
                                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
