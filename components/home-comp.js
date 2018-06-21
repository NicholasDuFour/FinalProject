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

    <section class="colorlink">
        <a href="#!/color-comp"><p>color</p><img class="colorimage" src="images/steve-johnson.jpg"></a>
    </section>
    <section class="typelink">
        <a href="#!/type-comp"><p>type</p><img class="typeimage" src="images/stainedglasswindow.jpg"></a>
    </section>
    <section class="culturelink">
        <a href="#!/culture-comp"><p>culture</p><img class="cultureimage" src="images/geishabowing.jpg"></a>
    </section>
    `,
}



angular
.module("app")
.component("homeComponent", homeComponent);
