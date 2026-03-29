import SkillTag from "./SkillTag";

function SkillsPreview() {
  const skills = [
    "Baking",
    "Knitting",
    "Coding",
    "Drawing",
    "Sewing",
    "Cooking",
    "Budgeting",
    "Design",
    "Gaming",
    "Dog Grooming",
    "Budgeting",
  ];

  return (
    <div className="skills-preview">
      <h1>Skill Swap</h1>
      <p>Search and swap skills!</p>
      <p>Because not everything should cost money.</p>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <SkillTag key={i} label={skill} />
        ))}
      </div>
    </div>
  );
}

export default SkillsPreview;