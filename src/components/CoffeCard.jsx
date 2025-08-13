const CoffeeCard = ({ id, coffee }) => {
    const {
        name,
        image,
        price,
        rating,
        votes,
        popular,
        available
    } = coffee;

    return (
        <div id={id} className="w-full max-w-[300px] mx-auto relative h-full flex flex-col">
            {popular && (
                <span className="absolute top-2 left-2 bg-accent text-card-bg px-2 py-1 rounded-2xl text-label">
                    Popular
                </span>
            )}
            <img
                src={image}
                alt={name}
                className="w-full h-48 md:h-44 object-cover rounded-2xl"
            />
            <div className="flex justify-between items-center mt-4 flex-1">
                <h2 className="text-lg text-text-primary font-bold">{name}</h2>
                <span className="bg-available text-card-bg px-2 py-1 rounded-md text-label">{price}</span>
            </div>
            <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                    <img
                        src={`./images/${rating > 0 ? 'Star_fill' : 'Star'}.svg`}
                        alt={rating > 0 ? 'Star filled' : 'Star empty'}
                        className="mr-1"
                    />
                    {rating > 0 ? (
                        <>
                            <span>{Number(rating).toFixed(1)}</span>
                            <span className="text-text-secondary font-bold">
                                &nbsp;({votes} votes)
                            </span>
                        </>
                    ) : (
                        <span className="text-text-secondary font-bold">No ratings</span>
                    )}
                    <span className="text-text-secondary font-bold">
                        {popular}
                    </span>
                </div>
                <div>
                    <span className={available ? 'text-green-600 absolute' : 'text-sold-out font-bold'}>
                        {available ? '' : 'Sold out'}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;