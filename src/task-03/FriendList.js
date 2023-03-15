import css from "./FriendList.module.css";
import PropTypes from "prop-types";


function FriendList({ children }) {
  return <ul className={css.friendList}>{children}</ul>;
}

function FriendListItem({ friends }) {
  return friends.map((friend) => (
    <li key={friend.id} className={css.item}>
      <span
        className={
          friend.isOnline ? css.status + " " + css.isOnline : css.status
        }
      ></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  ));
}

export { FriendList, FriendListItem };


FriendListItem.propTypes = {
 friends: PropTypes.arrayOf(
PropTypes.shape({
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
  id:  PropTypes.number.isRequired,
})
)}