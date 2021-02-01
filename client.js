// *** global vars ***

// will store live vals from server for chart
// global var shared between functions
let valsFromServerForChart = [];

// store and update data from server in masterArr
// add converted values into same array
const masterArr = [
  {
    reg: '0',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '1',
    num: '2',
    name: 'Flow Rate',
    format: 'REAL4',
    unit: 'm3/h',
  },
  {
    reg: '2',
    num: '2',
    name: 'Flow Rate',
    format: 'REAL4',
    unit: 'm3/h',
  },
  {
    reg: '3',
    num: '2',
    name: 'Energy Flow Rate',
    format: 'REAL4',
    unit: 'GJ/h',
  },
  {
    reg: '4',
    num: '2',
    name: 'Energy Flow Rate',
    format: 'REAL4',
    unit: 'GJ/h',
  },
  {
    reg: '5',
    num: '2',
    name: 'Velocity',
    format: 'REAL4',
    unit: 'm/s',
  },
  {
    reg: '6',
    num: '2',
    name: 'Velocity',
    format: 'REAL4',
    unit: 'm/s',
  },
  {
    reg: '7',
    num: '2',
    name: 'Fluid sound speed',
    format: 'REAL4',
    unit: 'm/s',
  },
  {
    reg: '8',
    num: '2',
    name: 'Fluid sound speed',
    format: 'REAL4',
    unit: 'm/s',
  },
  {
    reg: '9',
    num: '2',
    name: 'Positive accumulator',
    format: 'LONG',
    note: 'Unit is selected by M31, and depends on totalizer multiplier',
  },
  {
    reg: '10',
    num: '2',
    name: 'Positive accumulator',
    format: 'LONG',
    note: 'Unit is selected by M31, and depends on totalizer multiplier',
  },
  {
    reg: '11',
    num: '2',
    name: 'Positive decimal fraction',
    format: 'REAL4',
    note: 'Same unit as the integer part',
  },
  {
    reg: '12',
    num: '2',
    name: 'Positive decimal fraction',
    format: 'REAL4',
    note: 'Same unit as the integer part',
  },
  {
    reg: '13',
    num: '2',
    name: 'Negative accumulator',
    format: 'LONG',
    note: 'Long is a signed 4-byte integer, lower byte first',
  },
  {
    reg: '14',
    num: '2',
    name: 'Negative accumulator',
    format: 'LONG',
    note: 'Long is a signed 4-byte integer, lower byte first',
  },
  {
    reg: '15',
    num: '2',
    name: 'Negative decimal fraction',
    format: 'REAL4',
    note: 'REAL4 is a format of Singular IEEE-754 number, also called FLOAT',
  },
  {
    reg: '16',
    num: '2',
    name: 'Negative decimal fraction',
    format: 'REAL4',
    note: 'REAL4 is a format of Singular IEEE-754 number, also called FLOAT',
  },
  {
    reg: '17',
    num: '2',
    name: 'Positive energy accumulator',
    format: 'LONG',
  },
  {
    reg: '18',
    num: '2',
    name: 'Positive energy accumulator',
    format: 'LONG',
  },
  {
    reg: '19',
    num: '2',
    name: 'Positive energy decimal fraction',
    format: 'REAL4',
  },
  {
    reg: '20',
    num: '2',
    name: 'Positive energy decimal fraction',
    format: 'REAL4',
  },
  {
    reg: '21',
    num: '2',
    name: 'Negative energy accumulator',
    format: 'LONG',
  },
  {
    reg: '22',
    num: '2',
    name: 'Negative energy accumulator',
    format: 'LONG',
  },
  {
    reg: '23',
    num: '2',
    name: 'Negative energy decimal fraction',
    format: 'REAL4',
  },
  {
    reg: '24',
    num: '2',
    name: 'Negative energy decimal fraction',
    format: 'REAL4',
  },
  {
    reg: '25',
    num: '2',
    name: 'Net accumulator',
    format: 'LONG',
  },
  {
    reg: '26',
    num: '2',
    name: 'Net accumulator',
    format: 'LONG',
  },
  {
    reg: '27',
    num: '2',
    name: 'Net decimal fraction',
    format: 'REAL4',
  },
  {
    reg: '28',
    num: '2',
    name: 'Net decimal fraction',
    format: 'REAL4',
  },
  {
    reg: '29',
    num: '2',
    name: 'Net energy accumulator',
    format: 'LONG',
  },
  {
    reg: '30',
    num: '2',
    name: 'Net energy accumulator',
    format: 'LONG',
  },
  {
    reg: '31',
    num: '2',
    name: 'Net energy decimal fraction',
    format: 'REAL4',
  },
  {
    reg: '32',
    num: '2',
    name: 'Net energy decimal fraction',
    format: 'REAL4',
  },
  {
    reg: '33',
    num: '2',
    name: 'Temperature #1/inlet',
    format: 'REAL4',
    unit: 'C',
  },
  {
    reg: '34',
    num: '2',
    name: 'Temperature #1/inlet',
    format: 'REAL4',
    unit: 'C',
  },
  {
    reg: '35',
    num: '2',
    name: 'Temperature #2/outlet',
    format: 'REAL4',
    unit: 'C',
  },
  {
    reg: '36',
    num: '2',
    name: 'Temperature #2/outlet',
    format: 'REAL4',
    unit: 'C',
  },
  {
    reg: '37',
    num: '2',
    name: 'Analog input AI3',
    format: 'REAL4',
  },
  {
    reg: '38',
    num: '2',
    name: 'Analog input AI3',
    format: 'REAL4',
  },
  {
    reg: '39',
    num: '2',
    name: 'Analog input AI4',
    format: 'REAL4',
  },
  {
    reg: '40',
    num: '2',
    name: 'Analog input AI4',
    format: 'REAL4',
  },
  {
    reg: '41',
    num: '2',
    name: 'Analog input AI5',
    format: 'REAL4',
  },
  {
    reg: '42',
    num: '2',
    name: 'Analog input AI5',
    format: 'REAL4',
  },
  {
    reg: '43',
    num: '2',
    name: 'Current input at AI3',
    format: 'REAL4',
    unit: 'mA',
  },
  {
    reg: '44',
    num: '2',
    name: 'Current input at AI3',
    format: 'REAL4',
    unit: 'mA',
  },
  {
    reg: '45',
    num: '2',
    name: 'Current input at AI3',
    format: 'REAL4',
    unit: 'mA',
  },
  {
    reg: '46',
    num: '2',
    name: 'Current input at AI3',
    format: 'REAL4',
    unit: 'mA',
  },
  {
    reg: '47',
    num: '2',
    name: 'Current input at AI3',
    format: 'REAL4',
    unit: 'mA',
  },
  {
    reg: '48',
    num: '2',
    name: 'Current input at AI3',
    format: 'REAL4',
    unit: 'mA',
  },
  {
    reg: '49',
    num: '2',
    name: 'System password',
    format: 'BCD',
    note: 'Writable。00H for unlock',
  },
  {
    reg: '50',
    num: '2',
    name: 'System password',
    format: 'BCD',
    note: 'Writable。00H for unlock',
  },
  {
    reg: '51',
    num: '1',
    name: 'Password for hardware',
    format: 'BCD',
    note: 'Writable。“A55Ah” for unlock',
  },
  {
    reg: '52',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '53',
    num: '3',
    name: 'Calendar (date and time)',
    format: 'BCD',
    note: 'Writable。6 Bytes of BCD stands SMHDMY，lower byte first',
  },
  {
    reg: '54',
    num: '3',
    name: 'Calendar (date and time)',
    format: 'BCD',
    note: 'Writable。6 Bytes of BCD stands SMHDMY，lower byte first',
  },
  {
    reg: '55',
    num: '3',
    name: 'Calendar (date and time)',
    format: 'BCD',
    note: 'Writable。6 Bytes of BCD stands SMHDMY，lower byte first',
  },
  {
    reg: '56',
    num: '1',
    name: 'Day+Hour for Auto-Save',
    format: 'BCD',
    note: 'Writable。For example 0512H stands Auto-save on 12:00 on 5th。0012H for 12:00 on everyday。',
  },
  {
    reg: '57',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '58',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '59',
    num: '1',
    name: 'Key to input',
    format: 'INTEGER',
    note: 'Writable',
  },
  {
    reg: '60',
    num: '1',
    name: 'Go to Window #',
    format: 'INTEGER',
    note: 'Writable',
  },
  {
    reg: '61',
    num: '1',
    name: 'LCD Back-lit lights for number of seconds',
    format: 'INTEGER',
    unit: 's',
  },
  {
    reg: '62',
    num: '1',
    name: 'Times for the beeper',
    format: 'INTEGER',
    note: 'Writable。Max 255',
  },
  {
    reg: '63',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '64',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '65',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '66',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '67',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '68',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '69',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '70',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '71',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '72',
    num: '1',
    name: 'Error Code',
    format: 'BIT',
    note: '16bits, see note 4',
  },
  {
    reg: '73',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '74',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '75',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '76',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '77',
    num: '1',
    name: 'PT100 resistance of inlet',
    format: 'REAL4',
    unit: 'Ohm',
  },
  {
    reg: '78',
    num: '1',
    name: 'PT100 resistance of inlet',
    format: 'REAL4',
    unit: 'Ohm',
  },
  {
    reg: '79',
    num: '1',
    name: 'PT100 resistance of outlet',
    format: 'REAL4',
    unit: 'Ohm',
  },
  {
    reg: '80',
    num: '1',
    name: 'PT100 resistance of outlet',
    format: 'REAL4',
    unit: 'Ohm',
  },
  {
    reg: '81',
    num: '1',
    name: 'Total travel time',
    format: 'REAL4',
    unit: 'Micro-second',
  },
  {
    reg: '82',
    num: '1',
    name: 'Total travel time',
    format: 'REAL4',
    unit: 'Micro-second',
  },
  {
    reg: '83',
    num: '1',
    name: 'Delta travel time',
    format: 'REAL4',
    unit: 'Nano-second',
  },
  {
    reg: '84',
    num: '1',
    name: 'Delta travel time',
    format: 'REAL4',
    unit: 'Nano-second',
  },
  {
    reg: '85',
    num: '1',
    name: 'Upstream travel time',
    format: 'REAL4',
    unit: 'Micro-second',
  },
  {
    reg: '86',
    num: '1',
    name: 'Upstream travel time',
    format: 'REAL4',
    unit: 'Micro-second',
  },
  {
    reg: '87',
    num: '1',
    name: 'Downstream travel time',
    format: 'REAL4',
    unit: 'Micro-second',
  },
  {
    reg: '88',
    num: '1',
    name: 'Downstream travel time',
    format: 'REAL4',
    unit: 'Micro-second',
  },
  {
    reg: '89',
    num: '1',
    name: 'Output current',
    format: 'REAL4',
    unit: 'mA',
  },
  {
    reg: '90',
    num: '1',
    name: 'Output current',
    format: 'REAL4',
    unit: 'mA',
  },
  {
    reg: '91',
    num: false,
    name: false,
    format: false,
    note: false,
  },
  {
    reg: '92',
    num: '1',
    name: 'Working step and Signal Quality',
    format: 'INTEGER',
    note: 'The high byte is the step and low for signal quality，range 00-99，the larger the better.',
  },
  {
    reg: '93',
    num: '1',
    name: 'Upstream strength',
    format: 'INTEGER',
    note: 'Range 0-2047',
  },
  {
    reg: '94',
    num: '2',
    name: 'Downstream strength',
    format: 'INTEGER',
    note: 'Range 0-2047',
  },
  {
    reg: '95',
    num: false,
    name: false,
    format: false,
    unit: false,
  },
  {
    reg: '96',
    num: '2',
    name: 'Language used in user interface',
    format: 'INTEGER',
    note: '0 : English，1:Chinese Other language will be supported later',
  },
  {
    reg: '97',
    num: '2',
    name: 'The rate of the measured travel time.',
    format: 'REAL4',
    unit: 'Normal 100+-3%',
  },
  {
    reg: '98',
    num: '2',
    name: 'The rate of the measured travel time.',
    format: 'REAL4',
    unit: 'Normal 100+-3%',
  },
  {
    reg: '99',
    num: '2',
    name: 'Reynolds number',
    format: 'REAL4',
  },
  {
    reg: '100',
    num: '2',
    name: 'Reynolds number',
    format: 'REAL4',
  },
];

