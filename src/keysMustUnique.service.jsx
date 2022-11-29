function Url(props) {
  return "#" + props;
}

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((p) => (
        <li key={p.id}>
          <a href={Url(p.slug)}>{p.title}</a>
        </li>
      ))}
    </ul>
  );
  const content = props.posts.map((post) => (
    <div key={post.id}>
      <h3 id={post.slug}>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  ));
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}

export const posts = [
  {
    id: 1,
    title: "Hello World",
    slug: "hello-world",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, placeat?",
  },
  {
    id: 2,
    title: "Installation",
    slug: "installation",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet quia illo illum dolor doloremque aut.",
  },
];

export default Blog;
