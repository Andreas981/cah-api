import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const getWhiteCard = async (req: Request, res: Response) => {
  let line: string = await readRandomFromFile(
    path.join(__dirname, "../files/CAHWhiteCards.txt")
  );
  console.log(line);
  return res.set("Content-Type", "text/plain").status(200).send(line);
};

const getBlackCard = async (req: Request, res: Response) => {
  let line: string = await readRandomFromFile(
    path.join(__dirname, "../files/CAHBlackCards.txt")
  );
  console.log(line);
  return res.set("Content-Type", "text/plain").status(200).send(line);
};

const readRandomFromFile = async (path: string) => {
  return await fs.promises
    .readFile(path)
    .then((data) => data.toString())
    .then(
      (str) =>
        str.split("\n")[Math.floor(Math.random() * str.split("\n").length)]
    );
};

export default { getWhiteCard, getBlackCard };
