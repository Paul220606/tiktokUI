import { CiSearch } from "react-icons/ci";

import NavItem from "../NavItems/NavItem/NavItem";
import classNames from 'classnames/bind'
import { useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { SiTiktok } from 'react-icons/si'

import styles from './SidebarHeader.module.scss'
import { MoreContext, SearchContext } from "../Sidebar";

const cx = classNames.bind(styles);

function SidebarHeader({isMinimized, searchMessage}){
    const navigate = useNavigate()
    const toggleMore = useContext(MoreContext)
    const toggleSearch = useContext(SearchContext)
    const minimizedBool = Boolean(isMinimized)
    const headerMethod = ()=>{
        if (isMinimized=='search') {toggleSearch()}
        else if (isMinimized=='more') {toggleMore()}
        navigate('/')
    }
    return <>
    <div className={cx('header-wrapper', minimizedBool && 'header-minimize')} onClick={headerMethod}>
        <SiTiktok className={cx('logo', minimizedBool && 'logo-minimize')} />
        <h2 className={cx('text', minimizedBool && 'text-minimize')}>TikTok</h2>
    </div>
    <div className={cx('search-bar')}>
        <NavItem iconTag={CiSearch} message={searchMessage} isMinimized={isMinimized}/>
    </div>
    </>
}
    
    

export default SidebarHeader