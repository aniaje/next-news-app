import Axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { debounce } from "lodash";
import { Fade } from "react-awesome-reveal";
import { Card, Cards, Content, SLink } from "./headlines/headlines.styles";
import { useState } from "react";
import axios from "axios";

type Headline = {
  author: string;
  title: string;
  description: string;
  source: {
    id: string;
    name: string;
  };
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

const Home: NextPage = ({ headlines }) => {
  const [news, setNews] = useState<Headline[]>(headlines.articles || []);
  const [search, setSearch] = useState(null);
  // const filterData =
  //     setSearchResults(
  //       (headlines.articles as Headline[]).filter((headline: Headline) =>
  //         headline.description).toLowerCase().includes(searchQuery.toLowerCase())
  //       )
  //     );
  //   [headlines]
  // );

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearch(e?.target?.value);
  // filterData(e?.target?.value);
  // };

  const handleSearch = (e) => {
    setSearch(search);
    console.log(e.target.value);
    console.log("search", search);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.get(`/api/hello?query=${search}`);
    setNews(res.data.articles);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search topic"
          onChange={handleSearch}
          value={search}
          type="search"
        ></input>
        <button type="submit">search</button>
      </form>
      <Content>
        <Fade left>
          <div>top headlines</div>
        </Fade>

        <Cards>
          {news.map((headline: Headline) => {
            return (
              <Card>
                <img src={headline.urlToImage} />
                <h1>{headline.title}</h1>

                <SLink href={headline.url}>Read more!</SLink>
              </Card>
            );
          })}
        </Cards>
      </Content>
    </>
  );
};

export const getServerSideProps: GetStaticProps = async () => {
  const headlines = await Axios.get(
    `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${process.env.API_KEY}`
  );

  console.log(headlines);
  console.log("headlines");
  return {
    props: {
      headlines: headlines.data,
    },
  };
};

export default Home;
