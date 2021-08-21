// For memory
document.getElementById("memroy_8gb").addEventListener("click", function () {
    const fixed_prize = 1299;
    const extra_memory_cost = document.getElementById("extra-memory-cost").innerText = 0;
    const extra_storage_cost_text=document.getElementById("extra-storage-cost").innerText;
    const extra_storage_cost=parseFloat(extra_storage_cost_text);
    const delivery_charge_text=document.getElementById("delivery-charge").innerText;
    const delivery_charge=parseFloat(delivery_charge_text);
    document.getElementById("total-price").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
    document.getElementById("total_price_last").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
})

document.getElementById("memroy_16gb").addEventListener("click", function () {
    const fixed_prize = 1299;
    const extra_memory_cost = document.getElementById("extra-memory-cost").innerText = 180;
    const extra_storage_cost_text=document.getElementById("extra-storage-cost").innerText;
    const extra_storage_cost=parseFloat(extra_storage_cost_text);
    const delivery_charge_text=document.getElementById("delivery-charge").innerText;
    const delivery_charge=parseFloat(delivery_charge_text);
    document.getElementById("total-price").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
    document.getElementById("total_price_last").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
})


// For All Storage
document.getElementById("ssd_256gb").addEventListener("click", function () {
    const fixed_prize = 1299;
    const extra_storage_cost = document.getElementById("extra-storage-cost").innerText = 0;
    const extra_memory_cost_text=document.getElementById("extra-memory-cost").innerText;
    const extra_memory_cost=parseFloat(extra_memory_cost_text);
    const delivery_charge_text=document.getElementById("delivery-charge").innerText;
    const delivery_charge=parseFloat(delivery_charge_text);
    document.getElementById("total-price").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
    document.getElementById("total_price_last").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
})
document.getElementById("ssd_512gb").addEventListener("click", function () {
    const fixed_prize = 1299;
    const extra_storage_cost = document.getElementById("extra-storage-cost").innerText = 100;
    const extra_memory_cost_text=document.getElementById("extra-memory-cost").innerText;
    const extra_memory_cost=parseFloat(extra_memory_cost_text);
    const delivery_charge_text=document.getElementById("delivery-charge").innerText;
    const delivery_charge=parseFloat(delivery_charge_text);
    document.getElementById("total-price").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
    document.getElementById("total_price_last").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
})
document.getElementById("ssd_1TB").addEventListener("click", function () {
    const fixed_prize = 1299;
    const extra_storage_cost = document.getElementById("extra-storage-cost").innerText = 180;
    const extra_memory_cost_text=document.getElementById("extra-memory-cost").innerText;
    const extra_memory_cost=parseFloat(extra_memory_cost_text);
    const delivery_charge_text=document.getElementById("delivery-charge").innerText;
    const delivery_charge=parseFloat(delivery_charge_text);
    document.getElementById("total-price").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
    document.getElementById("total_price_last").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
})

// For delivery
document.getElementById("delivery-free").addEventListener("click", function () {
    const fixed_prize = 1299;
    const delivery_charge=document.getElementById("delivery-charge").innerText=0;
    const extra_storage_cost_text = document.getElementById("extra-storage-cost").innerText;
    const extra_storage_cost=parseFloat(extra_storage_cost_text);
    const extra_memory_cost_text=document.getElementById("extra-memory-cost").innerText;
    const extra_memory_cost=parseFloat(extra_memory_cost_text);
    document.getElementById("total-price").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
    document.getElementById("total_price_last").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
})
document.getElementById("delivery-crg").addEventListener("click", function () {
    const fixed_prize = 1299;
    const delivery_charge=document.getElementById("delivery-charge").innerText=20;
    const extra_storage_cost_text = document.getElementById("extra-storage-cost").innerText;
    const extra_storage_cost=parseFloat(extra_storage_cost_text);
    const extra_memory_cost_text=document.getElementById("extra-memory-cost").innerText;
    const extra_memory_cost=parseFloat(extra_memory_cost_text);
    document.getElementById("total-price").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
    document.getElementById("total_price_last").innerText = extra_memory_cost + fixed_prize+extra_storage_cost+delivery_charge;
})

document.getElementById("promo_button").addEventListener("click",function(){
    const promo_code=document.getElementById("promo-code").value;
    console.log(promo_code);
    if(promo_code== "stevekaku"){
        const total_price_text=document.getElementById("total-price").innerText;
        const total_price=parseFloat(total_price_text);
        const discount=total_price-324.75;
        document.getElementById("total-price").innerText= discount;
        document.getElementById("total_price_last").innerText= discount;
    }
})