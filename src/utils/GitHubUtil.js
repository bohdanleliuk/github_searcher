import {Octokit} from "octokit";

const octokit = new Octokit({
    auth: "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"
})

export const findUsers = async (searchLogin) => {
    let result = []
    await octokit.request(`GET /search/users`, {
        q: `${searchLogin} in:login`,
        per_page: 50,
        page: 1,
        order: "desk"
    }).then((resp) => {
        result = resp.data.items
    })
    return result
}

export const findUser = async (login) => {
    let result = {}
    await octokit.request(`GET /users/${login}`, {
        username: 'USERNAME'
    })
        .then((resp) => {
        result = resp.data
    })
    return result
}
