import { useEffect, useState } from "react";
import {
  ToggleButton,
  DropDown,
  NamedDiv,
  SearchBar,
  NamedContainer,
} from "../custom_components";
import "./styles/LevelForm.css";
import { API_URL, API_URLS } from "../../config";
import { useRequest } from "../../hooks/useFetch";
import { usePaginationContext } from "../../context/AppContext";

function LevelForm() {
  const { data, error, loading, fetchRequest } = useRequest();
  const [levels, setLevels] = useState([]);
  const [coursesDisabled, setCoursesDisabled] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState(null);
  const { pageLocked, setPageLocked } = usePaginationContext();
  useEffect(() => {
    const fetchLevels = async () => {
      await fetchRequest(API_URL + API_URLS.GET_LEVELS);
    };
    fetchLevels();
    setPageLocked(true);
  }, []);

  useEffect(() => {
    if (data?.levels) {
      setLevels(data?.levels);
      console.log(data);
    }
    if (data?.tracks) {
      setSearchResults(data?.tracks);
    }
    if (data?.tracks) {
      setSearchResults(data?.tracks);
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    const fetFilteredLevels = async () => {
      await fetchRequest(API_URL + API_URLS.FILTERED_TRACKS, "POST", {
        level: selectedLevel,
        query: searchTerm,
      });
    };
    fetFilteredLevels();
  }, [searchTerm]);

  const handleLevelChange = (event) => {
    if (event.target.value === "") {
      setPageLocked(true);
    } else {
      setPageLocked(false);
    }
    if ((event.target.value === "") | (event.target.value < 4)) {
      setSearchResults([]);
      setSearchTerm("");
      setSelectedLevel(null);
      setCoursesDisabled(true);
    } else {
      setSelectedLevel(event.target.value);
      setSearchResults([]);
      setSearchTerm("");
      setCoursesDisabled(false);
    }
  };

  const handleSearchChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  return (
    <div className="main-container-level-form">
      <DropDown
        onChange={handleLevelChange}
        className="select-container"
        name="School Level"
      >
        {levels.map((level, index) => (
          <option key={index} value={level.level_id}>
            {level.level_name}
          </option>
        ))}
      </DropDown>
      <NamedContainer
        className="search-container"
        name={"Select Courses/Tracks"}
        disabled={coursesDisabled}
      >
        <SearchBar onChange={handleSearchChange} className="search-bar" />
        <CourseContainer data={searchResults} />
      </NamedContainer>
    </div>
  );
}

function CourseContainer(props) {
  return (
    <div className="course-container">
      {props.data.map((tracks, index) => (
        <ToggleButton key={index} unique_key={index}>
          {tracks.track_name}
        </ToggleButton>
      ))}
    </div>
  );
}

export default LevelForm;
