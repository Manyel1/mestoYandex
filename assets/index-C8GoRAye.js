(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();function s(e){e.classList.add("popup_is-opened")}function a(e){e.classList.remove("popup_is-opened")}function I(e){e.classList.add("popup_is-animated")}function f(e,r,c){const{name:n,link:t}=c,o=e.content.cloneNode(!0),u=o.querySelector(".card__image"),q=o.querySelector(".card__title"),L=o.querySelector(".card__like-button"),v=o.querySelector(".card__delete-button");return q.textContent=n,u.setAttribute("src",t),u.setAttribute("alt",n),L.addEventListener("click",function(b){b.currentTarget.classList.toggle("card__like-button_is-active")}),v.addEventListener("click",h),o.querySelector(".card__image").addEventListener("click",()=>r({name:n,link:t})),o}function h(e){e.currentTarget.closest(".card").remove()}const _=document.querySelector("#card-template"),y=document.querySelector(".places__list"),E=document.querySelector(".profile__edit-button"),l=document.querySelector(".popup_type_edit"),C=document.querySelector(".profile__add-button"),d=document.querySelector(".popup_type_new-card"),g=document.querySelectorAll(".popup"),i=document.querySelector(".popup_type_image"),p=l.querySelector('[name="edit-profile"]'),P=p.querySelector('[name="name"]'),k=p.querySelector('[name="description"]'),m=d.querySelector('[name="new-place"]'),O=m.querySelector('[name="place-name"]'),T=m.querySelector('[name="link"]');function S({name:e,link:r}){const c=i.querySelector(".popup__caption"),n=i.querySelector(".popup__image");c.textContent=e,n.setAttribute("src",r),n.setAttribute("alt",e),s(i)}E.addEventListener("click",()=>s(l));C.addEventListener("click",()=>s(d));document.addEventListener("DOMContentLoaded",()=>{setTimeout(()=>g.forEach(e=>I(e)),10)});g.forEach(e=>{e.addEventListener("click",c=>{c.target===c.currentTarget&&a(e)}),e.querySelector(".popup__close").addEventListener("click",()=>a(e))});function w(e){e.forEach(r=>{y.prepend(f(_,S,r))})}function A(e){e.preventDefault();const r=P.value,c=k.value,n=document.querySelector(".profile__title"),t=document.querySelector(".profile__description");n.textContent=r,t.textContent=c,a(l)}p.addEventListener("submit",A);function N(e){e.preventDefault();const r=O.value,c=T.value,n=f(_,S,{name:r,link:c});y.prepend(n),a(d)}m.addEventListener("submit",N);fetch("https://672e39b9229a881691ef64e7.mockapi.io/cards").then(e=>e.json()).then(e=>{w(e)}).catch(e=>console.error("Error:",e));