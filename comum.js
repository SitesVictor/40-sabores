// 40 Sabores — esboço (dados do Instagram oficial; confirmar com a rede)
const WHATSAPP_REDE = "5527999288961";
const LOJAS = [
  { uf:"ES", cidade:"Alfredo Chaves", nome:"40 Sabores Alfredo Chaves", end:"Rua Lauro Ferreira Pinto, 407, Centro", zap:"5527999756544", insta:"40sabores_alfredochaves", tag:"Opções sem lactose e sem açúcar" },
  { uf:"ES", cidade:"Aracruz", nome:"40 Sabores Aracruz", end:"Shopping Oriundi e Centro", zap:"", insta:"40saboresaracruz", tag:"Delivery" },
  { uf:"ES", cidade:"Ibiraçu", nome:"40 Sabores Ibiraçu", end:"Av. Conde D'Eu, 449, Centro", zap:"", insta:"40sabores.ibiracu", tag:"Seg a sáb, 11h às 22h" },
  { uf:"ES", cidade:"Serra", nome:"40 Sabores Nova Almeida", end:"Nova Almeida", zap:"5527996709924", insta:"40saboresnovaalmeida", tag:"" },
  { uf:"ES", cidade:"Serra", nome:"40 Sabores Praia de Jacaraípe", end:"Av. Nossa Senhora dos Navegantes, 1293", zap:"", insta:"40saborespraiajacaraipe", tag:"Todo dia, 10h às 22h" },
  { uf:"ES", cidade:"Serra", nome:"40 Sabores Carone", end:"Carone Mall, Av. Eldes Scherrer Souza, Laranjeiras", zap:"", insta:"40sabores.carone", tag:"" },
  { uf:"ES", cidade:"Serra", nome:"40 Sabores Laranjeiras", end:"Av. Central, 202, Parque Residencial Laranjeiras", zap:"5527996014457", insta:"40sabores_laranjeiras", tag:"" },
  { uf:"ES", cidade:"Vitória", nome:"40 Sabores Maria Ortiz", end:"Av. Prof. Fernando Duarte Rabelo, 560", zap:"", insta:"40sabores.mariaortiz", tag:"" },
  { uf:"ES", cidade:"Vitória", nome:"40 Sabores Rua da Lama", end:"Av. Anísio Fernandes Coelho, 1645, Loja 05, Jardim da Penha", zap:"", insta:"40sabores.ruadalama", tag:"" },
  { uf:"ES", cidade:"Vitória", nome:"40 Sabores Orla de Camburi", end:"R. Anísio Fernandes Coelho, 30, Loja 4, Jardim da Penha", zap:"", insta:"40sabores_orlacamburi", tag:"" },
  { uf:"ES", cidade:"Vitória", nome:"40 Sabores Jardim Camburi", end:"Av. Gov. Carlos Lindenberg, 40, Jardim Camburi", zap:"", insta:"40saboresjc", tag:"" },
  { uf:"ES", cidade:"Vitória", nome:"40 Sabores Praia do Canto", end:"Av. Rio Branco, 1645, Loja 12, Praia do Canto", zap:"", insta:"40saborespc", tag:"" },
  { uf:"ES", cidade:"Vitória", nome:"40 Sabores Mata da Praia", end:"Mata da Praia", zap:"", insta:"40saboresmatadapraia", tag:"" },
  { uf:"ES", cidade:"Vitória", nome:"40 Sabores Bento Ferreira", end:"Bento Ferreira", zap:"", insta:"40saboresbentoferreira.es", tag:"Pedir e retirar" },
  { uf:"ES", cidade:"Vila Velha", nome:"40 Sabores Interlagos", end:"Rodovia do Sol, km 21, Interlagos", zap:"5527997095381", insta:"40saboresinterlagos", tag:"" },
  { uf:"ES", cidade:"Vila Velha", nome:"40 Sabores Praia de Itaparica", end:"Av. Saturnino Rangel Mauro, 2960, Loja 7, Itaparica", zap:"", insta:"40saboresitaparica", tag:"" },
  { uf:"ES", cidade:"Vila Velha", nome:"40 Sabores Praia da Costa", end:"R. José Pena Medina, 195, Praia da Costa", zap:"", insta:"40praiadacosta", tag:"3 lojas em Vila Velha" },
  { uf:"ES", cidade:"Cariacica", nome:"40 Sabores Cariacica", end:"Av. Jerusalém, Vila Palestina", zap:"", insta:"40saborescariacica", tag:"Todo dia, 13h às 22h" },
  { uf:"ES", cidade:"Cachoeiro de Itapemirim", nome:"40 Sabores Cachoeiro", end:"Gilberto Machado, Cristiano Dias Lopes, 83", zap:"", insta:"40saborescachoeiro", tag:"" },
  { uf:"ES", cidade:"Colatina", nome:"40 Sabores Colatina", end:"Av. Beira Rio, ao lado do Caraíva Bar", zap:"", insta:"40sabores.colatina", tag:"" },
  { uf:"ES", cidade:"Domingos Martins", nome:"40 Sabores Domingos Martins", end:"Domingos Martins", zap:"", insta:"40saboresdm", tag:"Desde 2013" },
  { uf:"ES", cidade:"Guarapari", nome:"40 Sabores Praia do Morro", end:"Loja 1: Shopping Beira Mar · Loja 2: próximo ao Quiosque 8", zap:"", insta:"40saborespraiadomorro", tag:"Encomendas e entregas" },
  { uf:"ES", cidade:"Guarapari", nome:"40 Sabores Guarapari", end:"Centro", zap:"", insta:"40saboresguarapari", tag:"Sem gordura, lactose e glúten" },
  { uf:"ES", cidade:"Anchieta", nome:"40 Sabores Iriri", end:"Av. Dom Euvécio, 337, Iriri", zap:"", insta:"40saboresbeach", tag:"Sorvetes, picolés e açaí" },
  { uf:"ES", cidade:"Piúma", nome:"40 Sabores Piúma", end:"Av. Beira Mar, 2118", zap:"", insta:"40saborespiuma", tag:"Café e sobremesas" },
  { uf:"RJ", cidade:"Rio de Janeiro", nome:"40 Sabores Crystal Mall", end:"Crystal Mall", zap:"", insta:"40sabores.rj", tag:"Também tem cafeteria" },
  { uf:"RJ", cidade:"Rio de Janeiro", nome:"40 Sabores Barra da Tijuca", end:"Barra da Tijuca", zap:"", insta:"40saboresbarra", tag:"" },
  { uf:"RJ", cidade:"Rio de Janeiro", nome:"40 Sabores Tijuca", end:"Tijuca", zap:"", insta:"40saborestijuca", tag:"" },
  { uf:"RJ", cidade:"Rio de Janeiro", nome:"40 Sabores Recreio", end:"Av. Guilherme de Almeida, 83, Recreio", zap:"", insta:"40saboresrecreio", tag:"" },
  { uf:"MG", cidade:"Contagem", nome:"40 Sabores Contagem", end:"Rua Dom Silvério, 150, Loja 4", zap:"", insta:"40saborescontagem", tag:"Tel. (31) 2585-2909" }
];
const zap = (num, txt) => "https://wa.me/" + num + "?text=" + encodeURIComponent(txt);
const ZAP_ICO = '<svg viewBox="0 0 24 24" width="30" height="30" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.2 1.2-1.7 1.2-.4.1-1 .2-3.200-.7-2.700-1.100-4.400-3.800-4.600-4-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 2c.1.200.1.400 0 .5l-.4.600c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.200 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1l.9-1.100c.2-.3.400-.2.600-.1l1.900.9c.3.100.5.200.5.300.1.200.1.700-.1 1.200z"/></svg>';
const CONE = '<svg viewBox="0 0 200 280" aria-hidden="true"><path d="M52 118h96L100 262z" fill="#E9A64A" stroke="#2A1409" stroke-width="6" stroke-linejoin="round"/><path d="M70 130l30 112M100 126v124M130 130l-30 112M60 150h80M72 190h56" stroke="#2A1409" stroke-width="3" opacity=".3"/><circle cx="100" cy="92" r="52" fill="#fff" stroke="#2A1409" stroke-width="6"/><circle cx="100" cy="52" r="40" fill="#E8334F" stroke="#2A1409" stroke-width="6"/><circle cx="100" cy="14" r="10" fill="#2A1409"/></svg>';
const SABORES = ["Nutella","Jaca","Picolé de morango zero","Chocolate com calda","Açaí","Milkshake","Sem lactose","Sem açúcar","Casquinha crocante","Cascão recheado"];

