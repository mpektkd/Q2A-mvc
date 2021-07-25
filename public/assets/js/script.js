'use strict';

function composeQuestionDiv(data) {
  console.log(data);
  let html =
    '<div class="row mb-3 justify-content-between">' +
      '<div class="col">' +
        '<div class="card shadow mb-3">' +
          '<div class="card-body">' +
            '<div class="row">' +
              '<div class="col-4">' +
                '<div class="row">' +
                  '<div class="col-4">' +
                    '<span>' +
                      data.totalthumbsdown +
                    '</span><br>' +
                    '<span>Thumbs Down</span>' +
                  '</div>' +
                  '<div class="col-4">' +
                    '<span>' +
                      data.totalthumbsup +
                    '</span><br>' +
                    '<span>Thumbs Up</span>' +
                    '</div>' +
                  '<div class="col-4">' +
                    '<span>' +
                      data.answers +
                    '</span><br>' +
                    '<span>Answers</span>' +
                  '</div>' +
                '</div>' +
              '</div>' +
              '<div class="col-4 d-flex justify-content-center">' +
                '<div class="mb-3">' +
                  '<label class="form-label">' +
                    '<strong>' +
                      data.title +
                    '</strong>' +
                  '</label>' +
                '</div>' +
              '</div>' +
              '<div class="col-2">' +
                '<div class="mb-3">' +
                  '<label class="form-label">' +
                    '<strong>' +
                      new Date(Date.parse(data.datecreated)).toUTCString().slice(0,-3) +
                    '</strong>' +
                  '</label>' +
                '</div>' +
              '</div>' +
              '<div class="col-2 float-right">' +
                '<form action="../answer/answer-form" method="POST">' +
                  '<input type="hidden" value="' + data.id + '" name="questionId">' +
                  '<input type="hidden" value="false" name="fromProfile">' +
                  '<button class="submitAnswer btn btn-primary btn-sm" type="submit">See Thread</button>' +
                '</form>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';

  return html;
}
