export const addUserAction = async (request) => {
    const { name } = request.payload;
    //@TODO
    //async stuff
    return { message: 'User saved'};
};

export const getUsersAction = () => {
    return [];
};