function Promo(props){
    return (
        <div className="promo-setion">
            <div>
                <h1>Don't miss the deal</h1>
            </div>
            <div>
                <h2>Subscribe to my channel and get all of my items at 50% discount!, {props.name}, {props.color} </h2>
            </div>
        </div>
    );
};

export default Promo;