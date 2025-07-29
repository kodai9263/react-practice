import ObjectItem from "./ObjectItem";

export default function Objects({ src }) {
  return (
    <dl>
      {src.map(elem => 
        <ObjectItem post={elem} key={elem.id} />
      )}
    </dl>
  );
}