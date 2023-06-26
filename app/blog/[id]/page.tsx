import Link from "next/link";

interface IProps {
  params: {
    id: string
  }
}

const Post = ({ params: { id } }: IProps) => {
  return (
    <>
      <h1>POST page {id}</h1>
    </>
  );
};

export default Post;
