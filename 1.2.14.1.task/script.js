'use strict';


function switchVersion(browser) {
  switch (browser) {
    case 'Edge':
      console.log( "You've got the Edge!" );
      break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      console.log( 'Okay we support these browsers too' );
      break;

    default:
      console.log( 'We hope that this page looks ok!' );
  }
}


function ifVersion(browser) {
  if (browser === 'Edge')
    console.log( "You've got the Edge!" );
  else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera')
    console.log( 'Okay we support these browsers too' );
  else
    console.log( 'We hope that this page looks ok!' );
}


for (let func of [switchVersion, ifVersion]) {
  console.log('function', func.name);
  for (let browser of ['Edge', 'Chrome', 'Firefox', 'Safari', 'Opera', 'Unknown']) {
    console.log(browser);
    func(browser);
  }
}
