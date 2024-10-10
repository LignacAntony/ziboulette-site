import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@mui/material";
import {
  isZibnewsPost,
  IZibnewsPost,
  IZibunityPost,
} from "../../interface/IZibPost";
import styles from "./highlightedCard.module.css";

const HighlightedCard = ({ post }: { post: IZibnewsPost | IZibunityPost }) => {
  return (
    <Card sx={{ flex: 1 }}>
      {isZibnewsPost(post) && (
        <CardMedia sx={{ height: 140 }} image={post.image} />
      )}
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={styles.limit1LinesText}
        >
          {post.title}
        </Typography>
        <Typography
          sx={{ color: "text.secondary" }}
          className={styles.limit3LinesText}
        >
          {post.excerpt}
        </Typography>
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link href="#" underline="hover">
            Partager
          </Link>
          <Link href="#" underline="hover">
            Lire l&apos;article
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default HighlightedCard;
