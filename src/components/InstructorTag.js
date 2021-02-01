import { GoToProfile, TagWrapper, Emoji, Name } from "./styles";
import { Link } from "react-router-dom";

const InstructorTag = ({ instructor, goTo }) => {
  const { emoji, name, slug } = instructor;

  return (
    <div>
      <Link to={`/instructors/${slug}`}></Link>
      <TagWrapper>
        <Emoji>{emoji}</Emoji>
        <Name>{name}</Name>
        <GoToProfile>Go to profile</GoToProfile>
      </TagWrapper>
    </div>
  );
};

export default InstructorTag;
