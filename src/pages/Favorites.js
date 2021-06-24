import { useContext } from 'react';

import FavoritesContext from '../store/favorite-context';
import MeetupList from '../components/meetups/MeetupList';

const Favorites = () => {
    const favoritesCtx = useContext(FavoritesContext)

    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You Got no Favorite</p>
    }else {
            
    content = <MeetupList meetups={favoritesCtx.favorites} />
    }
    
    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    )
}

export default Favorites