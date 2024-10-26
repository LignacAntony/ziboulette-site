"use server";

import { Box, Container } from "@mui/material";
import { IZibnewsPost, IZibunityPost } from "../type/IZibPost";
import HighlightedCard from "../components/highlightedCard/HighlightedCard";

export default async function Home() {
  const latestZibnewsPosts = await fetchLatestZibnewsPosts();
  const latestZibunityPosts = await fetchLatestZibunityPosts();

  return (
    <Container>
      <Container>
        <Container>
          <Box>
            <h3 className="text-xl text-center mt-4">Dernières Zibnews</h3>
            <Box className="flex gap-2 flex-col mt-4">
              {latestZibnewsPosts.slice(0, 3).map((post) => (
                <HighlightedCard post={post} key={post.id} />
              ))}
            </Box>
          </Box>
        </Container>

        <Container>
          <Box>
            <h3 className="text-xl text-center mt-4">Dernières Zibunity</h3>
            <Box className="flex gap-2 mt-4">
              {latestZibunityPosts.slice(0, 3).map((post) => (
                <HighlightedCard post={post} key={post.id} />
              ))}
            </Box>
          </Box>
        </Container>

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
}

async function fetchLatestZibnewsPosts(): Promise<IZibnewsPost[]> {
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

async function fetchLatestZibunityPosts(): Promise<IZibunityPost[]> {
  // Remplacez par une requête API ou une lecture de fichier
  return [
    {
      id: 1,
      title: "Quand le télétravail tourne mal",
      excerpt:
        '"Confinement oblige, je faisais une présentation importante en visioconférence. Très concentré, je ne réalisais pas que mon chat avait grimpé sur mon bureau. Il a renversé une tasse de café directement sur mon clavier… l’ordinateur a planté et j’ai dû tout recommencer. Mes collègues en parlent encore aujourd\'hui."',
      slug: "teletravail-tourne-mal",
    },
    {
      id: 2,
      title: "Un GPS trop efficace",
      excerpt:
        '"Je suivais religieusement les instructions de mon GPS pour me rendre à un mariage. Il m\'a fait prendre un chemin étrange et je me suis retrouvé... en plein milieu d’un champ de vaches. Disons que je suis arrivé à la cérémonie en retard, et avec quelques taches de boue sur mon costume."',
      slug: "gps-trop-efficace",
    },
    {
      id: 3,
      title: "L'erreur de cuisine qui sent fort",
      excerpt:
        "\"Je voulais impressionner ma copine avec un plat maison. J'ai suivi la recette à la lettre... sauf que j'ai confondu le sucre avec le sel. Le dessert était immangeable et elle ne cesse de me rappeler cet 'échec cuisant' dès que je mets un pied dans la cuisine.\"",
      slug: "erreur-cuisine",
    },
    // Ajoutez d'autres posts si nécessaire
  ];
}
