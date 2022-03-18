export const fetchRequest = async (setUser, username, email, password) => {
    try {
        const response = await fetch (`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        });
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem("myToken", data.token);
    } catch (error) {
        console.log(error)
    }
}

export const tokenFetch = async (setUser) => {
    try {
        const token = localStorage.getItem("myToken");
        const response = await fetch(`${process.env.REACT_APP_REST_API}token`, {
            method: "GET",
            headers: { 'Authorization': `Bearer ${token}`}
        });
        const data = await response.json();
        setUser(data.user)
    } catch (error) {
        console.log(error)
    }
}