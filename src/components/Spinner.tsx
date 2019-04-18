import { h, JSX } from "preact";
import * as style from "./Spinner.css";

export function Spinner(): JSX.Element {
  return (
    <div style={style} className="kuc-spinner-outer">
      <div className="kuc-spinner">
        <div className="kuc-loader" />
      </div>
    </div>
  );
}
