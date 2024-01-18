export default function ListItem(props) {
  return (
    <div>
      <li className="ajustarli">
        <h3>{props.imgalt}</h3>
        <a target="_blank" href={props.href}>
          <img src={props.imgsrc} alt={props.imgalt}></img>
        </a>
        <h4>{props.coment}</h4>
        <button href="a" onClick={props.onClick} className="LUISESButton">
          Shop now!
        </button>
      </li>
    </div>
  );
}
