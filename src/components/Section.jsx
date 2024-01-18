export default function Section(props) {
  return (
    <div>
      <section>
        <div className={props.classdiv}>
          <span className={props.linhasec2}></span>
          <h2>{props.maintext}</h2>
          <p>{props.nextbutonetext}</p>
          <span className={props.linhasec1}></span>
          <ul className={props.class}>{props.children}</ul>
        </div>
      </section>
    </div>
  );
}
