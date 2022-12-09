import { useNavigate, useSearchParams } from "react-router-dom";
const Edit = () => {
  //let searchParamsUrl=useSearchParams();
  //let searchParams=searchParamsUrl[0];
  //let setSearchParams=searchParamsUrl[1];

  let [searchParams, setSearchParams] = useSearchParams();
  let navi = useNavigate();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  return (
    <div>
      Edit페이지{id}
      <br />
      <button onClick={() => navi("/")}>Home</button>
      <br />
      <button onClick={() => navi("/new")}>New</button>
      <ul>
        <li>{mode}</li>
      </ul>
    </div>
  );
};
export default Edit;
