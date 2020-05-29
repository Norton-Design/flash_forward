export const fetchRoute = id => (
  $.ajax({
    method: 'GET',
    url: `api/routes/${id}`
  })
);

export const fetchRoutes = routes => (
  $.ajax({
    method: 'GET',
    url: 'api/routes',
    data: { routes }
  })
);

export const createRoute = formData => (
  $.ajax({
    method: "POST",
    url: `/api/routes/`,
    data: formData,
    processData: false,
    contentType: false,
  })
);

export const searchRoutes = searchParams => (
  $.ajax({
    method: "GET",
    url: `/api/routes/route_finder`,
    data: searchParams,
  })
);

export const updateRoute = formData => (
  $.ajax({
    method: "PATCH",
    url: `/api/routes/${formData.get('route[id]')}`,
    data: formData,
    contentType: false,
    processData: false
  })
);

export const deleteRoute = id => (
  $.ajax({
    method: "DELETE",
    url: `/api/routes/${id}`,
  })
);