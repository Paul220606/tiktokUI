import classNames from 'classnames/bind'
import {useState, createContext} from 'react'
import { IoHome } from "react-icons/io5"
import { MdOutlineExplore } from "react-icons/md"
import { RiUserFollowLine } from "react-icons/ri"
import { FaUserFriends } from "react-icons/fa"
import { MdOutlineLiveTv } from "react-icons/md"
import { IoPaperPlane } from "react-icons/io5"
import { BsChatSquareDots } from "react-icons/bs"
import { MdAddBox } from "react-icons/md"
import { RiMoreFill } from "react-icons/ri"
import { GoPersonFill } from "react-icons/go";

import Searchbar from './Searchbar/Searchbar.jsx'
import Morebar from './Morebar/Morebar.jsx'
import myAvatar from '../../assets/my_avatar.png'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import NavItems from './NavItems/NavItems.jsx'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles);
export const SearchContext = createContext();
export const MoreContext = createContext();

function Sidebar() {
    const [showSearch, setShowSearch] = useState(false)
    const [showMore, setShowMore] = useState(false)
    const [isMinimized, setIsMinimized] = useState('')
    const [searchMessage, setSearchMessage] = useState('')

    const handleSearchRequest = () => {
        setIsMinimized(prev=>prev===''?'search':'')
        setShowSearch(prev=>!prev)
    }

    const handleMoreRequest = () => {
        setIsMinimized(prev=>prev===''?'more':'')
        setShowMore(prev=>!prev)
    }
    const searchObject={searchMessage, setSearchMessage}
    const privateNavtItems = [
        {
            iconTag: IoHome,
            message: 'For You',
            path: '/'
        },
        {
            iconTag: MdOutlineExplore,
            message: 'Explore',
            path: '/explore'
        },
        {
            iconTag: RiUserFollowLine,
            message: 'Following',
            path: '/following'
        },
        {
            iconTag: FaUserFriends,
            message: 'Friends',
            path: '/friends'
        },
        {
            iconTag: MdOutlineLiveTv,
            message: 'LIVE',
            path: '/live'
        },
        {
            iconTag: IoPaperPlane,
            message: 'Messages',
            path: '/messages'
        },
        {
            iconTag: BsChatSquareDots,
            message: 'Activity',
            path: '/activity'
        },
        {
            iconTag: MdAddBox,
            message: 'Upload',
            path: '/upload'
        },
        {
            iconTag: myAvatar || GoPersonFill,
            message: 'Profile',
            path: '/profile'
        },
        {
            iconTag: RiMoreFill,
            message: 'More'
        },
        'Following accounts',
        'Accounts you follow will appear here',
        'Company',
        'Program',
        'Terms & Policies',
        '© 2025 TikTok'
    ]
    return (
        <div className={cx('wrapper', isMinimized && 'wrapper-minimize')}>
            <SearchContext.Provider value={handleSearchRequest}>
                <MoreContext.Provider value={handleMoreRequest}>
                    <SidebarHeader isMinimized={isMinimized} searchMessage={searchMessage}/>
                    <NavItems children = {privateNavtItems} isMinimized={isMinimized}/>
                </MoreContext.Provider>
            </SearchContext.Provider>
            
            <MoreContext.Provider value={handleMoreRequest}>
                {showMore && <Morebar/>}
            </MoreContext.Provider>

            <SearchContext.Provider value={handleSearchRequest}>
                {/* Optimize MoreContext instead of creating a whole new one */}
                <MoreContext.Provider value={searchObject}>
                    {showSearch && <Searchbar/>}
                </MoreContext.Provider>
            </SearchContext.Provider>
            
            
        </div>
    )
}

export default Sidebar