import Link from "next/link";

const Footer = (props) => {
  const comic_num = props.comic_number || 0;
  const comics = [];
  for (let i = 0; i < 10; i++) {
    comics.push(comic_num - i);
  }
  return (
    <ul>
      {comics.map((num) => (
        <Link href="/num/[id].js" as={`/num/${num}`} key={num}>
          <a> #{num} </a>
        </Link>
      ))}
    </ul>
  );
};

export default Footer;
