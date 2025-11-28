import classNames from 'classnames/bind'

import styles from './Additionbar.module.scss'

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}> Additionbar </div>
    )
}

export default Sidebar