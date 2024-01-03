(() => {
    const form = document.querySelector("form")
    const org_text = document.querySelector("input")

    form.addEventListener("submit", e => {
        try {
            e.preventDefault()

            console.log(org_text)

            fetch(`/translate?org_text=${org_text.value}`)
                .then(res => res.json())
                .then(data => { 
                    
                    if(!data) {
                        console.log("Something went wrong!")
                        return
                    }
                    
                    let tran_text = data.result[0].translations[0].text
                    
                    console.log("Translated Text : ", tran_text)
                }, console.error)
        } catch (e) {
            console.log("Error While  submiting the form : ", e)
        }

    })

})()