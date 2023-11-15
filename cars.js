$(document).ready(function() {
  const cars = [
    { name: "Toyota Camry", type: "Sedan", funFact: "Best-selling car in America" },
    { name: "Ford Mustang", type: "Sports Car", funFact: "Iconic muscle car" },
    { name: "Honda CR-V", type: "SUV", funFact: "Popular compact SUV" },
    { name: "Chevrolet Silverado", type: "Truck", funFact: "One of the best-selling trucks" },
    { name: "Tesla Model 3", type: "Electric Car", funFact: "Leading electric car in sales" }
  ];

  function displayCars() {
    $("#carList").empty();

    cars.forEach(function(car) {
      const carCard = $(`<div class="car">
                            <h3>${car.name}</h3>
                            <p>Type: ${car.type}</p>
                            <p class="funFact">Fun Fact: ${car.funFact}</p>
                          </div>`);

      $("#carList").append(carCard);
    });
  }

  displayCars();

  $("#addCarBtn").click(function() {
    const newCar = {
      name: $("#carName").val(),
      type: $("#carType").val(),
      funFact: $("#funFact").val()
    };

    // Check if a fun fact is provided for the new car
    if (newCar.funFact) {
      cars.push(newCar);
      displayCars();
    } else {
      alert("Please add a fun fact for the new car!");
    }

    $("#carName").val("");
    $("#carType").val("");
    $("#funFact").val("");
  });
});
