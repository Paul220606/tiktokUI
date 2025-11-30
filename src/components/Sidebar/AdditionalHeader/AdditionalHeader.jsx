import classNames from 'classnames/bind'
import {useContext} from 'react'
import { TiDelete } from "react-icons/ti"

import { MoreContext, SearchContext } from '../Sidebar';
import styles from './AdditionalHeader.module.scss'


const cx = classNames.bind(styles);

function AdditionalHeader({message}){
    return <div className={cx('wrapper')}>
        <h3 className={cx('header')}> {message} </h3>
        <TiDelete className={cx('close-button')} onClick={message==='Search'?useContext(SearchContext):useContext(MoreContext)}/>
    </div>
}

export default AdditionalHeader