var product_test = localStorage.getItem("product_test")
var productcounter
var checkoutbtn = document.getElementById('checkoutbtn')
var fullid = localStorage.getItem("fullorderid")

console.log(fullid)

checkoutbtn.addEventListener("click", () => {
    sendOrder()
})

function generatenewid() {
    let value1 = Math.floor(Math.random() * 10000)
    let value2 = Math.floor(Math.random() * 10000)
    localStorage.setItem("fullorderid", `${value1}-${value2}`)
}

var productspurchased = ""

function sendOrder() {
    if(localStorage.getItem("product_test") == "1" || 1 ) {
        if(productspurchased == "") {
            productspurchased = "Test"
        } else {
            productspurchased = (productspurchased + ", Test")
        }
    }

    console.log(fullid + " was sent to the NRM servers")
    const url = 'https://discord.com/api/webhooks/1043152536246431886/QZiTsTNifIXuhRYMUhJd5eMKVsVw3AyewBMU2nG6E_v1Uee_CdEI4_sM6t2gekNRgOHP'
    const msg = {
        "content": `Order \`${fullid}\`\n${productspurchased}`
    }

    fetch(url, {
        "method": "POST",
        "headers": { "content-type": "application/json" },
        "body": JSON.stringify(msg)
    })
    generatenewid()
    setTimeout(() => {
        window.location.replace('./order.html?oid_success')
    }, 500);
}



setInterval(() => {
    document.getElementById("orderiddisplay").innerHTML = fullid
}, 100);