import classNames from 'classnames/bind'

import styles from './Searchbar.module.scss'
import AdditionalHeader from '../AdditionalHeader/AdditionalHeader';
import SearchBox from './SearchBox/SearchBox'

const cx = classNames.bind(styles);

function Searchbar(){
    return <div className={cx('search-bar')}>
        <AdditionalHeader message='Search'/>
        <SearchBox/>
        {/* Add recent searches & You may like & Accounts options */}
    </div>
}

export default Searchbar