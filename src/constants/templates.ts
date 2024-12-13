export const templates = [
    { 
        id: "blank", 
        label: "Blank Document", 
        imageUrl: "./blank-document.svg",
        initialContent: ""
    },
    {
        id: "software-proposal",
        label: "Software Development Proposal",
        imageUrl: "./software-proposal.svg",
        initialContent: `
            <h1>Software Development Proposal</h1>
            <h2>Project Overview</h2>
            <p>Provide a brief overview of the project, including objectives and goals.</p>

            <h2>Scope of Work</h2>
            <p>Outline the specific deliverables, functionalities, and project requirements.</p>

            <h2>Timeline</h2>
            <p>Specify project milestones and expected delivery dates.</p>

            <h2>Budget</h2>
            <p>Provide a detailed cost estimate and payment structure.</p>

            <h2>Terms and Conditions</h2>
            <p>Include any relevant terms and conditions applicable to the project.</p>
        `
    },
    {
        id: "project-proposal",
        label: "Project Proposal",
        imageUrl: "./project-proposal.svg",
        initialContent: `
            <h1>Project Proposal</h1>
            <h2>Executive Summary</h2>
            <p>Summarize the project's purpose, benefits, and high-level goals.</p>

            <h2>Objectives</h2>
            <p>State the main objectives of the project and its intended outcomes.</p>

            <h2>Approach</h2>
            <p>Describe the methodology or approach to achieve the objectives.</p>

            <h2>Deliverables</h2>
            <p>List the deliverables and expected outputs of the project.</p>

            <h2>Timeline and Budget</h2>
            <p>Provide a detailed timeline and cost breakdown.</p>
        `
    },
    {
        id: "business-letter",
        label: "Business Letter",
        imageUrl: "./business-letter.svg",
        initialContent: `
            <h1>[Your Company Name]</h1>
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Date]</p>

            <p>[Recipient Name]</p>
            <p>[Recipient's Title]</p>
            <p>[Company Name]</p>
            <p>[Address]</p>

            <p>Dear [Recipient's Name],</p>

            <p>[Write the body of your letter here, explaining the purpose of the communication.]</p>

            <p>Sincerely,</p>
            <p>[Your Name]</p>
            <p>[Your Title]</p>
        `
    },
    {
        id: "resume",
        label: "Resume",
        imageUrl: "./resume.svg",
        initialContent: `
            <h1>[Your Name]</h1>
            <p>Email: [Your Email] | Phone: [Your Phone]</p>
            <p>LinkedIn: [LinkedIn URL] | Portfolio: [Portfolio URL]</p>

            <h2>Summary</h2>
            <p>[Brief professional summary about your skills and experience]</p>

            <h2>Work Experience</h2>
            <p><strong>[Job Title]</strong> | [Company Name]</p>
            <p>[Dates of Employment]</p>
            <ul>
                <li>[Key responsibility or achievement]</li>
                <li>[Key responsibility or achievement]</li>
            </ul>

            <h2>Education</h2>
            <p><strong>[Degree]</strong> | [Institution Name]</p>
            <p>[Dates of Attendance]</p>

            <h2>Skills</h2>
            <ul>
                <li>[Skill 1]</li>
                <li>[Skill 2]</li>
                <li>[Skill 3]</li>
            </ul>
        `
    },
    {
        id: "cover-letter",
        label: "Cover Letter",
        imageUrl: "./cover-letter.svg",
        initialContent: `
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Date]</p>

            <p>[Recipient's Name]</p>
            <p>[Company Name]</p>
            <p>[Address]</p>

            <p>Dear [Recipient's Name],</p>

            <p>I am writing to express my interest in the [Position Title] position at [Company Name]. With my background in [relevant skills/experience], I am confident in my ability to contribute positively to your team.</p>

            <p>[Discuss your qualifications, skills, and experience relevant to the job. Highlight key accomplishments or expertise that make you a good fit.]</p>

            <p>Thank you for considering my application. I look forward to the possibility of discussing my application further.</p>

            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
    {
        id: "letter",
        label: "Letter",
        imageUrl: "./letter.svg",
        initialContent: `
            <p>[Your Address]</p>
            <p>[City, State, ZIP Code]</p>
            <p>[Date]</p>

            <p>[Recipient's Name]</p>
            <p>[Address]</p>

            <p>Dear [Recipient's Name],</p>

            <p>[Body of the letter detailing the purpose of the correspondence.]</p>

            <p>Sincerely,</p>
            <p>[Your Name]</p>
        `
    },
];