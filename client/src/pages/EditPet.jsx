import React, { useState } from "react";
import axios from "axios";

const servers = "http://localhost:4141";

const EditPet = ({ petToEdit }) => {
    const [petName, setPetName] = useState(petToEdit?.name);
    const [petType, setPetType] = useState(petToEdit?.type);
    const [petAge, setPetAge] = useState(petToEdit?.age);
    const [petBreed, setPetBreed] = useState(petToEdit?.breed);

    const editPet = async () => {
        try {
            const petData = {
                id: petToEdit.id,
                name: petName,
                type: petType,
                age: petAge,
                breed: petBreed,
            }

            const res = await fetch(`${servers}/pets/${petToEdit.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(petData),
            })

            if (res.status === 200) window.location.href = `/${petToEdit.id}`
        } catch (err) {
            console.error("error", err);
        }
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <h2>Edit Pet</h2>

            <div style={{
                display: "flex",
                flexDirection: "column",
                margin: 20
            }}>
                <label>Pet name</label>
                <input type="text" value={petName} onChange={e => setPetName(e.target.value)} />
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                margin: 20
            }}>
                <label>Pet type</label>
                <input type="text" value={petType} onChange={e => setPetType(e.target.value)} />
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                margin: 20
            }}>
                <label>Pet age</label>
                <input type="text" value={petAge} onChange={e => setPetAge(e.target.value)} />
            </div>

            <div style={{
                display: "flex",
                flexDirection: "column",
                margin: 20
            }}>
                <label>Pet breed</label>
                <input type="text" value={petBreed} onChange={e => setPetBreed(e.target.value)} />
            </div>

            <button
                style={{ marginTop: 30 }}
                onClick={() => editPet()}
            >
                Save changes
            </button>
        </div>
    )
};

export default EditPet;