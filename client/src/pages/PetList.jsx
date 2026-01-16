import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const servers = "http://localhost:4141";
const PetList = () => {
    const [pets, setPets] = useState([]);

    const getPets = async () => {
        try {
            const res = await fetch(`${servers}/pets`);
            const data = await res.json();

            if (res.status === 200) {
                setPets(data);
            }

        } catch (err) {
            console.error("error", err);
        }
    }

    useEffect(() => { getPets() }, []);

    return (
        <>
            <h2>Pet List</h2>

            {pets?.map((pet) => {
                return (
                    <div key={pet?.id}>
                        <p>{pet?.name} - {pet?.type} - {pet?.breed}</p>

                        <Link to={`/${pet?.id}`}>
                            <button>Pet detail</button>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default PetList;