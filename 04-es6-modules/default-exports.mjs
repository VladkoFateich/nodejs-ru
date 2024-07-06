const user = {
  name: 'Vladislav',
  age: 37,
};

async function getData(url) {
  const res = await fetch(url);
  const posts = await res.json();
  return posts;
}

export { user };
export default getData;
