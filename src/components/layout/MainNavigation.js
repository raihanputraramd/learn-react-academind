import { useContext } from "react"
import { Link } from "react-router-dom"

import classes from './MainNavigation.module.css'
import FavoritesContext from "../../store/favorite-context"

const MainNavigation = () => {
    const favoritesCTX = useContext(FavoritesContext)


    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>

            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetups'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favorite'>Favorite</Link>
                        <span className="classes.badge">{favoritesCTX.totalFavorites}</span>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
