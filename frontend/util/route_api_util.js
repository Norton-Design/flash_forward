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