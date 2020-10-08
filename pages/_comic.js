const Comic = (props) => {
  const metadata = props.metadata;
  return (
    <div>
      <h1>{metadata.title}</h1>
      <img src={metadata.img} />
    </div>
  );
};
export default Comic;
