import Cost from '../../pages/vanilla/Cost';

const resultsVanilla = () => {
  const content = document.getElementById('app');
  const myForm = document.getElementById('myForm');

  myForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    content.innerHTML = '';

    const formData = new FormData(myForm);
    const coord1 = `${formData.get('lat1')},${formData.get('lon1')}`;
    const coord2 = `${formData.get('lat2')},${formData.get('lon2')}`;

    const fetchCost = await fetch(
      `http://localhost:3000/api/${coord1}/${coord2}`,
    );
    const getCost = await fetchCost.json();

    content.innerHTML = Cost(coord1, coord2, getCost);
  });
};
export default resultsVanilla;
