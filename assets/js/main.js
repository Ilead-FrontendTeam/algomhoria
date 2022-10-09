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

function addDatePicker(){
  $(".datepicker").datepicker({
    showOn: "button",
    buttonImage: "/calendar.png",
    buttonImageOnly: true,
    changeMonth: true,
    changeYear: true
  });
}
$(function() {
    $('.datepicker').datepicker();
    // $('#datepicker2').datepicker();
    // $('#datepicker3').datepicker();
    // $('#datepicker4').datepicker();
    // $('#datepicker5').datepicker();
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

// Repeate Html 
function repeate() {
//   const node = document.querySelector(".renting-price-row");
//   console.log(node)
// const clone = node.cloneNode(true);

// document.querySelector("#price-list-content tbody").appendChild(clone);
// console.log(repeatedItem)
//   alert("sfkjksdjk")

const sec = document.querySelector("#price-list-content tbody");
sec.insertAdjacentHTML('beforeend', `
<tr class="renting-price-row">
<td class="cel1">

    <div class="input-group date datepicker">
        <input type="text" class="form-control">
        <span class="input-group-append">
            <!-- <span class="input-group-text bg-light d-block">
                <i class="fa fa-calendar"></i>
            </span> -->
        </span>
    </div>


</td>

<td  class="cel2">

    <div class="input-group date datepicker" >
        <input type="text" class="form-control">
        <span class="input-group-append">
            <!-- <span class="input-group-text bg-light d-block">
            <i class="fa fa-calendar"></i>
        </span> -->
        </span>
    </div>


</td>

<td>
    <input type="text" class="form-control" value="0" placeholder="Price">
</td>

<td>
    <input type="text" class="form-control" value="0" placeholder="Price">
</td>

<td>
    <input type="text" class="form-control" value="0" placeholder="Price">
</td>


<td>
    <input type="text" class="form-control" value="0" placeholder="Price">
</td>

<td>
    <input type="text" class="form-control" value="0" placeholder="Price">
</td>

<td>
    <input type="text" class="form-control" value="0" placeholder="Price">
</td>
<td>
    <input type="text" class="form-control" value="0" placeholder="Price">
</td>

<td>
    <button type="button" class="btn btn-danger btn-xs minus" onclick="minus(this)" >-</button>
</td>
</tr>
`)
addDatePicker()
}
function minus(event) {
  event.parentElement.parentElement.remove();
  // console.log(event)
}
// $('.plus').click(function() {
//   $('.table-bordered tbody').append('<tr class="child"><td>blahblah</td></tr>');
// });

// Property On change
function showin(e)
{
  if(e.value == 3) {
     document.getElementById("rent-price").style.display = "block";
     const elem = document.getElementsByClassName("book-item");
     console.log("elem",elem)

     for (let e  of elem) {
       e.style.display = "none"
     }
  } 
  else if(e.value == 4) {
    const elem = document.getElementsByClassName("book-item");

    for (let e  of elem) {
      e.style.display = "block"
    }
    document.getElementById("rent-price").style.display = "none";
  } else {
    document.getElementById("rent-price").style.display = "none";
    const elem = document.getElementsByClassName("book-item");

    for (let e  of elem) {
      e.style.display = "none"
    }
  }
}

// Payment cash visa onchange


function showhide(e)
{
  if(e.value == 1) {
     document.getElementById("billing-info").style.display = "block";
  }  else {
    document.getElementById("billing-info").style.display = "none";
  }
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



// AJax Requests 

  // 1- governorate area

  $('#governorate').on('change', function() {
    var governorate_id = this.value;
    // console.log("governorate_id",governorate_id);
    $.ajax({
        url: 'ajax/area.php',
        type: "POST",
        data: {
            governorate_data: governorate_id
        },
        success: function(result) {
            $('#area').html(result);
            // console.log("area",result);
        }
    })
});
// 2- area street
$('#area').on('change', function() {
    var area_id = this.value;
    // console.log(governorate_id);
    $.ajax({
        url: 'ajax/street.php',
        type: "POST",
        data: {
            area_data: area_id
        },
        success: function(data) {
            $('#street').html(data);
            // console.log(data);
        }
    })
});



// Paymnt Tabs 
$(document).ready(function () {
	//Enable Tooltips
	var tooltipTriggerList = [].slice.call(
		document.querySelectorAll('[data-bs-toggle="tooltip"]')
	);
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	//Advance Tabs
	$(".next").click(function () {
		const nextTabLinkEl = $(".nav-tabs .active")
			.closest("li")
			.next("li")
			.find("a")[0];
		const nextTab = new bootstrap.Tab(nextTabLinkEl);
		nextTab.show();
	});

	$(".previous").click(function () {
		const prevTabLinkEl = $(".nav-tabs .active")
			.closest("li")
			.prev("li")
			.find("a")[0];
		const prevTab = new bootstrap.Tab(prevTabLinkEl);
		prevTab.show();
	});
});
