function setupGlobalVariables() {
  xRes = windowWidth;
  yRes = windowHeight;
  minRes = min( xRes , yRes );
  
  desiredMinNum = 20;
  dx = xRes / desiredMinNum;
  dy = yRes / desiredMinNum;
  
  M = 0;
  N = 0;
  dx = 0;
  dy = 0;
  
  if( xRes < yRes ) {
    M = desiredMinNum;
    dx = xRes / M;
    N = floor( yRes / dx );
    dy = yRes / N;
  } else {
    N = desiredMinNum;
    dy = yRes / N;
    M = floor( xRes / dy );
    dx = xRes / M;
  }
  
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
      ax = m/M*4*PI + 2*PI*t/T;
      ay = n/N*4*PI + 2*PI*t/T;
      fill(0);
      ellipse( 0.5*dx + m*dx + (1-a)*sin(ax)*dx , 0.5*dy + n*dy + (1-a)*cos(ay)*dy , a*dx , a*dy );
    }
  }
}
