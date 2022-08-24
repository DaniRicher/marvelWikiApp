"use strict";(self.webpackChunkmarvelWikiApp=self.webpackChunkmarvelWikiApp||[]).push([[552],{8552:(rt,j,r)=>{r.r(j),r.d(j,{PagesModule:()=>at});var p=r(6895),l=r(2019),e=r(8256),w=r(9300),u=r(4004),U=r(615),A=r(1383),J=r(3214),k=r(1327);const Y=function(){return{width:"250px"}};let Q=(()=>{class n{constructor(t){this.router=t,this.visibleSidebar1=!1,this.titulo="",this.tituloSubs$=this.getArgumentosRuta().subscribe(({titulo:i})=>{this.titulo=i,document.title=`MarvelApp - ${i}`})}ngOnInit(){this.items=[{label:"Inicio",icon:"fa-solid fa-home",routerLink:["dashboard"]},{label:"Personajes",icon:"fa-solid fa-mask",routerLink:["personajes"]},{label:"Comics",icon:"fa-solid fa-newspaper",routerLink:["comics"]},{label:"Favoritos",icon:"fa-solid fa-star",routerLink:["favoritos"]}]}getArgumentosRuta(){return this.router.events.pipe((0,w.h)(t=>t instanceof l.jw),(0,w.h)(t=>null===t.snapshot.firstChild),(0,u.U)(t=>t.snapshot.data))}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-header"]],decls:12,vars:6,consts:[[1,"grid"],[1,"col-12","header"],[3,"visible","visibleChange"],["styleClass","bar","routerLinkActive","link-active",3,"model","click"],[1,"p-toolbar-group-left"],[1,"pi","pi-bars","pointer","ocultar",3,"click"],["styleClass","bar","routerLinkActive","p-menuitem-link-active",1,"ocultarItems",3,"model"],[1,"p-toolbar-group-right"],["src","../../../assets/marvel.png","alt","","routerLink","dashboard",1,"tam","pointer"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"p-sidebar",2),e.NdJ("visibleChange",function(a){return i.visibleSidebar1=a}),e.TgZ(3,"h4"),e._uU(4,"MarvelApp"),e.qZA(),e.TgZ(5,"p-menu",3),e.NdJ("click",function(){return i.visibleSidebar1=!1}),e.qZA()(),e.TgZ(6,"p-toolbar")(7,"div",4)(8,"i",5),e.NdJ("click",function(){return i.visibleSidebar1=!0}),e.qZA(),e._UZ(9,"p-menubar",6),e.qZA(),e.TgZ(10,"div",7),e._UZ(11,"img",8),e.qZA()()()()),2&t&&(e.xp6(2),e.Akn(e.DdM(5,Y)),e.Q6J("visible",i.visibleSidebar1),e.xp6(3),e.Q6J("model",i.items),e.xp6(4),e.Q6J("model",i.items))},dependencies:[U.nm,l.rH,l.Od,A.o,J.Y,k.v2],styles:["@media screen and (min-width: 961px){.ocultar[_ngcontent-%COMP%]{opacity:0%;pointer-events:none}}  .header{padding:0}  .bar{padding:0%;border:0;width:100%;margin:0;background-color:#0000}p-toolbar[_ngcontent-%COMP%]{position:relative}@media screen and (max-width: 960px){.ocultarItems[_ngcontent-%COMP%]{opacity:0%;pointer-events:none}}.pointer[_ngcontent-%COMP%]{cursor:pointer}.tam[_ngcontent-%COMP%]{width:100px;height:35px}"]}),n})(),$=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-footer"]],decls:6,vars:0,consts:[[1,"p-toolbar-group-left"],[1,"p-toolbar-group-right"]],template:function(t,i){1&t&&(e._UZ(0,"hr"),e.TgZ(1,"p-toolbar")(2,"div",0)(3,"span"),e._uU(4,"Aqu\xed va el footer"),e.qZA()(),e._UZ(5,"div",1),e.qZA())},dependencies:[A.o]}),n})();var g=r(5593);const H=function(n){return{"show-scrollTop":n}};let E=(()=>{class n{constructor(t){this.document=t}onWindowScroll(){window.scrollY||document.documentElement.scrollTop||document.body.scrollTop>100?this.windowScrolled=!0:(this.windowScrolled&&window.scrollY||document.documentElement.scrollTop||document.body.scrollTop<10)&&(this.windowScrolled=!1)}scrollToTop(){!function t(){const i=document.documentElement.scrollTop||document.body.scrollTop;i>0&&(window.requestAnimationFrame(t),window.scrollTo(0,i-i/8))}()}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.K0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-scrop-to-top"]],hostBindings:function(t,i){1&t&&e.NdJ("scroll",function(){return i.onWindowScroll()},!1,e.Jf7)},decls:2,vars:3,consts:[[1,"scroll-to-top",3,"ngClass"],["type","button","aria-pressed","true","pButton","","icon","pi pi-angle-double-up",1,"p-button-raised","p-button-rounded",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"button",1),e.NdJ("click",function(){return i.scrollToTop()}),e.qZA()()),2&t&&e.Q6J("ngClass",e.VKq(1,H,i.windowScrolled))},dependencies:[p.mk,g.Hq],styles:[".scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:15px;right:15px;opacity:0;transition:all .2s ease-in-out}.show-scrollTop[_ngcontent-%COMP%]{opacity:1;transition:all .2s ease-in-out;z-index:1}"]}),n})(),L=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:5,vars:0,template:function(t,i){1&t&&(e.TgZ(0,"div"),e._UZ(1,"app-header")(2,"router-outlet")(3,"app-scrop-to-top")(4,"app-footer"),e.qZA())},dependencies:[l.lC,Q,$,E]}),n})();var c=r(805);let B=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-dashboard"]],features:[e._Bn([c.YP,c.ez])],decls:22,vars:0,consts:[[1,"text-center"],[2,"margin","1px"],[2,"margin","0"],[1,"imagenPortada"],["src","https://i.annihil.us/u/prod/marvel/i/mg/8/e0/52bdf830aa094.jpg","alt","Marvel"],[1,"texto-encima"],[1,"texto"],["pButton","","label","Ir a Personajes","routerLink","/dashboard/personajes",1,"m-1"],["pButton","","label","Ir a Comics","routerLink","/dashboard/comics",1,"m-1"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"hr",1),e.TgZ(2,"h2",2),e._uU(3,"Bienvenidos A MarvelApp"),e.qZA(),e._UZ(4,"hr",1),e.qZA(),e.TgZ(5,"div",3),e._UZ(6,"img",4),e.TgZ(7,"div",5)(8,"span"),e._uU(9,"Pagina Web"),e.qZA(),e._UZ(10,"br"),e.TgZ(11,"span"),e._uU(12,"Usando"),e.qZA(),e._UZ(13,"br"),e.TgZ(14,"span"),e._uU(15,"Api oficial de Marvel"),e.qZA(),e._UZ(16,"br"),e.TgZ(17,"div",6)(18,"p"),e._uU(19," La API de Marvel Comics permite a los desarrolladores de todo el mundo acceder a informaci\xf3n sobre la amplia biblioteca de c\xf3mics de Marvel, desde lo que est\xe1 por venir hasta hace 70 a\xf1os. "),e.qZA(),e._UZ(20,"button",7)(21,"button",8),e.qZA()()())},dependencies:[l.rH,g.Hq],styles:[".tarjeta[_ngcontent-%COMP%]{height:auto;width:auto;margin:.3rem}.title[_ngcontent-%COMP%]{height:60px}h4[_ngcontent-%COMP%]{height:100%;width:100%}[_nghost-%COMP%]     .tam{border-radius:5%;height:100%;width:200px}.personajes-item[_ngcontent-%COMP%]{display:flex;justify-content:center}.animacion[_ngcontent-%COMP%]{display:flex;justify-content:center;height:200px}[_nghost-%COMP%]     .p-image{border-radius:5%;height:100%;width:100%}.imagenPortada[_ngcontent-%COMP%]{display:flex;flex-flow:column wrap;justify-content:center;align-items:center;width:100%;height:400px;padding:0%;overflow:hidden}.imagenPortada[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%}.texto-encima[_ngcontent-%COMP%]{position:absolute;width:500px;margin:10px;left:10px}@supports (object-fit: cover){.imagenPortada[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%;object-fit:cover;object-position:center center}}@media screen and (max-width: 560px){.tarjeta[_ngcontent-%COMP%]{height:auto;width:100%}.animacion[_ngcontent-%COMP%]{overflow:hidden;height:100%;width:100%}[_nghost-%COMP%]     .tam{border-radius:5%;height:100%;width:auto}.texto-encima[_ngcontent-%COMP%]{position:absolute;width:280px;left:10px}}"]}),n})();var P=r(2340),f=r(9646),y=r(529);const v=P.N.base_url;let F=(()=>{class n{constructor(t){this.https=t,this.personajes=[],this.infoPersonajes=[],this.imagenes=[]}obtenerPersonajes(){return this.personajes.length>0?(0,f.of)(this.personajes):this.https.get(`${v}/characters`).pipe((0,u.U)(i=>this.personajes=i.data.results))}obtenerInfoPersonajes(t){return this.https.get(`${v}/characters/${t}`).pipe((0,u.U)(s=>this.infoPersonajes=s.data.results))}obtenerImagenes(){return this.imagenes.length>0?(0,f.of)(this.imagenes):this.https.get(`${v}/characters`).pipe((0,u.U)(({data:i})=>(this.imagenes=[],i.results.forEach(s=>{this.imagenes.push(s.thumbnail.path+"."+s.thumbnail.extension)}),this.imagenes)))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(y.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var _=r(4247),I=r(1740),S=r(3930),O=r(1892),h=r(7932),C=r(5054),x=r(2137),b=r(2453);let M=(()=>{class n{transform(t,i,s=""){if(0===s.length)return t.slice(i,i+10);let a=new RegExp(`${s}.*`,"i");return t.filter(m=>a.test(m.name+m.title))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"filtro",type:n,pure:!0}),n})(),q=(()=>{class n{transform(t=!1,i="",s){if(0===i.length)return!1;let a=new RegExp(`${i}.*`,"i");return 0===s.filter(m=>a.test(m.name+m.title)).length&&(t=!0),t}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275pipe=e.Yjl({name:"busqueda",type:n,pure:!0}),n})();function D(n,o){1&n&&(e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"p-progressSpinner",6),e.TgZ(3,"p",7),e._uU(4,"Cargando..."),e.qZA()()())}function z(n,o){1&n&&(e.TgZ(0,"div")(1,"h3",7),e._uU(2,"No se encontr\xf3..."),e.qZA()())}function R(n,o){if(1&n&&(e.TgZ(0,"div",28),e._UZ(1,"p-image",29),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.s9C("src",t.thumbnail.path+"."+t.thumbnail.extension),e.s9C("alt",t.name),e.Q6J("preview",!0)}}function G(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1,"No hay descripci\xf3n..."),e.qZA())}const K=function(){return{height:"60px"}};function V(n,o){if(1&n&&(e.TgZ(0,"div",30)(1,"h4"),e._uU(2),e.qZA(),e.TgZ(3,"p-scrollPanel",31),e.YNc(4,G,2,0,"p",19),e._uU(5),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(1),e.Akn(e.DdM(5,K)),e.xp6(1),e.Q6J("ngIf",t.description.length<=0),e.xp6(1),e.hij(" ",t.description," ")}}function W(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",32)(1,"p-button",33),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.agregarFavoritos(s.id,s.name,s.thumbnail.path+"."+s.thumbnail.extension))}),e.qZA(),e.TgZ(2,"p-button",34),e.NdJ("onClick",function(){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.mostrarInfo(s.id))}),e.qZA()()}}function X(n,o){1&n&&(e.TgZ(0,"div",22)(1,"div",23)(2,"p-card",24),e.YNc(3,R,2,3,"ng-template",25),e.YNc(4,V,6,6,"ng-template",26),e.YNc(5,W,3,0,"ng-template",27),e.qZA()()())}function ee(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"p-paginator",35),e.NdJ("onPageChange",function(s){e.CHM(t);const a=e.oxw(2);return e.KtG(a.cambiarPagina(s))}),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("rows",t.pageSize)("totalRecords",t.personajes.length)}}function te(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"h2",12),e._uU(5,"Personajes"),e.qZA()(),e.TgZ(6,"div",13)(7,"span",14),e._UZ(8,"i",15),e.qZA(),e.TgZ(9,"input",16,17),e.NdJ("keyup",function(){e.CHM(t);const s=e.MAs(10),a=e.oxw();return e.KtG(a.buscar(s.value))}),e.qZA()()(),e._UZ(11,"hr",18),e.YNc(12,z,3,0,"div",19),e.ALo(13,"busqueda"),e.TgZ(14,"div",8),e.YNc(15,X,6,0,"div",20),e.ALo(16,"filtro"),e.qZA(),e.YNc(17,ee,1,2,"p-paginator",21),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(12),e.Q6J("ngIf",e.Dn7(13,3,t.noFound,t.search,t.personajes)),e.xp6(3),e.Q6J("ngForOf",e.Dn7(16,7,t.personajes,t.desde,t.search)),e.xp6(2),e.Q6J("ngIf",t.pag)}}const ne=function(){return{"960px":"75vw","640px":"100vw"}},oe=function(){return{width:"100%",right:"0",left:"0"}},ie=function(n){return{"920px":n}};let se=(()=>{class n{constructor(t,i,s,a){this.personajesService=t,this.router=i,this.confirmationService=s,this.messageService=a,this.personajes=[],this.imagenes=[],this.pageSize=10,this.desde=0,this.hasta=10,this.search="",this.spinner=!0,this.pag=!0,this.personajesFav=[],this.id=[]}ngOnInit(){this.spinner=!0,this.obtenerPersonajes()}obtenerPersonajes(){this.personajesService.obtenerPersonajes().subscribe(t=>{this.personajes=t,this.spinner=!1})}cambiarPagina(t){this.desde=t.page*t.rows}buscar(t){this.search=t,this.pag=0===t.length}mostrarInfo(t){this.router.navigate([`/dashboard/personajes/${t}`])}guardarLocalStorage(t,i){localStorage.setItem(t,JSON.stringify(i))}cargarLocalStorage(){this.personajesFav=[],localStorage.getItem("personajesFav")&&(this.personajesFav=JSON.parse(localStorage.getItem("personajesFav")),this.personajesFav.forEach(({id:t})=>{this.id.push(t)}))}agregarFavoritos(t,i,s){this.cargarLocalStorage(),this.id.includes(t)?this.messageService.add({severity:"error",summary:"Error",detail:"El personaje ya est\xe1 como favorito"}):this.confirmationService.confirm({message:`\xbfSeguro que desea guardar a ${i} como favorito?`,defaultFocus:"reject",accept:()=>{this.messageService.add({severity:"success",summary:"Confirmado",detail:"Ha sido agregado a sus favoritos con \xe9xito"}),this.personajesFav.push({id:t,nombre:i,img:s}),this.guardarLocalStorage("personajesFav",this.personajesFav)},reject:a=>{switch(a){case c.wB.REJECT:case c.wB.CANCEL:this.messageService.add({severity:"warn",summary:"Cancelado",detail:"No ha sido agregado"})}}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(F),e.Y36(l.F0),e.Y36(c.YP),e.Y36(c.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-personajes"]],features:[e._Bn([c.YP,c.ez])],decls:4,vars:8,consts:[["class","grid align-items-center justify-content-center m-5",4,"ngIf"],["header","Confirmar","icon","pi pi-exclamation-triangle",3,"breakpoints"],[3,"breakpoints"],["class","grid",4,"ngIf"],[1,"grid","align-items-center","justify-content-center","m-5"],[1,""],["strokeWidth","8"],[1,"animate__animated","animate__backInUp"],[1,"grid"],[1,"col-12"],[1,"grid","p-fluid","align-items-center"],[1,"col-12","sm:col-6"],[1,"",2,"margin","0"],[1,"p-inputgroup","col-12","sm:col-6",2,"height","50px"],[1,"p-inputgroup-addon"],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Buscar Personajes",3,"keyup"],["txtSearch",""],[2,"margin-top","0"],[4,"ngIf"],["class","col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2 animate__animated animate__pulse",4,"ngFor","ngForOf"],[3,"rows","totalRecords","onPageChange",4,"ngIf"],[1,"col-12","sm:col-6","md:col-4","lg:col-3","xl:col-2","animate__animated","animate__pulse"],[1,"tarjeta"],["styleClass","tam",1,"m-2"],["pTemplate","header"],["pTemplate","subheader"],["pTemplate","footer"],[1,"animacion"],["imageClass","p-image","styleClass","toolbar",3,"src","alt","preview"],[1,"title"],[1,"animate__animate","animate__pulse"],[1,"grid","p-fluid","align-content-center"],["label","Favoritos","icon","pi pi-star","styleClass","p-button-success p-button-rounded p-button-outlined",1,"col-12","sm:col-6","md:col-12","p-button-success",3,"click"],["label","Informaci\xf3n","icon","pi pi-info-circle","styleClass","p-button-info p-button-rounded p-button-outlined",1,"col-12","sm:col-6","md:col-12",3,"onClick"],[3,"rows","totalRecords","onPageChange"]],template:function(t,i){1&t&&(e.YNc(0,D,5,0,"div",0),e._UZ(1,"p-confirmDialog",1)(2,"p-toast",2),e.YNc(3,te,18,11,"div",3)),2&t&&(e.Q6J("ngIf",i.spinner),e.xp6(1),e.Q6J("breakpoints",e.DdM(4,ne)),e.xp6(1),e.Q6J("breakpoints",e.VKq(6,ie,e.DdM(5,oe))),e.xp6(1),e.Q6J("ngIf",!i.spinner))},dependencies:[p.sg,p.O5,g.zx,c.jx,_.Z,I.o,S.P,O.D,h.G,C.E,x.Q,b.FN,M,q],styles:[".tarjeta[_ngcontent-%COMP%]{height:auto}.title[_ngcontent-%COMP%]{height:20px}h4[_ngcontent-%COMP%]{height:100%;width:100%}  .tam{border-radius:5%;height:100%;width:100%}.animacion[_ngcontent-%COMP%]{display:flex;justify-content:center;height:200px;width:100%}[_nghost-%COMP%]     .p-image{overflow:hidden;border-radius:10%;height:100%}[_nghost-%COMP%]     .p-image:hover{border-radius:50%;-webkit-border-radius:50%;box-shadow:0 0 15px 15px #0000;-webkit-box-shadow:0px 0px 15px 15px rgba(0,0,0,255)}[_nghost-%COMP%]     .p-image-action{pointer-events:none}[_nghost-%COMP%]     .p-image-toolbar{opacity:0}[_nghost-%COMP%]     .p-scrollpanel{margin-top:50px}.botones[_ngcontent-%COMP%]{margin:5px}@media screen and (max-width: 575px){.tarjeta[_ngcontent-%COMP%]{width:100%;height:auto}.animacion[_ngcontent-%COMP%]{overflow:hidden;height:100%;width:100%}}"]}),n})();const Z=P.N.base_url;let N=(()=>{class n{constructor(t){this.http=t,this.comics=[],this.infoComics=[],this.imagenes=[]}obtenerComics(){return this.comics.length>0?(0,f.of)(this.comics):this.http.get(`${Z}/comics`).pipe((0,u.U)(i=>this.comics=i.data.results))}obtenerInfoComics(t){return this.http.get(`${Z}/comics/${t}`).pipe((0,u.U)(s=>this.infoComics=s.data.results))}obtenerImagenes(){return this.imagenes.length>0?(0,f.of)(this.imagenes):this.http.get(`${Z}/comics`).pipe((0,u.U)(({data:i})=>(this.imagenes=[],i.results.forEach(s=>{this.imagenes.push(s.thumbnail.path+"."+s.thumbnail.extension)}),this.imagenes)))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(y.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function ae(n,o){1&n&&(e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"p-progressSpinner",6),e.TgZ(3,"p",7),e._uU(4,"Cargando..."),e.qZA()()())}function re(n,o){1&n&&(e.TgZ(0,"div")(1,"h3",7),e._uU(2,"No se encontr\xf3..."),e.qZA()())}function ce(n,o){if(1&n&&(e.TgZ(0,"div",28),e._UZ(1,"p-image",29),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.s9C("src",t.thumbnail.path+"."+t.thumbnail.extension),e.Q6J("preview",!0)}}function pe(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1,"No hay descripci\xf3n..."),e.qZA())}const le=function(){return{height:"50px"}};function me(n,o){if(1&n&&(e.TgZ(0,"div",30)(1,"h4"),e._uU(2),e.qZA(),e.TgZ(3,"p-scrollPanel",31),e._UZ(4,"p",32),e.YNc(5,pe,2,0,"p",18),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.Oqu(t.title),e.xp6(1),e.Akn(e.DdM(5,le)),e.xp6(1),e.Q6J("innerHTML",t.description,e.oJD),e.xp6(1),e.Q6J("ngIf",null===t.description||0===t.description.length)}}function de(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",33)(1,"p-button",34),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.agregarFavoritos(s.id,s.title,s.thumbnail.path+"."+s.thumbnail.extension))}),e.qZA(),e.TgZ(2,"p-button",35),e.NdJ("onClick",function(){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.mostrarInfo(s.id))}),e.qZA()()}}function ue(n,o){1&n&&(e.TgZ(0,"div",22)(1,"div",23)(2,"p-card",24),e.YNc(3,ce,2,2,"ng-template",25),e.YNc(4,me,6,6,"ng-template",26),e.YNc(5,de,3,0,"ng-template",27),e.qZA()()())}function ge(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"p-paginator",36),e.NdJ("onPageChange",function(s){e.CHM(t);const a=e.oxw(2);return e.KtG(a.cambiarPagina(s))}),e.qZA()}if(2&n){const t=e.oxw(2);e.Q6J("rows",t.pageSize)("totalRecords",t.comics.length)}}function _e(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",8)(1,"div",9)(2,"div",8)(3,"div",10)(4,"h2",11),e._uU(5,"Comics"),e.qZA()(),e.TgZ(6,"div",12)(7,"span",13),e._UZ(8,"i",14),e.qZA(),e.TgZ(9,"input",15,16),e.NdJ("keyup",function(){e.CHM(t);const s=e.MAs(10),a=e.oxw();return e.KtG(a.buscarComics(s.value))}),e.qZA()()(),e._UZ(11,"hr",17),e.YNc(12,re,3,0,"div",18),e.ALo(13,"busqueda"),e.TgZ(14,"div",19),e.YNc(15,ue,6,0,"div",20),e.ALo(16,"filtro"),e.qZA(),e.YNc(17,ge,1,2,"p-paginator",21),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(12),e.Q6J("ngIf",e.Dn7(13,3,t.noFound,t.search,t.comics)),e.xp6(3),e.Q6J("ngForOf",e.Dn7(16,7,t.comics,t.desde,t.search)),e.xp6(2),e.Q6J("ngIf",t.pag)}}const he=function(){return{"960px":"75vw","640px":"100vw"}},fe=function(){return{width:"100%",right:"0",left:"0"}},ve=function(n){return{"920px":n}};let Ce=(()=>{class n{constructor(t,i,s,a){this.comicsService=t,this.router=i,this.messageService=s,this.confirmationService=a,this.comics=[],this.imagenes=[],this.pageSize=10,this.desde=0,this.hasta=10,this.search="",this.spinner=!0,this.pag=!0,this.noFound=!1,this.comicsFav=[],this.id=[]}ngOnInit(){this.spinner=!0,this.obtenerComics()}obtenerComics(){this.comicsService.obtenerComics().subscribe(t=>{this.comics=t,this.spinner=!1})}cambiarPagina(t){this.desde=t.page*t.rows,this.hasta=this.desde+t.rows}buscarComics(t){this.search=t,this.pag=0===t.length}mostrarInfo(t){this.router.navigate([`/dashboard/comics/${t}`])}guardarLocalStorage(t,i){localStorage.setItem(t,JSON.stringify(i))}cargarLocalStorage(){this.comicsFav=[],localStorage.getItem("comicsFav")&&(this.comicsFav=JSON.parse(localStorage.getItem("comicsFav")),this.comicsFav.forEach(({id:t})=>{this.id.push(t)}))}agregarFavoritos(t,i,s){this.cargarLocalStorage(),this.id.includes(t)?this.messageService.add({severity:"error",summary:"Error",detail:"El personaje ya est\xe1 como favorito"}):this.confirmationService.confirm({message:`\xbfSeguro que desea guardar a ${i} como favorito?`,defaultFocus:"reject",accept:()=>{this.messageService.add({severity:"success",summary:"Confirmado",detail:"Ha sido agregado a sus favoritos con \xe9xito"}),this.comicsFav.push({id:t,nombre:i,img:s}),this.guardarLocalStorage("comicsFav",this.comicsFav)},reject:a=>{switch(a){case c.wB.REJECT:case c.wB.CANCEL:this.messageService.add({severity:"warn",summary:"Cancelado",detail:"No ha sido agregado"})}}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(N),e.Y36(l.F0),e.Y36(c.ez),e.Y36(c.YP))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-comics"]],features:[e._Bn([c.YP,c.ez])],decls:4,vars:8,consts:[["class","grid align-items-center justify-content-center m-5",4,"ngIf"],["header","Confirmar","icon","pi pi-exclamation-triangle",3,"breakpoints"],[3,"breakpoints"],["class","grid",4,"ngIf"],[1,"grid","align-items-center","justify-content-center","m-5"],[1,""],["strokeWidth","8"],[1,"animate__animated","animate__backInUp"],[1,"grid"],[1,"col-12"],[1,"col-12","sm:col-6"],[1,"",2,"margin","0"],[1,"p-inputgroup","col-12","sm:col-6",2,"height","50px"],[1,"p-inputgroup-addon"],[1,"pi","pi-search"],["type","text","pInputText","","placeholder","Buscar Comics...",3,"keyup"],["txtSearch",""],[2,"margin-top","0"],[4,"ngIf"],[1,"grid","mb-3"],["class","col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2 animate__animated animate__pulse",4,"ngFor","ngForOf"],[3,"rows","totalRecords","onPageChange",4,"ngIf"],[1,"col-12","sm:col-6","md:col-4","lg:col-3","xl:col-2","animate__animated","animate__pulse"],[1,"tarjeta"],["styleClass","tam",1,"m-2"],["pTemplate","header"],["pTemplate","subheader"],["pTemplate","footer"],[1,"animacion"],["imageClass","p-image",3,"src","preview"],[1,"title"],["styleClass","custombar1",1,"animate__animate","animate__pulse"],[3,"innerHTML"],[1,"grid","p-fluid","align-content-center"],["label","Favoritos","icon","pi pi-star","styleClass","p-button-success p-button-rounded p-button-outlined",1,"col-12","sm:col-12","md:col-12",3,"click"],["label","Informaci\xf3n","icon","pi pi-info-circle","styleClass","p-button-info p-button-rounded p-button-outlined",1,"col-12","sm:col-12","md:col-12",3,"onClick"],[3,"rows","totalRecords","onPageChange"]],template:function(t,i){1&t&&(e.YNc(0,ae,5,0,"div",0),e._UZ(1,"p-confirmDialog",1)(2,"p-toast",2),e.YNc(3,_e,18,11,"div",3)),2&t&&(e.Q6J("ngIf",i.spinner),e.xp6(1),e.Q6J("breakpoints",e.DdM(4,he)),e.xp6(1),e.Q6J("breakpoints",e.VKq(6,ve,e.DdM(5,fe))),e.xp6(1),e.Q6J("ngIf",!i.spinner))},dependencies:[p.sg,p.O5,g.zx,c.jx,_.Z,I.o,S.P,O.D,h.G,C.E,x.Q,b.FN,M,q],styles:[".tarjeta[_ngcontent-%COMP%]{height:auto}.title[_ngcontent-%COMP%]{height:20px}h4[_ngcontent-%COMP%]{height:100%;width:100%}  .tam{border-radius:5%;height:100%;width:100%}.animacion[_ngcontent-%COMP%]{display:flex;justify-content:center;height:200px}[_nghost-%COMP%]     .p-image{overflow:hidden;border-radius:10%;height:100%}[_nghost-%COMP%]     .p-image:hover{border-radius:50%;-webkit-border-radius:50%;box-shadow:0 0 15px 15px #0000;-webkit-box-shadow:0px 0px 15px 15px rgba(0,0,0,255)}[_nghost-%COMP%]     .p-image-action{pointer-events:none}[_nghost-%COMP%]     .p-image-toolbar{opacity:0}.botones[_ngcontent-%COMP%]{margin:5px}[_nghost-%COMP%]     .p-scrollpanel{margin-top:50px}@media screen and (max-width: 575px){.tarjeta[_ngcontent-%COMP%]{width:100%;height:auto}.animacion[_ngcontent-%COMP%]{overflow:hidden;height:100%;width:100%}}"]}),n})();function xe(n,o){1&n&&(e.TgZ(0,"div",3)(1,"div",4),e._UZ(2,"p-progressSpinner",5),e.TgZ(3,"p",6),e._uU(4,"Cargando..."),e.qZA()()())}function be(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1,"No hay descripci\xf3n..."),e.qZA())}function Ze(n,o){if(1&n&&(e.TgZ(0,"div",4)(1,"ul")(2,"li"),e._uU(3),e.qZA()()()),2&n){const t=o.$implicit;e.xp6(3),e.hij(" ",t.name," ")}}function Te(n,o){if(1&n&&(e.TgZ(0,"div",4)(1,"ul")(2,"li"),e._uU(3),e.qZA()()()),2&n){const t=o.$implicit;e.xp6(3),e.hij(" ",t.name," ")}}function je(n,o){if(1&n&&(e.TgZ(0,"div",4)(1,"ul")(2,"li"),e._uU(3),e.qZA()()()),2&n){const t=o.$implicit;e.xp6(3),e.hij(" ",t.name," ")}}function we(n,o){if(1&n&&(e.TgZ(0,"div")(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"div",7)(4,"div",10),e._UZ(5,"img",11),e.qZA(),e.TgZ(6,"div",12)(7,"div",13)(8,"div",14)(9,"h4"),e._uU(10,"Descripci\xf3n"),e.qZA(),e.TgZ(11,"p"),e._uU(12),e.qZA(),e.YNc(13,be,2,0,"p",15),e.qZA(),e.TgZ(14,"div",16)(15,"h4"),e._uU(16,"\xdaltima Modificaci\xf3n"),e.qZA(),e.TgZ(17,"p"),e._uU(18),e.ALo(19,"date"),e.qZA()(),e.TgZ(20,"div",17)(21,"p-card")(22,"h4"),e._uU(23),e.qZA(),e.YNc(24,Ze,4,1,"div",18),e.qZA()(),e.TgZ(25,"div",19)(26,"p-card")(27,"h4"),e._uU(28),e.qZA(),e.YNc(29,Te,4,1,"div",18),e.qZA()(),e.TgZ(30,"div",20)(31,"p-card")(32,"h4"),e._uU(33),e.qZA(),e.YNc(34,je,4,1,"div",18),e.qZA()()()()()()),2&n){const t=o.$implicit;e.xp6(2),e.hij("",t.name," "),e.xp6(3),e.s9C("src",t.thumbnail.path+"."+t.thumbnail.extension,e.LSH),e.s9C("alt",t.name),e.xp6(7),e.Oqu(t.description),e.xp6(1),e.Q6J("ngIf",0===t.description.length),e.xp6(5),e.Oqu(e.lcZ(19,15,t.modified)),e.xp6(5),e.AsE("Historias: ",t.stories.returned,"/",t.stories.available,""),e.xp6(1),e.Q6J("ngForOf",t.stories.items),e.xp6(4),e.AsE("Comics: ",t.comics.returned,"/",t.comics.available,""),e.xp6(1),e.Q6J("ngForOf",t.comics.items),e.xp6(4),e.AsE("Series: ",t.series.returned,"/",t.comics.available," "),e.xp6(1),e.Q6J("ngForOf",t.series.items)}}function Ae(n,o){if(1&n&&(e.TgZ(0,"div",7)(1,"div",8),e.YNc(2,we,35,17,"div",9),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.personajes)}}let Pe=(()=>{class n{constructor(t,i,s){this.activateRoute=t,this.personajesService=i,this.location=s,this.spinner=!0}ngOnInit(){this.paramsId(),this.obtenerPersonajes()}paramsId(){this.activateRoute.params.subscribe(({id:t})=>{this.id=t})}obtenerPersonajes(){this.personajesService.obtenerInfoPersonajes(this.id).subscribe(t=>{this.personajes=t,this.spinner=!1})}irAtras(){this.location.back()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.gz),e.Y36(F),e.Y36(p.Ye))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-informacion"]],decls:3,vars:2,consts:[["class","grid align-items-center justify-content-center m-5",4,"ngIf"],["class","grid",4,"ngIf"],["pButton","","type","button","icon","pi pi-arrow-circle-left",1,"p-button-raised","p-button-rounded","p-button-danger",3,"click"],[1,"grid","align-items-center","justify-content-center","m-5"],[1,""],["strokeWidth","8"],[1,"animate__animated","animate__backInUp"],[1,"grid"],[1,"col-12"],[4,"ngFor","ngForOf"],[1,"imagen","col-12","sm:col-3","md:col-3"],[3,"src","alt"],[1,"col-12","sm:col-9"],[1,"grid","contenedor"],[1,"col-12","sm:col-6","md:col-6","lg:col-6",2,"padding","0","margin-left","10px"],[4,"ngIf"],[1,"col-12","sm:col-5","md:col-5",2,"padding","0","margin-left","10px"],[1,"col-12","target","sm:col-6","md:col-4"],["class","",4,"ngFor","ngForOf"],[1,"col-12","target","sm:col-4","md:col-4"],[1,"col-12","target","sm:col-3","md:col-3"]],template:function(t,i){1&t&&(e.YNc(0,xe,5,0,"div",0),e.YNc(1,Ae,3,1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return i.irAtras()}),e.qZA()),2&t&&(e.Q6J("ngIf",i.spinner),e.xp6(1),e.Q6J("ngIf",!i.spinner))},dependencies:[p.sg,p.O5,g.Hq,_.Z,h.G,p.uU],styles:["img[_ngcontent-%COMP%]{width:100%;border-radius:10px}.target[_ngcontent-%COMP%]{margin:1px;border-radius:10px}.contenedor[_ngcontent-%COMP%]{padding:10px}button[_ngcontent-%COMP%]{position:fixed;bottom:20px}"]}),n})();function ye(n,o){1&n&&(e.TgZ(0,"div",3)(1,"div",4),e._UZ(2,"p-progressSpinner",5),e.TgZ(3,"p",6),e._uU(4,"Cargando..."),e.qZA()()())}function Fe(n,o){1&n&&(e.TgZ(0,"p"),e._uU(1,"No hay descripci\xf3n..."),e.qZA())}function Ie(n,o){if(1&n&&(e.TgZ(0,"p"),e._uU(1),e.ALo(2,"date"),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(e.lcZ(2,1,t.modified))}}function Se(n,o){if(1&n&&(e.TgZ(0,"div")(1,"ul")(2,"li"),e._uU(3),e.qZA()()()),2&n){const t=o.$implicit;e.xp6(3),e.hij(" ",t.name," ")}}function Oe(n,o){if(1&n&&(e.TgZ(0,"div")(1,"ul")(2,"li"),e._uU(3),e.ALo(4,"titlecase"),e.qZA()()()),2&n){const t=o.$implicit;e.xp6(3),e.AsE(" ",t.name,"(",e.lcZ(4,2,t.role),") ")}}function Me(n,o){if(1&n&&(e.TgZ(0,"div")(1,"h1"),e._uU(2),e.qZA(),e.TgZ(3,"div",7)(4,"div",10),e._UZ(5,"img",11),e.qZA(),e.TgZ(6,"div",12)(7,"div",13)(8,"div",14)(9,"h4"),e._uU(10,"Descripci\xf3n"),e.qZA(),e.TgZ(11,"p"),e._uU(12),e.qZA(),e.YNc(13,Fe,2,0,"p",15),e.qZA(),e.TgZ(14,"div",16)(15,"h4"),e._uU(16,"\xdaltima Modificaci\xf3n"),e.qZA(),e.YNc(17,Ie,3,3,"p",15),e.ALo(18,"date"),e.qZA(),e.TgZ(19,"div",17)(20,"p-card")(21,"h4"),e._uU(22),e.qZA()()(),e.TgZ(23,"div",17)(24,"p-card")(25,"h4"),e._uU(26),e.qZA(),e.YNc(27,Se,4,1,"div",9),e.qZA()(),e.TgZ(28,"div",18)(29,"p-card")(30,"h4"),e._uU(31),e.qZA(),e.YNc(32,Oe,5,4,"div",9),e.qZA()()()()()()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(t.title),e.xp6(3),e.s9C("src",t.thumbnail.path+"."+t.thumbnail.extension,e.LSH),e.xp6(7),e.Oqu(t.description),e.xp6(1),e.Q6J("ngIf",null===t.description||0===t.description.length),e.xp6(4),e.Q6J("ngIf",e.lcZ(18,10,t.modified)),e.xp6(5),e.hij("Series: ",t.series.name,""),e.xp6(4),e.hij("Historias: ",t.stories.available,""),e.xp6(1),e.Q6J("ngForOf",t.stories.items),e.xp6(4),e.hij("Creadores: ",t.creators.available,""),e.xp6(1),e.Q6J("ngForOf",t.creators.items)}}function qe(n,o){if(1&n&&(e.TgZ(0,"div",7)(1,"div",8),e.YNc(2,Me,33,12,"div",9),e.qZA()()),2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.comics)}}let Ne=(()=>{class n{constructor(t,i,s){this.comicsService=t,this.activatedRoute=i,this.location=s,this.comics=[],this.spinner=!0}ngOnInit(){this.paramsId(),this.obtenerInfoComics()}paramsId(){this.activatedRoute.params.subscribe(({id:t})=>{this.id=t})}obtenerInfoComics(){this.comicsService.obtenerInfoComics(this.id).subscribe(t=>{this.comics=t,this.spinner=!1})}irAtras(){this.location.back()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(N),e.Y36(l.gz),e.Y36(p.Ye))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-info-comics"]],decls:3,vars:2,consts:[["class","grid align-items-center justify-content-center m-5",4,"ngIf"],["class","grid",4,"ngIf"],["pButton","","type","button","icon","pi pi-arrow-circle-left",1,"p-button-danger","p-button-raised","p-button-rounded",3,"click"],[1,"grid","align-items-center","justify-content-center","m-5"],[1,""],["strokeWidth","8"],[1,"animate__animated","animate__backInUp"],[1,"grid"],[1,"col-12"],[4,"ngFor","ngForOf"],[1,"imagen","col-12","sm:col-3","md:col-3"],["alt","",3,"src"],[1,"col-12","sm:col-9"],[1,"grid","contenedor"],[1,"col-12","sm:col-8","md:col-8",2,"padding","0","margin-left","10px"],[4,"ngIf"],[1,"col-12","sm:col-3","md:col-3",2,"padding","0","margin-left","10px"],[1,"col-12","target","sm:col-5","md:col-3"],[1,"col-12","target","sm:col-7","md:col-5"]],template:function(t,i){1&t&&(e.YNc(0,ye,5,0,"div",0),e.YNc(1,qe,3,1,"div",1),e.TgZ(2,"button",2),e.NdJ("click",function(){return i.irAtras()}),e.qZA()),2&t&&(e.Q6J("ngIf",i.spinner),e.xp6(1),e.Q6J("ngIf",!i.spinner))},dependencies:[p.sg,p.O5,g.Hq,_.Z,h.G,p.rS,p.uU],styles:["img[_ngcontent-%COMP%]{width:100%;border-radius:10px}.target[_ngcontent-%COMP%]{margin:1px;border-radius:10px}button[_ngcontent-%COMP%]{position:fixed;bottom:20px}.contenedor[_ngcontent-%COMP%]{padding:10px}  .p-card{width:100%}"]}),n})();var Ue=r(5700);function Je(n,o){1&n&&(e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"p-progressSpinner",6),e.TgZ(3,"p",5),e._uU(4,"Cargando..."),e.qZA()()())}function ke(n,o){1&n&&(e.TgZ(0,"div")(1,"div",5)(2,"h4"),e._uU(3,"A\xfan no tiene personajes favoritos..."),e.qZA()()())}function Ye(n,o){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Mis Personajes Favoritos"),e.qZA())}function Qe(n,o){if(1&n&&(e.TgZ(0,"div",18),e._UZ(1,"p-image",19),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.s9C("src",t.img)}}function $e(n,o){if(1&n&&(e.TgZ(0,"div",20)(1,"h4",21),e._uU(2),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.nombre," ")}}function He(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",22)(1,"button",23),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw(3);return e.KtG(a.obtenerPersonaje(s.id))}),e.qZA(),e.TgZ(2,"button",24),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw(3);return e.KtG(a.eliminarPersonaje(s))}),e.qZA()()}}function Ee(n,o){1&n&&(e.TgZ(0,"div",13)(1,"div",14)(2,"p-card",15),e.YNc(3,Qe,2,1,"ng-template",11),e.YNc(4,$e,3,1,"ng-template",16),e.YNc(5,He,3,0,"ng-template",17),e.qZA()()())}function Le(n,o){if(1&n&&(e.TgZ(0,"p-carousel",10),e.YNc(1,Ye,2,0,"ng-template",11),e.YNc(2,Ee,6,0,"ng-template",12),e.qZA()),2&n){const t=e.oxw(2);e.Q6J("value",t.personajes)("numVisible",5)("numScroll",5)("circular",!0)("autoplayInterval",3e3)("responsiveOptions",t.responsiveOptions)}}function Be(n,o){1&n&&(e.TgZ(0,"div")(1,"div",5)(2,"h4"),e._uU(3,"A\xfan no tiene comics favoritos"),e.qZA()()())}function De(n,o){1&n&&(e.TgZ(0,"h3"),e._uU(1,"Mis Comics Favoritos"),e.qZA())}function ze(n,o){if(1&n&&(e.TgZ(0,"div",18),e._UZ(1,"p-image",25),e.qZA()),2&n){const t=e.oxw().$implicit;e.xp6(1),e.s9C("src",t.img),e.s9C("alt",t.nombre)}}function Re(n,o){if(1&n&&(e.TgZ(0,"div",20)(1,"h4",21),e._uU(2),e.qZA()()),2&n){const t=e.oxw().$implicit;e.xp6(2),e.hij(" ",t.nombre," ")}}function Ge(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",22)(1,"button",23),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw(3);return e.KtG(a.obtenerComic(s.id))}),e.qZA(),e.TgZ(2,"button",24),e.NdJ("click",function(){e.CHM(t);const s=e.oxw().$implicit,a=e.oxw(3);return e.KtG(a.eliminarComic(s))}),e.qZA()()}}function Ke(n,o){1&n&&(e.TgZ(0,"div",13)(1,"div",14)(2,"p-card",15),e.YNc(3,ze,2,2,"ng-template",11),e.YNc(4,Re,3,1,"ng-template",16),e.YNc(5,Ge,3,0,"ng-template",17),e.qZA()()())}function Ve(n,o){if(1&n&&(e.TgZ(0,"p-carousel",10),e.YNc(1,De,2,0,"ng-template",11),e.YNc(2,Ke,6,0,"ng-template",12),e.qZA()),2&n){const t=e.oxw(2);e.Q6J("value",t.comics)("numVisible",5)("numScroll",5)("circular",!0)("autoplayInterval",3e3)("responsiveOptions",t.responsiveOptions)}}function We(n,o){if(1&n&&(e.TgZ(0,"div",7),e.YNc(1,ke,4,0,"div",8),e.YNc(2,Le,3,6,"p-carousel",9),e.YNc(3,Be,4,0,"div",8),e.YNc(4,Ve,3,6,"p-carousel",9),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",0===t.personajes.length),e.xp6(1),e.Q6J("ngIf",t.personajes.length>0),e.xp6(1),e.Q6J("ngIf",0===t.comics.length&&!t.spinner),e.xp6(1),e.Q6J("ngIf",t.comics.length>0)}}const Xe=function(){return{"960px":"75vw","640px":"100vw"}},et=function(){return{width:"100%",right:"0",left:"0"}},tt=function(n){return{"920px":n}},nt=[{path:"",component:L,children:[{path:"",component:B,data:{titulo:"Dashboard"}},{path:"personajes",component:se,data:{titulo:"Personajes"}},{path:"personajes/:id",component:Pe,data:{titulo:"Personajes"}},{path:"comics",component:Ce,data:{titulo:"Comics"}},{path:"comics/:id",component:Ne,data:{titulo:"Comics"}},{path:"favoritos",component:(()=>{class n{constructor(t,i,s){this.router=t,this.confirmationService=i,this.messageService=s,this.spinner=!0,this.personajes=[],this.comics=[],this.responsiveOptions=[{breakpoint:"1200px",numVisible:4,numScroll:4},{breakpoint:"1024px",numVisible:3,numScroll:3},{breakpoint:"768px",numVisible:2,numScroll:2},{breakpoint:"560px",numVisible:1,numScroll:1}]}ngOnInit(){this.cargarLocalStorage(),this.spinner=!1}cargarLocalStorage(){localStorage.getItem("personajesFav")&&(this.personajes=JSON.parse(localStorage.getItem("personajesFav"))),localStorage.getItem("comicsFav")&&(this.comics=JSON.parse(localStorage.getItem("comicsFav")))}obtenerPersonaje(t){this.router.navigate([`/dashboard/personajes/${t}`])}obtenerComic(t){this.router.navigate([`/dashboard/comics/${t}`])}eliminarPersonaje(t){const i=t.id;this.confirmationService.confirm({message:`\xbfSeguro que desea eliminar a ${t.nombre} de sus favoritos?`,accept:()=>{this.messageService.add({severity:"info",summary:"Confirmado",detail:"Ha sido eliminado de sus favoritos con \xe9xito"});let a=this.personajes.filter(m=>m.id!==i);this.personajes=a;let d=JSON.stringify(this.personajes);localStorage.setItem("personajesFav",d)},reject:a=>{switch(a){case c.wB.REJECT:case c.wB.CANCEL:this.messageService.add({severity:"error",summary:"Cancelado",detail:"No ha sido eliminado"})}}})}eliminarComic(t){const i=t.id;this.confirmationService.confirm({message:`Seguro que quiere eliminar a ${t.nombre} de sus favoritos`,accept:()=>{this.messageService.add({severity:"info",summary:"Confirmado",detail:"Ha sido eliminado de sus favoritos con \xe9xito"});let a=this.comics.filter(m=>m.id!==i);this.comics=a;let d=JSON.stringify(this.comics);localStorage.setItem("comicsFav",d)},reject:a=>{switch(a){case c.wB.REJECT:this.messageService.add({severity:"error",summary:"Cancelado",detail:"No ha sido eliminado"});break;case c.wB.CANCEL:this.messageService.add({severity:"warn",summary:"Cancelado",detail:"No ha sido eliminado"})}}})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(l.F0),e.Y36(c.YP),e.Y36(c.ez))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-favoritos"]],features:[e._Bn([c.YP,c.ez])],decls:4,vars:8,consts:[["class","grid align-items-center justify-content-center m-5",4,"ngIf"],["header","Confirmar","icon","pi pi-exclamation-triangle",3,"breakpoints"],[3,"breakpoints"],["class","text-center",4,"ngIf"],[1,"grid","align-items-center","justify-content-center","m-5"],[1,""],["strokeWidth","8"],[1,"text-center"],[4,"ngIf"],[3,"value","numVisible","numScroll","circular","autoplayInterval","responsiveOptions",4,"ngIf"],[3,"value","numVisible","numScroll","circular","autoplayInterval","responsiveOptions"],["pTemplate","header"],["pTemplate","item"],[1,"personajes-item","text-center"],[1,"tarjeta"],["styleClass","tam"],["pTemplate","subheader"],["pTemplate","footer"],[1,"animacion"],["imageClass","p-image",3,"src"],[1,"title"],[1,"p-mb-1"],[1,"car-buttons","p-mt-5"],["pButton","","type","button","icon","fa-solid fa-circle-info",1,"m-1","p-button-info","p-button-rounded","p-button-outlined",3,"click"],["pButton","","type","button","icon","fa-solid fa-heart-circle-xmark",1,"m-1","p-button-secondary","p-button-rounded","p-button-outlined",3,"click"],["imageClass","p-image",3,"src","alt"]],template:function(t,i){1&t&&(e.YNc(0,Je,5,0,"div",0),e._UZ(1,"p-confirmDialog",1)(2,"p-toast",2),e.YNc(3,We,5,4,"div",3)),2&t&&(e.Q6J("ngIf",i.spinner),e.xp6(1),e.Q6J("breakpoints",e.DdM(4,Xe)),e.xp6(1),e.Q6J("breakpoints",e.VKq(6,tt,e.DdM(5,et))),e.xp6(1),e.Q6J("ngIf",!i.spinner))},dependencies:[p.O5,g.Hq,c.jx,_.Z,h.G,Ue.l,C.E,x.Q,b.FN],styles:[".tarjeta[_ngcontent-%COMP%]{height:auto;width:auto;margin:.3rem}.title[_ngcontent-%COMP%]{height:60px}h4[_ngcontent-%COMP%]{height:100%;width:100%}[_nghost-%COMP%]     .tam{border-radius:5%;height:100%;width:200px}.personajes-item[_ngcontent-%COMP%]{display:flex;justify-content:center}.animacion[_ngcontent-%COMP%]{display:flex;justify-content:center;height:200px}[_nghost-%COMP%]     .p-image{border-radius:5%;height:100%;width:100%}@media screen and (max-width: 560px){.tarjeta[_ngcontent-%COMP%]{height:auto;width:100%}.animacion[_ngcontent-%COMP%]{overflow:hidden;height:100%;width:100%}[_nghost-%COMP%]     .tam{border-radius:5%;height:100%;width:auto}}"]}),n})(),data:{titulo:"Favoritos"}},{path:"**",redirectTo:"/dashboard"}]}];let ot=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[l.Bz.forChild(nt),l.Bz]}),n})();var T=r(6730);let it=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,T.g]}),n})(),st=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,T.g]}),n})(),at=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,ot,it,T.g,st]}),n})()}}]);