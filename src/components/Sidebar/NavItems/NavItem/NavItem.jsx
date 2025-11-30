import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom';
import { useContext} from 'react';

import { PathContext } from '../../../../App';
import styles from './NavItem.module.scss'
import { MoreContext, SearchContext } from '../../Sidebar';

const cx = classNames.bind(styles);

function NavItem({iconTag, message, path, isMinimized}){
    const MAX_LENGTH = 10
    const navigate = useNavigate()
    const IconTag = typeof iconTag === 'function'? iconTag: null
    const curPath = useContext(PathContext)
    const toggleSearch = useContext(SearchContext)
    const toggleMore = useContext(MoreContext)
    const minimizedBool = Boolean(isMinimized)

    
    let classList = ['item-wrapper']
    let method = null

    if (path){
        if (path === curPath && isMinimized !== 'more'){
            classList.push('active')  
        } 
        method = () => {
            if (isMinimized=='search') {toggleSearch()}
            else if (isMinimized=='more') {toggleMore()}
            navigate(path)
        }
    } 
     else if (message==='More'){
        if (isMinimized ==='more'){
            classList.push('active')
        }
        method = ()=>{
            if (isMinimized==='search'){toggleSearch()}
            toggleMore()
        }
    }
    else {
        classList.push('search-bar')
        method = ()=>{
            if (isMinimized==='more'){toggleMore()}
            toggleSearch()
        }
    }
    if (minimizedBool){
        classList.push('wrapper-minimize')
    }
    return <div className={cx(...classList)} onClick={
            method
        }>{
            IconTag?(<IconTag className={cx('logo', minimizedBool && 'logo-minimized')} />):(<img src={iconTag} className={cx('avatar', minimizedBool && 'logo-minimized')}/>)
        }
        <h4 className={cx('text', minimizedBool && 'text-minimize', message && 'other-note')}>{message?(message.length<=MAX_LENGTH?message:message.slice(0, MAX_LENGTH-2)+'...'):'Search'}</h4>
    </div>
}

export default NavItem