// C:\Users\user\my-app\node_modules\bootstrap\dist\css\bootstrap.min.css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Card(props) {
  return (
    <div className="border-style ">
      <div className="circle-percentage">
        <CircularProgressbar
          styles={{ path: { stroke: props.color } }}
          value={props.effect}
          text={`${props.effect}%`}
        />
      </div>
      <p className="m-1">{props.value}</p>
    </div>
  );
}
