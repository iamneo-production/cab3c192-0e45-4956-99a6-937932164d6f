import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import LoupeIcon from "@mui/icons-material/Loupe";
import {
  addInputValues,
  removeAcadamies,
} from "../../../../store/actions/global";

const Home = () => {
  const { academies } = useSelector((state) => state.global);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (i) => {
    const filteredData = academies.filter((item, index) => i !== index);
    console.log(filteredData);
    dispatch(removeAcadamies(filteredData));
  };

  const handleEdit = (data, i) => {
    dispatch(addInputValues(data));
    navigate("/addacadmey/" + (+i + 1));
  };

  const handleAddAcademy = () => {
    dispatch(
      addInputValues({
        academyName: "",
        contactNumber: "",
        imageUrl: "",
        academyEmail: "",
        academyLocation: "",
        academyDesc: "",
      })
    );
    navigate("/addacadmey");
  };

  return (
    <div className="bg_container">
      <div className="ui_icon_input">
        <input
          className="prompt"
          type="text"
          placeholder="Type here to search Academy"
        />
        <button className="search__button">Search</button>
      </div>

      <ul className="acadmey_containers">
        {academies.length ? (
          academies.map((item, i) => (
            <div className="results" key={i}>
              <img src={item.imageUrl} className="image" />
              <div className="rating">
                <h1 className="heading1">{item.academyName}</h1>
                <p>⭐️⭐️⭐️⭐️⭐️</p>
              </div>
              <div className="details">
                <div className="details-container">
                  <p>Place: {item.academyLocation}</p>
                </div>
                <div className="icon_container">
                  <EditIcon
                    className="icon_container--edit"
                    onClick={() => handleEdit(item, i)}
                  />
                  <DeleteIcon
                    className="icon_container--delete"
                    onClick={() => handleDelete(i)}
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <h1 className="no__academies">No acadamies</h1>
        )}
      </ul>
      <div className="add_button_container">
        <button className="button" onClick={handleAddAcademy}>
          <LoupeIcon />
          Add Academy
        </button>
      </div>
    </div>
  );
};

export default Home;
