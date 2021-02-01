import { Button, ButtonsWrapper } from "./styles";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const InstructorProfile = ({ instructors, instructorSlug, goTo }) => {
  const instructor = instructors.find(
    (instructor) => instructor.slug === instructorSlug
  );

  if (!instructor) {
    <Redirect to="/" />;
  }

  const { name, emoji, github, description } = instructor;

  const goToGitHub = () => window.open(`https://github.com/${github}`);

  return (
    <>
      <h1>{emoji}</h1>
      <h2>{name}</h2>
      <p>{description}</p>

      <ButtonsWrapper>
        <div>
          <Link to="/">
            <Button color="tomato" textColor="white">
              Go back home
            </Button>
          </Link>
        </div>
        <Button onClick={goToGitHub}>Go to GitHub</Button>
      </ButtonsWrapper>
    </>
  );
};

export default InstructorProfile;
