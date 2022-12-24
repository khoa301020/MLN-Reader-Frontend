import coverHeader from '../assets/img/coverHeader.jpg';
function CoverHeader() {
    return (
        <div className='cover'>
            <img className='w-full h-56 object-cover' src={coverHeader} alt='cover' />
        </div>
    );
}

export default CoverHeader;