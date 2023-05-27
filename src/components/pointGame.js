import { useSelector } from "react-redux";

function PointGames(props) {
  const lish = useSelector((a) => a);

  let sum = 0;
  lish.forEach((element) => {
    sum += element.point;
  });
  const sum2 = lish.reduce((pre, item) => item.point + pre, 0);
  return (
    <>
      <div className="container-item">
        <h1>Bảng điểm</h1>
        <div className="table-point">
          <p>Player: {lish.length} </p>
          <p>
            Total point: {sum} {sum2}
          </p>
        </div>
      </div>
    </>
  );
}

export default PointGames;
