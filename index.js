"use strict";
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

const circle = document.querySelector(".circle");
const samecircle = document.querySelectorAll(".same--circle");
const main = document.querySelector(".main");
const grid = document.querySelector(".grid");
const gridBg = document.querySelectorAll(".gridBg");
const sameBtn = document.querySelectorAll(".same");
const text = document.querySelectorAll(".txt");

const eachBtn = document.querySelectorAll(".btn");
const input = document.querySelector(".number");
const delBtn = document.querySelector(".del");
const btnReset = document.querySelector(".btn--reset");
const btnEqualTo = document.querySelector(".btn--equal");
const times = document.querySelector(".times");

one.addEventListener("click", function () {
  circle.style.left = "0%";
  samecircle.forEach((btn) => {
    btn.style.backgroundColor = " hsl(6, 63%, 50%)";
  });
  main.style.backgroundColor = "  hsl(222, 26%, 31%)";
  gridBg.forEach((btn) => {
    btn.style.backgroundColor = " hsl(223, 31%, 20%)";
  });
  sameBtn.forEach((btn) => {
    btn.style.backgroundColor = " hsl(225, 21%, 49%)";
  });
  eachBtn.forEach((each) => {
    each.style.color = " hsl(221, 14%, 31%)";
    each.style.backgroundColor = " hsl(30, 25%, 89%)";
  });
  input.style.color = " #ffffff";
  input.style.backgroundColor = " hsl(224, 36%, 15%)";
  text.forEach((btn) => {
    btn.style.color = " #ffffff";
  });
  btnEqualTo.style.color = "hsl(30, 25%, 89%)";
});

two.addEventListener("click", function () {
  circle.style.left = "30%";
  samecircle.forEach((btn) => {
    btn.style.backgroundColor = "hsl(25, 98%, 40%)";
  });
  main.style.backgroundColor = "hsl(0, 0%, 90%)";
  gridBg.forEach((btn) => {
    btn.style.backgroundColor = "hsl(0, 5%, 81%)";
  });
  sameBtn.forEach((btn) => {
    btn.style.backgroundColor = "hsl(185, 42%, 37%)";
  });
  eachBtn.forEach((each) => {
    each.style.color = "hsl(60, 10%, 19%)";
    each.style.backgroundColor = "hsl(45, 7%, 89%)";
  });
  input.style.color = " #000000";
  input.style.backgroundColor = " hsl(0, 0%, 93%)";
  text.forEach((btn) => {
    btn.style.color = "hsl(60, 10%, 19%)";
  });
  btnEqualTo.style.color = "hsl(30, 25%, 89%)";
});
three.addEventListener("click", function () {
  circle.style.left = "60%";
  samecircle.forEach((btn) => {
    btn.style.backgroundColor = " hsl(176, 100%, 44%)";
  });
  main.style.backgroundColor = " hsl(268, 75%, 9%)";
  gridBg.forEach((btn) => {
    btn.style.backgroundColor = "hsl(268, 71%, 12%)";
  });
  sameBtn.forEach((btn) => {
    btn.style.backgroundColor = "hsl(281, 89%, 26%)";
  });
  eachBtn.forEach((each) => {
    each.style.color = "hsl(52, 100%, 62%)";
    each.style.backgroundColor = " hsl(268, 47%, 21%)";
  });
  input.style.color = "hsl(52, 100%, 62%)";
  input.style.backgroundColor = " hsl(268, 71%, 12%)";
  text.forEach((btn) => {
    btn.style.color = "hsl(52, 100%, 62%)";
  });
  btnEqualTo.style.color = "hsl(198, 20%, 13%)";
});

eachBtn.forEach((num) => {
  num.addEventListener("click", function () {
    input.value += num.textContent;
    console.log(num.textContent);
  });
});

delBtn.addEventListener("click", function () {
  input.value = input.value.slice(0, -1);
});

btnReset.addEventListener("click", function () {
  input.value = "";
});

btnEqualTo.addEventListener("click", function (e) {
  e.preventDefault();
  const values = input.value;
  //   console.log(values);
  const gValues = values.replace("×", "*");
  //   console.log(gValues);
  input.value = eval(gValues);
});
