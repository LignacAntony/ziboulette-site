import React from "react";

interface NewsItem {
    id: number;
    title: string;
    content: string;
}

const Zibnews: React.FC = () => {
    // Ceci est un exemple de données, vous devrez les remplacer par une vraie API
    const newsItems: NewsItem[] = [
        {
            id: 1,
            title: "Première actualité",
            content: "Contenu de la première actualité...",
        },
        {
            id: 2,
            title: "Deuxième actualité",
            content: "Contenu de la deuxième actualité...",
        },
        // Ajoutez plus d'actualités ici
    ];

    return (
        <div>
            <h1>ZibNews</h1>
            {newsItems.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                </div>
            ))}
        </div>
    );
};

export default Zibnews;