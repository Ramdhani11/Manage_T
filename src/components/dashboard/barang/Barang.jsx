import React from "react";
import barangApi from "./barang.api";
// import Cookies from "js-cookie";

const Barang = () => {
  // const [barang, setBarang] = useState([]);
  // Cookies.remove("token");
  // Cookies.remove("profileName");
  return (
    <div>
      Barang
      <button
        onClick={async () => {
          await barangApi.getAll().then((result) => {
            console.log(result);
          });
        }}
      >
        CLick
      </button>
    </div>
  );
};

export default Barang;
