import { projectStrorage } from "../firebase/config";
import { ref } from "vue";

const useStorage = () => {
	const error = ref(null);
	const url = ref(null);
	const filePath = ref(null);

	const uploadImage = async (file) => {
		filePath.value = `banners/`;
	};

	return { url, filePath, error };
};

export default useStorage;
