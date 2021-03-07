var P=`
  <img
    part="background"
    src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  />
  <div part="background-overlay"></div>

  <video
    part="video"
    autoplay
    muted
    loop
  ></video>

  <div part="details">
    <div part="title"></div>
  </div>
`,A=P;var u=class extends HTMLElement{constructor(){super();this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=A}connectedCallback(){this.shadow.querySelector("[part=title]").innerText=this.getAttribute("title")||"";let t=this.getAttribute("video"),e=this.getAttribute("background");t?this.shadow.querySelector("video").src=t:e&&(this.shadow.querySelector("[part=background]").src=e)}},x=u;customElements.define("dis-hero",u);function l(s){console.warn(s)}var D=`
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
`,I=D;var p=class extends HTMLElement{constructor(){super();let t=this.attachShadow({mode:"closed"});t.innerHTML=I}hide(){this.style.opacity=0}show(){this.style.opacity=1}},it=p;customElements.define("dis-spinner",p);var W=`
  <slot></slot>

  <dis-spinner></dis-spinner>
`,y=W;var f=class extends HTMLElement{constructor(){super();this.onSlotChange=this.onSlotChange.bind(this);let t=this.attachShadow({mode:"closed"});t.innerHTML=y,this.slotEl=t.querySelector("slot"),this.spinnerEl=t.querySelector("dis-spinner")}connectedCallback(){this.slotEl.addEventListener("slotchange",this.onSlotChange),this.loadScreen().catch(l)}disconnectedCallback(){this.slotEl.removeEventListener("slotchange",this.onSlotChange),this.unloadScreen().catch(l)}onSlotChange(){this.children.length?this.spinnerEl.hide():this.spinnerEl.show()}async loadScreen(){}async unloadScreen(){}},k=f;customElements.define("dis-screen",f);var r={Up:"Up",Down:"Down",Left:"Left",Right:"Right",Select:"Select",Back:"Back"},a={Input:"controlinput"},S=s=>new CustomEvent(a.Input,{bubbles:!0,detail:{input:s}});var c={Focus:"focus"},d,$={ArrowUp:r.Up,ArrowDown:r.Down,ArrowLeft:r.Left,ArrowRight:r.Right,Enter:r.Select,Escape:r.Back};document.body.addEventListener("keyup",s=>{let t=$[s.key];d&&t&&d.dispatchEvent(S(t))});function L(s){d?.removeAttribute("focus"),d=s,d.setAttribute("focus",""),d.dispatchEvent(new CustomEvent(c.Focus,{bubbles:!0}))}var V=`
  <div part="title"></div>
  <div part="track">
    <div part="placeholder"></div>
    <slot></slot>
  </div>
`,C=V;var m=class extends HTMLElement{constructor(){super();this._windowOffset=0,this._windowItems=5,this.onFocus=this.onFocus.bind(this),this.onInput=this.onInput.bind(this),this.onSlotChange=this.onSlotChange.bind(this);let t=this.attachShadow({mode:"open"});t.innerHTML=C,this.titleEl=t.querySelector("[part=title]"),this.trackEl=t.querySelector("[part=track]"),this.slotEl=t.querySelector("slot")}static get observedAttributes(){return["title"]}attributeChangedCallback(t,e,n){t==="title"&&(this.titleEl.innerText=n)}connectedCallback(){this.titleEl.innerText=this.getAttribute("title")||"",this.addEventListener(a.Input,this.onInput),this.addEventListener(c.Focus,this.onFocus),this.slotEl.addEventListener("slotchange",this.onSlotChange)}disconnectedCallback(){this.removeEventListener(c.Focus,this.onFocus),this.removeEventListener(a.Input,this.onInput),this.slotEl.removeEventListener("slotchange",this.onSlotChange)}onFocus(t){this.focusIndex=[...this.children].indexOf(t.target),this.focusIndex>this.windowOffset+this.windowItems-1?this.windowOffset=this.focusIndex-this.windowItems+1:this.focusIndex<this.windowOffset&&(this.windowOffset=this.focusIndex)}onInput(t){switch(t.detail.input){case r.Left:{let e=this.children[this.focusIndex-1];e&&e.focus();break}case r.Right:{let e=this.children[this.focusIndex+1];e&&e.focus();break}}}onSlotChange(){this.style.setProperty("--total-items",this.children.length)}get windowIndex(){return this.focusIndex-this.windowOffset}set windowIndex(t){this.children[this.windowOffset+t].focus()}get windowItems(){return this._windowItems}set windowItems(t){this._windowItems=t,this.style.setProperty("--window-items",this._windowItems)}get windowOffset(){return this._windowOffset}set windowOffset(t){this._windowOffset=t,this.style.setProperty("--window-offset",this._windowOffset)}},j=m;customElements.define("dis-shelf",m);var w=class extends HTMLElement{focus(){L(this)}},B=w;customElements.define("dis-focusable",w);var z=`
  <div part="content">
    <img
      part="background"
      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
    />
  </div>
`,O=z;var g=class extends B{constructor(){super();this.shadow=this.attachShadow({mode:"open"}),this.shadow.innerHTML=O,this.backgroundEl=this.shadow.querySelector("[part=background]"),this.onBackgroundError=this.onBackgroundError.bind(this)}connectedCallback(){this.backgroundEl.addEventListener("error",this.onBackgroundError);let t=this.getAttribute("background");t&&(this.backgroundEl.src=t)}disconnectedCallback(){this.backgroundEl.removeEventListener("error",this.onBackgroundError)}onBackgroundError(){this.backgroundEl.style.display="none";let t=this.getAttribute("title");this.shadow.querySelector("[part=content]").innerText=t}},T=g;customElements.define("dis-tile",g);var F="https://cd-static.bamgrid.com/dp-117731241344";function G(s){if(s?.programId)return"program";if(s?.seriesId)return"series";if(s?.collectionId)return"collection";l(new Error("Unable to determine source entity for set item"))}function N(s){let t=G(s);return t?{title:s?.text?.title?.full?.[t]?.default?.content||null,tile:s?.image?.tile?.["1.78"]?.[t]?.default?.url||s?.image?.tile?.["1.78"]?.default?.default?.url||null,heroBackground:s?.image?.background?.["1.78"]?.[t]?.default?.url||null,heroVideo:(s?.videoArt||[]).find(e=>e?.purpose==="full_bleed")?.mediaMetadata?.urls?.[0]?.url||null}:null}var H=s=>({title:s?.text?.title?.full?.set?.default?.content||"",items:(s?.items||[]).map(N).filter(Boolean),refId:s?.refId||null});async function M(s){let e=await(await fetch(`${F}/sets/${s}.json`)).json();return H(Object.values(e?.data||{})?.[0])}async function q(){return((await(await fetch(`${F}/home.json`)).json())?.data?.StandardCollection?.containers||[]).map(({set:e}={})=>e&&H(e)).filter(Boolean)}var Q=`
  <div part="track">
    <slot></slot>
  </div>
`,R=Q;var E=class extends HTMLElement{constructor(){super();this.onInput=this.onInput.bind(this);let t=this.attachShadow({mode:"open"});t.innerHTML=R,this.trackEl=t.querySelector("[part=track]")}connectedCallback(){this.addEventListener(a.Input,this.onInput)}disconnectedCallback(){this.removeEventListener(a.Input,this.onInput)}scrollToElement(t){let e=t.getBoundingClientRect().top-this.trackEl.getBoundingClientRect().top;this.trackEl.style.transform=`translateY(-${e}px)`}onInput(t){switch(t.detail.input){case r.Up:{let e=t.target.closest("dis-shelf"),n=[...this.children],o=n.indexOf(e),i=n.filter((h,b)=>b<o&&h.childElementCount>0).pop();i&&(this.scrollToElement(i),i.windowIndex=e.windowIndex);break}case r.Down:{let e=t.target.closest("dis-shelf"),n=[...this.children],o=n.indexOf(e),i=n.find((h,b)=>b>o&&h.childElementCount>0);i&&(this.scrollToElement(i),i.windowIndex=e.windowIndex);break}}}},Rt=E;customElements.define("dis-wall",E);var K=`
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
`,_=K;var v=class extends k{constructor(){super();this.onWallFocus=this.onWallFocus.bind(this)}async loadScreen(){this.shelves=await q(),this.innerHTML+=_,this.heroArea=this.querySelector("div[data-hero-area]"),this.wall=this.querySelector("dis-wall"),this.wall.addEventListener(c.Focus,this.onWallFocus),this.shelves.forEach(t=>{let e=new j;e.setAttribute("title",t.title),this.addShelfItems(e,t.items),this.wall.appendChild(e)}),this.wall.querySelector("dis-tile").focus()}async unloadScreen(){this.wall.removeEventListener(c.Focus,this.onWallFocus)}async loadShelvesNear(t){let e=3,n=this.shelves.map((o={},i)=>({...o,index:i})).slice(t,t+e).filter(o=>Boolean(o.refId)&&!o.loading&&o.items.length===0);for(let o of n){this.shelves[o.index].loading=!0;let i=await M(o.refId);this.shelves[o.index]=i;let h=this.wall.children[o.index];this.addShelfItems(h,i?.items)}}addShelfItems(t,e=[]){for(let n of e){let o=new T;o.setAttribute("background",n.tile||""),o.setAttribute("title",n.title||""),t.appendChild(o)}}setHero(t){this.heroArea.innerHTML="";let e=new x;e.setAttribute("title",t.title||""),e.setAttribute("background",t.heroBackground||""),e.setAttribute("video",t.heroVideo||""),this.heroArea.appendChild(e)}onWallFocus(t){let e=t.target.closest("dis-shelf"),n=[...e.children].indexOf(t.target),o=[...this.wall.children].indexOf(e);this.loadShelvesNear(o).catch(l);let i=this.shelves?.[o]?.items?.[n];this.setHero(i)}},U=v;customElements.define("dis-home-screen",v);document.body.appendChild(new U);
