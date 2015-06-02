
function Contact(firstName,lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};

function Address(street, city, state, type) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.type = type;
}

Address.prototype.fullAddress = function() {
  return this.type + ": " + this.street + ", " + this.city + ", " + this.state;
}

$(document).ready(function() {
  $("input").keypress(function() {
    var inputString = $(this).val();
    if (inputString.length === 1) {
      $(this).val(inputString.toUpperCase());
    }

  });


  $("#add-address").click(function() {
    console.log("#add-address");
    $(".new-addresses").append("<div class='new-address'>" +
    "<label for='new-street'>Street</label>" +
    "<input type='text' class='form-control new-street'>" +
    "<label for='new-city'>City</label>" +
    "<input type='text' class='form-control new-city'>" +
    "<label for='new-state'>State</label>" +
    "<input type='text' class='form-control new-state'>" +
    "<label for='new-type'>Address type</label>" +
    "<input type='text' class='form-control new-type'>"
    );

  });


  $("form#new-contact").submit(function(event){
    console.log("new-contact");
    event.preventDefault();

    var firstName = $("input#new-first-name").val();
    var lastName = $("input#new-last-name").val();
    var newContact = new Contact(firstName, lastName);

    $(".new-address").each(function() {
      var street = $(this).find("input.new-street").val();
      var city = $(this).find("input.new-city").val();
      var state = $(this).find("input.new-state").val();
      var type = $(this).find("input.new-type").val();

      var newAddress = new Address(street, city, state, type);

      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + " " + "</span></li>");

    $(".contact").last().click(function() {
      console.log("add click event to: .contact class");
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();
  });
});

function resetFields() {
  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
  $("input.new-type").val("");
  $(".new-address").not(":first").remove();
}
