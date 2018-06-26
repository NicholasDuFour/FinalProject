"use strict";

const homeComponent = {
    template: `
    <header class="home-header">
    <img class="logo" src="images/logo.png">
        <a href="#!/home-comp" id="headerlink">
            <h1>Blank Canvas</h1>
        </a>
    </header>


    <section class="container">
        <img class="image" src="images/igor-miske-177849-unsplash.jpg" alt="museum">
    </section>


    <section class="text-flex">
        <div class="text-wrapper animate-pop-in">The Art of Discovery</div>
        <p class="animate-pop-in">search for art by...</p>
    </section>

    <section class="homebuttoncontainer">
        <a href="#!/color-comp" div class="homebutton"</a>
        <img src="images/colors.jpg" alt="Paint">
    <div class="imagebuttonoverlayhome"><p>color</p></div>
    </div>
    <a href="#!/type-comp" div class="homebutton"</a>
        <img src="images/stained-glass.jpg" alt="Stained Glass">
    <div class="imagebuttonoverlayhome"><p>type</p></div>
    </div>
    <a href="#!/culture-comp" div class="homebutton"</a>
        <img src="images/redlanterns.jpg" alt="Lanterns">
    <div class="imagebuttonoverlayhome"><p>culture</p></div>
    </div>
    </section>
`,

}



angular
.module("app")
.component("homeComponent", homeComponent);
