import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Genres = () => {
  const [selectedIcons, setSelectedIcons] = useState({});

  const handleIconClick = (iconName) => {
    setSelectedIcons((prevSelectedIcons) => ({
      ...prevSelectedIcons,
      [iconName]: !prevSelectedIcons[iconName],
    }));
  };

  const getIconColor = (iconName) => {
    return selectedIcons[iconName] ? "red" : "black";
  };
  return (
    <div className="genreBox">
      <div style={{ backgroundColor: "" }} className="genres">
        <h3>Podcasts</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("podcasts") }}
          onClick={() => handleIconClick("podcasts")}
        />
      </div>
      <div style={{ backgroundColor: "#FFA07A" }} className="genres">
        <h3>Audiobooks</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Audiobooks") }}
          onClick={() => handleIconClick("Audiobooks")}
        />
      </div>
      <div style={{ backgroundColor: "#FF6347" }} className="genres">
        <h3>Live Events</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("LiveEvents") }}
          onClick={() => handleIconClick("LiveEvents")}
        />
      </div>
      <div style={{ backgroundColor: "#FF4500" }} className="genres">
        <h3>Made For You</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Made For You") }}
          onClick={() => handleIconClick("Made For You")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#FF69B4" }} className="genres">
        <h3>New Releases</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("New Releases") }}
          onClick={() => handleIconClick("New Releases")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#FFC0CB" }} className="genres">
        <h3>Hip-Hop</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Hip-Hop") }}
          onClick={() => handleIconClick("Hip-Hop")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#FF00FF" }} className="genres">
        <h3>Pop</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Pop") }}
          onClick={() => handleIconClick("Pop")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "brown" }} className="genres">
        <h3>Country</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Country") }}
          onClick={() => handleIconClick("Country")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "green" }} className="genres">
        <h3>Latin</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Latin") }}
          onClick={() => handleIconClick("Latin")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "blue" }} className="genres">
        <h3>Charts</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Charts") }}
          onClick={() => handleIconClick("Charts")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#00CED1" }} className="genres">
        <h3>Rock</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Rock") }}
          onClick={() => handleIconClick("Rock")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#87CEEB" }} className="genres">
        <h3>Dance/Electronic</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Dance/Electronic") }}
          onClick={() => handleIconClick("Dance/Electronic")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#6A5ACD" }} className="genres">
        <h3>Mood</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Mood") }}
          onClick={() => handleIconClick("Mood")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#9400D3" }} className="genres">
        <h3>Indie</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Indie") }}
          onClick={() => handleIconClick("Indie")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#FF1493" }} className="genres">
        <h3>Discover</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Discover") }}
          onClick={() => handleIconClick("Discover")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#FF1493" }} className="genres">
        <h3>Radio</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Radio") }}
          onClick={() => handleIconClick("Radio")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#FF1493" }} className="genres">
        <h3>Disney</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("Disney") }}
          onClick={() => handleIconClick("Disney")}
        />
      </div>{" "}
      <div style={{ backgroundColor: "#FF1493" }} className="genres">
        <h3>R&B</h3>
        <FavoriteIcon
          className="favorite-icon"
          style={{ color: getIconColor("R&B") }}
          onClick={() => handleIconClick("R&B")}
        />
      </div>{" "}
    </div>
  );
};

export default Genres;
