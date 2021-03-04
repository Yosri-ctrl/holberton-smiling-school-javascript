$(document).ready(function () {
	$.get('https://smileschool-api.hbtn.info/quotes', function (data) {
		//console.log(data);
		for (let i = 0; i < data.length; i++) {
			let div = $.parseHTML(`\
			<div class="carousel-item">\
					<img class="rounded-circle float-left mr-5" src="${data[i].pic_url}" width="120px">\
					<p class="text-white carousel-p flaot-right">\
						${data[i].text}<br><br>\
						<strong>${data[i].name}</strong><br>\
						${data[i].title}\
					</p>\
			</div>`)
			if (i == 0) {
				div[1].classList.add("active")
			};
			$('.dynamic_car').append(div)
		}
	});
	$.get('https://smileschool-api.hbtn.info/popular-tutorials', function (data) {
		console.log(data);
		for (let i = 0; i < data.length; i++) {
			let div = $.parseHTML(`\
			<div class="px-0 col-2">
				<div class="card">
					<img src="${data[i].thumb_url}" class="card-img-top video video-1" alt="...">
					<img src="images/play.png" class="card-img-top video video-2" alt="...">
					<div class="card-body small">
						<h5 class="card-title">${data[i].title}</h5>
						<p class="card-text">${data[i].sub}</p >
					<img src="${data[i].author_pic_url}" class="header_img rounded-circle float-left" width="30px">
						<p style="color: #C271FF; padding: 5px 0 0 40px;">${data[i].author}</p>
						<div class="row pl-2">
							<img src="images/star_off.png" class="" width="15px">
							<img src="images/star_off.png" class="" width="15px">
							<img src="images/star_off.png" class="" width="15px">
							<img src="images/star_off.png" class="" width="15px">
							<img src="images/star_off.png" class="" width="15px">
						</div>
							<p class="float-right mb-0" style="color: #C271FF;">8 min</p>
						</div>
				</div>
			</div>`)
			if (i == 1) {
				div[0].classList.add("d-md-block d-none")
			}
			if (i >= 1) {
				div[0].classList.add("d-lg-block d-none")
			}
			$('.dynamic-pop').append(div)
		}
	});
});