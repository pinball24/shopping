$("#js-shopping-list-form").on('submit', function(event) {
    event.preventDefault();
		let text = $('#shopping-list-entry').val();
    const html = `
    <li>
        <span class="shopping-item">${text}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
    </li>`
    $('.shopping-list').append(html);
    $('#shopping-list-entry').val('');
});

$('.shopping-list').on('click', '.shopping-item-delete', function (event) {
  $(this).closest('li').remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
  $(this).closest('li').toggleClass('shopping-item__checked')
});






