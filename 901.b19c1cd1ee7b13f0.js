"use strict";(self.webpackChunknewsApp=self.webpackChunknewsApp||[]).push([[901],{901:(M,u,s)=>{s.r(u),s.d(u,{HomeModule:()=>k});var c=s(895),e=s(256);let p=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez]}),o})(),m=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,p]}),o})(),y=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez]}),o})();var d=s(706),f=s(904);function b(t,o){if(1&t){const a=e.EpF();e.TgZ(0,"div",1)(1,"div",2)(2,"div",3)(3,"a",4),e._uU(4,"Fudo.news"),e.qZA()(),e.TgZ(5,"button",5),e.NdJ("click",function(){e.CHM(a);const r=e.oxw();return e.KtG(r.closeMenu.emit(!1))}),e._UZ(6,"img",6),e.qZA()(),e.TgZ(7,"nav",7)(8,"ul",8)(9,"li",9)(10,"a",4),e._uU(11,"Inicio"),e.qZA()(),e.TgZ(12,"li",9),e._uU(13,"Sports"),e.qZA(),e.TgZ(14,"li",9),e._uU(15,"Nosotros"),e.qZA()()()()}}let v=(()=>{var t;class o{constructor(){this.isOpenMenu=!1,this.closeMenu=new e.vpe}}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-accordion-menu"]],inputs:{isOpenMenu:"isOpenMenu"},outputs:{closeMenu:"closeMenu"},decls:1,vars:1,consts:[["class","container-accordion-menu",4,"ngIf"],[1,"container-accordion-menu"],[1,"container-accordion-header"],[1,"container-accordion-header__title"],["routerLink","/"],["type","button",1,"container-accordion-close",3,"click"],["src","./assets/icons/close.png","alt","close"],["role","navigation",1,"container-nav"],[1,"container-nav-ul"],[1,"container-nav-ul__li"]],template:function(n,r){1&n&&e.YNc(0,b,16,0,"div",0),2&n&&e.Q6J("ngIf",r.isOpenMenu)},dependencies:[c.O5],styles:[".container-accordion-menu[_ngcontent-%COMP%]{position:absolute;width:100%;background-color:#fff;-webkit-font-smoothing:antialiased;transition:transform .5s cubic-bezier(.77,.2,.05,1);height:100vh;left:0;top:0;padding-top:16px;z-index:1}.container-accordion-header[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between;padding:0 16px}.container-accordion-header__title[_ngcontent-%COMP%]{color:#ff5023;font-size:22px;font-weight:700}.container-accordion-close[_ngcontent-%COMP%]{border-style:none;padding:0;border-radius:12px;height:48px;width:48px}.container-nav[_ngcontent-%COMP%]{padding-top:5px}.container-nav-ul[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.container-nav-ul__li[_ngcontent-%COMP%]{padding:15px 16px}"]}),o})(),l=(()=>{var t;class o{constructor(n){this._newsService=n,this.isOpenMenu=!1}searchNews(n){this._newsService.getSearchNews(n).subscribe(r=>this._newsService.news$.next(r))}}return(t=o).\u0275fac=function(n){return new(n||t)(e.Y36(f.Y))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-header"]],decls:21,vars:1,consts:[[1,"container-header"],["type","button",1,"container-menu-toggle",3,"click"],["src","./assets/icons/icon.png","alt","menu"],["role","navigation",1,"container-nav"],[1,"container-nav-ul"],[1,"container-nav-ul__li","container-nav-ul__home"],["routerLink","/"],[1,"container-nav-ul__li"],[1,"container-search"],["type","text","placeholder","Buscar",1,"container-search__input",3,"keydown.enter"],["search",""],["type","button",1,"container-search-button",3,"click"],["src","./assets/icons/search.png","alt","search-icon",1,"container-search-button__image"],[3,"isOpenMenu","closeMenu"]],template:function(n,r){if(1&n){const C=e.EpF();e.TgZ(0,"header",0)(1,"button",1),e.NdJ("click",function(){return r.isOpenMenu=!r.isOpenMenu}),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"nav",3)(4,"ul",4)(5,"li",5)(6,"a",6),e._uU(7,"Fudo.news"),e.qZA()(),e.TgZ(8,"li",7)(9,"a",6),e._uU(10,"Inicio"),e.qZA()(),e.TgZ(11,"li",7),e._uU(12,"Categorias"),e.qZA(),e.TgZ(13,"li",7),e._uU(14,"Nosotros"),e.qZA()()(),e.TgZ(15,"div",8)(16,"input",9,10),e.NdJ("keydown.enter",function(){e.CHM(C);const h=e.MAs(17);return e.KtG(r.searchNews(h.value))}),e.qZA(),e.TgZ(18,"button",11),e.NdJ("click",function(){e.CHM(C);const h=e.MAs(17);return e.KtG(r.searchNews(h.value))}),e._UZ(19,"img",12),e.qZA()()(),e.TgZ(20,"app-accordion-menu",13),e.NdJ("closeMenu",function(h){return r.isOpenMenu=h}),e.qZA()}2&n&&(e.xp6(20),e.Q6J("isOpenMenu",r.isOpenMenu))},dependencies:[v],styles:[".container-header[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.container-menu-toggle[_ngcontent-%COMP%]{background-color:#f5f5f5;border-style:none;border-radius:12px;padding:14px}.container-search[_ngcontent-%COMP%]{background-color:#f5f5f5;margin-left:10px;border-radius:12px;padding:14px;position:relative;width:100%;max-width:399px}.container-search__input[_ngcontent-%COMP%]{background-color:#f5f5f5;border:1px solid #f5f5f5;outline:none;width:90%}.container-search-button[_ngcontent-%COMP%]{background-color:transparent;border-style:none;cursor:pointer;position:absolute;right:20px;top:50%;transform:translateY(-50%)}.container-menu-toggle[_ngcontent-%COMP%]{display:none}@media only screen and (max-width: 740px){.container-menu-toggle[_ngcontent-%COMP%]{display:block}}.container-nav[_ngcontent-%COMP%]{display:block;margin-right:16px}@media only screen and (max-width: 740px){.container-nav[_ngcontent-%COMP%]{display:none}}.container-nav-ul[_ngcontent-%COMP%]{align-items:center;display:flex;list-style:none;gap:34px;padding-left:0}.container-nav-ul__home[_ngcontent-%COMP%]{color:#ff5023;font-size:22px;font-weight:700}"]}),o})(),g=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-footer"]],decls:6,vars:0,consts:[[1,"container-footer"],[1,"container-footer-content"],["routerLink","/",1,"container-footer__home"],[1,"container-footer-copyright"]],template:function(n,r){1&n&&(e.TgZ(0,"footer",0)(1,"div",1)(2,"a",2),e._uU(3,"Fudo.news"),e.qZA(),e.TgZ(4,"div",3),e._uU(5," \xa9 2023 Fudo. Todos los derechos reservados "),e.qZA()()())},styles:[".container-footer[_ngcontent-%COMP%]{background-color:#f5f5f5;position:fixed;bottom:0;left:0;width:100%}.container-footer__home[_ngcontent-%COMP%]{color:#ff5023;font-size:22px;font-weight:700}.container-footer-content[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:16px}@media only screen and (max-width: 991px){.container-footer-content[_ngcontent-%COMP%]{width:100%;max-width:100%;justify-content:center;padding:16px 0}}.container-footer-copyright[_ngcontent-%COMP%]{display:block}@media only screen and (max-width: 991px){.container-footer-copyright[_ngcontent-%COMP%]{display:none}}"]}),o})();const i=[{path:"",redirectTo:"news",pathMatch:"full"},{path:"news",component:(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:3,vars:0,template:function(n,r){1&n&&e._UZ(0,"app-header")(1,"router-outlet")(2,"app-footer")},dependencies:[d.lC,l,g]}),o})(),children:[{path:"",loadChildren:()=>s.e(388).then(s.bind(s,388)).then(t=>t.NewsModule)}]}];let w=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(i),d.Bz]}),o})(),k=(()=>{var t;class o{}return(t=o).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,w,m,y]}),o})()},904:(M,u,s)=>{s.d(u,{Y:()=>v});var e=s(135),p=s(262),m=s(646);const y=JSON.parse('{"status":"ok","totalResults":36,"articles":[{"source":{"id":"cnn","name":"CNN"},"author":"Tierney Sneed","title":"Meadows trying to move Fulton County case to federal court - CNN","description":"Former Trump White House chief of staff Mark Meadows is seeking to move the Fulton County, Georgia, prosecution against him to federal court so that he can try to get the case dismissed under federal law.","url":"https://www.cnn.com/2023/08/15/politics/mark-meadows-fulton-case-federal-court/index.html","urlToImage":"https://media.cnn.com/api/v1/images/stellar/prod/230815175227-mark-meadows-file-081523.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2023-08-15T22:26:00Z","content":"Former Trump White House chief of staff Mark Meadows is seeking to move the Fulton County, Georgia, prosecution against him to federal court so that he can try to get the case dismissed under federal\u2026 [+2605 chars]"},{"source":{"id":"abc-news","name":"ABC News"},"author":"EDNA TARIGAN and ROD McGUIRK Associated Press","title":"4 Australians and 2 Indonesians are rescued after being missing in waters off Indonesia for 2 days - ABC News","description":"Four Australian tourists and two Indonesians have been rescued after being missing for two days in the waters off Indonesia\u2019s Aceh province","url":"https://abcnews.go.com/International/wireStory/4-australian-tourists-rescued-after-missing-indonesian-waters-102274652","urlToImage":"https://s.abcnews.com/images/International/wirestory_476a3eeed14339d3160d5e3edbe680f5_16x9_992.jpg","publishedAt":"2023-08-15T21:56:58Z","content":"JAKARTA, Indonesia -- Four Australian tourists and two Indonesians were rescued after being missing for two days in the waters off Indonesia\'s Aceh province, officials and the father of one of the Au\u2026 [+2641 chars]"},{"source":{"id":"the-verge","name":"The Verge"},"author":"Simon Hurtz","title":"OpenAI wants GPT-4 to solve the content moderation dilemma - The Verge","description":"Neither Meta nor TikTok have really figured out how to moderate harmful content at scale. OpenAI touts its large language model GPT-4, but there is a catch.","url":"https://www.theverge.com/2023/8/15/23833406/openai-gpt-4-content-moderation-ai-meta","urlToImage":"https://cdn.vox-cdn.com/thumbor/QCdO_oKAdBIZCodEUT2WCBFgQSo=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24390406/STK149_AI_03.jpg","publishedAt":"2023-08-15T20:50:15Z","content":"OpenAI wants GPT-4 to solve the content moderation dilemma\\r\\nOpenAI wants GPT-4 to solve the content moderation dilemma\\r\\n / No one has really figured out how to moderate harmful content at scale. Open\u2026 [+3843 chars]"},{"source":{"id":null,"name":"CNBC"},"author":"Sarah Whitten","title":"Disney accused of withholding hundreds of millions of dollars from \'Avatar\' sequel financier - CNBC","description":"Disney has been accused of withholding profits from TSG Entertainment, a long-time financing partner of its 20th Century Fox studio.","url":"https://www.cnbc.com/2023/08/15/disney-accused-of-withholding-profits-from-tsg-entertainment.html","urlToImage":"https://image.cnbcfm.com/api/v1/image/107168569-1671806212438-107168569-1671482146688-au_gallerycontents_20cs_avatar2_2_7d3198d3.jpg?v=1692132301&w=1920&h=1080","publishedAt":"2023-08-15T20:45:01Z","content":"Hollywood financer TSG Entertainment is suing Disney for breach of contract.\\r\\nThe suit filed Tuesday in Los Angeles Superior Court\xa0alleges that Disney and its studio 20th Century Fox committed a numb\u2026 [+3398 chars]"},{"source":{"id":null,"name":"Fox Business"},"author":"Megan Henney","title":"Fitch warns multiple US banks face credit downgrade: report - Fox Business","description":"A Fitch Ratings analyst warned the agency may be forced to downgrade dozens of U.S. banks, including major lenders like JPMorgan Chase and Bank of America.","url":"https://www.foxbusiness.com/economy/fitch-warns-multiple-us-banks-face-credit-downgrade-report","urlToImage":"https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/10/0/0/JPMorganChase.jpg?ve=1&tl=1","publishedAt":"2023-08-15T20:37:13Z","content":"A Fitch Ratings analyst on Tuesday warned the agency may be forced to cut the credit ratings of more than a dozen banks, including some major Wall Street lenders.\xa0\\r\\nFitch already lowered the score of\u2026 [+4629 chars]"},{"source":{"id":"usa-today","name":"USA Today"},"author":"Krystal Nurse","title":"Michigan State University workers stumble across buried, 142-year-old campus observatory - USA TODAY","description":"Michigan State workers installing a hammock thought they had uncovered a large rock but used old maps to determine what they had struck.","url":"https://www.usatoday.com/story/news/nation/2023/08/15/michigan-state-observatory-buried-on-campus/70594779007/","urlToImage":"https://www.usatoday.com/gcdn/authoring/authoring-images/2023/08/02/PLSJ/70513022007-msu-archaeology-dig-8.jpg?crop=4117,2326,x0,y0&width=3200&height=1808&format=pjpg&auto=webp","publishedAt":"2023-08-15T20:18:44Z","content":"EAST LANSING, MI What began as a simple hammock installation led Michigan State University workers to uncover a more-than-century-old part of the university\'s history.\\r\\nEmployees with the school\'s In\u2026 [+3006 chars]"},{"source":{"id":null,"name":"MacRumors"},"author":"Juli Clover","title":"Apple Seeds Sixth Betas of iOS 17 and iPadOS 17 to Developers - MacRumors","description":"Apple today seeded the sixth betas of upcoming iOS 17 and iPadOS 17 updates to developers for testing purposes, with the software coming a week after...","url":"https://www.macrumors.com/2023/08/15/apple-seeds-ios-17-beta-6-to-developers/","urlToImage":"https://images.macrumors.com/t/6b8G5PxTlH6uYOEFaG0IPAF9hKU=/2250x/article-new/2023/06/General-iOS-17-Feature-Orange-Purple.jpg","publishedAt":"2023-08-15T20:13:11Z","content":"Apple today seeded the sixth betas of upcoming iOS 17 and iPadOS 17 updates to developers for testing purposes, with the software coming a week after the release of the fifth betas.\\r\\nRegistered devel\u2026 [+2489 chars]"},{"source":{"id":null,"name":"KOCO Oklahoma City"},"author":"Jonathan Greco","title":"OSDH: Oklahoma\'s first human cases of West Nile virus for 2023 reported - KOCO Oklahoma City","description":"The Oklahoma State Department of Health on Tuesday reported the state\'s first human cases of West Nile virus for 2023.","url":"https://www.koco.com/article/oklahoma-west-nile-virus-first-human-cases-reported-2023/44821232","urlToImage":"https://kubrick.htvapps.com/htv-prod/ibmig/cms/image/koco/27099206-27099206.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*","publishedAt":"2023-08-15T19:45:00Z","content":"OKLAHOMA CITY \u2014The Oklahoma State Department of Health on Tuesday reported the state\'s first human cases of West Nile virus for 2023.\\r\\n| RELATED VIDEO ABOVE | Oklahoma State Department of Health addr\u2026 [+2346 chars]"},{"source":{"id":"reuters","name":"Reuters"},"author":"David Carnevali","title":"Esmark CEO says has money in bank account for $7.8 billion US Steel bid - Reuters","description":"Esmark Inc majority owner and chief executive James Bouchard said in an interview on Tuesday that his steel maker, which does not publicly report its earnings, has cash for its $7.8 billion bid for U.S. Steel Corp <a href=\\"https://www.reuters.com/markets/comp\u2026","url":"https://www.reuters.com/markets/deals/esmark-ceo-says-has-money-bank-account-78-billion-us-steel-bid-2023-08-15/","urlToImage":"https://www.reuters.com/resizer/YBc6tRGLAxW79ezShUxh1uruJ2M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C3PRREBAOZJQRMCCQC5YZHE2UM.jpg","publishedAt":"2023-08-15T19:38:00Z","content":"NEW YORK, Aug 15 (Reuters) - Esmark Inc majority owner and chief executive James Bouchard said in an interview on Tuesday that his steel maker, which does not publicly report its earnings, has cash f\u2026 [+1406 chars]"},{"source":{"id":"associated-press","name":"Associated Press"},"author":"BEN FINLEY, DENISE LAVOIE","title":"Mother pleads guilty to felony child neglect after 6-year-old son used her gun to shoot teacher - The Associated Press","description":"The mother of a 6-year-old who shot his teacher in Virginia pleaded guilty Tuesday to a charge of felony child neglect, seven months after her son used her handgun to critically wound the educator in a classroom full of students. Prosecutors agreed to drop th\u2026","url":"https://apnews.com/article/teacher-shooting-virginia-boy-classroom-81d52f6bf35512c5684acb93baa8700b","urlToImage":"https://dims.apnews.com/dims4/default/f99d1e8/2147483647/strip/true/crop/3600x2025+0+188/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F73%2Fe5%2F0e2ae414aa2e9a5e5be86c72b8d4%2F7f82e26b216a4ca6ae655ab0778426cd","publishedAt":"2023-08-15T19:35:00Z","content":"NEWPORT NEWS, Va. (AP) The mother of a 6-year-old boy who shot his teacher in Virginia pleaded guilty Tuesday to a charge of felony child neglect, seven months after her son used her handgun to criti\u2026 [+5270 chars]"},{"source":{"id":null,"name":"New York Post"},"author":"Erin Keller","title":"Katharine McPhee\u2019s nanny fatally run over by elderly woman: report - New York Post ","description":"The 84-year-old driver was not injured in the incident.","url":"https://nypost.com/2023/08/15/katharine-mcphees-nanny-fatally-run-over-by-elderly-woman-report/","urlToImage":"https://nypost.com/wp-content/uploads/sites/2/2023/08/NYPICHPDPICT000022226274.jpg?quality=75&strip=all&w=1024","publishedAt":"2023-08-15T19:27:00Z","content":"A woman who worked as a nanny for singer Katharine McPhee and her husband, David Foster, reportedly died after an elderly woman hit her at a San Fernando Valley car dealership.\\r\\nA source identified Y\u2026 [+2808 chars]"},{"source":{"id":"politico","name":"Politico"},"author":null,"title":"Attorney is dropping representation of Hunter Biden - POLITICO","description":"Christopher Clark, a high-profile litigator, is withdrawing because he might be called to testify in the case, which appears headed for a criminal trial.","url":"https://www.politico.com/news/2023/08/15/hunter-bidens-attorney-will-withdraw-from-tax-case-as-he-prepares-to-potentially-testify-00111284","urlToImage":"https://static.politico.com/05/07/0ed342c24ffe843770a1e6b71175/biden-investigation-54550.jpg","publishedAt":"2023-08-15T19:05:17Z","content":"Hunter Biden was set to enter a plea deal in federal court last month, but the agreement hit a roadblock. | Julio Cortez/AP Photo\\r\\nHunter Bidens lead attorney defending him in a federal criminal inve\u2026 [+757 chars]"},{"source":{"id":null,"name":"New York Post"},"author":"Fox News","title":"Minnesota town\'s entire police force resigns, leaving chief with \'zero prospects\' - New York Post ","description":"Goodhue, Minnesota, a small town in the southeastern part of the state, lost its entire police force\xa0after the chief and other members of the force handed in their resignations.","url":"https://nypost.com/2023/08/15/minnesota-towns-entire-police-force-resigns-leaving-chief-with-zero-prospects/","urlToImage":"https://nypost.com/wp-content/uploads/sites/2/2023/08/police.jpg?quality=75&strip=all&w=1024","publishedAt":"2023-08-15T19:04:00Z","content":"Goodhue, Minnesota, a small town in the southeastern part of the state, lost its entire police force\xa0after the chief and other members of the force handed in their resignations.\\r\\n\u201cI think we\u2019re all a\u2026 [+2085 chars]"},{"source":{"id":null,"name":"AZFamily"},"author":"Debra Worley","title":"Chick-fil-A introduces first-ever seasonal spin on the original chicken sandwich - Arizona\'s Family","description":"The sandwich will be on menus nationwide starting Aug. 28.","url":"https://www.azfamily.com/2023/08/15/chick-fil-a-introduces-first-ever-seasonal-spin-original-chicken-sandwich/","urlToImage":"https://gray-kpho-prod.cdn.arcpublishing.com/resizer/y1wYZrKtY_eoewh_scQKcA7wNd8=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/COZAOT4NPJBKBCCFFES2R4FU5E.jpg","publishedAt":"2023-08-15T18:23:00Z","content":"(Gray News) Chick-fil-A is launching a new sandwich its first-ever twist on the beloved original chicken sandwich.\\r\\nThe Honey Pepper Pimento Chicken Sandwich combines the classic flavors with a sweet\u2026 [+647 chars]"},{"source":{"id":"cbs-news","name":"CBS News"},"author":"Alexander Tin","title":"COVID hospitalizations accelerate for fourth straight week - CBS News","description":"ER visits are also climbing, with the steepest rise in kids.","url":"https://www.cbsnews.com/news/covid-hospitalizations-rise-fourth-week-eg-5-variant/","urlToImage":"https://assets3.cbsnewsstatic.com/hub/i/r/2021/01/11/bde3e702-1b2a-46cc-9012-d921d2db8624/thumbnail/1200x630/f7e7a39d9e35a717305e6c3fdc514fd1/AP21006083015725.jpg?v=46e0dad4db516ed39a3a8f6257e75e73","publishedAt":"2023-08-15T17:40:00Z","content":"New COVID-19 hospitalizations have accelerated for a fourth straight week, Centers for Disease Control and Prevention data now shows.\\r\\nA total of 10,320 patients in the U.S. were newly hospitalized w\u2026 [+2660 chars]"},{"source":{"id":null,"name":"Yahoo Entertainment"},"author":"Tyler Greenawalt","title":"Former Vikings RB Dalvin Cook agrees to deal with the New York Jets, reportedly for 1-year, $8.6 million - Yahoo Sports","description":"The Vikings released Dalvin Cook earlier this summer after six seasons with the franchise.","url":"https://sports.yahoo.com/former-vikings-rb-dalvin-cook-agrees-to-deal-with-the-new-york-jets-reportedly-for-1-year-86-million-173843726.html","urlToImage":"https://s.yimg.com/ny/api/res/1.2/Pxzh_sXinYpfa8gMd_NbFA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-12/12efb4e0-8166-11ed-bdad-4992dfab8486","publishedAt":"2023-08-15T17:38:43Z","content":"Dalvin Cook has found his new team.\\r\\nThe former Minnesota Vikings star agreed to join the New York Jets, the team officially announced Tuesday. Cook\'s deal is reportedly for one-year and worth $8.6 m\u2026 [+2283 chars]"},{"source":{"id":"nfl-news","name":"NFL News"},"author":null,"title":"Nine riskiest NFL players to pick in 2023 fantasy football drafts - NFL.com","description":"Is George Kittle being overvalued by fantasy managers heading into the 2023 NFL season? Michelle Magdziuk identifies nine of the riskiest players to select in fantasy football based on their average draft position.","url":"https://www.nfl.com/news/nine-riskiest-nfl-players-to-pick-in-2023-fantasy-football-drafts","urlToImage":"https://static.www.nfl.com/image/private/t_editorial_landscape_12_desktop/league/okrycjzaxppd0zglkalm","publishedAt":"2023-08-15T17:38:00Z","content":"ADP:\xa0Round 4\\r\\nDespite showing plenty of upside throughout his career, Ridley has only topped 900 receiving yards in a season once (2020). Ridley was the Falcons clear-cut top receiver in \'20, posting\u2026 [+439 chars]"},{"source":{"id":"business-insider","name":"Business Insider"},"author":"Jake Epstein","title":"Video shows Russian forces storm cargo ship in Black Sea - Business Insider","description":"The footage, which saw Russians demanding the crew \\"speak English,\\" captures a new threat to shipping as Moscow turns up the pressure on Ukraine.","url":"https://www.businessinsider.com/video-russian-forces-helicopter-storm-cargo-ship-black-sea-ukraine-2023-8","urlToImage":"https://i.insider.com/64db93ba1f51cc001969de3f?width=1200&format=jpeg","publishedAt":"2023-08-15T17:30:00Z","content":"A video shared on Tuesday by Russia\'s defense ministry shows its forces storm the bridge of a cargo ship and interrogate the crew during a helicopter raid in the Black Sea. The incident underscores a\u2026 [+4609 chars]"},{"source":{"id":"mashable","name":"Mashable"},"author":"Mark Kaufman","title":"En route to the moon, Russia beams back first mission images - Mashable","description":"Back in the space race.","url":"https://mashable.com/article/russia-moon-luna-25-images","urlToImage":"https://helios-i.mashable.com/imagery/articles/017SPu6ltbcxRIC11weUx3n/hero-image.fill.size_1200x675.v1692111241.jpg","publishedAt":"2023-08-15T17:03:54Z","content":null},{"source":{"id":"bloomberg","name":"Bloomberg"},"author":"Stephen L. Carter","title":"The Deeply Sad Lawsuit of \'The Blind Side\' NFL Player Michael Oher - Bloomberg","description":"Was the feel-good story of a White couple welcoming a talented Black teen into their family just a sham?","url":"https://www.bloomberg.com/opinion/articles/2023-08-15/the-deeply-sad-lawsuit-of-the-blind-side-nfl-player-michael-oher","urlToImage":"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/irsFNSxp0GsA/v1/1200x921.jpg","publishedAt":"2023-08-15T17:01:37Z","content":"Theres something ineffably sad about the petition filed by former NFL star Michael Oher against Sean and Leigh Anne Tuohy. The story of how the White family took the Black teenager into their home an\u2026 [+507 chars]"}]}');var d=s.t(y,2),f=s(256),b=s(529);let v=(()=>{var l;class g{constructor(i){this._httpClient=i,this.API_URL="https://newsapi.org/v2/top-headlines",this.news$=new e.X({})}getNews(){return this._httpClient.get(this.API_URL,{params:{country:"us",apiKey:"8ab9f6a80b5241b4ba7f0b3938ea683e"}}).pipe((0,p.K)(w=>(0,m.of)(d)))}getSearchNews(i){return i?this._httpClient.get(this.API_URL,{params:{q:i,apiKey:"8ab9f6a80b5241b4ba7f0b3938ea683e"}}).pipe((0,p.K)(k=>(0,m.of)({status:"error",totalResults:0,articles:[]}))):this.getNews()}}return(l=g).\u0275fac=function(i){return new(i||l)(f.LFG(b.eN))},l.\u0275prov=f.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),g})()}}]);