import classNames from 'classnames/bind'

import NavItem from "./NavItem"
import styles from './NavWrapper.module.scss'

const cx = classNames.bind(styles);

function NavWrapper({children}){
    return <div className={cx('nav-wrapper')}>{
        children.map((child, id)=>
        typeof child === 'object'?
        <NavItem key={id}{...child}/>:<div key={id} className={cx('inside-text')}>
            {child}
            <br/>
        </div>
        )
    }</div>
}

export default NavWrapper