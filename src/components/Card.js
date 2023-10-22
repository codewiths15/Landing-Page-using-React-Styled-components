import { Styledcard } from "./styles/Cardstyled";

export default function Card({ item: { id, title, body, image } }) {
  return (
    <Styledcard layout={id% 2 ==0 && 'row-reverse'}>
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./images/${image}`} width='90%'/>
      </div>
    </Styledcard>
  );
}
