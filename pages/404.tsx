import Link from "next/link";
import { NextPage } from "next/types";

const PageNotFound: NextPage = () => {
  return (
    <>
      <h2> Page Not Found </h2>
      <Link href="/">Back to Home Page</Link>
    </>
  );
};

export default PageNotFound;
