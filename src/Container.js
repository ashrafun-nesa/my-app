import './Container.css'
import Containercard from "./Containercard.js";

export default function Container(){
    return(
        <div className="row">
          <div className="col col-2">
            <Containercard />
          </div>
          <div className="col col-2">
            <Containercard />
          </div>
          <div className="col col-2">
            <Containercard />
          </div>
          <div className="col col-2">
            <Containercard />
          </div>
          <div className="col col-2">
            <Containercard />
          </div>
        </div>
    )
}