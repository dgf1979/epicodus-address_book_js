$(document).ready(function() {
  $("#add-address").click(function() {
    console.log("#add-address");
    // var newAddressHTML = '' +
//     '<div class="new-address">' +
//     '<div class="form-group">' +
//     '<label for="new-street">Street</label>' +
//     '<input type="text" class="form-control new-street">' +
//     '</div>' +
//     '<div class="form-group">' +
//     '<label for="new-city">City</label>' +
//     '<input type="text" class="form-control new-city">' +
//     '</div>' +
//     '<div class="form-group">' +
//     '<label for="new-state">State</label>' +
//     '<input type="text" class="form-control new-state">' +
//     '</div>' +
//     '</div>';
// console.log(newAddressHTML);
    $(".new-addresses").append("<div class='new-address'>" +
    "<label for='new-street'>Street</label>" +
    "<input type='text' class='form-control new-street'>" +
    "<label for='new-city'>City</label>" +
    "<input type='text' class='form-control new-city'>" +
    "<label for='new-state'>State</label>" +
    "<input type='text' class='form-control new-state'>"
    );

  });


  $("form#new-contact").submit(function(event){
    console.log("new-contact");
    event.preventDefault();

    var firstName = $("input#new-first-name").val();
    var lastName = $("input#new-last-name").val();
    //var address = $("input#new-address").val();
    var newContact = { firstName: firstName, lastName: lastName, addresses: []};

    $(".new-address").each(function() {
      var street = $(this).find("input.new-street").val();
      var city = $(this).find("input.new-city").val();
      var state = $(this).find("input.new-state").val();

      var newAddress = {
        street: street,
        city: city,
        state: state
      };

      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + " " + "</span></li>");

    $(".contact").last().click(function() {
      console.log("add click event to: .contact class");
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + ", " + address.city + ", " + address.state + "</li>");
      });
    });


    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");

    // $("input-new-address").val("");
  });
});
