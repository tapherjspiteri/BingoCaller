function ballPicker(e) {
    // REPOPULATE YOUR CHOSEN ITEMS,NUMBERS Below - Watch for commas and single quote placement
   var items = [
  'Ryder',
  'Everest',
  'Rubble',
  'Sky',
  'Chase',
  'Marshall',
  'Tracker',
  'Mayor Humdinger',
  'Chickaletta',
  'Rocky',
  'Zuma',
  'Katie',
  'Turbot',
  'Major Goodway',
  'Cali',
  'Francois',
  'Capn Turbot',
  'Dangerous Danny X',
  'Farmer Yumi',
  'Jake']
    var item = items[Math.floor(Math.random() * items.length)];
    Logger.log(item);
    alert(item);
  }

