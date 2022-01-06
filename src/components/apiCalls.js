import apiRequest from "../configs/apiRequest";

const returnObjRequest = (method, url, headers, data, params) => {
    const objRequest = {
        method: method,
        url: url,
        headers: headers,
        data: data,
        params: params
    }

    return objRequest;
}

async function apiListPokemonsLimitAndOffset(offset, limit) {
    const objRequest = returnObjRequest('GET', `pokemon?offset=${offset}'&limit=${Number(limit)}`, {}, {}, {});

    const requestReturn = (await apiRequest({
        method: objRequest.method,
        url: objRequest.url,
        headers: objRequest.headers,
        data: objRequest.data,
        params: objRequest.params,
    }))

    return requestReturn;
}

async function apiObjectPokemonIdOrName(id, name) {
    const queryParam = id != null ? id
                        : name

    const objRequest = returnObjRequest('GET', `pokemon/${queryParam}`, {}, {}, {});

    const requestReturn = (await apiRequest({
        method: objRequest.method,
        url: objRequest.url,
        headers: objRequest.headers,
        data: objRequest.data,
        params: objRequest.params,
    }))

    return requestReturn;
}

export { apiListPokemonsLimitAndOffset, apiObjectPokemonIdOrName }