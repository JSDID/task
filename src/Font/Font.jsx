import "./Font.css";
let font = 'font 2';
let normal = 'Component <Font “normal”>';
function Font() {
  return (
    <>
    <main className="Font-item">
        <ul>
          <li>
            <h1 className="Font-h1">{font}</h1>
          </li>
          <li>
            <p className="Normal-p">{normal}</p>
          </li>
          <li>
            <label className="Asap">Font family:<span className="Asap"> Nunito</span>
            </label>
          </li>
          <li>
            <label className="Asap">Styles:<span className="Asap"> Regular 400</span></label>
          </li>
        </ul>
        <div className="Nunito-item">
          <div className="Nunito-border">
            <h1 className="Nunito-a">AA</h1>
            <p className="Nunito-n">Nunito</p>
          </div>
        </div>
    </main>
    </>
  );
}
export default Font;