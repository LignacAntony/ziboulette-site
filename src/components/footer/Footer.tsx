import { FaFacebook, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
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
  );
};

export default Footer;
