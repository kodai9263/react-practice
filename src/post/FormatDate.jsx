export default function FormatDate({ date }) {

  const format = date => new Date(date).toLocaleDateString();

  return (
    <p>{format(date)}</p>
  );
}