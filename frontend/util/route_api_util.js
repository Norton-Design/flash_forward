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

export const createRoute = routeData => (
    $.ajax({
        method: "POST",
        url: `/api/routes/`,
        data: routeData,
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