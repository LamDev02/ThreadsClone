import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";

const UserPage = () => {
  return (
    <>
      <UserHeader />
      <UserPost
        likes={1200}
        replies={471}
        postImg="/post1.png"
        postTitle="Lets talk 'bout threads."
      />

      <UserPost
        likes={451}
        replies={12}
        postImg="/post2.png"
        postTitle="Nice Tutorial"
      />
      <UserPost
        likes={321}
        replies={345}
        postImg="/post3.png"
        postTitle="I love this guy"
      />
      <UserPost
        likes={3125}
        replies={909}
        postTitle="This is my first Threads."
      />
    </>
  );
};

export default UserPage;
