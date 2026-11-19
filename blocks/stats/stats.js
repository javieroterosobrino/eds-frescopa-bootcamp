export default function decorate(block) {
  const list = document.createElement('ul');

  [...block.children].forEach((row) => {
    const cells = [...row.children];
    if (!cells.length) return;

    const item = document.createElement('li');
    item.className = 'stats-item';

    cells.forEach((cell, index) => {
      cell.classList.add(index === 0 ? 'stats-number' : 'stats-label');
      item.append(cell);
    });

    list.append(item);
  });

  block.replaceChildren(list);
}
