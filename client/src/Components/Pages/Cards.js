import '../Css/Cards.css'


function Cards() {
    return (
        <div className="cmp-container-cards">
            <div className="filters">
                <div className="filters-select">
                    <ul>
                        <li><select name="" id="">Filter by:</select></li>
                        <li><select name="" id=""></select>Order by:</li>
                        {/* <li><select name="" id=""></select></li> */}
                    </ul>
                </div>
                <div className="filters-search">
                    <input type="search" name="search" id="search-poke" />
                </div>
            </div>
            <h1>Aca van las Tarjetas</h1>
        </div>
    );
}

export default Cards;