import express from "express";
import {
  listPets,
  getPet,
  editPet,
  addPet,
  deletePet,
} from "../controllers/pets.controller.js";

const router = express.Router();

/**
 * @swagger
 * components:
 * schemas:
 * Pet:
 * type: object
 * properties:
 * id:
 * type: integer
 * description: Pet id
 * name:
 * type: string
 * age:
 * type: integer
 * type:
 * type: string
 * breed:
 * type: string
 * example:
 * id: 1
 * name: Rex
 * age: 3
 * type: dog
 * breed: labrador
 */

/**
 * @swagger
 * /pets:
 * get:
 * summary: Get all pets
 * tags: [Pets]
 * responses:
 * 200:
 * description: Success
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Pet'
 */
router.get("/", listPets);

/**
 * @swagger
 * /pets/{id}:
 * get:
 * summary: Get pet by ID
 * tags: [Pets]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * responses:
 * 200:
 * description: Success
 */
router.get("/:id", getPet);

/**
 * @swagger
 * /pets:
 * post:
 * summary: Add a new pet
 * tags: [Pets]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Pet'
 * responses:
 * 201:
 * description: Created
 */
router.post("/", addPet);

/**
 * @swagger
 * /pets/{id}:
 * put:
 * summary: Update pet
 * tags: [Pets]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/Pet'
 * responses:
 * 200:
 * description: Updated
 */
router.put("/:id", editPet);

/**
 * @swagger
 * /pets/{id}:
 * delete:
 * summary: Delete pet
 * tags: [Pets]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * responses:
 * 200:
 * description: Deleted
 */
router.delete("/:id", deletePet);

export default router;