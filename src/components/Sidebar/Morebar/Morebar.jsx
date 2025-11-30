import classNames from 'classnames/bind'

import AdditionalHeader from '../AdditionalHeader/AdditionalHeader';
import styles from './Morebar.module.scss'

const cx = classNames.bind(styles);

function Morebar(){
    return <div className={cx('more-bar')}> 
        <AdditionalHeader message='More'/>
    </div>
}

export default Morebar