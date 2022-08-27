import "./CreatorCard.css";

export interface ICreatorCardProps {
  name: string;
  summary: string;
  description: string;
  imgUrl: string;
  expanded?: boolean;
  faded?: boolean;
}

function CreatorCard(props: ICreatorCardProps) {
  return (
    <div className={`creatorcard ${props.faded && "creatorcard-faded"}`}>
      <div className="creatorcard-content">
        <div className="creator-browsing-view-profile-picture">
          {<img src={props.imgUrl} style={{ height: "100%", width: "auto" }} />}
        </div>
        <div className="creatorcard-text-column">
          <span className="creatorcard-name">{props.name}</span>
          <span className="creatorcard-summary">{props.summary}</span>
          {props.expanded && (
            <span className="creatorcard-description">{props.description}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreatorCard;
