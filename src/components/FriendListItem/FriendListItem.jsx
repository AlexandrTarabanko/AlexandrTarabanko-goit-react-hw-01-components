import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';

export const FriendListItem = ({ id, avatar, isOnline, name }) => {
  return (
    <li key={id} className="item">
      {/* СДЕЛАТЬ СТАТУС ОНЛАЙНА ЧЕРЕЗ СТИЛИ <span className={isOnline ? styles.online : styles.offline} /> */}
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
