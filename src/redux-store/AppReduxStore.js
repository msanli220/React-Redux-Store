const initialState = { role: null };

export default function (state = initialState, action) {
    const { type, payload, source } = action;

    return {
                ...state,
                role: payload
   };

     
}
