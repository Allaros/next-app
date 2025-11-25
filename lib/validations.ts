import { z } from "zod";

const emailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export const SignInSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(emailRegex, { message: "Please provide a valid email addres" }),

  password: z
    .string()
    .min(6, { message: "The password must be longer than 6 symbols" })
    .max(100, { message: "Password cannot exceed 100 symbols" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Pasword must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special symbol",
    }),
});
export const SignUpSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." })
    .max(30, { message: "Usrename cannot exceed 30 characters." })
    .regex(/^[a-zA-Z0-9_]+$/, {
      message: "Username can only contain letters, numbers, and underscores.",
    }),
  name: z
    .string()
    .min(1, { message: "Name is required." })
    .max(50, { message: "Name cannot exceed 50 characters." })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Name can only contain letters and spaces",
    }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .regex(emailRegex, { message: "Please provide a valid email addres" }),

  password: z
    .string()
    .min(6, { message: "The password must be longer than 6 symbols" })
    .max(100, { message: "Password cannot exceed 100 symbols" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Pasword must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special symbol",
    }),
});

export const AskQuestionSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required." })
    .max(100, { message: "Title cannot exceed 100 characters." }),
  content: z.string().min(1, { message: "Content is required." }),
  tags: z
    .array(
      z
        .string()
        .min(1, { message: "Tag is required." })
        .max(30, { message: "Tag cannot exceed 30 characters." })
    )
    .min(1, { message: "At least one tag is required." })
    .max(3, { message: "Connot add more than 3 tags." }),
});

export const UserSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long." }),
  email: z.string().email({ message: "Please provide a valid email address." }),
  bio: z.string().optional(),
  image: z.string().url({ message: "Please provide a valid URL." }).optional(),
  location: z.string().optional(),
  portfolio: z
    .string()
    .url({ message: "Please provide a valid URL." })
    .optional(),
  reputation: z.number().optional(),
});

export const AccountSchema = z.object({
  name: z.string().min(1, { message: "Account name is required." }),
  image: z
    .string()
    .url({ message: "Image must be a valid URL." })
    .optional()
    .or(z.literal("")),
  password: z
    .string()
    .min(6, { message: "The password must be longer than 6 symbols" })
    .max(100, { message: "Password cannot exceed 100 symbols" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[0-9]/, { message: "Pasword must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special symbol",
    })
    .optional(),
  provider: z.string().min(1, { message: "Provider is required." }),
  providerAccountId: z
    .string()
    .min(1, { message: "Provider Account ID is required." }),
});
