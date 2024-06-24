import axios, { AxiosError, AxiosResponse } from "axios";
const sleep = () => new Promise(resolve => setTimeout(resolve, 500));
const apiUrl = process.env.API_URL;

axios.defaults.baseURL = `${apiUrl}/api`;

// arrow functions, they make it easier to keep our code concise.
const responseBody = (response: AxiosResponse) => response.data;

// to fetch error status code.
axios.interceptors.response.use(async response => {
    await sleep();
    return response;
}, (error: AxiosError) => {
    // console.log("caught by interceptor");
    const { data, status } = error.response as AxiosResponse;
    switch (status) {
        // validation error is also 400 error
        case 400:
            // if (data.errors) {
            //     const modelStateError: string[] = [];
            //     for (const key in data.errors) {
            //         if (data.errors[key]) {
            //             modelStateError.push(data.errors[key])
            //         }
            //     }
            //     // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
            //     // When we threw the errors from this statement, we stop excution of our case 400 method, so it effectively not going to call  toast.error(data.title); before the break; line
            //     throw modelStateError.flat();
            // }
            console.log(data.title);
            break;
        case 401:
            console.log(data.title);
            break;
        case 404:
            console.log(data.title);
            break;
        case 500:
            const dataObj = JSON.parse(data);
            // toast.error(dataObj.title);
            console.log(dataObj);
            // router.navigate("/server-error", {state: {error : dataObj}});
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
});

// restful methods
const requests = {
    get: (url: string, header: {}) => axios.get(url, header).then(responseBody),
    post: (url: string, body: {}, config: {}) => axios.post(url, body, config).then(responseBody),
    put: (url: string, body: {}, config: {}) => axios.put(url, body, config).then(responseBody),
    delete: (url: string, config: {}) => axios.delete(url, config).then(responseBody)
}

// in order to overwrite the baseURL, you have to use config params.
// const config = {
//     baseURL : "http://localhost:3001/"
// }

// buggy test
const TestErrors = {
    get400Error: () => requests.get("buggy/bad-request", {}),
    get401Error: () => requests.get("buggy/unauthorised", {}),
    get404Error: () => requests.get("buggy/not-found", {}),
    get500Error: () => requests.get("buggy/server-error", {}),
    getValidationError: () => requests.get("buggy/validation-error", {}),
}

const agent = {
    TestErrors,
}

export default agent;