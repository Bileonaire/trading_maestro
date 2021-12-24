import { prisma } from "../../prisma";

//http://localhost:3000/api/currency?name=EURUSD&accumulate=12&spread=10&TrendD1=7&TrendH4=7&TrendH1=7&TrendM15=3
export default async function currencyUpdate(req, res) {
    const data = req.query;

    try {
        const currency = await prisma.currency.upsert({
            where: {
                name: data.name,
            },
            update: {
                ...data
            },
            create: {
                ...data
            },
        });
        console.log(currency);
        res.status(200).json(currency)
    } catch (err) {
        res.status(400).json(err.message)
    }
}