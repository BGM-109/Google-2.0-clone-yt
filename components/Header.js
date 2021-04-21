import { MicrophoneIcon } from '@heroicons/react/outline';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Avatar from '../components/Avatar'

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = e => {
        e.preventDefault();
        const term = searchInputRef.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`)

  }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-4 items-center">
                <Image
                    src="https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    width={120}
                    height={40}
                    className="cursor-pointer"
                    onClick={ () => router.push('/')}
                />
       

                <form className="flex flex-grow items-center border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5">
                <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none" />
                <XIcon className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"
                    onClick={() => {searchInputRef.current.value=""}}
                />
                <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300" />
                <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex " />
                <button hidden type="submit" onClick={search}>Search</button>
                </form>
                <Avatar className="ml-auto" url="data:image/jpeg;base64,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"/>
          
                </div>
         </header>
    )
}

export default Header
