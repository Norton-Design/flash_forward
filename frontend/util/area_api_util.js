export const fetchArea = id => (
    $.ajax({
        method: 'GET',
        url: `api/areas/${id}`
    })
);

export const fetchAreas = areas => (
    $.ajax({
        method: 'GET',
        url: 'api/areas',
        data: { areas }
    })
);