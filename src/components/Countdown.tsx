import Countdown from 'react-countdown';

function Count() {

    return (
        <div className="w-screen">
            <img
                src="beach-countdown.png"
                alt="Beach"
                className="w-screen bottom-image animate__animated animate__fadeInUp"
            />
            <div className='w-screen h-screen flex items-center justify-center text-white text-8xl bg-gradient-to-r from-[#282828] to-[#090909]'><Countdown date={'7/14/2024'} /></div>
        </div>
    )
}

export default Count
