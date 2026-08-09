export default function Story({ story }) {
  return (
    <div className="story">
      <h2>{story.title}</h2>
      <p>{story.content}</p>
    </div>
  );
}