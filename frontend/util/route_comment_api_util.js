export const fetchComment = id => (
  $.ajax({
    method: 'GET',
    url: `api/route_comments/${id}`
  })
);

export const fetchComments = comments => (
  $.ajax({
    method: 'GET',
    url: 'api/route_comments',
    data: { comments }
  })
);

export const createComment = formData => (
  $.ajax({
    method: "POST",
    url: `/api/route_comments/`,
    data: formData,
    processData: false,
    contentType: false,
  })
);

export const updateComment = formData => (
  $.ajax({
    method: "PATCH",
    url: `/api/route_comments/${formData.get('comment[id]')}`,
    data: formData,
    contentType: false,
    processData: false
  })
);

export const deleteComment = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/route_comments/${id}`,
  })
);