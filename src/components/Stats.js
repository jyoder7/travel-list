export default function Stats({ items }) {
  // Example of an early return before doing any calcs, etc.
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list</em>
      </footer>
    );

  // const totPacked = items.reduce(
  //   (accum, item) => accum + (item.packed ? 1 : 0),
  //   0
  // );
  // Simpler version of what the above does...
  const numItems = items.length;
  const totPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((totPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {numItems !== totPacked
          ? `👜 You have ${numItems} items on your list, and you already packed ${totPacked} (${percentage}%)`
          : "You got everything! Reading to go ✈️"}
      </em>
    </footer>
  );
}
