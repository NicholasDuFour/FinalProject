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
        <img src="images/paint.jpg" alt="Paint">
    <div class="imagebuttonoverlay"><p>color</p></div>
    </div>
    <a href="#!/type-comp" div class="imagebuttoncontainer"</a>
        <img src="images/glass.jpg" alt="Stained Glass">
    <div class="imagebuttonoverlay"><p>type</p></div>
    </div>
    <a href="#!/culture-comp" div class="imagebuttoncontainer"</a>
        <img src="images/lanterns.jpg" alt="Lanterns">
    <div class="imagebuttonoverlay"><p>culture</p></div>
    </div>


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
