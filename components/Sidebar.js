import { ChipIcon } from "@heroicons/react/outline"
import Link from "next/link"

function Sidebar() {
    return (
        <div className="w-64 p-5 sidebar sticky">
            <div className="mb-2">
                <h3 className="text-lg font-medium mb-1">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="p-1 cursor-pointer flex items-center rounded-md hover:bg-gray-400 active">
                        Home
                    </li>
                    <li className="p-1 cursor-pointer flex items-center rounded-md hover:bg-gray-400">
                        Analytics
                    </li>
                    <li className="p-1 cursor-pointer flex items-center rounded-md hover:bg-gray-400">
                        <ChipIcon className="text-xl h-5 w-5 mr-1"/>
                        Sales
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar