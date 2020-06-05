import Http from './http';

export const getImage = (user_id) => Http.get(`/get-image/${user_id}`);

export const updateImage = function (form, user_id) {
    const settings = {
        headers : {
            Authorization: localStorage.token,
            'content-type': 'multipart/form-data'
        }
    };
    return Http.post(`/update-image/${user_id}`,
        form,
        settings
    );
};