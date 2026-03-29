import { useMemo } from "react";
import Login_Header from "../Components/Login_Header";
import OpenRequestCard from "../Components2/OpenRequestCard";
import profilePic from "../assets/image.png";
import "../styles/OpenRequests.css";

function OpenRequests() {
  const defaultSkillTags = [
    { label: "Baking", className: "tag-baking" },
    { label: "Crochet", className: "tag-crochet" },
    { label: "Drawing", className: "tag-drawing" },
  ];

  const defaultRequests = [
    {
      id: 1,
      name: "Kenia",
      description: "I learned how to crochet when I was 18 and I can draw your cat :D",
      skills: defaultSkillTags,
      requesting: "I need someone who can teach me to juggle please.",
      offer: "I can help with any of the skills listed above.",
    },
    {
      id: 2,
      name: "Kenia",
      description: "I learned how to crochet when I was 18 and I can draw your cat :D",
      skills: defaultSkillTags,
      requesting: "I need someone who can teach me to juggle please.",
      offer: "I can help with any of the skills listed above.",
    },
    {
      id: 3,
      name: "Kenia",
      description: "I learned how to crochet when I was 18 and I can draw your cat :D",
      skills: defaultSkillTags,
      requesting: "I need someone who can teach me to juggle please.",
      offer: "I can help with any of the skills listed above.",
    },
    {
      id: 4,
      name: "Kenia",
      description: "I learned how to crochet when I was 18 and I can draw your cat :D",
      skills: defaultSkillTags,
      requesting: "I need someone who can teach me to juggle please.",
      offer: "I can help with any of the skills listed above.",
    },
    {
      id: 5,
      name: "Kenia",
      description: "I learned how to crochet when I was 18 and I can draw your cat :D",
      skills: defaultSkillTags,
      requesting: "I need someone who can teach me to juggle please.",
      offer: "I can help with any of the skills listed above.",
    },
    {
      id: 6,
      name: "Kenia",
      description: "I learned how to crochet when I was 18 and I can draw your cat :D",
      skills: defaultSkillTags,
      requesting: "I need someone who can teach me to juggle please.",
      offer: "I can help with any of the skills listed above.",
    },
  ];

  const requests = useMemo(() => {
    try {
      const savedRequests = JSON.parse(localStorage.getItem("openRequests"));

      if (!Array.isArray(savedRequests) || savedRequests.length === 0) {
        return defaultRequests;
      }

      return savedRequests.map((request, index) => ({
        id: request.id || Date.now() + index,
        name: request.name || "Kenia",
        description:
          request.description ||
          "I learned how to crochet when I was 18 and I can draw your cat :D",
        skills:
          Array.isArray(request.skills) && request.skills.length > 0
            ? request.skills
            : defaultSkillTags,
        requesting: request.requesting || "No request provided.",
        offer: request.offer || "No offer provided.",
      }));
    } catch (error) {
      console.error("Error loading open requests:", error);
      return defaultRequests;
    }
  }, []);

  return (
    <div className="open-requests-page">
      <Login_Header />

      <main className="open-requests-main">
        <div className="open-requests-header">
          <h1>Open requests.</h1>
          <p>View who in your neighborhood needs help.</p>
        </div>

        <div className="open-requests-grid">
          {requests.map((request) => (
            <OpenRequestCard
              key={request.id}
              profilePic={profilePic}
              name={request.name}
              description={request.description}
              skills={request.skills}
              requesting={request.requesting}
              offer={request.offer}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default OpenRequests;