import './Profile.css';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
  description: 'Inventor and actress, known for her contributions to wireless communications and groundbreaking technology.',
};

export default function Profile() {
  return (
    <div className="profile">
      <img
        className="profile-avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
      <div className="profile-details">
        <h1 className="profile-name">{user.name}</h1>
        <p className="profile-description">{user.description}</p>
      </div>
    </div>
  );
}
