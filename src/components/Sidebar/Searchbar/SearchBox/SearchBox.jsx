import classNames from 'classnames/bind'
import { useContext } from 'react';
import { useRef } from 'react';
import { TiDelete } from "react-icons/ti"


import styles from './SearchBox.module.scss'
import { MoreContext } from '../../Sidebar';


const cx = classNames.bind(styles);

function SearchBox(){
    const inputRef = useRef(null);
    const context = useContext(MoreContext)
    const {searchMessage, setSearchMessage} = context
    return <div className={cx('search-wrapper')} >
            <input ref={inputRef} type="search" className={cx('input')} placeholder='Top Search' 
            onFocus={e => e.target.parentElement.querySelector('div').classList.add(cx('on-focus'))} 
            onBlur={e =>  e.target.parentElement.querySelector('div').classList.remove(cx('on-focus'))} 
            onChange={e=>setSearchMessage(e.target.value)}
            value = {searchMessage}
            autoFocus/>
            <div className={cx('input-icon')} onClick={()=>inputRef.current.focus()}>
                <TiDelete className={cx('delete-button')} onClick={()=>inputRef.current.value=''}/>
            </div>
        </div>
}

export default SearchBox