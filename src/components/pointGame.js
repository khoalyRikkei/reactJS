function PointGames(props) {
  const totalPlayer = props.listPlayer.length;
  let sum = 0;
  props.listPlayer.forEach((element) => {
    sum += element.point;
  });
  const sum2 = props.listPlayer.reduce((pre, item) => item.point + pre, 0);
  return (
    <>
      <div className="container-item">
        <h1>Bảng điểm</h1>
        <div className="table-point">
          <p>Player: {totalPlayer} </p>
          <p>
            Total point: {sum} {sum2}
          </p>
        </div>
      </div>
    </>
  );
}

export default PointGames;
