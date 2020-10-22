
const home = () => {
  const title = document.createElement('h1');
  title.className = 'title';
  title.innerHTML = 'The Food Bazaar';
  title.id = 'title';
  return title;
};

export default home;