// find index of selected value by user
// that is how we know in other functions what valuse to take from masterArr
let selectedIndex = masterArr.findIndex((item) => item.name == $('#cur-name').text());

// *** socket.io ***
{
  let socket = io();
  // helps to kill previous socket if we reload page
  // a bit unclear
  socket.emit('stop', {});
  socket.disconnect();

  // store, convert and present data on receiving 'hey' message from the server
  socket.on('hey', function (data) {
    // add values to masterArr
    addValsFromRawStrToMasterArr(data.dataFromMeter);
    // converts
    putValsForLongsIntoMasterArr();
    putValsForReal4IntoMasterArr();
    putValsForIntegerIntoMasterArr();
    putValsForBitIntoMasterArr();
    putValsForBcdIntoMasterArr();
    // flactuate values for interactivity on chart
    let randomNum = returnRandomNumFromTo(-300, 300) / 1000;
    // display number
    changeValOnDisplay(randomNum);
    // array for chart
    updateArrForChart(returnDateFromRawStr(data.dataFromMeter).slice(-5), randomNum);
    // update chart
    updateChart(valsFromServerForChart);

    // randomize value only for some data types
    function returnRandomNumFromTo(min, max) {
      if (masterArr[selectedIndex].format == 'REAL4' || masterArr[selectedIndex].format == 'LONG') {
        // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min);
      } else {
        return 1;
      }
    }
  });

  // on button click establish / close connection
  let isPolling = false;
  $('button').on('click', () => {
    if (!isPolling) {
      socket.connect();
      socket.emit('start', {});
      isPolling = true;
      $('button').text('Disconnect from meter');
      // 0 = no randomize, first value is the initial converted value from the task
      changeValOnDisplay(0);
    } else {
      socket.emit('stop', {});
      socket.disconnect();
      isPolling = false;
      $('button').text('Connect to meter');
    }
  });
}

