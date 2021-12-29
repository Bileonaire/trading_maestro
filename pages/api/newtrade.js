import { prisma } from "../../prisma";
import { createTrade } from "./jsonFileData";

//http://localhost:3000/api/newtrade?traderId=1&currency=AUDCHF&direction=buy&slPrice=3.3&tpPrice=2.4&slPips=3.4&tpPips=40&RR=2.4
export default async function tradeApi(req, res) {
  const data = req.query;
  data.traderId = parseInt(data.traderId);
  data.ticketNum = parseInt(data.ticketNum);

  if (data.closed && data.closed == 'true') data.closed = true;
  data.createdAt = new Date(new Date().setHours(new Date().getHours() + 3));

  try {
    const newTrade = await prisma.trade.create({
      data,
    });
    createTrade(newTrade);
    res.status(201).json(newTrade);
  } catch (err) {
    console.log(err);
    console.log(err.message);
    res.status(400).json(err.message);
  }
}