function montarLayout(pagina){
  const m = document.createElement("header"); m.className = "menu";
  m.innerHTML = `<a class="logo" href="index.html" aria-label="40 Sabores, início"><span class="n">40</span><span>Sabores</span></a>
   <nav aria-label="Principal"><a href="index.html" class="${pagina==="inicio"?"on":""}">Início</a><a href="lojas.html" class="${pagina==="lojas"?"on":""}">Lojas</a><a class="cta" href="${zap(WHATSAPP_REDE,'Olá, 40 Sabores! Vim pelo site.')}" target="_blank" rel="noopener">WhatsApp</a></nav>`;
  document.body.prepend(m);
  addEventListener("scroll", () => m.classList.toggle("pequeno", scrollY > 40), { passive:true });
  const f = document.createElement("footer");
  f.innerHTML = `<div class="wrap"><div class="cols">
    <div><h4>40 Sabores</h4><p>Sorvetes com fabricação própria e tradição capixaba, desde 1989.</p></div>
    <div><h4>Navegue</h4><ul><li><a href="index.html">Início</a></li><li><a href="lojas.html">Encontre uma loja</a></li></ul></div>
    <div><h4>Fale com a rede</h4><ul><li><a href="${zap(WHATSAPP_REDE,"Olá, 40 Sabores! Vim pelo site.")}" target="_blank" rel="noopener">WhatsApp (27) 99928-8961</a></li><li><a href="https://www.instagram.com/40saboresofc/" target="_blank" rel="noopener">Instagram @40saboresofc</a></li></ul></div>
  </div><p class="demo">Esboço de demonstração. Ainda não é o site oficial da rede.</p>
  <div class="credito-dev"><a href="https://wa.me/5528992795614" target="_blank" rel="noopener" aria-label="Site desenvolvido por GriffoVictor"><span>Desenvolvido por</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 215 72" role="img" aria-label="GriffoVictor"><title>GriffoVictor</title><style>.gv-i{fill:var(--griffo-tinta,currentColor)}.gv-a{fill:var(--griffo-destaque,#C9922B)}.gv-t1{fill:var(--griffo-tinta,currentColor)}.gv-t2{fill:var(--griffo-tinta,currentColor);fill-opacity:.62}</style><g transform="translate(2,0) scale(0.0346)"><path class="gv-a" d="M853,1341 C852,1339 852,1336 854,1333 C856,1329 856,1328 867,1311 C872,1303 915,1230 923,1216 C924,1215 930,1204 937,1194 L948,1174 L1119,1174 C1277,1174 1555,1174 1566,1174 C1578,1174 1575,1177 1471,1287 L1417,1344 L1135,1344 C882,1344 854,1344 853,1341 Z M1612,1088 C1612,1086 1614,1080 1616,1077 C1639,1044 1642,1011 1625,996 C1599,974 1546,964 1448,964 L1392,964 L1378,953 C1351,932 1305,913 1258,902 C1241,898 1240,897 1240,892 C1240,888 1243,884 1254,876 C1272,860 1397,756 1428,730 C1452,710 1526,648 1558,622 C1567,616 1575,610 1577,610 C1578,610 1586,616 1593,624 C1663,698 1709,781 1722,858 C1740,959 1704,1052 1633,1087 C1616,1096 1612,1096 1612,1088 Z M560,532 C429,519 325,456 251,345 C219,297 184,210 197,210 C198,210 232,223 272,239 C311,255 357,273 375,280 C393,287 438,305 477,320 C580,359 606,370 653,388 C676,397 701,407 709,410 C731,419 730,422 701,441 C666,463 636,487 608,512 C591,528 583,534 580,534 C577,534 568,533 560,532 Z" fill-rule="evenodd"/><path class="gv-i" d="M804,2022 C481,2000 206,1768 129,1451 C100,1331 102,1201 136,1082 C148,1038 167,991 187,949 C194,935 200,922 200,921 C199,920 191,911 181,902 C137,862 105,820 80,771 C69,749 58,722 58,717 C58,713 70,714 102,719 C125,723 127,724 141,725 C148,726 159,727 166,728 C182,731 182,731 214,735 C228,737 254,740 273,743 C292,746 312,748 318,749 C324,750 338,752 348,753 C358,755 376,757 386,758 C396,759 414,761 424,763 C446,766 442,769 465,737 C584,573 759,458 953,417 C1127,380 1322,413 1468,504 C1501,524 1564,572 1564,577 C1564,578 1554,586 1543,595 C1531,603 1522,611 1522,612 C1522,613 1518,616 1514,618 C1504,625 1440,677 1395,716 C1384,725 1369,738 1361,744 C1353,751 1345,758 1343,761 C1341,763 1332,771 1324,778 C1316,784 1305,794 1300,799 C1290,810 1291,810 1271,802 C1146,755 983,750 845,789 C545,874 329,1147 363,1400 C390,1600 554,1775 753,1816 C925,1850 1083,1805 1214,1683 C1254,1646 1274,1622 1400,1463 C1438,1415 1461,1387 1488,1358 C1515,1327 1588,1254 1591,1254 C1596,1254 1594,1320 1587,1372 C1535,1761 1189,2048 804,2022 Z M827,1665 C764,1654 711,1630 662,1588 C577,1518 525,1392 545,1309 C566,1227 620,1141 701,1062 C775,990 859,945 955,924 C997,915 1015,913 1067,913 C1160,913 1223,926 1327,966 C1354,976 1347,979 1292,978 C1098,976 956,1046 849,1197 C814,1246 773,1319 752,1369 C701,1490 713,1541 795,1562 C844,1574 948,1576 1092,1565 C1113,1563 1131,1563 1132,1563 C1135,1565 1130,1570 1110,1586 C1060,1626 1012,1649 953,1661 C921,1668 855,1670 827,1665 Z M388,720 C313,708 254,684 199,641 C175,621 138,583 120,557 C98,524 70,469 74,465 C75,464 94,467 115,472 C137,477 161,482 169,483 C177,485 185,486 187,487 C189,487 203,490 217,493 C231,496 244,499 245,499 C246,499 251,500 255,501 C261,502 320,514 381,527 C383,528 398,531 413,534 C428,538 447,542 455,543 C524,557 552,564 552,566 C552,567 543,576 533,586 C491,627 457,667 435,700 C427,712 420,722 419,722 C416,724 418,724 388,720 Z M1223,689 C1245,684 1271,670 1285,654 C1288,650 1288,650 1284,648 C1186,589 1159,575 1127,567 C1087,557 1036,560 1004,574 L997,577 L1015,578 C1044,581 1053,586 1092,626 C1133,668 1145,677 1170,685 C1191,692 1204,693 1223,689 Z M739,390 C567,345 455,235 423,80 C418,56 418,56 441,74 C552,162 727,250 909,311 C965,330 968,331 959,333 C922,342 855,363 806,382 C767,398 768,398 739,390 Z" fill-rule="evenodd"/></g><path class="gv-t1" d="M92.5 33.2C97.6 33.2 101.3 30.0 101.3 24.6V22.1H92.8V25.3H97.2C97.1 27.9 95.4 29.5 92.5 29.5C89.2 29.5 87.1 27.1 87.1 22.8C87.1 18.4 89.3 16.0 92.4 16.0C94.7 16.0 96.2 17.2 96.8 19.1H101.1C100.5 15.1 97.0 12.3 92.4 12.3C87.0 12.3 82.9 16.2 82.9 22.8C82.9 29.2 86.8 33.2 92.5 33.2Z M108.4 33.0H112.5V25.7H115.8L119.7 33.0H124.3L120.0 25.0C122.3 24.0 123.6 22.0 123.6 19.2C123.6 15.2 121.0 12.6 116.3 12.6H108.4ZM112.5 22.3V16.0H115.5C118.1 16.0 119.3 17.2 119.3 19.2C119.3 21.2 118.1 22.3 115.6 22.3Z M134.9 12.6H130.7V33.0H134.9Z M142.5 33.0H146.6V25.1H155.0V21.7H146.6V16.0H155.9V12.6H142.5Z M162.8 33.0H167.0V25.1H175.3V21.7H167.0V16.0H176.2V12.6H162.8Z M192.1 33.2C197.5 33.2 201.6 29.4 201.6 22.8C201.6 16.1 197.5 12.3 192.1 12.3C186.7 12.3 182.6 16.1 182.6 22.8C182.6 29.4 186.7 33.2 192.1 33.2ZM192.1 29.5C189.0 29.5 186.9 27.1 186.9 22.8C186.9 18.4 189.0 16.0 192.1 16.0C195.3 16.0 197.4 18.4 197.4 22.8C197.4 27.1 195.3 29.5 192.1 29.5Z"/><path class="gv-t2" d="M89.9 63.0H92.2L99.7 42.6H97.6L92.9 55.9C92.4 57.2 91.8 58.9 91.1 61.4C90.3 59.0 89.7 57.2 89.3 55.9L84.4 42.6H82.4Z M109.0 42.6H107.1V63.0H109.0Z M126.3 63.2C130.6 63.2 133.7 60.3 134.3 56.6H132.4C131.8 59.3 129.4 61.4 126.3 61.4C122.4 61.4 119.3 58.4 119.3 52.8C119.3 47.2 122.4 44.1 126.3 44.1C129.4 44.1 131.8 46.2 132.4 49.0H134.3C133.7 45.2 130.6 42.3 126.3 42.3C121.1 42.3 117.4 46.4 117.4 52.8C117.4 59.2 121.1 63.2 126.3 63.2Z M141.4 44.3H147.9V63.0H149.8V44.3H156.3V42.6H141.4Z M172.3 63.2C177.5 63.2 181.1 59.1 181.1 52.8C181.1 46.4 177.5 42.3 172.3 42.3C167.1 42.3 163.5 46.4 163.5 52.8C163.5 59.1 167.1 63.2 172.3 63.2ZM172.3 61.4C168.3 61.4 165.3 58.2 165.3 52.8C165.3 47.3 168.3 44.1 172.3 44.1C176.3 44.1 179.2 47.3 179.2 52.8C179.2 58.2 176.3 61.4 172.3 61.4Z M189.5 63.0H191.5V54.8H196.2C196.4 54.8 196.7 54.7 196.9 54.7L201.3 63.0H203.6L198.9 54.4C201.4 53.5 202.7 51.4 202.7 48.7C202.7 45.1 200.5 42.6 196.2 42.6H189.5ZM191.5 53.0V44.3H196.1C199.3 44.3 200.8 46.1 200.8 48.7C200.8 51.3 199.3 53.0 196.1 53.0Z"/></svg></a></div></div>`;
  document.body.append(f);
  const z = document.createElement("a"); z.className="zapfix"; z.target="_blank"; z.rel="noopener"; z.href=zap(WHATSAPP_REDE,"Olá, 40 Sabores! Vim pelo site."); z.setAttribute("aria-label","Falar no WhatsApp"); z.innerHTML=ZAP_ICO; document.body.append(z);
}
const reduz = matchMedia("(prefers-reduced-motion: reduce)").matches;
function efeitosHome(){
  document.documentElement.classList.add("js");
  const ro = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting){ e.target.classList.add("in"); ro.unobserve(e.target); } }), { threshold:.15 });
  document.querySelectorAll(".t").forEach((t,i) => { t.style.setProperty("--k", i%4); ro.observe(t); });
  // parallax suave nas fotos do topo
  const h = document.querySelector(".hero");
  if (h && !reduz && matchMedia("(pointer:fine)").matches) h.addEventListener("pointermove", e => {
    const r = h.getBoundingClientRect();
    h.style.setProperty("--px", ((e.clientX - r.left)/r.width - .5).toFixed(3));
    h.style.setProperty("--py", ((e.clientY - r.top)/r.height - .5).toFixed(3));
  });
  // contador dos números quando aparecem
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return; io.unobserve(e.target);
    const el = e.target, fim = +el.dataset.n, pre = el.dataset.pre || "";
    if (reduz) { el.textContent = pre + fim; return; }
    const t0 = performance.now(), dur = 1400;
    (function passo(t){ const p = Math.min(1,(t-t0)/dur), v = Math.round(fim*(1-Math.pow(1-p,3))); el.textContent = pre + v; if (p<1) requestAnimationFrame(passo); })(t0);
  }), { threshold:.6 });
  document.querySelectorAll("[data-n]").forEach(n => io.observe(n));
}