// *** data conversion ***
{
  // ******************* Long **********************

  /*
      LONG

      Modbus long is 4 bytes signed int. Each Modbus register is two bytes only --> two registers are needed.
      Need to combine them to get the final result.
      As per the protocol, Least significant bytes are stored first and Most significant ones are stored in the end.

      Hex Representation
      65480 → 0xFFC8
      65535 → 0xFFFF

      Combine Register values
      FFFFFFC8

      Convert to signed decimal representation. We have our negative energy accumulation
      // https://stackoverflow.com/questions/10841204/vs-parseint#10841248
      FFFFFFC8 → -56
  */

  function returnHumanValForLongs(val1, val2) {
    // glue hex vals and convert into dec
    const hex = parseInt(val2).toString(16) + parseInt(val1).toString(16);
    const dec = ~~parseInt(hex, 16);
    return dec;
  }

  function putValsForLongsIntoMasterArr() {
    // find all LONGs
    let arrWithLongs = returnArrOfThisType('LONG');
    arrWithLongs.forEach((value) => {
      // take pairs with same register names
      let arrWithSameRegNames = arrWithLongs.filter((x) => x.name == value.name); // 2 els
      // take 2 registers
      let notFormatedVal1 = arrWithSameRegNames[0].notFormatedVal;
      let notFormatedVal2 = arrWithSameRegNames[1].notFormatedVal;
      // get human val from 2 LONG registers
      let humanVal = returnHumanValForLongs(notFormatedVal1, notFormatedVal2);
      // round, otherwise it maybe very long
      humanVal = Number(humanVal.toFixed(3));
      // find index for this reg in masterArr
      let index = masterArr.findIndex((item) => item.reg == value.reg); // find the index of element in masterArr with same register
      // put val into obj in formatedVal property
      masterArr[index].formatedVal = humanVal;
    });
  }

  // ****************** Real4 ***********************

  /*
      REAL4 represents 4 byte float value. Values of more then 2 bytes
      need to be stored in multiple registers and must be combined while processing.
  */

  // convert hex to float in JavaScript
  // https://stackoverflow.com/questions/5055723/converting-hexadecimal-to-float-in-javascript
  function parseFloat(str) {
    let float = 0, sign, mantissa, exp, int = 0;
    int = parseInt(str, 16);
    sign = int >>> 31 ? -1 : 1;
    exp = ((int >>> 23) & 0xff) - 127;
    mantissa = ((int & 0x7fffff) + 0x800000).toString(2);
    for (i = 0; i < mantissa.length; i += 1) {
      float += parseInt(mantissa[i]) ? Math.pow(2, exp) : 0;
      exp--;
    }
    return float * sign;
  }

  function returnHumanValForReal4(val1, val2) {
    // glue registers
    const hex = parseInt(val2).toString(16) + parseInt(val1).toString(16);
    // convert to dec
    const dec = parseFloat(hex);
    return dec;
  }

  function putValsForReal4IntoMasterArr() {
    // find all LONGs
    let arrWithReal4s = returnArrOfThisType('REAL4');
    arrWithReal4s.forEach((value) => {
      // take pairs with same names
      let arrWithSameRegNames = arrWithReal4s.filter((x) => x.name == value.name); // 2 els
      // take 2 registers
      let notFormatedVal1 = arrWithSameRegNames[0].notFormatedVal;
      let notFormatedVal2 = arrWithSameRegNames[1].notFormatedVal;
      // get human val from 2 registers
      let humanVal = returnHumanValForReal4(notFormatedVal1, notFormatedVal2);
      humanVal = Number(humanVal.toFixed(3)); // otherwise it may be too long
      // find index with same register in masterArr
      let index = masterArr.findIndex((item) => item.reg == value.reg);
      // put val into obj in formatedVal property
      masterArr[index].formatedVal = humanVal;
    });
  }

  // ****************** INTEGER ***********************

  /*
    806 → 0326 Hex representation
    As per manual “The high byte is the step and low for signal quality”.
    High byte is Step - 03, low byte is signal quality - 26
    Decimal representation 26 → 38
  */

  function returnHumanValForInterger(val, reg) {
    // reg is needed, because we have different rules for different regs acc to the manual
    let hex = parseInt(val).toString(16);
    // we need 2 bytes = 4 symbols
    hex = '0'.repeat(4 - hex.length) + hex;

    if (reg == '62') {
      let val = ~~parseInt(hex, 16);
      // some restrictions on max and min
      val = Math.max(val, 0);
      val = Math.min(val, 255);
      return val;
    } else if (reg == '92') {
      const highByte = hex.slice(0, 2);
      const lowByte = hex.slice(2, 4);
      const workingStep = ~~parseInt(highByte, 16);
      // some restrictions on max and min
      let signalQuality = ~~parseInt(lowByte, 16);
      signalQuality = Math.max(signalQuality, 0);
      signalQuality = Math.min(signalQuality, 99);
      return workingStep + ' and ' + signalQuality;
    } else if (reg == '93' || reg == '94') {
      let val = ~~parseInt(hex, 16);
      // some restrictions on max and min
      val = Math.max(val, 0);
      val = Math.min(val, 2047);
      return val;
    } else if (reg == '96') {
      const langVal = ~~parseInt(hex, 16);
      if (langVal == 0) {
        return 'English';
      } else if (langVal == 1) {
        return 'Chinese';
      }
    } else {
      return ~~parseInt(hex, 16);
    }
  }

  function putValsForIntegerIntoMasterArr() {
    // find all LONGs
    let arrWithInts = returnArrOfThisType('INTEGER');
    arrWithInts.forEach((value) => {
      let humanVal = returnHumanValForInterger(value.notFormatedVal, value.reg);
      // find index with the same register in masterArr
      let index = masterArr.findIndex((item) => item.reg == value.reg);
      // put val into obj in formatedVal property
      masterArr[index].formatedVal = humanVal;
    });
  }

  // ****************** BIT ***********************

  /*
    In example case we have 72:4
    Hex value of 4 is 0x0004
    Binary representation of this is 0000 0000 0000 0100
    That means bit 2 is high and according to page 44 it means
    "Bit2 poor received signal"
  */

  function returnHumanValForBit(val, reg) {
    if (reg == '72') {
      let binary = parseInt(val).toString(2);
      binary = '0'.repeat(16 - binary.length) + binary; // 0000 0000 0000 0001 - 16 positions
      // error list from the manual - reversed
      const errorsList = [
        'analog input over range',
        'internal timer over flow',
        'reserved',
        'temperature circuits error',
        'ROM check-sum error',
        'parameters check-sum error',
        'main clock or timer clock error',
        'RAM check-sum error',
        'current at 4-20mA over flow',
        'frequency at the frequency output over flow',
        'receiving circuits gain in adjusting',
        'hardware failure',
        'pipe empty',
        'poor received signal',
        'low received signal',
        'no received signal',
      ];

      // if 0010 0000 0000 0010 --> reserved + low received signal
      let errorMsgArr = [];
      // go through all binary value and where bit is 1 (true), add corresponding error in arr
      binary.split('').forEach((item, index, array) => {
        if (parseInt(item)) errorMsgArr.push(errorsList[index]);
      });
      // list all errors in string
      return errorMsgArr.join('; ');
    }
  }

  function putValsForBitIntoMasterArr() {
    // find all BITs
    let arrWithBits = returnArrOfThisType('BIT');
    arrWithBits.forEach((value) => {
      let humanVal = returnHumanValForBit(value.notFormatedVal, value.reg);
      // find the index of element in masterArr with same register
      let index = masterArr.findIndex((item) => item.reg == value.reg);
      // put val into obj in formatedVal property
      masterArr[index].formatedVal = humanVal;
    });
  }

  // ****************** BCD ***********************

  /*
    If we get a BCD number from a device lets say 0x1735. This means it represent 1735 decimal
    number but in BCD format and if we simply print it without converting it will actually print 5941 in dec

    We need to take out each digit, convert it to normal representation and then print the final value.

    53:6432 --> 0x1920 (hex)
    54:4386 --> 0x1122 (hex)
    55:5889 --> 0x1701 (hex)

    From the manual “6 Bytes of BCD stands SMHDMY”

    So this BCD actually represents date+time.
    1st byte: 0x20 (S)
    2nd byte: 0x19 (M)
    3rd byte: 0x22 (H)
    4th byte: 0x11 (D)
    5th byte: 0x01 (M)
    6th byte: 0x17 (Y)

    It becomes
    17-01-11 22:19:20
  */

  function returnHumanValForBcd(val1 = '', val2 = '', val3 = '', reg) {
    let hex1, hex2, hex3, min, sec, day, hour, year, month;

    if (reg == '49' || reg == '50') {
      // not clear what to do, let's just print out the hex val
      hex1 = parseInt(val1).toString(16);
      hex1 = '0'.repeat(4 - hex1.length) + hex1; // we need 2 bytes = 4 symbols
      hex2 = parseInt(val2).toString(16);
      hex2 = '0'.repeat(4 - hex2.length) + hex2; // we need 2 bytes = 4 symbols
      return hex1 + hex2;
    } else if (reg == '51') {
      // not clear what to do, let's just print out the hex val
      hex1 = parseInt(val1).toString(16);
      hex1 = '0'.repeat(4 - hex1.length) + hex1; // we need 2 bytes = 4 symbols
      return hex1;
    } else if (reg == '53' || reg == '54' || reg == '55') {
      // 0x1920
      hex1 = parseInt(val1).toString(16);
      hex1 = '0'.repeat(4 - hex1.length) + hex1; // we need 2 bytes = 4 symbols
      min = hex1.slice(0, 2);
      sec = hex1.slice(2, 4);
      // 0x1122
      hex2 = parseInt(val2).toString(16);
      hex2 = '0'.repeat(4 - hex2.length) + hex2; // we need 2 bytes = 4 symbols
      day = hex2.slice(0, 2);
      hour = hex2.slice(2, 4);
      // 0x1701
      hex3 = parseInt(val3).toString(16);
      hex3 = '0'.repeat(4 - hex3.length) + hex3; // we need 2 bytes = 4 symbols
      year = hex3.slice(0, 2);
      month = hex3.slice(2, 4);

      return day + '.' + month + '.' + year + ' ' + hour + ':' + min + ':' + sec;
    } else if (reg == '56') {
      hex1 = parseInt(val1).toString(16);
      hex1 = '0'.repeat(4 - hex1.length) + hex1; // we need 2 bytes = 4 symbols
      day = hex1.slice(0, 2);
      hour = hex1.slice(2, 4);
      return 'Auto-save at ' + hour + ':00 h ' + ' on ' + day + 'th';
    }
  }

  function putValsForBcdIntoMasterArr() {
    // find all LONGs
    let arrWithBcds = returnArrOfThisType('BCD');
    arrWithBcds.forEach((value) => {
      // take pairs with same register names
      let arrWithSameRegNames = arrWithBcds.filter((x) => x.name == value.name); // 1, 2 or 3 els
      // as different BCDs take different number of registers, we need to test if value is assigned
      let notFormatedVal1 = '', notFormatedVal2 = '', notFormatedVal3 = '';
      if (arrWithSameRegNames.length >= 1) notFormatedVal1 = arrWithSameRegNames[0].notFormatedVal;
      if (arrWithSameRegNames.length >= 2) notFormatedVal2 = arrWithSameRegNames[1].notFormatedVal;
      if (arrWithSameRegNames.length >= 3) notFormatedVal3 = arrWithSameRegNames[2].notFormatedVal;
      // get human representation
      let humanVal = returnHumanValForBcd(notFormatedVal1, notFormatedVal2, notFormatedVal3, value.reg);
      // find the index of element in masterArr with same register
      let index = masterArr.findIndex((item) => item.reg == value.reg);
      // put val into obj in formatedVal property
      masterArr[index].formatedVal = humanVal;
    });
  }
}

