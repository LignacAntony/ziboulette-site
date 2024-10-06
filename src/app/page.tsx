"use server";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import HighlightedCard from "../components/highlightedCard/HighlightedCard";
import { IShorPost } from "../interface/IShortPost";

const Home: NextPage = async () => {
  const latestZibnewsPosts = await fetchLatestZibnewsPosts();
  const latestZibunityPosts = await fetchLatestZibunityPosts();

  return (
    <Container>
      <Container>
        {/* Hero Section */}
        <Container>
          <Box>
            <h1>
              Bienvenue sur Ziboulette : L&apos;Actualités à l&apos;Envers
            </h1>
            <p>
              Ziboulette, c&apos;est le site qui vous plonge dans les coulisses
              inattendues de l&apos;actualités. Nous vous dévoilons ces moments
              où tout a mal tourné, où des erreurs humaines, des maladresses ou
              des événements imprévus ont bouleversé le cours des choses. Ces
              boulettes historiques, parfois anecdotiques, ont pourtant mené à
              des découvertes majeures et des changements décisifs. Que ce soit
              des inventions par accident, des échecs devenus des succès, ou des
              événements inattendus, vous découvrirez ici l&apos;actualité sous
              un angle unique. Partagez également vos propres boulettes dans
              notre espace communautaire, car derrière chaque erreur peut se
              cacher une découverte incroyable !
            </p>
          </Box>
        </Container>

        {/* Derniers Articles Zibnews */}
        <Container>
          <Box>
            <h2>Zibnews : Quand l&apos;Actualité Dérape</h2>
            <p>
              Avec Zibnews, nous plongeons au cœur des événements d’aujourd’hui
              et d’hier, où rien ne s&apos;est passé comme prévu. Qu&apos;il
              s&apos;agisse de faux pas politiques, d&apos;erreurs
              technologiques ou de décisions qui ont mal tourné, Zibnews vous
              révèle ces moments où l&apos;inattendu a fait irruption dans la
              réalité. Ces anecdotes, parfois drôles, parfois tragiques, nous
              rappellent que le monde est rempli de surprises. Entre l’histoire
              et l’actualité, découvrez des récits où tout bascule… pour le
              meilleur ou pour le pire.
            </p>
            <Box>
              <h3>Dernières Zibnews</h3>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 1, md: 2 }}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                {latestZibnewsPosts.slice(0, 3).map((post) => (
                  <Box key={post.id}>
                    <HighlightedCard post={post} />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>

        {/* Derniers Posts Zibunity */}
        <Container>
          <Box>
            <h2>Zibunity : Vos Mésaventures, Nos Fous Rires</h2>
            <p>
              Zibunity, c&apos;est l&apos;endroit où chacun peut partager ses
              propres petites boulettes du quotidien. Parce qu&apos;on a tous
              vécu des moments où tout semble partir en vrille, Zibunity offre
              un espace pour raconter vos histoires de ratés, de situations
              improbables ou de coups du sort. Que ce soit une erreur de
              jugement hilarante ou une mésaventure imprévue, votre expérience
              pourrait bien faire sourire (ou pleurer de rire) toute la
              communauté !
            </p>
            <Box>
              <h3>Dernières Zibunity</h3>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 1, md: 2 }}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 1,
                }}
              >
                {latestZibunityPosts.slice(0, 3).map((post) => (
                  <HighlightedCard post={post} key={post.id} />
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>

        {/* Newsletter */}
        <section className="newsletter">
          <h2>Rejoignez Notre Newsletter</h2>
          <p>
            Recevez des astuces et des nouveautés directement dans votre boîte
            mail.
          </p>
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
      </Container>
    </Container>
  );
};

async function fetchLatestZibnewsPosts(): Promise<IShorPost[]> {
  // Remplacez par une requête API ou une lecture de fichier
  return [
    {
      id: 1,
      title:
        "Le chaos des IA génératives : l'interview qui n'aurait jamais dû avoir lieu",
      excerpt:
        "Lors d’un interview télévisé en direct, une intelligence artificielle censée répondre aux questions d’actualité a provoqué un véritable malaise. Au lieu de donner des réponses claires, l'IA a commencé à générer des affirmations sans fondement, mettant en cause des figures politiques et scientifiques, créant la panique sur les réseaux sociaux. L'entreprise responsable s'excuse, mais la mésaventure a ouvert le débat sur la place de l’IA dans la communication publique.",
      slug: "chaos-ia-generatives-interview",
      image: "/images/ia-interview.jpeg",
    },
    {
      id: 2,
      title:
        "Le marathon de Boston 2023 : l’erreur du panneau de signalisation",
      excerpt:
        "Lors du célèbre marathon de Boston, un panneau de signalisation mal placé a orienté les coureurs dans la mauvaise direction, les menant sur une route beaucoup plus longue que prévu. Des dizaines de coureurs ont perdu de précieuses minutes avant de retrouver le bon chemin. Cette erreur a mis en lumière des lacunes dans l'organisation et relancé le débat sur la sécurité des événements sportifs.",
      slug: "marathon-boston-2023-erreur-panneau",
      image: "/images/marathon-boston.jpeg",
    },
    {
      id: 3,
      title: "Une fusée bloquée sur Terre",
      excerpt:
        "Lors du lancement d’une nouvelle fusée, une série d’erreurs humaines a mené à un résultat improbable : la fusée est restée clouée au sol. Le compte à rebours a défilé, les moteurs ont rugi, mais un problème mécanique l’a empêchée de décoller. Ce lancement raté a coûté des millions de dollars, mais il a aussi permis des avancées technologiques cruciales dans le domaine de la sécurité aérospatiale.",
      slug: "fusee-bloquee-terre",
      image: "/images/fusee.jpeg",
    },
    // Ajoutez d'autres posts si nécessaire
  ];
}

async function fetchLatestZibunityPosts(): Promise<IShorPost[]> {
  // Remplacez par une requête API ou une lecture de fichier
  return [
    {
      id: 1,
      title: "Quand le télétravail tourne mal",
      excerpt:
        '"Confinement oblige, je faisais une présentation importante en visioconférence. Très concentré, je ne réalisais pas que mon chat avait grimpé sur mon bureau. Il a renversé une tasse de café directement sur mon clavier… l’ordinateur a planté et j’ai dû tout recommencer. Mes collègues en parlent encore aujourd\'hui."',
      slug: "teletravail-tourne-mal",
      image: "/images/ia-interview.jpeg",
    },
    {
      id: 2,
      title: "Un GPS trop efficace",
      excerpt:
        '"Je suivais religieusement les instructions de mon GPS pour me rendre à un mariage. Il m\'a fait prendre un chemin étrange et je me suis retrouvé... en plein milieu d’un champ de vaches. Disons que je suis arrivé à la cérémonie en retard, et avec quelques taches de boue sur mon costume."',
      slug: "gps-trop-efficace",
      image: "/images/marathon-boston.jpeg",
    },
    {
      id: 3,
      title: "L'erreur de cuisine qui sent fort",
      excerpt:
        "\"Je voulais impressionner ma copine avec un plat maison. J'ai suivi la recette à la lettre... sauf que j'ai confondu le sucre avec le sel. Le dessert était immangeable et elle ne cesse de me rappeler cet 'échec cuisant' dès que je mets un pied dans la cuisine.\"",
      slug: "erreur-cuisine",
      image: "/images/fusee.jpeg",
    },
    // Ajoutez d'autres posts si nécessaire
  ];
}

export default Home;
