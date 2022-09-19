import './ItemListConainer.css';

export const ItemListContainer = ({
    greeting
}) => {
    return(
        <div className='itemlist-container'>
            <div className='saludar'>
                {greeting}
            </div>
        </div>
    )
}