import Comic from "../_comic"
import Header from "../_header"
import Footer from "../_footer"
export default (props) => (
<>
<Header />
<Comic metadata={props.comic}/>
<Footer comic_number={props.comic.num} />
</>
)

export async function getServerSideProps(context) {
  const comic_number = context.query.id;
  const raw = await fetch(`https://xkcd.com/${comic_number}/info.0.json`);
  const comic = await raw.json()
  return {
    props: {
      comic,
    },
  };
}
