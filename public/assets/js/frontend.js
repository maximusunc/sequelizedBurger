$(function() {
	$("#createBurger").on("click", function(event) {
		event.preventDefault();
		var burger = $("#burger").val().trim();
		if (burger.length > 0) {
			var newBurger = {
				burger: $("#burger").val().trim()
			};
			console.log(newBurger);
			$.ajax("/api/burgers", {
				type: "POST",
				data: newBurger
			}).then(function() {
				console.log("Successfully created burger");
				location.reload();
			});
			$("#burger").val("");
		}
	});
	$(".devour").on("click", function(event) {
		event.preventDefault();
		var id = $(this).data("id");
		var name = $("form").find("input[name="+id+"]").val().trim();
		if (name !== "") {
			console.log(name);
			$.ajax("/api/burgers/" + id, {
				type: "PUT",
			}).then(function() {
				console.log("Successfully devoured!");
				location.reload();
			});
			$.ajax("/api/customer/" + name, {
				type: "POST"
			}).then(function() {
				console.log("Customer Added");
			});
			// I haven't gotten my assocations to work just yet. 
			// I have both tables, and a customerID in my burgers table, and can create a new item in both,
			// but I haven't gotten them to link yet.
		} else {
			alert("Please provide a customer name");
		};
		
	});
	$(".makeAnother").on("click", function(event) {
		var id = $(this).data("id");
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
		}).then(function() {
			console.log("Successfully devoured!");
			location.reload();
		});
	});
	$(".delete").on("click", function(event) {
		var id = $(this).data("id");
		$.ajax("/api/burgers/" + id, {
			type: "DELETE",
		}).then(function() {
			console.log("Successfully deleted");
			location.reload();
		}); 
	});
});