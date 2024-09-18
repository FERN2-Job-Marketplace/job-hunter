import { nanoid } from "nanoid"

export const baseUrl = "http://localhost:3001"

export const generateId = () => {
  return nanoid(5)
}