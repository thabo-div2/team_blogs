<template>
	<form @submit.prevent="handlePost">
		<h4>Create Blog Post</h4>
		<input type="text" placeholder="title" v-model="title" required />
		<textarea placeholder="content..." v-model="content" required></textarea>
		<label>Upload Banner Image</label>
		<input @change="handleImage" type="file" />
		<div class="error">{{ fileError }}</div>

		<button>Create Post</button>
	</form>

	<div class="error"></div>
</template>

<script>
import { ref } from "@vue/reactivity";
import useStorage from "@/composables/useStorage";

export default {
	setup() {
		const { filePath, url, uploadImage } = useStorage();

		const title = ref("");
		const content = ref("");
		const file = ref(null);
		const fileError = ref(null);

		const handlePost = async () => {
			if (file.value) {
				await uploadImage(file.value);
				console.log("image uploade, url:" + url.value);
			}
		};

		// allowed file types
		const types = ["image/png", "image/jpeg"];

		const handleImage = (e) => {
			const selected = e.target.files[0];
			console.log(selected);

			if (selected && types.includes(selected.type)) {
				file.value = selected;
				fileError.value = null;
			} else {
				file.value = null;
				fileError.value = "Please select an image file(png or jpg)";
			}
		};

		return { title, content, handlePost, handleImage, fileError };
	},
};
</script>

<style>
form {
	background: #fff;
}
input[type="file"] {
	border: 0;
	padding: 0;
}
label {
	font-size: 12px;
	display: block;
	margin-top: 30px;
}
button {
	margin-top: 20px;
}
</style>
