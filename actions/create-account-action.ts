"use server"


export async function createAccount(formData: FormData) {

    const {email, name, password}= formData
    console.log(email, name, password)

}