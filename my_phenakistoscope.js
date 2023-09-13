const SLICE_COUNT = 12;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("icon" , "png");
  pScope.load_image("star" , "png");
  pScope.load_image("stars" , "png");
  pScope.load_image_sequence("potion", "png", 14);
}

function setup_layers(pScope){

  new PLayer(null, 25, 25, 25);  //lets us draw the whole circle background, ignoring the boundaries

  var outerRing = new PLayer(outsideRing);//outer ring layer in the bottom
  outerRing.mode( RING );
  outerRing.set_boundary( 850, 1000 );

  var layer1= new PLayer(squares);//layer of purple squares in the background
  layer1.mode( RING );
  layer1.set_boundary( 0, 1000 );

  var layer2 = new PLayer(star_sign);//layer of golden stars
  layer2.mode( SWIRL(6) );
  layer2.set_boundary( 0, 800 );

  var layer3 = new PLayer(stars_sign);//layer of golden stars as well
  layer3.mode( SWIRL(4) );
  layer3.set_boundary( 0, 600 );

  var potionSequence = new PLayer(potion);//layer of potion bottles
  potionSequence.mode( RING );
  potionSequence.set_boundary( 0, 1000 );

  var layer4 = new PLayer(magic_sign);//layer of golden magic sign in the middle
  layer4.mode( RING );
  layer4.set_boundary( 0, 300 );

  var center = new PLayer(spot);//layer of purple ellipses in the center
  center.mode( RING );
  center.set_boundary( 0, 100 );
}

function magic_sign(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

fill(171, 108, 0);
arc(x,y,40,700,backgroundArcStart,backgroundArcEnd);

scale(0.3);
pScope.draw_image("icon",x,y);
}

function stars_sign(x, y, animation, pScope){
  // let angleOffset = (360 / SLICE_COUNT) / 2
  // let backgroundArcStart = 270 - angleOffset;
  // let backgroundArcEnd = 270 + angleOffset;

scale(0.06);
pScope.draw_image("stars",x,y);
}

function star_sign(x, y, animation, pScope){
  // let angleOffset = (360 / SLICE_COUNT) / 2
  // let backgroundArcStart = 270 - angleOffset;
  // let backgroundArcEnd = 270 + angleOffset;

push();
noFill();
stroke(255, 215, 0);//golden
scale(1);
rotate(360*animation.frame);
scale(2*animation.wave());
beginShape();
vertex(-10, 10);
vertex(0, 35);
vertex(10, 10);
vertex(35, 0);
vertex(10, -8);
vertex(0, -35);
vertex(-10, -8);
vertex(-35, 0);
vertex(-10, 10);
endShape();

pop();
scale(0.05);
scale(2*animation.wave(1));
rotate(360*animation.frame);
var starsx = animation.wave(2)*1200;
pScope.draw_image("stars",starsx,y);
}

function squares(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  // let angleOffset = (360 / SLICE_COUNT) / 2
  // let backgroundArcStart = 270 - angleOffset;
  // let backgroundArcEnd = 270 + angleOffset;

  // fill(5, 5, 5);
  // arc(x,y,0,1000,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(69, 0, 98);
  scale(1.5);
  rect(-10,-300-animation.wave()*50,20,20); // .wave is a cosine wave btw

  fill(69, 0, 98);
  scale(0.8);
  rect(-600,-300-animation.wave()*30,20,20);

}

function potion(x, y, animation, pScope){

scale(0.35);
pScope.draw_image_from_sequence("potion", 0, 2200, animation.frame);
}

function outsideRing(x, y, animation, pScope){
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

pScope.fill_background(171, 108, 0);
fill(25, 25, 25);
arc(x,y,800,1950,backgroundArcStart,backgroundArcEnd);

}

function spot(x, y, animation, pScope){
noStroke();
fill(69, 0, 98);
ellipse(5, 20, 20, 50);
}