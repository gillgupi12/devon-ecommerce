import { useSelector } from "react-redux";
import ProfileCard from "../../components/molecules/profile-card";
import { RootState } from "../../stores";

const ProfilePage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return <>{user ? <ProfileCard user={user} /> : <>USER NOT FOUND</>}</>;
};

export default ProfilePage;
