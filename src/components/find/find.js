import './find.scss';

const Find = () => {
    return (
        <div className='search'>
            <div className='bar'>
                <div className='txt_search'>Find a Character by name:</div>
                <div className='input_search'>
                    <div><input required placeholder='Enter Name'></input></div>
                    <div><div className='button'><a href='#'>FIND</a></div></div>
                </div>
            </div>
        </div>
    )
}

export default Find;
