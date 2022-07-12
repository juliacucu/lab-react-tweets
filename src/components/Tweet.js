import React from "react";
import ProfileImage from "./ProfileImage";
import UserInformation from "./User";
import TimeStamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";

function Tweet(props) {
  const { user, timestamp, message } = props.tweet;

  return (
    <div className="tweet">
      <ProfileImage image={user.image} />
      <div className="body">
        <div className="top">
          <UserInformation user={user} />
          <TimeStamp timestamp={timestamp} />
        </div>

        {/* // eslint-disable-next-line */}
        <Message message={message} />
        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
