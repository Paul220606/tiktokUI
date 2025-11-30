import classNames from 'classnames/bind'

import NavItem from "./NavItem/NavItem"
import styles from './NavItems.module.scss'

const cx = classNames.bind(styles);

function NavItems({children, isMinimized}){
    const minimizedBool = Boolean(isMinimized)

    return <div className={cx('nav-wrapper')}>{
        children.map((child, id)=>
        typeof child === 'object'?
        <NavItem key={id}{...child} isMinimized={isMinimized} />:<div key={id} className={cx('inside-text', minimizedBool && 'text-minimize')}>
            {child}
            <br/>
        </div>
        )
    }</div>
}

export default NavItems