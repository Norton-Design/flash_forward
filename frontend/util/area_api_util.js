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

export const createArea = areaData => (
    $.ajax({
        method: "POST",
        url: `/api/areas/`,
        data: areaData,
        processData: false,
        contentType: false,
    })
);