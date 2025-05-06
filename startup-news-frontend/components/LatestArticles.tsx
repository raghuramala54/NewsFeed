import { NewsArticle } from "@/types";
import { format } from "date-fns";

export default function LatestArticles({ articles }: { articles: NewsArticle[] }) {
    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-semibold text-lg mb-3">Latest Articles</h3>
            <ul className="space-y-2">
                {articles.slice(0, 4).map(article => (
                    <li key={article.id}>
                        <p className="text-sm font-medium">{article.title}</p>
                        <p className="text-xs text-gray-500">{format(new Date(article.published_at), 'MMM d, yyyy')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
