const Cost = (coord1, coord2, dataResults) => {
  if (dataResults.totalCost) {
    const view = `
    <p> El costo de envio entre las coordenadas (${coord1}) y (${coord2}) es de $${dataResults.totalCost} </p>
  `;
    return view;
  }
  const view = `
    <p> Las coordenadas ingresadas no son validas. Vuelva a intentarlo.</p>
  `;
  return view;
};

export default Cost;
