import fetch from "node-fetch";
import moment from "moment";

let psi_old = 0;
const TIME_CHECK = 20000;
let time = TIME_CHECK;
let data_old = null;

async function check() {
  let data = null;
  let errorInd = "";
  // `https://resultados.tse.jus.br/oficial/ele2022/544/dados-simplificados/br/br-c0001-e000544-r.json`,
  const response = await fetch(
    `https://resultados.tse.jus.br/oficial/ele2022/545/dados-simplificados/br/br-c0001-e000545-r.json`,
    {
      method: "get",
    }
  );
  try {
    data = await response.json();
    data.cand.forEach((cand) => {
      delete cand.cc;
      delete cand.sqcand;
      delete cand.seq;
      delete cand.nv;
      delete cand.dvt;
    });
    data_old = data;
    time = TIME_CHECK;
    setTimeout(() => {
      check();
    }, time);
  } catch (error) {
    errorInd = "(e)";
    data = data_old;
    time += 5000;
    setTimeout(() => {
      check();
    }, time);
  }
  // console.log(data);
  console.clear();
  let total = parseInt(data.vnom);
  let percent = parseFloat(data.psi);
  let meta = parseInt((total * 100) / percent / 2 + 1);
  let totalLula = 0;
  data.cand.forEach((cand) => {
    if (cand.n == "13") {
      totalLula = parseInt(cand.vap);
    }
  });
  let falta = totalLula - meta;
  console.log(
    `${data.psi}% (${total.toLocaleString(
      "pt-BR"
    )}) Meta: ${meta.toLocaleString("pt-BR")} (${falta.toLocaleString(
      "pt-BR"
    )}) | ${data.ht} / ${moment().format("HH:mm:ss")} ${errorInd}`
  );

  console.table(data.cand);
}
console.clear();
check();
