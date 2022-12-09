import { useParams } from "react-router-dom";
const Diary = () => {
  const { id } = useParams();
  return <div>Diary페이지{ id }</div>;
};
export default Diary;
