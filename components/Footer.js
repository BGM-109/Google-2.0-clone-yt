function Footer() {
    return (
        <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-gray-500">
            <div className="px-8 py-3">
                South Korea
            </div>
            <div className="flex sm:flex-row p-5 sm:justify-between text-sm  flex-col items-center space-y-4 sm:space-y-0">
                <div className="flex-row flex space-x-4 ">
                    <p className="link">About</p>
                    <p className="link">Advertising</p>
                    <p className="link">Business</p>
                    <p className="link">How Search works</p>
                </div>
                <div className="flex-row flex space-x-4  ">
                    <p className="link">Privacy</p>
                    <p className="link">Terms</p>
                    <p className="link">Settings</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
