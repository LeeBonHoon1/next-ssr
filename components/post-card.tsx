interface PostCardProps {
  id: string;
  title: string;
  description: string;
}

const PostCard = ({ id, title, description }: PostCardProps) => {
  console.log(description);
  return (
    <article
      className="p-3 border border-1 border-slate-300 rounded-2xl shadow-lg"
      aria-labelledby={`post-title-${id}`}
    >
      <header>
        <h3 id={`post-title-${id}`} className="text-black">
          {title}
        </h3>
      </header>
      <p className="text-black">{description}</p>
    </article>
  );
};

export default PostCard;
