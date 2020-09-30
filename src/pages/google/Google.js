const Google = () => {
  const view = `
  <form id="myForm">
  <div>
    <label for="">Coordenadas #1</label>
    <input
      type="number"
      step="any"
      placeholder="Latitud"
      name="lat1"
      required
    />
    <input
      type="number"
      step="any"
      placeholder="Longitud"
      name="lon1"
      required
    />
  </div>

  <div>
    <label for="">Coordenadas #2</label>
    <input
      type="number"
      step="any"
      placeholder="Latitud"
      name="lat2"
      required
    />
    <input
      type="number"
      step="any"
      placeholder="Longitud"
      name="lon2"
      required
    />
  </div>

  <button type="submit">Enviar</button>
  <button type="reset">Cancelar</button>
</form>;

  `;
  return view;
};

export default Google;
