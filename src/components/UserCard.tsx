import { ReactNode } from "react";
import "./UserCard.css";

export interface IUserCardProps {
  name: string;
  summary: string;
  description: string;
  imgUrl: string;
  expanded?: boolean;
  hidden?: boolean;
}

function UserCard(props: IUserCardProps) {
  return (
    <div className={`usercard ${props.hidden && "usercard-hidden"}`}>
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="profile-picture">
          {<img src={props.imgUrl} style={{ height: "100%", width: "auto" }} />}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: "16px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            {props.name}
          </span>
          <span
            style={{
              fontSize: "14px",
              color: "black",
              marginTop: "5px",
            }}
          >
            {props.summary}
          </span>
          {props.expanded && (
            <span
              style={{
                fontSize: "12.5px",
                color: "black",
                marginTop: "15px",
              }}
            >
              {props.description}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserCard;
