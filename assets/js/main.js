// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");







// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    
  } else {
    navbar.classList.remove("sticky");
  }
} 

$('.proj-slider').slick({
    infinite: true,
    
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows : true,
    accessibility : true,
    rtl : false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows : false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
    
});
      

$(".js-example-placeholder-single").select2({
    placeholder: "Select a state",
    allowClear: true
});


$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
	autoplay: true
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
	infinite: true,
	centerPadding: '0px',
  arrows: false
});



$('.slider-for2').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
	autoplay: true
});
$('.slider-nav2').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
	infinite: true,
	centerPadding: '0px'
});
		

$('.project-sub-slider').slick({
  autoplay: true
});


$(function() {
    $('#datepicker').datepicker();
    $('#datepicker2').datepicker();
    $('#datepicker3').datepicker();
    $('#datepicker4').datepicker();
    $('#datepicker5').datepicker();
});

$('#example').dataTable();
$('#example1').DataTable();
$('#example2').DataTable();
$('#example3').DataTable();
$('#example4').DataTable();
$('#example5').DataTable();





$(".payment-package-card").click(function(){
  $(this).addClass('selected');
  $(this).parent().siblings().children().hasClass("selected") && $(this).parent().siblings().children().removeClass("selected")

});


$(".payment-method-card").click(function(){
  $(this).addClass('selected');
  $(this).parent().siblings().children().hasClass("selected") && $(this).parent().siblings().children().removeClass("selected")

});


$('.plus').click(function() {
  $('.table-bordered tbody').append('<tr class="child"><td>blahblah</td></tr>');
});


function showin(divin, element)
{
  console.log("element",element)
    document.getElementById(divin).style.display = element.value == 3 ? 'block' : 'none';
}




$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

  var $target = $(e.target);

  if ($target.parent().hasClass('disabled')) {
    return false;
  }
});

$(".next-step").click(function (e) {

  var $active = $('.rent-tabs .nav-pills li.active');
  $active.next().removeClass('disabled');
  nextTab($active);

});



function nextTab(elem) {
  $(elem).next().find('a[data-toggle="tab"]').click();
}

function prevTab(elem) {
  $(elem).prev().find('a[data-toggle="tab"]').click();
}








































// function readURL(input) {
//   alert("ssklfnsdkjfjkdsfjk")
//   console.log("input",input.files)
//   if (input.files) {
//       var reader = new FileReader();

//       reader.onload = function (e) {
//           $('.blah').attr('src', e.target.result);
//       };
//       const data = input.files;

//       for(let i=0; i<data.length;i++) {
//         reader.readAsDataURL(data[i]);
//         console.log("d",data[i])
//       }

//       reader.readAsDataURL(input.files[1]);
//   }
// }




// function readURL(e){
//   let files = e.files;

//   let file;
//   for (let i=0; i<files.length ; i++){
//        let reader = new FileReader();
//        file = files [i];
//        reader.onload = (file) => {
//               this.product.photo[i] = reader.result;
//         }
//        reader.readAsDataURL(file)
//    }
// }

function readmultifiles(files) {
  console.log("files", files)
  var ul = document.querySelector("#bag>ul");
  while (ul.hasChildNodes()) {
      ul.removeChild(ul.firstChild);
  }
  // Read first file
  setup_reader(files, 0);
}

// Don't define functions in functions in functions, when possible.

function setup_reader(files, i) {
  var file = files[i];
  var url = URL.createObjectURL(file);
  var name = file.name;
  var reader = new FileReader();
  reader.onload = function(e){
                      readerLoaded(e, files, i, name,url);
                  };
  reader.readAsBinaryString(file);
  // After reading, read the next file.
}

function readerLoaded(e, files, i, name,url) {
  // get file content  
  var bin = e.target.result;
  // do sth with text
  var ul = document.querySelector("#bag>ul");
  var li = document.createElement("li");
  li.innerHTML = `
  <div>
  <img src=${url} alt="${name}">
  <div class="controls">
  <button type="button" class="green" onclick="selectMain(this)"> <i class="fa fa-check"></i></button>   
  <button type="button" class="red" onclick="removeImg(this)"> <i class="fa-solid fa-xmark"></i></button>                                   
  </div>
  </div>
   `;
  ul.appendChild(li);

  // If there's a file left to load
  if (i < files.length - 1) {
      // Load the next file
      setup_reader(files, i+1);
  }
}

function removeImg(e) {
  e.parentElement.parentElement.remove();
}
function selectMain(e) {
  e.parentElement.parentElement.classList.add("myimg-featured");
}