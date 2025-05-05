// app/startups/[id]/page.tsx
import { fetchStartupById } from "@/lib/api";
import { notFound } from "next/navigation";

type Params = {
    params: {
        id: string;
    };
};

export default async function StartupDetailPage({ params }: Params) {
    const startup = await fetchStartupById(params.id);

    if (!startup) return notFound();

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">{startup.name}</h1>
            <p className="text-xl text-gray-600 mb-2">{startup.tagline}</p>
            <p className="text-gray-700 mb-6">{startup.description}</p>

            <div className="space-y-2 text-sm text-gray-500">
                <p>
                    <strong>Location:</strong> {startup.city || "N/A"}
                </p>
                <p>
                    <strong>Founded:</strong> {startup.founded_year || "Unknown"}
                </p>
                <p>
                    <strong>Founder:</strong>{" "}
                    {startup.founder?.name || "Founder info not available"}
                </p>
                <p>
                    <strong>Website:</strong>{" "}
                    <a
                        href={startup.website}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {startup.website}
                    </a>
                </p>
            </div>

            <div className="mt-6">
                <a
                    href="/startups"
                    className="inline-block text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                >
                    ← Back to Startups
                </a>
            </div>
        </div>
    );
}
