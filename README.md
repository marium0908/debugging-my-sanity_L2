# TypeScript Problem Solving & Blog Assignment

Hey there! Welcome to my submission repository for the TypeScript Problem Solving assignment. This project contains my answers to the practical coding questions along with two detailed tech blogs explaining core TypeScript concepts I learned during this module.

## Project Contents

* **solutions.ts**: A single file containing all 10 required TypeScript function and class implementations (including optional multipliers, tuple formatting, custom generic pluckers, async age validation, and employee models). Everything is written with explicit parameter and return types as requested.
* **type-narrowing.md**: My first blog post detailing how type narrowing helps handle union types safely at runtime.
* **generics-and-promises.md**: My second blog post going over the mechanics of generics and how they secure asynchronous API responses.

## Technical Blogs

You can read my two technically detailed blog posts directly inside this repository by clicking the links below:

1. [Understanding Type Narrowing in Action](./type-narrowing.md) - Covers using `typeof`, `instanceof`, and the `in` operator to safely guard our application types.
2. [Mastering Generics & Async Promises](./generics-and-promises.md) - Explains how to pass dynamic structures into async functions without lazily relying on the `any` keyword.

## Running the Code Locally

To inspect or run the TypeScript solutions locally on your computer, clone this repository and install the dependencies:

```bash
# Clone this repository
git clone <https://github.com/marium0908/debugging-my-sanity_L2.git>

# Install TypeScript if you don't have it globally
npm install -g typescript

# Check the types without compiling
tsc --noEmit solutions.ts
```

*Note: All code and blog content submitted here is my own original work!*
