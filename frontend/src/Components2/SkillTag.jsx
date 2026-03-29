function SkillTag({ label, isLong }) {
  return (
    <div className={isLong ? "skill-tag long" : "skill-tag"}>
      ✦ {label}
    </div>
  );
}

export default SkillTag;