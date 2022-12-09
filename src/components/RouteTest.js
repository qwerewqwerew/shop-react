import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
  <div>
    <Link to={"/"}>HOME</Link> <br/>
    <Link to={"/new"}>New</Link> 
    <Link to={"/diary"}>diary</Link> 
    <Link to={"/edit"}>edit</Link> 
  </div>
  );
};
export default RouteTest;
