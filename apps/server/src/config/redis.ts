<<<<<<< HEAD
import { Redis } from "ioredis";

export const redisConnection = new Redis(process.env.REDIS_URL ?? "redis://localhost:6379", {
  maxRetriesPerRequest: null,
});
=======
import { Redis } from "ioredis";

export const redisConnection = new Redis(process.env.REDIS_URL ?? "redis://localhost:6379", {
  maxRetriesPerRequest: null,
});
>>>>>>> origin/main
