function factorial( n ) {
  return n === 1 ? n : n * factorial( --n );
}

var i = 0;

while ( i++ < 1e7 ) {
  factorial( 10 );
}
