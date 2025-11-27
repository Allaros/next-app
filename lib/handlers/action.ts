"use server";

import { Session } from "next-auth";
import { ZodError, ZodSchema } from "zod";

import { auth } from "@/auth";

import { UnauthohrizedError, ValidationError } from "../http-errors";
import dbConnect from "../mongoose";

type ActionOptions<T> = {
  params?: T;
  schema: ZodSchema<T>;
  authorize?: boolean;
};

// 1. Проверка схемы и параметров на наличие и валидацию.
// 2. Проверка авторизации пользователя.
// 3. Подключение к бд.
// 4. Если все проверки пройдены, то возвращаем параметры и сессию.

async function action<T>({
  params,
  schema,
  authorize = false,
}: ActionOptions<T>) {
  if (schema && params) {
    try {
      schema.parse(params);
    } catch (error) {
      if (error instanceof ZodError) {
        return new ValidationError(
          error.flatten().fieldErrors as Record<string, string[]>
        );
      } else {
        return new Error("Schema validation error");
      }
    }
  }

  let session: Session | null = null;

  if (authorize) {
    session = await auth();
    if (!session) {
      return new UnauthohrizedError();
    }
  }

  await dbConnect();

  return { params, session };
}

export default action;
