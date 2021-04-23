import Head from 'next/head'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Head>
                <title>Google</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Header component */}
            <header className="flex justify-between w-full p-5 text-sm text-gray-700">
                <div className="flex space-x-4 items-center">
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>

                <div className="flex space-x-4 items-center">
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>
                    <ViewGridIcon className="h-10 p-2 cursor-pointer rounded-full hover:bg-gray-100" />
                    <Avatar url="https://cdn.vox-cdn.com/thumbor/4QtOwnOxCdwESvt1-CpQSTZvHHA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19932738/1206292068.jpg.jpg" />
                </div>
            </header>

            {/* Body */}
            <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
                <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    width={300}
                    height={100}
                />

                <div
                    className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
                sm:max-w-xl lg:max-w-2xl"
                >
                    <SearchIcon className="h-5 mr-3 text-gray-500" />
                    <input
                        type="text"
                        className="focus:outline-none flex-grow"
                    />
                    <MicrophoneIcon className="h-5" />
                </div>

                <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
                    <button className="btn" onClick={(e) => e.preventDefault()}>
                        Google Search
                    </button>
                    <button className="btn" onClick={(e) => e.preventDefault()}>
                        I'm Feeling Lucky
                    </button>
                </div>
            </form>

            <Footer />
        </div>
    )
}
