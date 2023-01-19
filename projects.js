$('#modal-project-img').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var title = button.data('title');
    var imgSource = button.data('imgsource');
    var modal = $(this);
    modal.find('.modal-title').text(title);
    document.querySelector('.modal-img').src = imgSource;
  })