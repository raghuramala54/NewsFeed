import { fetchNews } from "@/lib/api";
import NewsCard from "@/components/NewsCard";
import LatestArticles from "@/components/LatestArticles";
import SubmitCard from "@/components/SubmitCard";

export default async function NewsPage() {
    const articles = await fetchNews();

    return (
        <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2">
                <h1 className="text-4xl font-bold mb-6">News</h1>
                {articles.map((article: any) => (
                    <NewsCard key={article.id} article={article} />
                ))}
            </div>
            <div>
                <LatestArticles articles={articles} />
                <SubmitCard />
            </div>
        </div>
    );
}