// *** google chart ***
{
  // init chart
  // https://jsfiddle.net/api/post/library/pure/
  google.charts.load('43', { packages: ['corechart', 'line'] });
  google.charts.setOnLoadCallback(drawBasic);

  // make empty chart on page load, just to visually show axis
  function drawBasic() {
    valsFromServerForChart = [];

    let data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Values');

    data.addRows([/*[2, 23],[3, 17]*/]);

    let options = {
      chartArea: {
        top: 10,
      },
      backgroundColor: 'transparent',
      legend: {
        position: 'none',
        textStyle: { color: 'white' },
      },
      vAxis: {
        textStyle: { color: 'white' },
        gridlines: { color: 'white' },
        gridlines: { color: 'transparent' },
        baselineColor: 'white',
      },
      hAxis: {
        textStyle: { color: 'white' },
        gridlines: { color: 'white' },
        gridlines: { color: 'transparent' },
        baselineColor: 'white',
      },
    };

    let chart = new google.visualization.LineChart(document.getElementById('chart'));
    chart.draw(data, options);
  }

  // function to re-draw chart on new data receiving
  function updateChart(arr = []) {
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'X');
    data.addColumn('number', 'Values');

    data.addRows(arr);

    let options = {
      chartArea: {
        top: 10,
      },
      backgroundColor: 'transparent',
      legend: {
        position: 'none',
        textStyle: { color: 'white' },
      },
      vAxis: {
        textStyle: { color: 'white' },
        gridlines: { color: 'white' },
        gridlines: { color: 'transparent' },
        baselineColor: 'white',
      },
      hAxis: {
        textStyle: { color: 'white' },
        gridlines: { color: 'white' },
        gridlines: { color: 'transparent' },
        baselineColor: 'white',
      },
    };

    let chart = new google.visualization.LineChart(document.getElementById('chart'));
    chart.draw(data, options);
  }

  // update chart on every new data coming from server
  // to make more fun, let's randomize receiving values, otherwise chart is always flat
  function updateArrForChart(timeStamp, randomNum) {
    let humanVal = masterArr[selectedIndex].formatedVal;
    humanVal = (1 + randomNum) * humanVal;
    let arr = [timeStamp, humanVal];
    valsFromServerForChart.push(arr);
  }
}

