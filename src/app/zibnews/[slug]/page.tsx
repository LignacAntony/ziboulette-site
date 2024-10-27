import { IZibnewsPost } from "../../../types/IZibPost";
import zibnewsData from "../../../zibnews.json";
import Image from "next/image";

interface Params {
  params: { slug: string };
}

const postZibNews = async ({ params }: Params) => {
  const { slug } = params;
  const post: IZibnewsPost = await fetchZibnewsPosts(slug);
  return (
    <article>
      <header>
        <h1 className="text-3xl md:text-4xl text-center mt-4">{post.title}</h1>
        <time>27 Octobre 2024</time>
        <address>
          Par <a href="/auteur">Anto</a>
        </address>
        <meta content="Description courte de l'article" />
      </header>
      <figure>
        <Image src={post.image} alt={post.title} width={600} height={400} />
      </figure>
      <div>
        <p>{post.excerpt}</p>
      </div>
      <footer>
        <div>
          <a href="/tag/zibnews">Zibnews</a>
        </div>
      </footer>
    </article>
  );
};

export default postZibNews;

async function fetchZibnewsPosts(slug: string): Promise<IZibnewsPost> {
  // Remplacez par une requête API ou une lecture de fichier
  return zibnewsData.filter((post) => post.slug === slug)[0];
}
