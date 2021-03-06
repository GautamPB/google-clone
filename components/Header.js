import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { XIcon } from '@heroicons/react/solid'
import { MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/solid'
import Avatar from '../components/Avatar'
import HeaderOptions from '../components/HeaderOptions'

const Header = () => {
    const router = useRouter()
    const searchInputRef = useRef(null)

    const search = (e) => {
        e.preventDefault()
        const term = searchInputRef.current.value

        if (!term) return

        router.push(`/search?term=${term}`)
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    height={40}
                    width={120}
                    className="cursor-pointer"
                    onClick={() => router.push('/')}
                />

                <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl">
                    <input
                        ref={searchInputRef}
                        className="flex-grow w-full focus:outline-none"
                        type="text"
                    />

                    <XIcon
                        className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                        onClick={() => {
                            searchInputRef.current.value = ''
                        }}
                    />

                    <MicrophoneIcon className="h-6 ml-3 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                    <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>
                        Search
                    </button>
                </form>

                <Avatar
                    className="ml-auto"
                    url="https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg"
                />
            </div>

            <HeaderOptions />
        </header>
    )
}

export default Header
