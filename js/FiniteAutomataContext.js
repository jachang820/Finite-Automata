$(document).ready(function() {
	const em = 16;

	/* Left-click
     On blank space: Draw state cell
  */
	$(document).click(function() {
		let id = parseInt($("#state-count").text());
		id = id + 1;
		$("#state-count").text(id.toString());
		let cursorX = event.pageX;
		let cursorY = event.pageY;
		let overlaps = false;
		let body_text = $("body").html();
		let existing_state = undefined;
		$(".state").each(function() {
			let pos = $(this).offset();
			if ((cursorX >= pos.left - 18 && cursorX < pos.left + 54) &&
				  (cursorY >= pos.top - 18 && cursorY < pos.top + 54)) {
				overlaps = true;
				existing_state = $(this);
			}
		});
		/*if (overlaps) {
			let r = Math.round(255 * cursorX / $(document).width()).toString(16);
			let gb = Math.round(255 * cursorY / $(document).height()).toString(16);
			let color = `#${r}${gb}${gb}`;
			existing_state.css("background-color", color);
		}*/
		if (!overlaps) {
			$("body").html(`${body_text}<div class="state" id="state-${id}"><span></span></div>`);
			$(`#state-${id}`).offset({top: event.pageY - 18, left: event.pageX - 18});
			$(`#state-${id} span`).attr("contenteditable", "true");
		}
	});
});