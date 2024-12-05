import { useEffect, useState } from "react";
import { DropDown } from "../custom_components";
import { useRequest } from "../../hooks/useFetch"; // using combined useRequest hook
import { API_URL, API_URLS } from "../../config";
import {
  usePaginationContext,
  useLocationContext,
} from "../../context/AppContext";

import "./styles/LocationForm.css";

function LocationForm() {
  const { data, error, loading, fetchRequest } = useRequest();
  const { setPageLocked } = usePaginationContext();
  const { setRegion, setProvince, setCity, setBarangay } = useLocationContext();

  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBarangay, setSelectedBarangay] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetchRequest(API_URL + API_URLS.GET_REGION);
    };
    fetchData();
    setPageLocked(true);
  }, []);

  useEffect(() => {
    if (data?.regions) {
      setRegions(data?.regions);
    }
    if (data?.provinces) {
      setProvinces(data?.provinces);
    }
    if (data?.cities) {
      setCities(data?.cities);
    }
    if (data?.barangays) {
      setBarangays(data?.barangays);
    }
    console.log(data);
  }, [data, fetchRequest]);

  const fetchProvinces = async (regCode) => {
    console.log("fetching provinces", regCode);
    if (regCode) {
      const payload = { code: regCode };
      fetchRequest(API_URL + API_URLS.FILTER_PROVINCE, "POST", payload);
    }
  };

  const fetchCities = async (provCode) => {
    console.log("fetching cities", provCode);
    if (provCode) {
      const payload = { code: provCode };
      fetchRequest(API_URL + API_URLS.FILTER_CITY, "POST", payload);
    }
  };

  const fetchBarangays = async (cityCode) => {
    console.log("fetching barangays", cityCode);
    if (cityCode) {
      const payload = { code: cityCode };
      fetchRequest(API_URL + API_URLS.FILTER_BARANGAY, "POST", payload);
    }
  };

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  const handleRegionChange = (e) => {
    const region = JSON.parse(e.target.value);
    setSelectedRegion(region.region_code);
    setSelectedProvince("");
    setSelectedCity("");
    setSelectedBarangay("");
    fetchProvinces(region.region_code);
    setRegion(region);
  };

  const handleProvinceChange = (e) => {
    const province = JSON.parse(e.target.value);
    setSelectedProvince(province.province_code);
    setSelectedCity("");
    setSelectedBarangay("");
    fetchCities(province.province_code);
    setProvince(province);
  };

  const handleCityChange = (e) => {
    const city = JSON.parse(e.target.value);
    setSelectedCity(city.city_code);
    setSelectedBarangay("");
    fetchBarangays(city.city_code);
    setCity(city);
  };

  const handleBarangayChange = (e) => {
    const barangay = JSON.parse(e.target.value);
    setSelectedBarangay(barangay.brgy_code);
    setBarangay(barangay);
    if (barangay === "") {
      setPageLocked(true);
    } else {
      setPageLocked(false);
    }
  };

  return (
    <div className="main-container-location-form">
      <DropDown
        id="region-dropdown"
        className="select-container"
        name="Region"
        onChange={handleRegionChange}
        value={selectedRegion || ""}
      >
        {regions?.map((region, index) => (
          <option
            key={region.region_code ? region.region_code : index}
            value={JSON.stringify(region)}
          >
            {region.region_name}
          </option>
        ))}
      </DropDown>

      <DropDown
        id="province-dropdown"
        className="select-container"
        name="Province"
        onChange={handleProvinceChange}
        value={selectedProvince || ""}
        disabled={!selectedRegion}
      >
        {provinces?.map((province) => (
          <option key={province.province_code} value={JSON.stringify(province)}>
            {province.province_name}
          </option>
        ))}
      </DropDown>

      <DropDown
        id="city-dropdown"
        className="select-container"
        name="City"
        onChange={handleCityChange}
        value={selectedCity || ""}
        disabled={!selectedProvince}
      >
        {cities?.map((city, index) => (
          <option key={city.city_code || index} value={JSON.stringify(city)}>
            {city.city_name}
          </option>
        ))}
      </DropDown>

      <DropDown
        id="barangay-dropdown"
        className="select-container"
        name="Barangay"
        onChange={handleBarangayChange}
        value={selectedBarangay || ""}
        disabled={!selectedCity}
      >
        {barangays?.map((barangay, index) => (
          <option
            key={barangay.brgy_code || index}
            value={JSON.stringify(barangay)}
          >
            {barangay.brgy_name}
          </option>
        ))}
      </DropDown>
    </div>
  );
}

export default LocationForm;
