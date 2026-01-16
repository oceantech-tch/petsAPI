import { getItem, listItems, editItem, addItem, deleteItem } from "../models/pets.models.js";

export const getPet = (req, res) => {
    try {
        const response = getItem(Number(req.params.id));
        res.status(200).json(response)
    } catch (err) {
        res.status(500).send(err);
    }
}

export const listPets = (req, res) => {
    try {
        const response = listItems();
        res.status(200).json(response)
    } catch (err) {
        res.status(500).send(err);
    }
}

export const editPet = (req, res) => {
    try {
        const response = editItem(parseInt(req.params.id), req.body);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).send(err);
    }
}

export const addPet = (req, res) => {
    try {
        const response = addItem(req.body);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).send(err);
    }
}

export const deletePet = (req, res) => {
    try {
        const response = deleteItem(parseInt(req.params.id));
        res.status(200).json(response);
    } catch (err) {
        res.status(500).send(err);
    }
}