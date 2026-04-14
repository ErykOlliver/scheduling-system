export async function fetchSignUp(data: { name: string, password: string, mail: string }) {
    const res = await fetch("/api/auth/sign-up/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await res.json()
    return result
}