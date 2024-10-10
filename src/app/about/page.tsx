import { Box, Container } from "@mui/material";
import { NextPage } from "next";

const About: NextPage = async () => {
  return (
    <Container>
      <Box>
        <h1>Bienvenue sur Ziboulette : L&apos;Actualités à l&apos;Envers</h1>
        <p>
          Ziboulette, c&apos;est le site qui vous plonge dans les coulisses
          inattendues de l&apos;actualités. Nous vous dévoilons ces moments où
          tout a mal tourné, où des erreurs humaines, des maladresses ou des
          événements imprévus ont bouleversé le cours des choses. Ces boulettes
          historiques, parfois anecdotiques, ont pourtant mené à des découvertes
          majeures et des changements décisifs. Que ce soit des inventions par
          accident, des échecs devenus des succès, ou des événements inattendus,
          vous découvrirez ici l&apos;actualité sous un angle unique. Partagez
          également vos propres boulettes dans notre espace communautaire, car
          derrière chaque erreur peut se cacher une découverte incroyable !
        </p>
      </Box>
      <Box>
        <h2>Zibnews : Quand l&apos;Actualité Dérape</h2>
        <p>
          Avec Zibnews, nous plongeons au cœur des événements d’aujourd’hui et
          d’hier, où rien ne s&apos;est passé comme prévu. Qu&apos;il
          s&apos;agisse de faux pas politiques, d&apos;erreurs technologiques ou
          de décisions qui ont mal tourné, Zibnews vous révèle ces moments où
          l&apos;inattendu a fait irruption dans la réalité. Ces anecdotes,
          parfois drôles, parfois tragiques, nous rappellent que le monde est
          rempli de surprises. Entre l’histoire et l’actualité, découvrez des
          récits où tout bascule… pour le meilleur ou pour le pire.
        </p>
      </Box>
      <Box>
        <h2>Zibunity : Vos Mésaventures, Nos Fous Rires</h2>
        <p>
          Zibunity, c&apos;est l&apos;endroit où chacun peut partager ses
          propres petites boulettes du quotidien. Parce qu&apos;on a tous vécu
          des moments où tout semble partir en vrille, Zibunity offre un espace
          pour raconter vos histoires de ratés, de situations improbables ou de
          coups du sort. Que ce soit une erreur de jugement hilarante ou une
          mésaventure imprévue, votre expérience pourrait bien faire sourire (ou
          pleurer de rire) toute la communauté !
        </p>
      </Box>
    </Container>
  );
};

export default About;
