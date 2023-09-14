
// Update the user count and highlight the pricing plan based on the slider value
$("#userSlider").on("input", function () {
    const sliderValue = parseInt($(this).val());
    $("#userCount").text(sliderValue);

    // Determine which pricing plan to highlight
    if (sliderValue >= 0 && sliderValue <= 10) {
        $(".card-header h4").removeClass("text-primary");
        $(".card-header h4:contains('Free')").addClass("text-primary");
    } else if (sliderValue > 10 && sliderValue <= 20) {
        $(".card-header h4").removeClass("text-primary");
        $(".card-header h4:contains('Pro')").addClass("text-primary");
    } else if (sliderValue > 20) {
        $(".card-header h4").removeClass("text-primary");
        $(".card-header h4:contains('Enterprise')").addClass("text-primary");
    }
});

// Initialize the slider value and update the user count
$("#userCount").text($("#userSlider").val());
