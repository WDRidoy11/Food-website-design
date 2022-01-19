$(document).ready(function () {
  $('.portfolios').filterData({
    aspectRatio: '8:5',
    nOfRow: 3,
    itemDistance: 0
  });
  $('.portfolio-controllers button').on('click', function () {
    $('.portfolio-controllers button').removeClass('active-work');
    $(this).addClass('active-work');
  });
});