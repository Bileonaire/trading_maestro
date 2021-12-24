import react, { useState } from 'react';
import { ArrowCircleDownIcon, ArrowCircleUpIcon, ChevronDoubleDownIcon, ChevronDoubleUpIcon, TrendingUpIcon, TrendingDownIcon } from "@heroicons/react/outline"
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
        D1CLOSE,
        H4CLOSE,
        H1CLOSE,
        M15CLOSE,
        D1PREV,
        H4PREV,
        H1PREV,
        M15PREV,
        D1200EMA,
        H4200EMA,
        H1200EMA,
        M15200EMA,
        D150SMA,
        H450SMA,
        H150SMA,
        M1550SMA,
        D18EMA,
        H48EMA,
        H18EMA,
        M158EMA,
        D120EMA,
        H420EMA,
        H120EMA,
        M1520SMA,
        D1ENV,
        H4ENV,
        H1ENV,
        M15ENV,
        image1,
        image2,
        maxPips,
        profit,
        closed,
        closedAt,
    } = trade;

    const [open, setOpen] = useState(false);

    return (
        <div className="m-5 rounded-xl shadow-md cursor-pointer">
            <div onClick={() => setOpen(!open)}
                className={
                    open ?
                        "flex justify-between items-center p-2 bg-gray-100"
                        :
                        "flex justify-between items-center p-2 hover:bg-gray-100"
                }>
                <div className="flex-1 justify-center">{id}</div>
                <span className="flex-1">{formatDate(createdAt, 'ddd HH:MM')}</span>
                <span className="flex-1">{currency}</span>

                {direction == 'buy' || direction == 'Buy' ?
                    <span className="flex-1 flex items-center text-green-400"><ArrowCircleUpIcon className="text-xl h-5 w-5 mr-5" />{direction}</span>
                    :
                    <span className="flex-1 flex items-center text-red-400"><ArrowCircleDownIcon className="text-xl h-5 w-5 mr-5" />{direction}</span>
                }

                <span className="flex-1">{accumulate}</span>
                <span className="flex-1">{slPips}</span>
                <span className="flex-1">{tpPips}</span>
                <span className="flex-1">{RR}</span>
                <span className="flex-1">{closed}</span>
                <span className="flex-1">{profit} </span>

                {profit < 0 ?
                    <span className="flex-1 flex justify-between text-red-700"> {profit}
                        {open ? <ChevronDoubleUpIcon className="text-xl h-5 w-5 text-amber-600" /> : <ChevronDoubleDownIcon className="text-xl h-5 w-5 text-amber-600" />}
                    </span>
                    :
                    <span className="flex-1 flex justify-between text-green-700"> {profit > 0 ? +profit : '--'}
                        {open ? <ChevronDoubleUpIcon className="text-xl h-5 w-5 text-amber-600" /> : <ChevronDoubleDownIcon className="text-xl h-5 w-5 text-amber-600" />}
                    </span>
                }

            </div>

            {open &&
                <div className="grid grid-cols-3 p-5 `${}`">
                    <div className="col-span-1 rounded-3xl shadow-xl">
                        <div className="content-center p-2">
                            <img
                                src={image1}
                                alt="trade"
                                className="rounded-3xl object-cover h-80"
                            />
                        </div>
                    </div>
                    <div className="col-span-2 grid grid-cols-3 shadow-sm rounded-xl p-5">
                        <div className="col-span-2 text-xs mx-5">
                            <div className="flex flex-auto p-1 mx-9 border-b-1 border-b-gray-200 mb-1 font-bold text-blue-600">
                                <div className="flex-1 text-white text-center">-</div>
                                <div className="flex-1 h-5 w-5 text-center">D1</div>
                                <div className="flex-1 text-center">H4</div>
                                <div className="flex-1 h-5 w-5 text-center">H1</div>
                                <div className="flex-1 h-5 w-5 text-center">M15</div>
                            </div>
                            <div className="flex flex-auto p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">PREV</span>
                                {D1PREV == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H4PREV == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H1PREV == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {M15PREV == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                            </div>

                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">CLOSE</span>
                                {D1CLOSE == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H4CLOSE == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H1CLOSE == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {M15CLOSE == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">ENV</span>
                                {D1ENV == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H4ENV == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H1ENV == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {M15ENV == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">8 EMA</span>
                                {D18EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H48EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H18EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {M158EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">200 EMA</span>
                                {D1200EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H4200EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H1200EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {M15200EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">50 SMA</span>
                                {D150SMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H450SMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H150SMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {M1550SMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                            </div>
                            <div className="flex p-1 mx-9 border-b-1 border-b-gray-200 mb-1">
                                <span className="flex-1 font-semibold">20 EMA</span>
                                {D120EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H420EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {H120EMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
                                {M1520SMA == 'buy' ? <TrendingUpIcon className="flex-1 h-5 w-5 col-auto text-green-500"/> : <TrendingDownIcon className="flex-1 h-5 w-5 col-auto text-red-500" />}
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
