import react, { useState } from 'react';
import { ArrowCircleDownIcon, ArrowCircleUpIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon } from "@heroicons/react/outline"

function Trade({ trade }) {
    const {
       id, currency,
        entryTime,
        direction,
        accumulate,
        slPips,
        TpPips,
        RR,
        exit,
        maxPips,
        profit,
    } = trade;

    const [open, setOpen] = useState(false);

    return (
         <div className="m-5 rounded-xl shadow-md cursor-pointer">
                <div onClick={() => setOpen(!open)} className="flex justify-between items-center p-5 hover:bg-gray-100">
                    <div className="flex-1 justify-center">1</div>
                    <span className="flex-1">{entryTime}</span>
                    <span className="flex-1">{currency}</span>
                    {direction =='buy'?
                        <span className="flex-1 flex items-center text-green-400"><ArrowCircleUpIcon className="text-xl h-5 w-5 mr-5"/>{direction}</span>
                    :
                        <span className="flex-1 flex items-center text-red-400"><ArrowCircleDownIcon className="text-xl h-5 w-5 mr-5"/>{direction}</span>
                    }
                    <span className="flex-1">{accumulate}</span>
                    <span className="flex-1">{slPips}</span>
                    <span className="flex-1">{TpPips}</span>
                    <span className="flex-1">{RR}</span>
                    <span className="flex-1">{exit}</span>
                    <span className="flex-1">{profit} </span>
                    { profit<0 ?
                        <span className="flex-1 flex justify-between text-red-700"> {profit}
                            {open? <ChevronDoubleUpIcon className="text-xl h-5 w-5 text-amber-600"/> : <ChevronDoubleDownIcon className="text-xl h-5 w-5 text-amber-600"/> }
                        </span>
                    :
                        <span className="flex-1 flex justify-between text-green-700"> +{profit}
                            {open? <ChevronDoubleUpIcon className="text-xl h-5 w-5 text-amber-600"/> : <ChevronDoubleDownIcon className="text-xl h-5 w-5 text-amber-600"/> }
                        </span>
                    }
                </div>
                {open &&
                <div className="grid grid-cols-3 p-5 `${}`">
                    <div className="col-span-1 rounded-3xl shadow-xl">
                        <img
                            src="https://www.tradingview.com/x/npXdGlp8/"
                            alt="trade"
                            className="rounded-3xl object-cover h-72"
                        />
                    </div>
                    <div className="col-span-2 flex shadow-sm m-6 rounded-xl p-5">
                        <div className="flex-1">
                            <div className="flex justify-between p-1 mx-9 border-b-2 border-b-gray-200 mb-2">
                                <span>M 15 Env</span>
                                <span>Buy</span>
                            </div>
                            <div className="flex justify-between p-1 mx-9 border-b-2 border-b-gray-200 mb-2">
                                <span>M 15 Env</span>
                                <span>Buy</span>
                            </div>
                            <div className="flex justify-between p-1 mx-9 border-b-2 border-b-gray-200 mb-2">
                                <span>M 15 Env</span>
                                <span>Buy</span>
                            </div>
                            <div className="flex justify-between p-1 mx-9 border-b-2 border-b-gray-200 mb-2">
                                <span>M 15 Env</span>
                                <span>Buy</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between p-1 mx-9 border-b-2 border-b-gray-200 mb-2">
                                <span>M 15 Env</span>
                                <span>Buy</span>
                            </div>
                            <div className="flex justify-between p-1 mx-9 border-b-2 border-b-gray-200 mb-2">
                                <span>M 15 Env</span>
                                <span>Buy</span>
                            </div>
                            <div className="flex justify-between p-1 mx-9 border-b-2 border-b-gray-200 mb-2">
                                <span>M 15 Env</span>
                                <span>Buy</span>
                            </div>
                            <div className="flex justify-between p-1 mx-9 border-b-2 border-b-gray-200 mb-2">
                                <span>M 15 Env</span>
                                <span>Buy</span>
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
    )
}

export default Trade
