import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom';
import { SiTiktok } from 'react-icons/si'

import styles from './SidebarHeader.module.scss'

const cx = classNames.bind(styles);

function SidebarHeader(){
    const navigate = useNavigate()

    return <div className={cx('header-wrapper')} onClick={()=>
        navigate('/')}>
        <SiTiktok className={cx('logo')} />
        <h2 className={cx('text')}>TikTok</h2>
    </div>
}

export default SidebarHeader