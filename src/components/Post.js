export default function Post({ props }) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}