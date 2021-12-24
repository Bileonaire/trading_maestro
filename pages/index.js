import { Trade } from "../components"
import { prisma } from "../prisma"

function trades({ tradesData }) {
    return (
        <div className="">
            <div className="flex justify-between">
                <div className=" flex-1 mx-5 shadow-lg h-32 p-5 rounded-lg">
                    <h3 className="font-semibold from-stone-900 text-lg underline">Trade Statistics</h3>

                    <div className="flex">
                        <div className="text-center mr-10"> <h2 className="">Trades Taken : 12</h2> </div>
                        <div>
                            <h3>Won 6</h3>
                            <h3>Lost 6</h3>
                        </div>

                    </div>


                </div>
                <div className="flex-1 mx-5 shadow-lg h-24 p-5 rounded-lg">
                    one
                </div>
                <div className="flex-1 mx-5 shadow-lg h-24 p-5 rounded-lg">
                    Balance Statistics
                </div>
            </div>

            <h2 className="m-5 text-xl font-bold">TRADES</h2>

            <div className=" m-5 flex justify-between mt-3 border-b-2 border-b-gray-200 rounded-md bg-gray-50 p-3 font-semibold sticky top-20 z-50">
                <span className="flex-1 ali">Trade No</span>
                <span className="flex-1">Entry Time</span>
                <span className="flex-1">Currency</span>
                <span className="flex-1">Direction</span>
                <span className="flex-1">Accumulate</span>
                <span className="flex-1">SL Pips</span>
                <span className="flex-1">Tp Pips</span>
                <span className="flex-1">RR</span>
                <span className="flex-1">Exit Time</span>
                <span className="flex-1">Duration</span>
                <span className="flex-1">Profit/Loss</span>
            </div>

            {tradesData.map(trade=> (
                <Trade
                    key={trade.id}
                    trade={trade}
                />
            ))}

        </div>
    )
}

export default trades


export async function getServerSideProps() {
  let trades = await prisma.trade.findMany();
  trades = JSON.parse(JSON.stringify(trades));

  return {
    props: {
      tradesData : trades
    }
  };
}