import "./WorkButton.css";

interface WorkButtonProps {
  text: string;
  emailLink: string;
}

const WorkButton = (props: WorkButtonProps) => {
  const handleEmailClick = () => {
    window.location.href = props.emailLink;
  };

  return (
    <button className="btnWork" onClick={handleEmailClick}>
      {props.text}
    </button>
  );
};

export default WorkButton;
