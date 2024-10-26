import { Card, CardContent, CardMedia, Link } from "@mui/material";
import {
  isZibnewsPost,
  IZibnewsPost,
  IZibunityPost,
} from "../../types/IZibPost";

const HighlightedCard = ({ post }: { post: IZibnewsPost | IZibunityPost }) => {
  return (
    <Card className="flex-1 flex flex-row">
      {isZibnewsPost(post) && (
        <CardMedia className="flex-1 md:h-36" image={post.image} />
      )}
      <CardContent className="flex-1 p-0">
        <h2 className="text-xs overflow-hidden text-ellipsis line-clamp-2">
          {post.title}
        </h2>
        <div className="hidden md:flex md:justify-between">
          <Link href="#" underline="hover">
            Partager
          </Link>
          <Link href="#" underline="hover">
            Lire l&apos;article
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default HighlightedCard;
