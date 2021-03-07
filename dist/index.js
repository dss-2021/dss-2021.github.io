var D=`
  <img
    part="background"
    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  />
  <video
    part="video"
    autoplay
    muted
    loop
  ></video>

  <div part="details">
    <div part="title"></div>
  </div>
`,x=D;var u=class extends HTMLElement{constructor(){super();this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=x}connectedCallback(){this.shadow.querySelector("[part=title]").innerText=this.getAttribute("title")||"";let t=this.getAttribute("video"),e=this.getAttribute("background");t?this.shadow.querySelector("video").src=t:e&&(this.shadow.querySelector("[part=background]").src=e)}},w=u;customElements.define("dis-hero",u);function l(s){console.warn(s)}var W=`
  <style>
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    :host {
      animation: 1s linear infinite spin;

      border-radius: 30vh;
      background-image:
        conic-gradient(
          #0064e5,
          #36ffff,
          #0064e5
        );
      -webkit-mask-image:
        radial-gradient(
          transparent 4.5vh,
          white 5vh,
          transparent 12vh
        );
      transition: opacity 0.3s;

      width: 15vh;
      height: 15vh;

      position: absolute;
      top: calc(50% - 15vh / 2);
      left: calc(50% - 15vh / 2);
    }
  </style>
`,k=W;var p=class extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"closed"});t.innerHTML=k}hide(){this.style.opacity=0}show(){this.style.opacity=1}},it=p;customElements.define("dis-spinner",p);var $=`
  <slot></slot>

  <dis-spinner></dis-spinner>
`,I=$;var f=class extends HTMLElement{constructor(){super();this.onSlotChange=this.onSlotChange.bind(this);let t=this.attachShadow({mode:"closed"});t.innerHTML=I,this.slotEl=t.querySelector("slot"),this.spinnerEl=t.querySelector("dis-spinner")}connectedCallback(){this.slotEl.addEventListener("slotchange",this.onSlotChange),this.loadScreen().catch(l)}disconnectedCallback(){this.slotEl.removeEventListener("slotchange",this.onSlotChange),this.unloadScreen().catch(l)}onSlotChange(){this.children.length?this.spinnerEl.hide():this.spinnerEl.show()}async loadScreen(){}async unloadScreen(){}},S=f;customElements.define("dis-screen",f);var r={Up:"Up",Down:"Down",Left:"Left",Right:"Right",Select:"Select",Back:"Back"},c={Input:"controlinput"},y=s=>new CustomEvent(c.Input,{bubbles:!0,detail:{input:s}});var a={Focus:"focus"},d,V={ArrowUp:r.Up,ArrowDown:r.Down,ArrowLeft:r.Left,ArrowRight:r.Right,Enter:r.Select,Escape:r.Back};document.body.addEventListener("keyup",s=>{let t=V[s.key];d&&t&&d.dispatchEvent(y(t))});function L(s){d?.removeAttribute("focus"),d=s,d.setAttribute("focus",""),d.dispatchEvent(new CustomEvent(a.Focus,{bubbles:!0}))}var z=`
  <div part="title"></div>
  <div part="track">
    <div part="placeholder"></div>
    <slot></slot>
  </div>
`,C=z;var m=class extends HTMLElement{constructor(){super();this.cursor=0,this.itemsShown=5,this.onFocus=this.onFocus.bind(this),this.onInput=this.onInput.bind(this),this.onSlotChange=this.onSlotChange.bind(this);let t=this.attachShadow({mode:"open"});t.innerHTML=C,this.titleEl=t.querySelector("[part=title]"),this.trackEl=t.querySelector("[part=track]"),this.slotEl=t.querySelector("slot")}static get observedAttributes(){return["title"]}attributeChangedCallback(t,e,n){switch(t){case"title":this.titleEl.innerText=n;break;default:break}}connectedCallback(){this.titleEl.innerText=this.getAttribute("title")||"",this.addEventListener(c.Input,this.onInput),this.addEventListener(a.Focus,this.onFocus),this.slotEl.addEventListener("slotchange",this.onSlotChange)}disconnectedCallback(){this.removeEventListener(a.Focus,this.onFocus),this.removeEventListener(c.Input,this.onInput),this.slotEl.removeEventListener("slotchange",this.onSlotChange)}onFocus(t){this.focusIndex=[...this.children].indexOf(t.target),this.focusIndex>this.cursor+this.itemsShown-1?this.cursor=this.focusIndex-this.itemsShown+1:this.focusIndex<this.cursor&&(this.cursor=this.focusIndex),this.style.setProperty("--cursor",this.cursor)}onInput(t){switch(t.detail.input){case r.Left:{let e=this.children[this.focusIndex-1];e&&e.focus();break}case r.Right:{let e=this.children[this.focusIndex+1];e&&e.focus();break}}}onSlotChange(){this.style.setProperty("--item-count",this.children.length)}get visibleFocusIndex(){return this.focusIndex-this.cursor}set visibleFocusIndex(t){this.children[this.cursor+t].focus()}},j=m;customElements.define("dis-shelf",m);var g=class extends HTMLElement{focus(){L(this)}},F=g;customElements.define("dis-focusable",g);var G=`
  <div part="content">
    <img
      part="background"
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    />
  </div>
`,B=G;var b=class extends F{constructor(){super();this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=B,this.backgroundEl=this.shadow.querySelector("[part=background]"),this.onBackgroundError=this.onBackgroundError.bind(this)}connectedCallback(){this.backgroundEl.addEventListener("error",this.onBackgroundError);let t=this.getAttribute("background");t&&(this.backgroundEl.src=t)}disconnectedCallback(){this.backgroundEl.removeEventListener("error",this.onBackgroundError)}onBackgroundError(){this.backgroundEl.style.display="none";let t=this.getAttribute("title");this.shadow.querySelector("[part=content]").innerText=t}},T=b;customElements.define("dis-tile",b);var H="https://cd-static.bamgrid.com/dp-117731241344";function N(s){if(s?.programId)return"program";if(s?.seriesId)return"series";if(s?.collectionId)return"collection";l(new Error("Unable to determine source entity for set item"))}function Q(s){let t=N(s);return t?{title:s?.text?.title?.full?.[t]?.default?.content||null,tile:s?.image?.tile?.["1.78"]?.[t]?.default?.url||s?.image?.tile?.["1.78"]?.default?.default?.url||null,heroBackground:s?.image?.background?.["1.78"]?.[t]?.default?.url||null,heroVideo:(s?.videoArt||[]).find(e=>e?.purpose==="full_bleed")?.mediaMetadata?.urls?.[0]?.url||null}:null}var M=s=>({title:s?.text?.title?.full?.set?.default?.content||"",items:(s?.items||[]).map(Q).filter(Boolean),refId:s?.refId||null});async function q(s){let e=await(await fetch(`${H}/sets/${s}.json`)).json();return M(Object.values(e?.data||{})?.[0])}async function R(){return((await(await fetch(`${H}/home.json`)).json())?.data?.StandardCollection?.containers||[]).map(({set:e}={})=>e&&M(e)).filter(Boolean)}var _=`
  <div part="track">
    <slot></slot>
  </div>
`,O=_;var E=class extends HTMLElement{constructor(){super();this.onInput=this.onInput.bind(this);let t=this.attachShadow({mode:"open"});t.innerHTML=O,this.trackEl=t.querySelector("[part=track]")}connectedCallback(){this.addEventListener(c.Input,this.onInput)}disconnectedCallback(){this.removeEventListener(c.Input,this.onInput)}scrollToElement(t){let e=t.getBoundingClientRect().top-this.trackEl.getBoundingClientRect().top;this.trackEl.style.transform=`translateY(-${e}px)`}onInput(t){switch(t.detail.input){case r.Up:{let e=t.target.closest("dis-shelf"),n=[...this.children],o=n.indexOf(e),i=n.filter((h,A)=>A<o&&h.childElementCount>0).pop();i&&(this.scrollToElement(i),i.visibleFocusIndex=e.visibleFocusIndex);break}case r.Down:{let e=t.target.closest("dis-shelf"),n=[...this.children],o=n.indexOf(e),i=n.find((h,A)=>A>o&&h.childElementCount>0);i&&(this.scrollToElement(i),i.visibleFocusIndex=e.visibleFocusIndex);break}}}},Ot=E;customElements.define("dis-wall",E);var K=`
  <style>
    :host {
      display: block;
      height: 100%;
      overflow: hidden;
    }

    dis-wall {
      width: 100%;
      height: 50%;

      position: absolute;
      bottom: 0;
    }
  </style>

  <div data-hero-area></div>
  <dis-wall></dis-wall>
`,U=K;var v=class extends S{constructor(){super();this.onWallFocus=this.onWallFocus.bind(this)}async loadScreen(){this.shelves=await R(),this.innerHTML+=U,this.heroArea=this.querySelector("div[data-hero-area]"),this.wall=this.querySelector("dis-wall"),this.wall.addEventListener(a.Focus,this.onWallFocus),this.shelves.forEach(t=>{let e=new j;e.setAttribute("title",t.title),this.addShelfItems(e,t.items),this.wall.appendChild(e)}),this.wall.querySelector("dis-tile").focus()}async unloadScreen(){this.wall.removeEventListener(a.Focus,this.onWallFocus)}async loadShelvesNear(t){let e=3,n=this.shelves.slice(0).map((o={},i)=>({...o,index:i})).slice(t,t+e).filter(o=>Boolean(o.refId)&&!o.loading&&o.items.length===0);for(let o of n){this.shelves[o.index].loading=!0;let i=await q(o.refId);this.shelves[o.index]=i;let h=this.wall.children[o.index];this.addShelfItems(h,i?.items)}}addShelfItems(t,e=[]){for(let n of e){let o=new T;o.setAttribute("background",n.tile||""),o.setAttribute("title",n.title||""),t.appendChild(o)}}setHero(t){this.heroArea.innerHTML="";let e=new w;e.setAttribute("title",t.title||""),e.setAttribute("background",t.heroBackground||""),e.setAttribute("video",t.heroVideo||""),this.heroArea.appendChild(e)}onWallFocus(t){let e=t.target.closest("dis-shelf"),n=[...e.children].indexOf(t.target),o=[...this.wall.children].indexOf(e);this.loadShelvesNear(o).catch(l);let i=this.shelves?.[o]?.items?.[n];this.setHero(i)}},P=v;customElements.define("dis-home-screen",v);document.body.appendChild(new P);
