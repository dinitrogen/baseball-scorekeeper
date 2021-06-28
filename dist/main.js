(()=>{"use strict";function t(t,e){const n=document.createElement("button");n.setAttribute("id",t),n.setAttribute("class","navButton");const o=document.createElement("span");return o.textContent=e,n.appendChild(o),n}let e={inningHalf:"Top",numInning:1,awayRuns:0,homeRuns:0,numBalls:0,numStrikes:0,numOuts:0};function n(t,e){const n=document.createElement("button");n.setAttribute("class","counterButton"),n.setAttribute("id",t);const o=document.createElement("span");return o.textContent=e,n.appendChild(o),n}function o(t){const e=document.createElement("div");return e.setAttribute("class","container"),e.setAttribute("id",t),e}function u(){3===e.numBalls?(e.numBalls=0,e.numStrikes=0):e.numBalls++,ballCounter.textContent=`B: ${e.numBalls}`,strikeCounter.textContent=`S: ${e.numStrikes}`,outCounter.textContent=`O: ${e.numOuts}`,m()}function i(){2===e.numStrikes?(e.numStrikes=0,e.numBalls=0,d()):e.numStrikes++,ballCounter.textContent=`B: ${e.numBalls}`,strikeCounter.textContent=`S: ${e.numStrikes}`,outCounter.textContent=`O: ${e.numOuts}`,m()}function d(){2===e.numOuts?(e.numOuts=0,e.numBalls=0,e.numStrikes=0):e.numOuts++,ballCounter.textContent=`B: ${e.numBalls}`,strikeCounter.textContent=`S: ${e.numStrikes}`,outCounter.textContent=`O: ${e.numOuts}`,m()}function a(){e.awayRuns>24?e.awayRuns=0:e.awayRuns++,runCounterAway.textContent=`Away: ${e.awayRuns}`,m()}function s(){e.homeRuns>24?e.homeRuns=0:e.homeRuns++,runCounterHome.textContent=`Home: ${e.homeRuns}`,m()}function l(){e.numInning>9?(e.inningHalf="Top",e.numInning=1):"Top"==e.inningHalf?e.inningHalf="Bottom":(e.inningHalf="Top",e.numInning++),inningCounter.textContent=`${e.inningHalf} ${e.numInning}`,m()}function r(t,e){document.getElementById("batterInfo").textContent=`Up to bat: ${t}, #${e}`}function c(){localStorage.getItem("mySavedGame")&&(e=JSON.parse(localStorage.getItem("mySavedGame")));let t,p=[];localStorage.getItem("mySavedRoster")&&(p=JSON.parse(localStorage.getItem("mySavedRoster"))),t=localStorage.getItem("savedBatterIndex")?localStorage.getItem("savedBatterIndex"):0,console.log(t),console.log(p),localStorage.setItem("savedBatterIndex",t);const C=function(t,e){const n=document.createElement("h1");return n.setAttribute("id","atBatHeader"),n.textContent="At Bat Tracker",n}(),b=function(){const t=document.createElement("div");t.setAttribute("id","batterInfoDiv");const e=document.createElement("p");return e.setAttribute("id","batterInfo"),e.textContent="Up to bat:",t.appendChild(e),t}(),h=o("inningDiv"),E=o("scoreDiv"),A=o("BSODiv"),B=o("outcomeDiv"),y=document.createElement("button");y.setAttribute("id","nextBatterButton"),y.textContent="Next batter",y.addEventListener("click",(function(){e.numBalls=0,e.numStrikes=0,S.textContent=`B: ${e.numBalls}`,x.textContent=`S: ${e.numStrikes}`,m(),0!==p.length&&(t>=p.length-1?t=0:t++,r(p[t].firstName,p[t].jerseyNum),localStorage.setItem("savedBatterIndex",t))})),b.appendChild(y);const g=function(){const t=n("inningCounter",`${e.inningHalf} ${e.numInning}`);return t.addEventListener("click",l),t}();h.appendChild(g);const f=function(){const t=n("runCounterAway",`Away: ${e.awayRuns}`);return t.addEventListener("click",a),t}();E.appendChild(f);const v=function(){const t=n("runCounterHome",`Home: ${e.homeRuns}`);return t.addEventListener("click",s),t}();E.appendChild(v);const S=function(){const t=n("ballCounter",`B: ${e.numBalls}`);return t.addEventListener("click",u),t}();A.appendChild(S);const x=function(){const t=n("strikeCounter",`S: ${e.numStrikes}`);return t.addEventListener("click",i),t}();A.appendChild(x);const I=function(){const t=n("outCounter",`O: ${e.numOuts}`);return t.addEventListener("click",d),t}();A.appendChild(I);const k=document.getElementById("tabContent");k.textContent="",k.appendChild(C),k.appendChild(b),k.appendChild(h),k.appendChild(E),k.appendChild(A),p.length>0&&r(p[t].firstName,p[t].jerseyNum);const R=document.createElement("button");R.setAttribute("class","hitButton"),R.setAttribute("id","singleButton"),R.textContent="1B",R.addEventListener("click",(function(){p[t].numPA++,p[t].numSingles++,console.log(p[t].numSingles),localStorage.setItem("mySavedRoster",JSON.stringify(p))})),B.appendChild(R);const N=document.createElement("button");N.setAttribute("class","hitButton"),N.setAttribute("id","doubleButton"),N.textContent="2B",N.addEventListener("click",(function(){p[t].numPA++,p[t].numDoubles++,console.log(p[t].numDoubles),localStorage.setItem("mySavedRoster",JSON.stringify(p))})),B.appendChild(N);const $=document.createElement("button");$.setAttribute("id","tripleButton"),$.setAttribute("class","hitButton"),$.textContent="3B",$.addEventListener("click",(function(){p[t].numPA++,p[t].numTriples++,console.log(p[t].numTriples),localStorage.setItem("mySavedRoster",JSON.stringify(p))})),B.appendChild($);const P=document.createElement("button");P.setAttribute("id","homerunButton"),P.setAttribute("class","hitButton"),P.textContent="HR",P.addEventListener("click",(function(){p[t].numPA++,p[t].numHRs++,console.log(p[t].numHRs),localStorage.setItem("mySavedRoster",JSON.stringify(p))})),B.appendChild(P);const H=document.createElement("button");H.setAttribute("id","walkButton"),H.setAttribute("class","hitButton"),H.textContent="BB",H.addEventListener("click",(function(){p[t].numPA++,p[t].numWalks++,console.log(p[t].numWalks),localStorage.setItem("mySavedRoster",JSON.stringify(p))})),B.appendChild(H);const O=document.createElement("button");O.setAttribute("id","strikeoutButton"),O.setAttribute("class","hitButton"),O.textContent="SO",O.addEventListener("click",(function(){p[t].numPA++,p[t].numStrikeouts++,console.log(p[t].numStrikeouts),localStorage.setItem("mySavedRoster",JSON.stringify(p))})),B.appendChild(O);const L=document.createElement("button");L.setAttribute("id","hbpButton"),L.setAttribute("class","hitButton"),L.textContent="HBP",L.addEventListener("click",(function(){p[t].numPA++,p[t].numHBPs++,console.log(p[t].numHBPs),localStorage.setItem("mySavedRoster",JSON.stringify(p))})),B.appendChild(L);const w=document.createElement("button");w.setAttribute("id","sacButton"),w.setAttribute("class","hitButton"),w.textContent="SF",w.addEventListener("click",(function(){p[t].numPA++,p[t].numSacs++,console.log(p[t].numSacs),localStorage.setItem("mySavedRoster",JSON.stringify(p))})),B.appendChild(w);const D=document.createElement("button");D.setAttribute("id","rbiButton"),D.setAttribute("class","hitButton"),D.textContent="RBI",D.addEventListener("click",(function(){p[t].numRBIs++,console.log(p[t].numRBIs),localStorage.setItem("mySavedRoster",JSON.stringify(p))})),B.appendChild(D),k.appendChild(B);const J=document.createElement("button");J.setAttribute("id","newGameButton"),J.textContent="New game",J.addEventListener("click",(function(){"yes"===prompt("Are you sure? (type 'yes')")&&(localStorage.removeItem("mySavedGame"),localStorage.removeItem("savedBatterIndex"),e.inningHalf="Top",e.numInning=1,e.awayRuns=0,e.homeRuns=0,e.numBalls=0,e.numStrikes=0,e.numOuts=0,c())}));const T=document.createElement("div");T.setAttribute("id","newGameDiv"),T.appendChild(J),k.appendChild(T)}function m(){localStorage.setItem("mySavedGame",JSON.stringify(e))}let p=[];function C(t){return t.numPA-t.numWalks-t.numSacs-t.numHBPs}function b(t){let e=t.numSingles+t.numDoubles+t.numTriples+t.numHRs;return Math.trunc(e/t.numAtBats*1e3)/1e3}function h(t){let e=t.numSingles+t.numDoubles+t.numTriples+t.numHRs+t.numWalks+t.numHBPs;return Math.trunc(e/t.numPA*1e3)/1e3}const E={getFullName(){return this.firstName+" "+this.lastName},plateApp(){this.numPA++},atBat(){this.numAtBats++},hitSingle(){this.numSingles++},hitDouble(){this.numDoubles++},hitTriple(){this.numTriples++},hitHR(){this.numHRs++},strikeout(){this.numStrikeouts++},walk(){this.numWalks++},HBP(){this.numHBPs++},sacrifice(){this.numSacs++}};function A(){if(newPlayerFormDiv.firstChild)return;const t=document.createElement("form"),e=document.createElement("label");e.setAttribute("for","newFirstName"),e.textContent="First name:";const n=document.createElement("input");n.setAttribute("type","text"),n.setAttribute("placeholder","First name"),n.setAttribute("id","newFirstName"),t.appendChild(e),t.appendChild(n);const o=document.createElement("label");o.setAttribute("for","newLastName"),o.textContent="Last name:";const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("placeholder","Last name"),u.setAttribute("id","newLastName"),t.appendChild(o),t.appendChild(u);const i=document.createElement("label");i.setAttribute("for","newJerseyNum"),i.textContent="Jersey #:";const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("placeholder","Jersey #"),d.setAttribute("id","newJerseyNum"),t.appendChild(i),t.appendChild(d);const a=document.createElement("input");a.setAttribute("type","button"),a.setAttribute("value","Submit"),a.addEventListener("click",(function(){for(function(){let t=function(t,e,n){let o=Object.create(E);return o.firstName=t,o.lastName=e,o.jerseyNum=n,o.numPA=0,o.numRuns=0,o.numSingles=0,o.numDoubles=0,o.numTriples=0,o.numHRs=0,o.numRBIs=0,o.numSacs=0,o.numStrikeouts=0,o.numWalks=0,o.numHBPs=0,o.numAtBats=C(o),o.avg=b(o),o.obp=h(o),o}(document.getElementById("newFirstName").value,document.getElementById("newLastName").value,document.getElementById("newJerseyNum").value);p.push(t),f()}(),B();newPlayerFormDiv.firstChild;)newPlayerFormDiv.removeChild(newPlayerFormDiv.lastChild)})),t.reset(),newPlayerFormDiv.appendChild(t),t.appendChild(a)}function B(){let t=document.getElementById("tbody");for(;t.firstChild;)t.removeChild(t.lastChild);for(let e of p){const n=document.createElement("tr"),o=document.createElement("td");o.textContent=`${e.firstName} ${e.lastName}`,n.appendChild(o);const u=document.createElement("td");u.textContent=`#${e.jerseyNum}`,n.appendChild(u);const i=document.createElement("td");i.textContent=`${e.numPA}`,n.appendChild(i);const d=document.createElement("td");e.numAtBats=C(e),d.textContent=`${e.numAtBats}`,n.appendChild(d);const a=document.createElement("td");a.textContent=`${e.numRuns}`,n.appendChild(a);const s=document.createElement("td");s.textContent=`${e.numSingles}`,n.appendChild(s);const l=document.createElement("td");l.textContent=`${e.numDoubles}`,n.appendChild(l);const r=document.createElement("td");r.textContent=`${e.numTriples}`,n.appendChild(r);const c=document.createElement("td");c.textContent=`${e.numHRs}`,n.appendChild(c);const m=document.createElement("td");m.textContent=`${e.numWalks}`,n.appendChild(m);const E=document.createElement("td");E.textContent=`${e.numStrikeouts}`,n.appendChild(E);const A=document.createElement("td");A.textContent=`${e.numSacs}`,n.appendChild(A);const g=document.createElement("td");g.textContent=`${e.numRBIs}`,n.appendChild(g);const v=document.createElement("td");e.avg=b(e),v.textContent=`${e.avg}`,n.appendChild(v);const S=document.createElement("td");e.obp=h(e),S.textContent=`${e.obp}`,n.appendChild(S);const x=document.createElement("td"),I=document.createElement("button");I.textContent="Add run",I.onclick=function(){e.numRuns++,a.textContent=`${e.numRuns}`,f()},x.appendChild(I),n.appendChild(x);const k=document.createElement("td"),R=document.createElement("button");R.textContent="Move down",R.onclick=function(){let t=p.indexOf(e);1!==p.length&&(t===p.length-1?[p[0],p[t]]=[p[t],p[0]]:[p[t],p[t+1]]=[p[t+1],p[t]],B(),f())},k.appendChild(R),n.appendChild(k);const N=document.createElement("td"),$=document.createElement("button");$.textContent="Edit player",$.onclick=function(){y(e)},N.appendChild($),n.appendChild(N);const P=document.createElement("td"),H=document.createElement("button");H.textContent="Remove player",H.onclick=function(){"yes"===prompt("Are you sure? (type 'yes')")&&(t.removeChild(n),p.splice(p.indexOf(e),1),B(),f())},P.appendChild(H),n.appendChild(P),t.appendChild(n)}}function y(t){const e=function(){const t=document.createElement("div");return t.setAttribute("id","editPlayerDiv"),t}(),n=function(t){const e=document.createElement("form");e.setAttribute("id","editPlayerForm");const n=document.createElement("h2");n.textContent=`Edit player stats: ${t.firstName} ${t.lastName}`,e.appendChild(n);const o=document.createElement("label");o.setAttribute("for","editFirstName"),o.textContent="First Name:";const u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("value",`${t.firstName}`),u.setAttribute("id","editFirstName"),e.appendChild(o),e.appendChild(u);const i=document.createElement("label");i.setAttribute("for","editLastName"),i.textContent="Last Name:";const d=document.createElement("input");d.setAttribute("type","text"),d.setAttribute("value",`${t.lastName}`),d.setAttribute("id","editLastName"),e.appendChild(i),e.appendChild(d);const a=document.createElement("label");a.setAttribute("for","editJerseyNum"),a.textContent="Jersey #:";const s=document.createElement("input");s.setAttribute("type","text"),s.setAttribute("value",`${t.jerseyNum}`),s.setAttribute("id","editJerseyNum"),e.appendChild(a),e.appendChild(s);const l=document.createElement("label");l.setAttribute("for","editPA"),l.textContent="PA:";const r=document.createElement("input");r.setAttribute("type","number"),r.setAttribute("value",`${t.numPA}`),r.setAttribute("id","editPA"),e.appendChild(l),e.appendChild(r);const c=document.createElement("label");c.setAttribute("for","editRuns"),c.textContent="R:";const m=document.createElement("input");m.setAttribute("type","number"),m.setAttribute("value",`${t.numRuns}`),m.setAttribute("id","editRuns"),e.appendChild(c),e.appendChild(m);const p=document.createElement("label");p.setAttribute("for","editSingles"),p.textContent="1B:";const E=document.createElement("input");E.setAttribute("type","number"),E.setAttribute("value",`${t.numSingles}`),E.setAttribute("id","editSingles"),e.appendChild(p),e.appendChild(E);const A=document.createElement("label");A.setAttribute("for","editDoubles"),A.textContent="2B:";const B=document.createElement("input");B.setAttribute("type","number"),B.setAttribute("value",`${t.numDoubles}`),B.setAttribute("id","editDoubles"),e.appendChild(A),e.appendChild(B);const y=document.createElement("label");y.setAttribute("for","editTriples"),y.textContent="3B:";const v=document.createElement("input");v.setAttribute("type","number"),v.setAttribute("value",`${t.numTriples}`),v.setAttribute("id","editTriples"),e.appendChild(y),e.appendChild(v);const S=document.createElement("label");S.setAttribute("for","editHomeruns"),S.textContent="HR:";const x=document.createElement("input");x.setAttribute("type","number"),x.setAttribute("value",`${t.numHRs}`),x.setAttribute("id","editHomeruns"),e.appendChild(S),e.appendChild(x);const I=document.createElement("label");I.setAttribute("for","editWalks"),I.textContent="BB:";const k=document.createElement("input");k.setAttribute("type","number"),k.setAttribute("value",`${t.numWalks}`),k.setAttribute("id","editWalks"),e.appendChild(I),e.appendChild(k);const R=document.createElement("label");R.setAttribute("for","editStrikeouts"),R.textContent="SO:";const N=document.createElement("input");N.setAttribute("type","number"),N.setAttribute("value",`${t.numStrikeouts}`),N.setAttribute("id","editStrikeouts"),e.appendChild(R),e.appendChild(N);const $=document.createElement("label");$.setAttribute("for","editSacs"),$.textContent="SF:";const P=document.createElement("input");P.setAttribute("type","number"),P.setAttribute("value",`${t.numSacs}`),P.setAttribute("id","editSacs"),e.appendChild($),e.appendChild(P);const H=document.createElement("label");H.setAttribute("for","editRBIs"),H.textContent="RBI:";const O=document.createElement("input");O.setAttribute("type","number"),O.setAttribute("value",`${t.numRBIs}`),O.setAttribute("id","editRBIs"),e.appendChild(H),e.appendChild(O);const L=document.createElement("label");L.setAttribute("for","editHBPs"),L.textContent="HBP:";const w=document.createElement("input");w.setAttribute("type","number"),w.setAttribute("value",`${t.numHBPs}`),w.setAttribute("id","editHBPs"),e.appendChild(L),e.appendChild(w);const D=document.createElement("input");return D.setAttribute("type","button"),D.setAttribute("value","Update player"),D.addEventListener("click",(function(){!function(t){t.firstName=document.getElementById("editFirstName").value,t.lastName=document.getElementById("editLastName").value,t.jerseyNum=document.getElementById("editJerseyNum").value,t.numPA=parseInt(document.getElementById("editPA").value),t.numRuns=parseInt(document.getElementById("editRuns").value),t.numSingles=parseInt(document.getElementById("editSingles").value),t.numDoubles=parseInt(document.getElementById("editDoubles").value),t.numTriples=parseInt(document.getElementById("editTriples").value),t.numHRs=parseInt(document.getElementById("editHomeruns").value),t.numWalks=parseInt(document.getElementById("editWalks").value),t.numStrikeouts=parseInt(document.getElementById("editStrikeouts").value),t.numSacs=parseInt(document.getElementById("editSacs").value),t.numRBIs=parseInt(document.getElementById("editRBIs").value),t.numHBPs=parseInt(document.getElementById("editHBPs").value),t.numAtBats=C(t),t.avg=b(t),t.obp=h(t),f()}(t),g()})),e.appendChild(D),e}(t);e.appendChild(n);const o=function(){const t=document.createElement("button");return t.setAttribute("id","returnButton"),t.textContent="Return",t.addEventListener("click",g),t}(),u=document.getElementById("tabContent");u.textContent="",u.appendChild(e),u.appendChild(o)}function g(){const t=function(){const t=document.createElement("div");return t.setAttribute("id","newPlayerFormDiv"),t}(),e=function(){const t=document.createElement("button");t.setAttribute("id","addPlayerButton"),t.addEventListener("click",A);const e=document.createElement("span");return e.textContent="Add Player",t.appendChild(e),t}(),n=function(){const t=document.createElement("table"),e=document.createElement("tr"),n=document.createElement("th");n.textContent="Name",e.appendChild(n);const o=document.createElement("th");o.textContent="Number",e.appendChild(o);const u=document.createElement("th");u.textContent="PA",e.appendChild(u);const i=document.createElement("th");i.textContent="AB",e.appendChild(i);const d=document.createElement("th");d.textContent="R",e.appendChild(d);const a=document.createElement("th");a.textContent="1B",e.appendChild(a);const s=document.createElement("th");s.textContent="2B",e.appendChild(s);const l=document.createElement("th");l.textContent="3B",e.appendChild(l);const r=document.createElement("th");r.textContent="HR",e.appendChild(r);const c=document.createElement("th");c.textContent="BB",e.appendChild(c);const m=document.createElement("th");m.textContent="SO",e.appendChild(m);const p=document.createElement("th");p.textContent="SF",e.appendChild(p);const C=document.createElement("th");C.textContent="RBI",e.appendChild(C);const b=document.createElement("th");b.textContent="AVG",e.appendChild(b);const h=document.createElement("th");h.textContent="OBP",e.appendChild(h);const E=document.createElement("th");E.textContent="Add run",e.appendChild(E);const A=document.createElement("th");A.textContent="Change order",e.appendChild(A);const B=document.createElement("th");B.textContent="Edit player",e.appendChild(B);const y=document.createElement("th");y.textContent="Remove",e.appendChild(y),t.appendChild(e);const g=document.createElement("tbody");return g.setAttribute("id","tbody"),t.appendChild(g),t}(),o=document.getElementById("tabContent");o.textContent="",o.appendChild(e),o.appendChild(t),o.appendChild(n);const u=document.createElement("button");u.textContent="Clear roster",u.addEventListener("click",(function(){"yes"===prompt("Are you sure? (type 'yes')")&&(localStorage.removeItem("mySavedRoster"),localStorage.removeItem("savedBatterIndex"),p=[],g())})),o.appendChild(u),localStorage.getItem("mySavedRoster")&&(p=JSON.parse(localStorage.getItem("mySavedRoster")),B())}function f(){localStorage.setItem("mySavedRoster",JSON.stringify(p))}function v(){document.getElementById("tabContent").textContent="Coming soon..."}(function(){const e=document.getElementById("content"),n=function(e){const n=document.createElement("nav");n.setAttribute("id","navBar");const o=t("atBatButton","At Bat Tracker"),u=t("gameTrackerButton","Game Tracker"),i=t("rosterButton","Roster"),d=document.createElement("hr");return n.appendChild(o),n.appendChild(u),n.appendChild(i),n.appendChild(d),n}(),o=function(t){const e=document.createElement("div");return e.setAttribute("id","tabContent"),e}();e.appendChild(n),e.appendChild(o)})(),function(){const t=document.getElementById("atBatButton"),e=document.getElementById("gameTrackerButton"),n=document.getElementById("rosterButton");t.addEventListener("click",c),e.addEventListener("click",v),n.addEventListener("click",g)}()})();