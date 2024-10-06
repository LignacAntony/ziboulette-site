import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { IShorPost } from "../../interface/IShortPost";
import styles from "./highlightedCard.module.css";

const HighlightedCard = ({ post }: { post: IShorPost }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={post.image} />
      <CardContent sx={{ height: 140 }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className={styles.limit2LinesText}
        >
          {post.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          className={styles.limit3LinesText}
        >
          {post.excerpt}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Partager</Button>
        <Button size="small">Lire l&apos;article</Button>
      </CardActions>
    </Card>
  );
};

export default HighlightedCard;
