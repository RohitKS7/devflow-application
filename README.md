## About Project

DevOverFlow is a clone of StackOverflow

## Project Code Structure

#### Client Side

- `page.tsx` within `/app/(root)/(home)` folder is acting as a entry point, so we don't need `page.tsx` within `/app` folder.

- `(auth)` contains Authentication setup using Clerk.

- `/components/shared` folder contians only those component which we wanna share across the application.

- `Context` components => Context is a React library which by default is client-side, But Next.js is server-side so don't forget to use `use client`.

- `/app/api/webhooks` contains webhooks which is connecting our 'clerk database' and 'mongoDB database'.

#### Server Side

- Remember when creating a Server-action, Always connect to database first.

- don't forget to enable server actions in `next.config` like this

```bash
const nextConfig = {
  experimental: {
    // serverActions are available by default now, So the below experimental code is not required
    // serverActions: true,
    // Compile MDX files using the new Rust compiler.
    mdxRs: true,
    // Choose your own choice of backend library
    serverComponentsExternalPackages: ["mongoose"],
  },
};
```

- Visit this blog for understanding[Next.js Server-Actions Blog](https://makerkit.dev/blog/tutorials/nextjs-server-actions)

- `/lib/actions` this folder contains all of the Server Actions.

- `/lib/mongoose.ts` this file creates our Database

- `/database` folder contains all the database models

- don't forget to disable 'Vercel Authentication' which is acting as a thorn in sending requests from clerk webhook. and enable 'username' and 'name' in clerk dashboard to match the data pattern of 'userModel' of mongoDB collection.

## Package Installations

### ESLint

1.  Install `JavaScript Standard Style` for ESLint. Then add 'standard' in `.eslintrc.json`.

```bash
npm install eslint-config-standard
```

2. Run ESLint to check any potential errors & bug.

```bash
npm run lint
```

3. Tailwind plugin of ESLint.
   Sometimes we write styles like this `min-h-screen flex-col flex` which is not a logical method to write tailwind and we have to read the whole class everytime. So, in order to maintain readability and logical pattern this Plugin comes in handy.
   After installation simply add it in your `.eslintrc.json` file.

```bash
npm install eslint-plugin-tailwindcss
```

4. To avoid conflicts between Prettier and ESLint, install.
   This will removes all ESLint rules that could conflict with Prettier. Once Installed, add "prettier" to your `.eslintrc.json` file.

```bash
npm install eslint-config-prettier
```

### Authentication

1. We're using `Clerk` authentication services for easier and better auth process. Everything is happening according to docs available on Clerk's website, So for any questions visit the site.

2. Installation > Wrapping app in `clerkProvider` > Adding API in `.env` file > Adding SignIn & SignUp component > Adding UserButton component.

### ShadCN Component Library

1. This is NOT a component library.

What do you mean by not a component library?

I mean you do not install it as a dependency. It is not available or distributed via npm.

Pick the components you need. Copy and paste the code into your project and customize to your needs. The code is yours.

2. We just have install each component we wanna use, So it's pretty damn light library without any heavy depencies

3. To install see the ShadCN [documentation](https://ui.shadcn.com/docs).

4. When you install this library, you'll see it overwrote your `global.css` and `tailwind.config.ts`. But Don't worry, Just copy and paste your old styles.

5. It'll add `/lib/utils.ts` in your code for better customization. and It'll also add `ui` in your component folder which contains ShadCN components.

> TIPS :

- Start by modifying favicon, title etc. in layout.tsx

- After everything is installed do `ctrl+shift+p` in vs-code and run `relod window`

- Always remember to do `stash (untracked included)` which will remove all changes made in application before creating a new branch and in new branch do `stash (latest)` to add all the previous changes. Next publish the branch.

- Create `layout.tsx` for the pages where we don't want the navbar or footer. For instance in `(auth)` folder which is a entry point for sign-up and sign-in.
