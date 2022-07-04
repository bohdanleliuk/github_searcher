import axios from "axios";

const token = "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"

export const findUsers = async (searchLogin) => {
    let result = []
    await axios.get('https://api.github.com/search/users',
        {
            headers: {
                accept: 'application/vnd.github+json',
                authorization: `token ${token}`
            },
            params: {
                q: `${searchLogin} in:login`,
                per_page: 50,
                page: 1,
                order: "desk",
            }
    }).then((resp) => {
        result = resp.data.items
    })
    return result
}

export const findUser = async (login) => {
    let result = []
    await axios.get(`https://api.github.com/users/${login}`,
        {
            headers: {
                accept: 'application/vnd.github+json',
                authorization: `token ${token}`,
            }
        }).then((resp) => {
        result = resp.data
    })
    return result
}

export const findUserRepos = async (login) => {
    let result = []
    await axios.get(`https://api.github.com/users/${login}/repos`,
        {
            headers: {
                accept: 'application/vnd.github+json',
                authorization: `token ${token}`
            }
        }).then((resp) => {
        result = resp.data
    })
    return result
}

export const findUserReposWithTerm = async (login, term) => {
    let result = []
    const query = `${term} user:${login}`
    await axios.get(`https://api.github.com/search/repositories`,
        {
            headers: {
                accept: 'application/vnd.github+json',
                authorization: `token ${token}`
            },
            params: {
                q: `${term} user:${login} is:public in:name`,
                per_page: 100,
                page: 1,
            },
        }).then((resp) => {
        result = resp.data.items
    })
    return result
}