// *** vals to / from masterArr ***
{
  function returnDateFromRawStr(str) {
    // get data from server as a string and put into arr
    const arr = str.trim().split('\n');
    // we just know that the date is on the top of arr
    return (date = arr[0]); // 2017-01-11 19:12
  }

  function addValsFromRawStrToMasterArr(str) {
    // get data from server as a string and put into arr
    let arr = str.trim().split('\n');
    // remove first element with date, we just know it is there
    arr.shift();

    // in masterArr we have all information from device's manual
    // just add recieved value into the masterArr and we will have all related data in one arr of objects
    arr.forEach((value) => {
      // value --> 3:5064
      const regNum = value.split(':')[0]; // register "3"
      const val = value.split(':')[1]; // value "5064"
      let index = masterArr.findIndex((item) => item.reg == regNum); // find the index of element in masterArr with same register
      masterArr[index].notFormatedVal = val; // masterArr[index].val = "5064" //  add val property to the masterArr element's object
    });
  }

  // filter array to show only els with same type
  function returnArrOfThisType(type) {
    return masterArr.filter((x) => x.format == type);
  }
}

// *** select item by user to show on display ***
{
  // build selection list for meter values when click on arrow ▼
  $('#cur-name-container').on('click', () => {
    $('#select').html('');
    const uniqueNamesWithoutFalseArr = [...new Set(masterArr.map((item) => item.name))].filter((x) => x);
    uniqueNamesWithoutFalseArr.forEach((item, index, array) => {
      $('#select').append(`<div>${item}</div>`);
    });
    $('body > *').hide();
    $('#select').show();
  });

  // change values on the screen + decide if we need to show chart or not
  $(document).on('click', '#select > div', function () {
    $('#cur-name').text($(this).text());
    // find the index of element in masterArr with same name
    let index = masterArr.findIndex((item) => item.name == $(this).text());
    let unit = masterArr[index].unit == undefined ? '' : masterArr[index].unit;
    $('#cur-unit').text(unit);
    $('body > *').show();
    $('#select').hide();
    changeValOnDisplay(0); // no randomize
    drawBasic();
    showOrHideChart();

    function showOrHideChart() {
      if (masterArr[selectedIndex].format != 'REAL4' && masterArr[selectedIndex].format != 'LONG') {
        $('#chart').hide();
      } else {
        $('#chart').show();
      }
    }
  });

  // update vals on display on every new data coming from server + if user choose different value
  function changeValOnDisplay(randomNum) {
    selectedIndex = masterArr.findIndex((item) => item.name == $('#cur-name').text());
    let humanVal = masterArr[selectedIndex].formatedVal == undefined ? 0 : masterArr[selectedIndex].formatedVal;

    if (masterArr[selectedIndex].format == 'REAL4' || masterArr[selectedIndex].format == 'LONG') {
      humanVal = (1 + randomNum) * humanVal;
      humanVal = Number(humanVal.toFixed(3)); // otherwise it is too long after randomize
    }

    $('#cur-val').text(humanVal);
  }
}