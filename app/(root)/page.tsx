import Link from "next/link";

// import { auth, signOut } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const questions: Question[] = [
  {
    _id: "1",
    title: "How to start learning React.js from scratch?",
    description:
      "I'm a complete beginner in web development and want to master React. What steps should I take and what resources do you recommend?",
    tags: [
      { _id: "t1", name: "React" },
      { _id: "t2", name: "JavaScript" },
      { _id: "t3", name: "Frontend" },
    ],
    author: {
      _id: "a1",
      name: "John Doe",
      image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2023-10-26T10:00:00Z"),
  },
  {
    _id: "2",
    title: "Best practices for state management in a large React application?",
    description:
      "Our React app is growing, and managing global state is becoming a headache. What are the recommended patterns, libraries (Redux, Zustand, Context API), and when to use each?",
    tags: [
      { _id: "t1", name: "React" },
      { _id: "t2", name: "JavaScript" },
      { _id: "t4", name: "State Management" },
    ],
    author: {
      _id: "a2",
      name: "Jane Smith",
      image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
    },
    upvotes: 25,
    answers: 8,
    views: 250,
    createdAt: new Date("2023-10-25T14:30:00Z"),
  },
  {
    _id: "3",
    title: "Implementing secure user authentication in Node.js Express API",
    description:
      "I'm building a REST API with Node.js and Express. What's the best way to handle user registration, login, JWTs, and secure password storage?",
    tags: [
      { _id: "t5", name: "Node.js" },
      { _id: "t6", name: "Express.js" },
      { _id: "t7", name: "Security" },
      { _id: "t8", name: "Authentication" },
    ],
    author: {
      _id: "a3",
      name: "Peter Jones",
      image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
    },
    upvotes: 18,
    answers: 6,
    views: 180,
    createdAt: new Date("2023-10-24T09:15:00Z"),
  },
  {
    _id: "4",
    title: "When to choose SQL over NoSQL for a new project?",
    description:
      "I'm starting a new web application and need to decide on a database. What are the key factors and use cases that favor SQL databases (PostgreSQL, MySQL) over NoSQL (MongoDB, DynamoDB) and vice-versa?",
    tags: [
      { _id: "t9", name: "Database" },
      { _id: "t10", name: "SQL" },
      { _id: "t11", name: "NoSQL" },
    ],
    author: {
      _id: "a4",
      name: "Alice Brown",
      image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
    },
    upvotes: 30,
    answers: 12,
    views: 320,
    createdAt: new Date("2023-10-23T11:00:00Z"),
  },
  {
    _id: "5",
    title: "Modern CSS techniques for responsive layouts (Flexbox vs Grid)",
    description:
      "I'm trying to create a responsive web design and often struggle with complex layouts. What are the best practices for using Flexbox and CSS Grid, and when should I choose one over the other?",
    tags: [
      { _id: "t12", name: "CSS" },
      { _id: "t13", name: "Responsive Design" },
      { _id: "t3", name: "Frontend" },
    ],
    author: {
      _id: "a5",
      name: "Bob Johnson",
      image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
    },
    upvotes: 15,
    answers: 7,
    views: 160,
    createdAt: new Date("2023-10-22T16:45:00Z"),
  },
  {
    _id: "6",
    title: "Optimizing Python code for better performance",
    description:
      "My Python script is running slowly, especially with large datasets. What are some common profiling tools, optimization techniques, and best practices to improve its execution speed?",
    tags: [
      { _id: "t14", name: "Python" },
      { _id: "t15", name: "Performance" },
      { _id: "t16", name: "Optimization" },
    ],
    author: {
      _id: "a6",
      name: "Emily Davis",
      image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
    },
    upvotes: 22,
    answers: 9,
    views: 210,
    createdAt: new Date("2023-10-21T08:00:00Z"),
  },
  {
    _id: "7",
    title: "Why should I use TypeScript in my JavaScript project?",
    description:
      "I primarily write vanilla JavaScript. What are the main benefits of adopting TypeScript, especially for larger projects, and what's the learning curve like?",
    tags: [
      { _id: "t2", name: "JavaScript" },
      { _id: "t17", name: "TypeScript" },
      { _id: "t3", name: "Frontend" },
    ],
    author: {
      _id: "a7",
      name: "Michael White",
      image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
    },
    upvotes: 40,
    answers: 15,
    views: 450,
    createdAt: new Date("2023-10-20T13:00:00Z"),
  },
  {
    _id: "8",
    title: "Effective strategies for testing React components",
    description:
      "I want to implement robust testing for my React components. What are the recommended tools (Jest, React Testing Library, Enzyme) and strategies for unit, integration, and end-to-end tests?",
    tags: [
      { _id: "t1", name: "React" },
      { _id: "t18", name: "Testing" },
      { _id: "t2", name: "JavaScript" },
    ],
    author: {
      _id: "a8",
      name: "Sarah Green",
      image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
    },
    upvotes: 19,
    answers: 5,
    views: 175,
    createdAt: new Date("2023-10-19T10:30:00Z"),
  },
  {
    _id: "9",
    title: "Best practices for designing a RESTful API",
    description:
      "I'm starting to design an API and want to follow RESTful principles. What are the key guidelines for resource naming, HTTP methods, status codes, and error handling?",
    tags: [
      { _id: "t19", name: "API" },
      { _id: "t20", name: "REST" },
      { _id: "t5", name: "Node.js" },
    ],
    author: {
      _id: "a9",
      name: "David Lee",
      image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
    },
    upvotes: 28,
    answers: 10,
    views: 290,
    createdAt: new Date("2023-10-18T15:00:00Z"),
  },
  {
    _id: "10",
    title:
      "Understanding and implementing common data structures in JavaScript",
    description:
      "I'm trying to improve my understanding of computer science fundamentals. Can someone explain and provide examples of common data structures like linked lists, stacks, queues, and trees in JavaScript?",
    tags: [
      { _id: "t21", name: "Data Structures" },
      { _id: "t22", name: "Algorithms" },
      { _id: "t2", name: "JavaScript" },
    ],
    author: {
      _id: "a10",
      name: "Jessica Kim",
      image:
        "https://www.svgrepo.com/show/382109/male-avatar-boy-face-man-user-7.svg",
    },
    upvotes: 35,
    answers: 11,
    views: 380,
    createdAt: new Date("2023-10-17T09:45:00Z"),
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matcheQuery = question.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matcheQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc={"/icons/search.svg"}
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
