export default function Shop({ children }) {
  return (
    <section id="shop">
      <h2>Tradition at it's finest</h2>

      <ul id="products">{children}</ul>
    </section>
  );
}
