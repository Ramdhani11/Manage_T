import axiosInstance from "../../other/axiosInstance";

const barangApi = {
  getAll: async () => {
    try {
      const result = await axiosInstance.get(
        "barang/find-all?limit=20&offset=1"
      );
      return result.data.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export default barangApi;
