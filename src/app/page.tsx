"use server"
import {  NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Post } from '../interface/Post';
import { Product } from '../interface/Product';
import { Testimonial } from '../interface/Testimonial';

interface HomeProps {
  latestPosts: Post[];
  featuredProducts: Product[];
  testimonials: Testimonial[];
}

const Home: NextPage<HomeProps> = async () => {


  const latestPosts: Post[] = await fetchLatestPosts();
  const featuredProducts: Product[] = await fetchFeaturedProducts();
  const testimonials: Testimonial[] = await fetchTestimonials();

  return (
      <div>
      <main>
        {/* Hero Section */}
        <section className="hero">
          <Image
            src="/images/hero.jpg"
            alt="Mode de vie éco-responsable"
            layout="responsive"
            width={1200}
            height={600}
            priority
          />
          <div className="hero-content">
            <h1>Adoptez un Mode de Vie Éco-Responsable avec Ziboulette</h1>
            <p>Découvrez des astuces simples et efficaces pour un quotidien plus naturel et minimaliste.</p>
            <Link href="/astuces" className="cta-button" passHref>
              Découvrez Nos Astuces
            </Link>
          </div>
        </section>

        {/* Présentation */}
        <section className="about">
          <h2>Qui Sommes-Nous?</h2>
          <p>
            Ziboulette est dédié à promouvoir un mode de vie éco-responsable, en fournissant des astuces et des
            ressources pour vivre de manière plus naturelle et minimaliste.
          </p>
        </section>

        {/* Astuces Éco-Responsables */}
        <section className="tips">
          <h2>Astuces Éco-Responsables</h2>
          <div className="tips-list">
            {latestPosts.slice(0, 3).map((post) => (
              <div key={post.id} className="tip">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href={`/astuces/${post.slug}`} passHref>
                  Lire la suite
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Derniers Articles du Blog */}
        <section className="latest-blogs">
          <h2>Derniers Articles</h2>
          <div className="blog-list">
            {latestPosts.map((post) => (
              <div key={post.id} className="blog-post">
                <Image src={post.image} alt={post.title} width={400} height={300} />
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} passHref>
                  Lire la suite
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Produits en Vedette */}
        {featuredProducts.length > 0 && (
          <section className="featured-products">
            <h2>Produits en Vedette</h2>
            <div className="products-list">
              {featuredProducts.map((product) => (
                <div key={product.id} className="product">
                  <Image src={product.image} alt={product.name} width={300} height={300} />
                  <h3>{product.name}</h3>
                  <p>{product.price}€</p>
                  <Link href={`/boutique/${product.slug}`} passHref>
                    Acheter
                  </Link>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Témoignages */}
        <section className="testimonials">
          <h2>Ce Que Nos Membres Disent</h2>
          <div className="testimonial-list">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial">
                <p>{testimonial.quote}</p>
                <h4>- {testimonial.name}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter">
          <h2>Rejoignez Notre Newsletter</h2>
          <p>Recevez des astuces et des nouveautés directement dans votre boîte mail.</p>
          <form>
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
            />
            <button type="submit">sinscrire</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer>
        <div className="footer-links">
          <Link href="/" passHref>
            Accueil
          </Link>
          <Link href="/blog" passHref>
            Blog
          </Link>
          <Link href="/boutique" passHref>
            Boutique
          </Link>
          <Link href="/a-propos" passHref>
            À propos
          </Link>
          <Link href="/contact" passHref>
            Contact
          </Link>
        </div>
        <div className="footer-info">
          <p>© {new Date().getFullYear()} Ziboulette. Tous droits réservés.</p>
          <div className="social-icons">
            <a href="https://facebook.com/ziboulette" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/ziboulette" aria-label="Instagram">
              <FaInstagram />
            </a>
            {/* Ajoutez d'autres réseaux sociaux si nécessaire */}
          </div>
        </div>
      </footer>

      <style >{`
        /* Styles généraux */
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background-color: #fff;
        }

        .nav-links {
          list-style: none;
          display: flex;
          gap: 20px;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
        }

        .cta-button {
          background-color: #4caf50;
          color: white;
          padding: 10px 20px;
          text-decoration: none;
          border-radius: 5px;
        }

        .hero {
          position: relative;
          text-align: center;
          color: white;
        }

        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .about,
        .tips,
        .latest-blogs,
        .featured-products,
        .testimonials,
        .newsletter {
          padding: 60px 20px;
          text-align: center;
        }

        .tips-list,
        .blog-list,
        .products-list,
        .testimonial-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
        }

        .tip,
        .blog-post,
        .product,
        .testimonial {
          flex: 1 1 300px;
          max-width: 300px;
        }

        .testimonial p {
          font-style: italic;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 20px;
          padding: 20px 0;
        }

        .footer-info {
          text-align: center;
          padding-bottom: 20px;
        }

        .social-icons a {
          margin: 0 10px;
          color: #333;
          font-size: 1.5rem;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav-links {
            flex-direction: column;
            gap: 10px;
          }

          .tips-list,
          .blog-list,
          .products-list,
          .testimonial-list {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};



// Exemple de fonctions de récupération des données (à adapter selon votre backend ou CMS)
async function fetchLatestPosts(): Promise<Post[]> {
  // Remplacez par une requête API ou une lecture de fichier
  return [
    {
      id: '1',
      title: 'Vivre minimaliste : 5 astuces simples',
      excerpt: 'Découvrez comment adopter un mode de vie minimaliste avec ces 5 astuces faciles à mettre en place.',
      slug: 'vivre-minimaliste-5-astuces-simples',
      image: '/images/post1.jpg',
    },
    {
      id: '2',
      title: 'Comment adopter une alimentation zéro déchet',
      excerpt: 'Apprenez à réduire vos déchets alimentaires avec ces conseils pratiques.',
      slug: 'adopter-alimentation-zero-dechet',
      image: '/images/post2.jpg',
    },
    {
      id: '3',
      title: 'DIY : Créez vos produits de beauté naturels',
      excerpt: 'Fabriquez vos propres produits de beauté naturels avec ces recettes DIY.',
      slug: 'diy-produits-beaute-naturels',
      image: '/images/post3.jpg',
    },
    // Ajoutez d'autres posts si nécessaire
  ];
}

async function fetchFeaturedProducts(): Promise<Product[]> {
  // Remplacez par une requête API ou une lecture de fichier
  return [
    {
      id: '1',
      name: 'Savon Naturel',
      price: 5.99,
      slug: 'savon-naturel',
      image: '/images/product1.jpg',
    },
    {
      id: '2',
      name: 'Sacs Réutilisables',
      price: 12.99,
      slug: 'sacs-reutilisables',
      image: '/images/product2.jpg',
    },
    // Ajoutez d'autres produits si nécessaire
  ];
}

async function fetchTestimonials(): Promise<Testimonial[]> {
  // Remplacez par une requête API ou une lecture de fichier
  return [
    {
      id: '1',
      quote: 'Ziboulette m\'a aidé à transformer mon quotidien de manière éco-responsable.',
      name: 'Marie Dupont',
    },
    {
      id: '2',
      quote: 'Les astuces proposées sont simples et efficaces. Merci Ziboulette !',
      name: 'Jean Martin',
    },
    // Ajoutez d'autres témoignages si nécessaire
  ];
}

export default Home;
