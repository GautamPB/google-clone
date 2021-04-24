import HeaderOptionSingle from '../components/HeaderOptionSingle'
import {
    SearchIcon,
    NewspaperIcon,
    TagIcon,
    PhotographIcon,
    BookmarkIcon,
    PlayIcon,
    DotsVerticalIcon,
} from '@heroicons/react/solid'

const HeaderOptions = () => {
    return (
        <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
            <div className="flex space-x-6">
                <HeaderOptionSingle Icon={SearchIcon} title="All" selected />
                <HeaderOptionSingle Icon={NewspaperIcon} title="News" />
                <HeaderOptionSingle Icon={TagIcon} title="Shopping" />
                <HeaderOptionSingle Icon={PhotographIcon} title="Images" />
                <HeaderOptionSingle Icon={BookmarkIcon} title="Books" />
                <HeaderOptionSingle Icon={PlayIcon} title="Videos" />
                <HeaderOptionSingle Icon={DotsVerticalIcon} title="More" />
            </div>

            <div className="flex space-x-4">
                <p className="link">Settings</p>
                <p className="link">Tools</p>
            </div>
        </div>
    )
}

export default HeaderOptions
