const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
  tName:{
    type: String,
    required: [true, 'a match must have a name'],
    unique: true,
    trim: true
  }, 
  description: String,
  tStartDate:{
    type: Date,
    default: Date.now()
  },
  tEndDate:{
    type: Date
  },
  tBanner: String,
  tPrizes: [{
    prizeNumber: Number,
    prizeMoney: Number,
    sponsor: String,
  }],
  tContacts: [
  {
      name: String,
      mob: Number
  }
  ],
  payment:{},
  matchesWinners: [
    {
      tWinners:[
              {
                winnerNumber: Number,
                cityName: String
              },
            ],
      halfWinner:[ 
              {
                day: Number,
                date: Date,
                cityName: String
              }
           ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;