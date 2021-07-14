import Card from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const BioCard = ({ headshot, name, linkedin, title }) => {
  return (
    <Card className="bioCard center boxShadow">
      <CardHeader
        avatar={<Avatar className="bioCard boxShadow" src={headshot} />}
      />
      <h4>{name}</h4>
      <IconButton
        className="socialButton"
        rel="noopener noreferrer"
        target="_blank"
        href={linkedin}
      >
        <LinkedInIcon />
      </IconButton>
      <hr />
      <h5 className="bioCard">{title}</h5>
    </Card>
  );
};

export default BioCard;
