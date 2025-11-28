import classNames from 'classnames/bind'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import styles from './NavItem.module.scss'
import { PathContext } from '../../../App';

const cx = classNames.bind(styles);

function NavItem({iconTag, message, path}){
    const navigate = useNavigate()
    const IconTag = typeof iconTag === 'function'? iconTag: null
    return <div className={
        path===useContext(PathContext)?cx('item-wrapper', 'active'):cx('item-wrapper')
        } onClick={
            path?()=> navigate(path):()=>{}
        }>{
            IconTag?(<IconTag className={cx('logo')} />):(<img src={iconTag} className={cx('avatar', 'logo')}/>)
        }
        <h4 className={cx('text')}>{message}</h4>
    </div>
}

export default NavItem