import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form");let t={email:"",message:""};try{if(localStorage.getItem("feedback-form-state")){t=JSON.parse(localStorage.getItem("feedback-form-state"));for(const e in t)a.elements[e].value=t[e]}}catch(e){console.log(e)}const o=e=>{t[e.target.name]=e.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(t))},l=e=>{e.preventDefault(),Object.values(t).every(r=>r.trim()!=="")?(console.log(t),localStorage.removeItem("feedback-form-state"),t={},a.reset()):alert("Fill please all fields")};a.addEventListener("input",o);a.addEventListener("submit",l);
//# sourceMappingURL=2-form.js.map
