import Link from "next/link";

export default () => (
  <header>
    <h1>XKCD</h1>
    <Link href="/">
      <a>Home</a>
    </Link>
    <span> -- </span>
    <Link href="/about">
      <a>About</a>
    </Link>
  </header>
);
