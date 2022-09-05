import "./Typography.css";
let Component = "Component <Heading=«h1»> «normal»>";
function Typography() {
  return (
    <>
      <main className="Typography">
        <h1 className="Typography-h">Heading 1</h1>
        <p className="Typography-c">{Component}</p>
        <div className="Typography-item">
          <ul>
            <li>
              <label className="Asap">Font family:<span className="Asap"> Nunito</span></label>
            </li>
            <li>
              <label className="Asap">Styles:<span className="Asap"> Regular 400</span></label>
            </li>
            <li>
              <label className="Asap">Size:<span className="Asap"> 40</span></label>
            </li>
            <li>
              <label className="Asap">Lineheight:<span className="Asap"> 40</span></label>
            </li>
          </ul>
          <p className="Nunito-heading">
            The five boxing wizards jump quickly.
          </p>
        </div>
        <h1 className="Typography-h">Body</h1>
        <div className="Typography-item">
          <ul>
            <li>
              <label className="Asap">Font family:<span className="Asap"> Nunito</span></label>
            </li>
            <li>
              <label className="Asap">Styles:<span className="Asap"> Regular 400</span></label>
            </li>
            <li>
              <label className="Asap">Size:<span className="Asap"> 16</span></label>
            </li>
            <li>
              <label className="Asap">Lineheight:<span className="Asap"> 26</span></label>
            </li>
          </ul>
          <p className="Nunito-body">
            Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a lectus vitae urna dignissim laoreet a eget arcu. Sed eget gravida nisl. Integer molestie purus velit, et efficitur quam porttitor ut. Vestibulum tincidunt odio at lacus ornare luctus.
          </p>
        </div>
      </main>
    </>
  );
}
export default Typography;