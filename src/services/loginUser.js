export async function loginUser (data){
    let formData = new FormData();
    formData.append('username', data.username);
    formData.append('password', data.password);

    console.log(formData)
    const res = await fetch('https://hackathon.voiceteamcall.com?token=dGVhbTA3OjU0eDM2ZDNvcg==', {body: formData, mode: 'no-cors', method: 'POST'})
    const json = await res.json()
    console.log(json)
    return json

}
