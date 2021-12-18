import { ArrowCircleUpIcon, ChevronDoubleDownIcon } from "@heroicons/react/outline"
import Image from "next/image"
import { Trade } from "../../components"

const tradesData = [
    {
        id:1,
        currency: 'Eurusd',
        entryTime: '12:00',
        direction: 'buy',
        accumulate: 13,
        slPips: 12,
        TpPips: 15,
        RR: 1.4,
        exit: '13:00',
        maxPips:16,
        profit: 15,
    },
    {
        id:1,
        currency: 'Eurusd',
        entryTime: '12:00',
        direction: 'sell',
        accumulate: 13,
        slPips: 12,
        TpPips: 15,
        RR: 1.4,
        exit: '13:00',
        maxPips: 16,
        profit: -15,
    }
]
function trades() {
    return (
        <div className="">
            <div className="flex justify-between">
                <div className=" flex-1 mx-5 shadow-lg h-24 p-5 rounded-lg">
                    one
                </div>
                <div className="flex-1 mx-5 shadow-lg h-24 p-5 rounded-lg">
                    one
                </div>
                <div className="flex-1 mx-5 shadow-lg h-24 p-5 rounded-lg">
                    one
                </div>
            </div>

            <h2 className="m-5 text-xl font-bold">TRADES</h2>

            <div className=" m-5 flex justify-between mt-3 border-b-2 border-b-gray-200 rounded-md bg-gray-50 p-5 font-semibold sticky top-20 z-50">
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
