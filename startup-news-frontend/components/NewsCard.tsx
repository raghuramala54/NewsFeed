'use client';
import { NewsArticle } from "@/types";
import { format } from "date-fns";

export default function NewsCard({ article }: { article: NewsArticle }) {
    return (
        <div className="mb-8 p-4 bg-white rounded shadow">
            <h2 className="text-xl font-semibold text-gray-900 mb-1">{article.title}</h2>
            {article.startup?.name && (
                <p className="text-sm text-blue-600 mb-1">
                    Related Startup: <strong>{article.startup.name}</strong>
                </p>
            )}
            <p className="text-gray-600">{article.summary}</p>
            <p className="text-sm text-gray-400 mt-2">{format(new Date(article.published_at), 'MMMM d, yyyy')}</p>
        </div>
    );
}
