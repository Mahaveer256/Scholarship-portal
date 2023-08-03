const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn");
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));
var fileInput = document.getElementById('file-input');
var previewImage = document.getElementById('preview-image');

fileInput.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var reader = new FileReader();

  reader.onload = function(e) {
    var image = new Image();

    image.onload = function() {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var maxWidth = 150;
      var maxHeight = 150;
      var width = image.width;
      var height = image.height;

      if (width > height) {
        if (width > maxWidth) {
          height *= maxWidth / width;
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width *= maxHeight / height;
          height = maxHeight;
        }
      }

      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(image, 0, 0, width, height);
      previewImage.src = canvas.toDataURL('image/jpeg');
    }

    image.src = e.target.result;
  }

  reader.readAsDataURL(file);
});