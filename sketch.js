function setupGlobalVariables() {
  xRes = windowWidth;
  yRes = windowHeight;
  
  desiredDiameter = 30;
  
  M = floor( xRes / desiredDiameter );
  N = floor( yRes / desiredDiameter );
  
  dx = xRes / M;
  dy = yRes / N;
  
  a = 0.7;
  t = 0;
  T = 20;
  
  
}

function setup() {
  setupGlobalVariables();
  createCanvas( xRes , yRes );
  noStroke;
}

function draw() {
  t++;
  t %= T;
  
  background(255);
  for( m = 0 ; m < M ; m++ ) {
    for( n = 0 ; n < N ; n++ ) {
      fill(0);
      //ellipse( 0.5*dx + m*dx , 0.5*dy + n*dy , dx , dy );
      ax = m/N*4*PI + 2*PI*t/T;
      ay = n/N*4*PI + 2*PI*t/T;
      fill(0);
      ellipse( 0.5*dx + m*dx + (1-a)*sin(ax)*dx , 0.5*dy + n*dy + (1-a)*cos(ay)*dy , a*dx , a*dy );
    }
  }
}
