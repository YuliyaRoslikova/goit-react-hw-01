import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.box}>
      <div className={s.profileInfo}>
        <img className={s.profileLogo} src={image} alt="User avatar" />
        <p className={s.profileName}>{name}</p>
        <p className={s.profileDescription}>@{tag}</p>
        <p className={s.profileDescription}>{location}</p>
      </div>

      <ul className={s.statList}>
        <li className={s.statItem}>
          <span>Followers</span>
          <span className={s.statItemCount}>{followers}</span>
        </li>
        <li className={s.statItem}>
          <span>Views</span>
          <span className={s.statItemCount}>{views}</span>
        </li>
        <li className={s.statItem}>
          <span>Likes</span>
          <span className={s.statItemCount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
