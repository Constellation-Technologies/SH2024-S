import { ReactElement } from 'react';
import Countdown from 'react-countdown';
import { zeroPad } from 'react-countdown';

interface CountdownElement {
    days: number,
    hours: number,
    minutes: number,
    seconds: number
}

const renderer = ({ days, hours, minutes, seconds }: CountdownElement) => {
    return (
        <span style={{ color: 'white', fontFamily: 'Inter', fontWeight: 'bold', fontSize: '14vw', margin: '2rem' }}>
            <span style={{ color: '#B84CFF' }} className='about-title'>{zeroPad(days)}</span>:<span style={{ color: '#73C0FE' }} className='about-title'>{zeroPad(hours)}</span>:<span style={{ color: '#FAFBDB' }} className='about-title'>{zeroPad(minutes)}</span>:<span style={{ color: '#FD8E8E' }} className='about-title'>{zeroPad(seconds)}</span>
        </span>
    );
};

function Count() {

    return (
        <div className="w-screen translate-y-[80rem] mb-[-5rem]">
            <img
                src="beach-countdown.png"
                alt="Beach"
                className="w-screen h-[25vh] translate-y-2 bottom-image"
            />
            <div className='w-screen h-screen h-min-screen flex flex-col items-center justify-center text-white text-8xl bg-gradient-to-r from-[#282828] to-[#090909]'>
                <h1 className='text-center text-black font-extrabold about-title font-[Inter] text-[6vw]'>July 14-21 2024</h1>
                <Countdown date={'7/14/2024'} renderer={renderer} zeroPadTime={2} />
            </div>
        </div>
    )
}

export default Count
