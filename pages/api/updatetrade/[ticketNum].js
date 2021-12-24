import { prisma } from "../../../prisma";

//http://localhost:3000/api/updatetrade/40566814?currency=AUDCHF&direction=buy&slPrice=3.3&tpPrice=2.4&slPips=3.4&tpPips=40&RR=2.4
export default async function updateTrade(req, res) {
    const data = req.query;
    if (data.ticketNum) data.ticketNum = parseInt(data.ticketNum);
    if (data.closedAt) {
        data.closedAt = new Date(data.closedAt);
        data.closed = true;
    }

    try {
        const updatedTrade = await prisma.trade.update({
            where: {
                ticketNum: data.ticketNum
            },
            data,
        })
        res.status(200).json(updatedTrade)
    } catch (err) {
        console.log(err);
        console.log(err.message);
        res.status(400).json(err)
    }
}
