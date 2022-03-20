/** source/controllers/posts.ts */
import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";

interface RandomWhiteCard {
  text: String;
}

// getting all posts
const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  // get some posts
  let lines: string[] = ["test0", "test1", "test2"];
  let randomWhiteLine: String = lines[Math.floor(Math.random() * lines.length)];
  return res.status(200).json({
    randomWhiteLine,
  });
};

export default { getPosts };
