var interest_btn=document.querySelector(".interest-btn"),modal=document.querySelector(".interest-form"),date_start=modal.querySelector(".input-date-start"),date_end=modal.querySelector(".input-date-end"),adults=modal.querySelector(".amount-adults"),children=modal.querySelector(".amount-children"),am=modal.querySelector(".minus-adults"),ap=modal.querySelector(".plus-adults"),cm=modal.querySelector(".minus-children"),cp=modal.querySelector(".plus-children"),count_adults=2,count_children=0,isStorageSupport=!0,storage_adults="",storage_children="";modal.classList.add("interest-form-hidden");try{storage_adults=localStorage.getItem("Amount-Adults"),storage_children=localStorage.getItem("Amount-Children")}catch(e){isStorageSupport=!1}am.addEventListener("click",function(){count_adults=parseInt(adults.value),--count_adults<0&&(count_adults=0),adults.value=count_adults}),ap.addEventListener("click",function(){count_adults=parseInt(adults.value),count_adults+=1,adults.value=count_adults}),cm.addEventListener("click",function(){count_children=parseInt(children.value),--count_children<0&&(count_children=0),children.value=count_children}),cp.addEventListener("click",function(){count_children=parseInt(children.value),count_children+=1,children.value=count_children}),interest_btn.addEventListener("click",function(e){modal.classList.contains("interest-form-hidden")?(e.preventDefault(),modal.classList.remove("interest-form-hidden"),(storage_adults||storage_children)&&(adults.value=storage_adults,children.value=storage_children)):(e.preventDefault(),modal.classList.add("interest-form-hidden"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(modal.classList.contains("interest-form-hidden")||(e.preventDefault(),modal.classList.add("interest-form-hidden")))}),modal.addEventListener("submit",function(e){!date_start.value||!date_end.value||0==parseInt(adults.value)&&0==parseInt(children.value)||parseInt(adults.value)<0||parseInt(children.value)<0?(alert("Проверьте правильность заполненных данных"),e.preventDefault()):isStorageSupport&&(localStorage.setItem("Amount-Adults",adults.value),localStorage.setItem("Amount-Children",children.value))});