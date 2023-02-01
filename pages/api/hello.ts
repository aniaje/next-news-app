import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { query } = req.query;
  console.log(query);
  const headlines = await axios.get(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.API_KEY}`
  );
  console.log(headlines);
  res.status(200).json(headlines.data);
};

// type Headlines = {
//   author: string;
//   title: string;
//   description: string;
//   source: {
//     id: string;
//     name: string;
//   };
//   url: string;
//   urlToImage: string;
//   publishedAt: string;
//   content: string;
// };
