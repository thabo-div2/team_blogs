<template>
	<form @submit="handlePost">
		<h4>Create Blog Post</h4>
		<input type="text" placeholder="title" v-model="title" required />
		<textarea placeholder="content..." v-model="content" required></textarea>
		<label>Upload Banner Image</label>
		<input type="file" />
		<button>Create Post</button>
	</form>

	<div class="error"></div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
	setup() {
		const title = ref("");
		const content = ref("");

		const handlePost = () => {
			console.log(title.value, content.value);
		};

		return { title, content, handlePost };
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
