// lib/api.ts
const BASE_URL = 'http://localhost:8000/api'; // or your deployed backend

export const fetchStartups = async () => {
    const res = await fetch(`${BASE_URL}/startups`);
    if (!res.ok) throw new Error('Failed to fetch startups');
    return res.json();
};

export const fetchNews = async () => {
    const res = await fetch(`${BASE_URL}/news`);
    if (!res.ok) throw new Error('Failed to fetch news');
    return res.json();
};

export const fetchStartupById = async (id: string) => {
    const res = await fetch(`${BASE_URL}/startups/${id}`);
    if (!res.ok) return null;
    return res.json();
};

export const fetchNewsById = async (id: string) => {
    const res = await fetch(`${BASE_URL}/news/${id}`);
    if (!res.ok) return null;
    return res.json();
}
