import coverHeader from '../assets/img/cover2.jpg';
function CoverHeader() {
    return (
        <div className='m-0 p-0 bg-zinc-800'>
            <img className='w-full h-64 object-cover' src={coverHeader} alt='cover' />
        </div>
    );
}

export default CoverHeader;