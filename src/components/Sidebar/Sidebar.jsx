import classNames from 'classnames/bind'
import { IoHome } from "react-icons/io5"
import { MdOutlineExplore } from "react-icons/md"
import { RiUserFollowLine } from "react-icons/ri"
import { FaUserFriends } from "react-icons/fa"
import { MdOutlineLiveTv } from "react-icons/md"
import { IoPaperPlane } from "react-icons/io5"
import { BsChatSquareDots } from "react-icons/bs"
import { MdAddBox } from "react-icons/md"
import { RiMoreFill } from "react-icons/ri"

import myAvatar from '../../assets/my_avatar.png'
import SidebarHeader from './SidebarHeader/SidebarHeader'
import NavWrapper from './NavItem/NavWrapper.jsx'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles);

function Sidebar() {
    const navItems = [
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
                    message: 'Messages'
                },
                {
                    iconTag: BsChatSquareDots,
                    message: 'Activity'
                },
                {
                    iconTag: MdAddBox,
                    message: 'Upload'
                },
                {
                    iconTag: myAvatar,
                    message: 'Profile'
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
        <div className={cx('wrapper')}>
            <SidebarHeader/>
            <h4> Search Box </h4>
            <NavWrapper children = {navItems}/>
        </div>
    )
}

export default Sidebar