import { Card, Container, Divider, Title } from "@mantine/core";
import { User } from "../../../types";

interface ProfilePageProps {
  user: User;
}
const ProfileCard: React.FC<ProfilePageProps> = ({ user }) => {
  return (
    <>
      <Container className="flex flex-col gap-2 py-10 md:grid md:grid-cols-2">
        <Card className="flex flex-col gap-2 w-full">
          <div>
            <Title order={3}>Profile</Title>
            <Title order={5}>Name</Title>
            <div>{`${user.firstName} ${user.lastName}`}</div>
          </div>
          <Divider />
          <div>
            <Title order={5}>Date Of Birth</Title>
            <div>{user.dateOfBirth ? user.dateOfBirth.toLocaleDateString() : "Not Provided"}</div>
          </div>
        </Card>
        <Card className="flex flex-col gap-2 w-full">
          <div>
            <Title order={3}>Account</Title>
            <Title order={5}>Email</Title>
            <div>{user.email}</div>
          </div>
          <Divider />
          <div>
            <Title order={5}>Password</Title>
            <div>*********</div>
          </div>
        </Card>
      </Container>
    </>
  );
};

export default ProfileCard;
