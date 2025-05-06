'use client';
import { NewsArticle } from "@/types";
import { format } from "date-fns";
import Link from "next/link";

export default function NewsCard({ article }: { article: NewsArticle }) {
    return (
        <div className="mb-10">
            <Link href={`/news/${article.id}`}>
                <div className="p-6 bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h2>

                    {article.startup?.name && (
                        <p className="text-sm text-blue-700 mb-2">
                            Related Startup: <strong>{article.startup.name}</strong>
                        </p>
                    )}

                    <p className="text-gray-800 mb-4 line-clamp-3">{article.summary}</p>

                    <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">
                            {format(new Date(article.published_at), 'MMMM d, yyyy')}
                        </span>
                        <span className="text-sm text-blue-600 hover:underline font-medium">
                            Read More →
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
}
