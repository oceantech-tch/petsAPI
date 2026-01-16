import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const servers = "http://localhost:4141";

const PetDetail = ({ setPetToEdit }) => {
    const [pet, setPet] = useState([]);

    const { petId } = useParams();

    const getPet = async () => {
        try {
            const res = await fetch(`${servers}/pets/${petId}`);

            const data = await res.json();
            if (res.status === 200) {
                setPet(data);
                setPetToEdit(data)
            }

        } catch (err) {
            console.error("error", err);
        }
    }

    useEffect(() => { getPet() }, []);

    const deletePet = async () => {
        try {
            const res = await fetch(`${servers}/pets/${petId}`, {
                method: "DELETE"
            });

            if (res.status === 200) window.location.href = "/";
        } catch (err) {
            console.error("error", err);
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
         }}>
            <h2>Pet Detail</h2>

            {pet && (
                <>
                    <p>Pet name: {pet.name}</p>
                    <p>Pet type: {pet.type}</p>
                    <p>Pet age: {pet.age}</p>
                    <p>Pet breed: {pet.breed}</p>

                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Link to={`/${pet?.id}/edit`}>
                            <button style={{ marginRight: 10 }}>
                                Edit pet
                            </button>
                        </Link>

                        <button
                            style={{ marginLeft: 10 }}
                            onClick={() => deletePet()}
                        >
                            Delete pet
                        </button>
                    </div>
                </>
            )}
         </div>
    )
}

export default PetDetail;