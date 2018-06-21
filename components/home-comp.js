"use strict";
console.log("home comp!");

const homeComponent = {
    template: `
    <div class="container">
        <img class="image" src="images/igor-miske-177849-unsplash.jpg" alt="museum">
    </div>
    <section class="text-flex">
        <div class="text-wrapper">The Art of Discovery</div>
        <p>search for art by...</p>
    </section>

<section class="mainbuttons">

        <a href="#!/color-comp" class="colorlink">color</a>

    
        <a href="#!/type-comp" class="typelink">type</a>


        <a href="#!/culture-comp" class="culturelink">culture</a>


  </section>
    `,
}



angular
.module("app")
.component("homeComponent", homeComponent);
