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

<section class="buttoncontainer">
    <a href="#!/color-comp" div class="imagebuttoncontainer"</a>
        <img src="images/lotsofcolors.jpg" alt="Paint">
    <div class="imagebuttonoverlay"><p>color</p></div>
    </div>
    <a href="#!/type-comp" div class="imagebuttoncontainer"</a>
        <img src="images/stained.jpg" alt="Stained Glass">
    <div class="imagebuttonoverlay"><p>type</p></div>
    </div>
    <a href="#!/culture-comp" div class="imagebuttoncontainer"</a>
        <img src="images/lantern.jpg" alt="Lanterns">
    <div class="imagebuttonoverlay"><p>culture</p></div>
    </div>


</section>
    `,
}



angular
.module("app")
.component("homeComponent", homeComponent);
