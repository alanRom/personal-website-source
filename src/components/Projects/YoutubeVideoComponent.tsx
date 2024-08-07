const YoutubeVideoComponent = ({
  videoId,
  title,
  altText,
}: {
  videoId: string;
  title: string;
  altText: string;
}) => {
  return (
    <div>
      <div className="is-hidden-mobile">
        <iframe
          title={title}
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div
        className="is-hidden-tablet"
        style={{
          margin: "10px 0",
        }}
      >
        <a href={`https://www.youtube.com/watch?v=${videoId}`}>
          <img
            src={`https://img.youtube.com/vi/${videoId}/0.jpg`}
            alt={altText}
          />
        </a>
      </div>
    </div>
  );
};

export default YoutubeVideoComponent;
