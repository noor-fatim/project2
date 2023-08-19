var images = document.querySelectorAll(".image");

images.forEach((image)=>{
	image.addEventListener("click",() => {
		images.forEach ((image) => {
			image.classList.remove('active');
		});
		     image.classList.add('active');

	});
});
// images.foreach((image)=>{
// 	image.addEventListener("click", () => {
// 		image.classList.add("active");
// 	});
// 	image.classList.remove("active");
// });