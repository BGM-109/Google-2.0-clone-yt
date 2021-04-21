import HeaderOption from "./HeaderOption"
import { PhotographIcon, SearchIcon,PlayIcon, NewspaperIcon, MapIcon, DotsVerticalIcon } from '@heroicons/react/outline'


function HeaderOptions() {
    return (
        <div className="flex w-full justify-evenly text-gray-700 text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b" >
            <div className="flex space-x-6">
                <HeaderOption Icon={SearchIcon} title="All" selected />
                <HeaderOption Icon={PhotographIcon} title="Images"  />
                <HeaderOption Icon={PlayIcon} title="Videos"  />
                <HeaderOption Icon={NewspaperIcon} title="News"  />
                <HeaderOption Icon={MapIcon} title="Maps"  />
                <HeaderOption Icon={DotsVerticalIcon} title="More"  />

            </div>
            <div className="flex space-x-4">
                <p className="link">Search</p>
                <p className="link">Tools</p>
            </div>
        </div>
        
    )
}

export default HeaderOptions