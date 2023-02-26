const node = document.querySelectorAll(".item");

const result = node.length;
console.log(`Number of categories: ${result}`);

node.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}
        Elements: ${element.lastElementChild.children.length}`);
});
