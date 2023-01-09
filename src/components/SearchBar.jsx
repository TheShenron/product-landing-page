import React from 'react';
import { FaSearch } from 'react-icons/fa'
import styles from '../styles/searchBar.module.css'

function SearchBar(props) {
    return (
        <section className={styles.searchBar}>
            <div>
                <div>
                    <span><FaSearch/></span>
                    <input type="text" placeholder='Search a Term | Topic' />
                </div>
            </div>
        </section>
    );
}

export default SearchBar;