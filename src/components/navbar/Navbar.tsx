import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
<header>
        <nav className="navbar">
          <Link href="/" passHref>
              <Image src="/logo.png" alt="Ziboulette Logo" width={150} height={50} />
          </Link>
          <ul className="nav-links">
            <li>
              <Link href="/zibnews">Zibnews</Link>
            </li>
            <li>
              <Link href="/zibunity">Zibunity</Link>
            </li>
            <li>
              <Link href="/a-propos">À propos</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <Link href="/inscription" className="cta-button" passHref>
            Rejoignez-nous
          </Link>
        </nav>
      </header>
    )
}

export default Navbar