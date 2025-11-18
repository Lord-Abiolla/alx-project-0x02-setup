## 1. Scafolding a Next.js App

**Objective:** Scaffold a Next.js project with TypeScript and Tailwind CSS.

**Instructions:**

- Scaffold a Next.js project using `npx create-next-app@latest` with the name `alx-project-0x02`.
- Enable `TypeScript`, `ESLint`, and `Tailwind CSS`.
- Create the following folder structure:


## 2. Basic routing in Next.js

**Objective:** Implement basic routing using the Pages Router in Next.js.

**Instructions:**

- Create two new pages: `pages/home.tsx` and `pages/about.tsx`.
- Add basic content to both pages, such as an `h1` element for each page.
- Modify `Header.tsx` to include navigation links to `/home` and `/about.`
- Test the routing by navigating to `/home` and `/about`.


## 3. Create a Reusable Card Component

**Objective:** Create a dynamic, reusable Card component that accepts props for title and content.

**Instructions:**

- Define a `CardProps` interface in `interfaces/index.ts`.
- Create a new file `components/common/Card.tsx` and implement a Card component that accepts title and content as props.
- Use this component in the `pages/home.tsx` page and pass different titles and content.


## 4. Implement a Modal Component

**Objective:** Implement a modal component that accepts user input and dynamically updates content on a page.

**Instructions:**

- Create a PostModal component in `components/common/PostModal.tsx`.
- Implement a form inside the modal to accept user input for title and content.
- Pass the data back to the parent component and display the newly added content on the /home page.
- Add a button to open the modal.