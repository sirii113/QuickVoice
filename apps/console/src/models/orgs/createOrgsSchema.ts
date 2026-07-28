<<<<<<< HEAD
import { z } from "zod";


export const createOrgSchema = z.object({
    name: z.string().min(1, "Name is required"),
=======
import { z } from "zod";


export const createOrgSchema = z.object({
    name: z.string().min(1, "Name is required"),
>>>>>>> origin/main
  });