'use client';

import { NewsArticle } from "@/types";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewsCard({ article }: { article: NewsArticle }) {
    return (
        <div className="group relative backdrop-blur-md bg-white/20 border border-[#e0dcd5]/30 rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 space-y-3">
            {/* Decorative left bar */}
            <div className="absolute top-6 left-0 h-16 w-1.5 bg-[#a38457]/80 rounded-r-xl"></div>

            <div className="pl-5">
                <h2 className="text-xl md:text-2xl font-semibold text-[#3b3025] group-hover:text-[#8b6f47] transition-colors duration-200 leading-snug line-clamp-2">
                    {article.title}
                </h2>

                {article.startup?.name && (
                    <p className="text-sm font-medium text-[#6f4e37]">
                        🌱 Startup: <span className="font-semibold">{article.startup.name}</span>
                    </p>
                )}

                <p className="text-sm text-[#5f574f] line-clamp-3">
                    {article.summary}
                </p>

                <div className="flex items-center justify-between pt-2">
                    <p className="text-xs text-[#a49b91]">
                        {format(new Date(article.published_at), "MMMM d, yyyy")}
                    </p>

                    <Link href={`/news/${article.id}`}>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-white bg-[#a38457]/90 px-3 py-1.5 rounded-full hover:bg-[#8b6f47]/90 transition">
                            Read More <ArrowRight className="w-4 h-4" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
