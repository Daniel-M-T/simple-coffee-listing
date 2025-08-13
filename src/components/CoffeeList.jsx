import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeCard";

function CoffeeList({ showAvailableOnly }) {
    const [coffees, setCoffees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoffees = async () => {
            try {
                const response = await fetch(
                    "https://raw.githubusercontent.com/devchallenges-io/curriculum/refs/heads/main/4-frontend-libaries/challenges/group_1/data/simple-coffee-listing-data.json"
                );
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                const data = await response.json();
                setCoffees(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCoffees();
    }, []);

    const filteredCoffees = showAvailableOnly 
    ? coffees.filter(coffee => coffee.available) 
    : coffees;

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    if (filteredCoffees.length === 0) {
        return <div className="col-span-full text-center text-text-secondary py-8">No products available</div>;
    }

    return (
        <>
            {filteredCoffees.map((coffee) => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
        </>
    );
}

export default CoffeeList;