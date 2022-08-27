export interface IUserCardProps {
  name: string;
  summary: string;
  description: string;
  imgUrl: string;
  expanded?: boolean;
}

function UserCard(props: IUserCardProps) {
  return (
    <div
      style={{
        background: "white",
        marginBottom: "15px",
        borderRadius: "8px",
        border: "2px solid grey",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <div className="profile-picture">
          <img
            src={props.imgUrl}
            style={{
              height: "100%",
              width: "auto",
            }}
            alt="logo"
          />
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
