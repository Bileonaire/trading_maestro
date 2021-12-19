import react, { useState } from 'react';
import { ArrowCircleDownIcon, ArrowCircleUpIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, TrendingUpIcon } from "@heroicons/react/outline"
import { formatDate } from '../utils';

function Trade({ trade }) {
    const {
        id,
        createdAt,
        traderId,
        currency,
        direction,
        slPrice,
        tpPrice,
        slPips,
        tpPips,
        RR,
        accumulate,
        D1prev,
        D18ema,
        D1CLOSE,
        H4PREV,
        H450SMA,
        H420EMA,
        H1PREV,
        M15PREV,
        M15200EMA,
        M1550SMA,
        M1520SMA,
        M15ENV,
        H1ENV,
        H4ENV,
        maxPips,
        profit,
        closed,
        closedAt,
    } = trade;

    const [open, setOpen] = useState(false);

    return (
         <div className="m-5 rounded-xl shadow-md cursor-pointer">
                <div onClick={() => setOpen(!open)} className="flex justify-between items-center p-2 hover:bg-gray-100">

                    <div className="flex-1 justify-center">{id}</div>
                    <span className="flex-1">{formatDate(createdAt, 'ddd HH:MM')}</span>
                    <span className="flex-1">{currency}</span>

                    {direction == 'buy' || direction == 'Buy'?
                        <span className="flex-1 flex items-center text-green-400"><ArrowCircleUpIcon className="text-xl h-5 w-5 mr-5"/>{direction}</span>
                    :
                        <span className="flex-1 flex items-center text-red-400"><ArrowCircleDownIcon className="text-xl h-5 w-5 mr-5"/>{direction}</span>
                    }

                    <span className="flex-1">{accumulate}</span>
                    <span className="flex-1">{slPips}</span>
                    <span className="flex-1">{tpPips}</span>
                    <span className="flex-1">{RR}</span>
                    <span className="flex-1">{closed}</span>
                    <span className="flex-1">{profit} </span>

                    { profit<0 ?
                        <span className="flex-1 flex justify-between text-red-700"> {profit}
                            {open? <ChevronDoubleUpIcon className="text-xl h-5 w-5 text-amber-600"/> : <ChevronDoubleDownIcon className="text-xl h-5 w-5 text-amber-600"/> }
                        </span>
                    :
                        <span className="flex-1 flex justify-between text-green-700"> {profit>0 ? +profit : '--' }
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
                            className="rounded-3xl object-cover h-80"
                        />
                    </div>
                    <div className="col-span-2 grid grid-cols-3 shadow-sm rounded-xl p-5">
                        <div className="col-span-2 text-xs mx-5">
                            <div className="flex flex-auto p-1 mx-9 border-b-1 border-b-gray-200 mb-1 font-bold text-blue-600">
                                <div className="flex-1 text-white text-center">-</div>
                                <div className=" flex-1 h-5 w-5 text-center">D1</div>
                                <div className="flex-1 text-center">H4</div>
                                <div className="flex-1 h-5 w-5 text-center">H1</div>
                                <div className="flex-1 h-5 w-5 text-center">M15</div>
                            </div>
                            <div className="flex flex-auto p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">PREV</span>
                                <TrendingUpIcon className=" flex-1 h-5 w-5 col-auto text-green-500"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                            </div>

                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">PREV</span>
                                <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">CLOSE</span>
                                <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">ENV</span>
                                <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">8 EMA</span>
                                <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">20 EMA</span>
                                <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">50 EMA</span>
                                <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">200 EMA</span>
                                <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                                <TrendingUpIcon className="flex-1 h-5 w-5"/>
                            </div>

                        </div>

                        <div className="col-span-1">
                            <div className="flex justify-between p-1 mx-4 border-b-2 border-b-gray-200 mb-1">
                              Notes
                            </div>
                        </div>
                    </div>
                </div>}
            </div>
    )
}

export default Trade
