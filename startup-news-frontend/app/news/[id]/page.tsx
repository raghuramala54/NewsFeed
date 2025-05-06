// app/news/[id]/page.tsx
import { NewsArticle } from "@/types";
import { format } from "date-fns";
import {fetchNewsById} from "@/lib/api";

export default async function NewsDetail({ params }: { params: { id: string } }) {
    const article = await fetchNewsById(params.id);

    if (!article) {
        return <div className="text-center text-red-600 mt-20">Article not found.</div>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#ece4dc] to-[#d1c7b7] py-12 px-6">
            <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/30 border border-white/20 shadow-xl rounded-3xl p-10">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>

                <p className="text-sm text-gray-700 mb-6">
                    Published on {format(new Date(article.published_at), "MMMM d, yyyy")}
                </p>

                {article.startup?.name && (
                    <p className="mb-6 text-blue-700 bg-blue-50 inline-block px-4 py-2 rounded-xl text-sm font-medium shadow-sm">
                        🚀 Related Startup: <strong>{article.startup.name}</strong>
                    </p>
                )}

                <p className="text-lg text-gray-800 leading-relaxed whitespace-pre-line">
                    {article.content || article.summary}
                </p>
            </div>
        </div>
    );
}
