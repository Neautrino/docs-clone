# Docs Clone

**Docs Clone** is inspired by popular document management platforms. This project allows users to create, edit, and manage various types of documents based on templates. Users can utilize advanced tools to enhance document quality, whether the document is for personal or organizational purposes.

**Demo** - [docs-clone-rgyy.vercel.app
](docs-clone-rgyy.vercel.app
)

---

## Features

- **Template-Based Document Creation**: Start with customizable templates tailored for different use cases.
- **Realtime Collaboration**: Engage collaboratively with others in real-time using Liveblocks.
- **Rich Text Editing**: Leverage the powerful Tiptap editor for a seamless and intuitive document editing experience.
- **Secure Authentication**: Integrated with Clerk for user authentication and management.
- **Cloud-Based Storage**: Uses Convex DB to securely store and retrieve documents.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) – For building the user interface and server-side rendering.
- **Authentication**: [Clerk](https://clerk.dev/) – For seamless and secure user authentication.
- **Realtime Collaboration**: [Liveblocks](https://liveblocks.io/) – To enable collaborative editing in real-time.
- **Editor**: [Tiptap](https://tiptap.dev/) – A modern, extensible rich-text editor.
- **Database**: [Convex DB](https://convex.dev/) – For scalable and reactive document storage.

---

## Getting Started

Follow these steps to set up and run the project locally:

1. **Clone the Repository**
   ```bash
   git clone https://github.com/Neautrino/docs-clone.git
   ```
2. Navigate to the Project Directory

   ```bash
    cd docs-clone
    ```
3. Install Dependencies

    ```bash
    npm install
    ```
    or
    ``` bash
    npm install --legacy-peer-deps
    ```
4. Set Up Environment Variables

    Rename .env.example to .env.local.
Fill in the required environment variables as per the instructions in the .env.example file.

5. Run the Development Server

    ```bash
    npm run dev
    ```
    and on seperate terminal run
    ```bash
    npx convex dev
    ```
    Open http://localhost:3000 to view the application in the browser.

## Contributing
We welcome contributions to improve this project! Here’s how you can contribute:

Fork the repository and create your feature branch:

bash
Copy code
git checkout -b feature/your-feature-name
Make changes and commit:

bash
Copy code
git commit -m "Add your descriptive commit message"
Push your branch:

bash
Copy code
git push origin feature/your-feature-name
Submit a pull request and describe the changes you've made.

## If you Like Give it a Star 👍