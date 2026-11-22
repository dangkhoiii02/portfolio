export default function PageHeading({ title, emphasis, description, id }: {
  title: string;
  emphasis?: string;
  description?: string;
  id?: string;
}) {
  return (
    <header className="page-heading">
      <h1 id={id}><span>{title}</span>{emphasis && <> <em>{emphasis}</em></>}</h1>
      {description && <p>{description}</p>}
    </header>
  );
}
