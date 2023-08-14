type Post = {
  creator: Creator;
  text: string;
  tags: string;
  _id: string;
  title: string;
};
type Creator = {
  email: string;
  username: string;
  image: string;
  _id: string;
};
