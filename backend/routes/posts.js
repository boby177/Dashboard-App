var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    "id": 1,
    "author": "Hodge Reubens",
    "title": "Sune på bilsemester",
    "category": "Uncategorized",
    "date": "4/25/2022"
  }, {
    "id": 2,
    "author": "Natalya Kiernan",
    "title": "Desperate",
    "category": "Action",
    "date": "5/18/2022"
  }, {
    "id": 3,
    "author": "Kara Gregory",
    "title": "Another Stakeout",
    "category": "Uncategorized",
    "date": "2/10/2022"
  }, {
    "id": 4,
    "author": "Marline Marieton",
    "title": "Gray Lady Down",
    "category": "Fantasy",
    "date": "11/9/2021"
  }, {
    "id": 5,
    "author": "Catherina Pipe",
    "title": "Thirteen, The (Trinadtsat)",
    "category": "Uncategorized",
    "date": "3/18/2022"
  }, {
    "id": 6,
    "author": "Pearline Brownlie",
    "title": "Employees Leaving the Lumière Factory",
    "category": "Drama",
    "date": "1/18/2022"
  }, {
    "id": 7,
    "author": "Cosimo Kinkead",
    "title": "Scenes From a Marriage (Scener ur ett äktenskap)",
    "category": "Uncategorized",
    "date": "4/10/2021"
  }, {
    "id": 8,
    "author": "Torrey Himpson",
    "title": "Cross My Heart",
    "category": "Drama",
    "date": "11/21/2020"
  }, {
    "id": 9,
    "author": "Marshal Danilyuk",
    "title": "Philadelphia Story, The",
    "category": "Action",
    "date": "1/7/2022"
  }, {
    "id": 10,
    "author": "Mirelle Whate",
    "title": "Hills Have Eyes Part II, The",
    "category": "Drama",
    "date": "2/26/2021"
  }, {
    "id": 11,
    "author": "Cody Janton",
    "title": "Gathering, The",
    "category": "Action",
    "date": "5/9/2022"
  }, {
    "id": 12,
    "author": "Phebe Duhig",
    "title": "Private Life of Sherlock Holmes, The",
    "category": "Uncategorized",
    "date": "7/2/2020"
  }, {
    "id": 13,
    "author": "Tabby Duckett",
    "title": "O Panishyros Megistanas Ton Ninja",
    "category": "Action",
    "date": "10/30/2021"
  }, {
    "id": 14,
    "author": "Shirl Ellph",
    "title": "Fall",
    "category": "Fantasy",
    "date": "11/29/2021"
  }, {
    "id": 15,
    "author": "Constantia Addlestone",
    "title": "Lentsu",
    "category": "Drama",
    "date": "9/3/2020"
  }, {
    "id": 16,
    "author": "Lorna Vaughan",
    "title": "Gunfighter's Moon",
    "category": "Uncategorized",
    "date": "3/20/2021"
  }, {
    "id": 17,
    "author": "Jordan Berrey",
    "title": "Rebel, The",
    "category": "Action",
    "date": "2/7/2021"
  }, {
    "id": 18,
    "author": "Clarine Plumm",
    "title": "Bat, The",
    "category": "Uncategorized",
    "date": "3/30/2022"
  }, {
    "id": 19,
    "author": "Cammi De Roberto",
    "title": "Shining, The",
    "category": "Drama",
    "date": "3/7/2021"
  }, {
    "id": 20,
    "author": "Fidela Jefferys",
    "title": "Nazis at the Center of the Earth",
    "category": "Drama",
    "date": "3/17/2022"
  }, {
    "id": 21,
    "author": "Wakefield Zelley",
    "title": "Invention of Lying, The",
    "category": "Drama",
    "date": "7/28/2021"
  }, {
    "id": 22,
    "author": "Dari Stodart",
    "title": "Luke and Lucy: The Texas Rangers (Suske en Wiske: De Texas rakkers)",
    "category": "Action",
    "date": "10/29/2020"
  }, {
    "id": 23,
    "author": "Blakelee Barents",
    "title": "Metro",
    "category": "Action",
    "date": "7/7/2022"
  }, {
    "id": 24,
    "author": "Smitty Piscot",
    "title": "Impostor",
    "category": "Uncategorized",
    "date": "9/23/2021"
  }, {
    "id": 25,
    "author": "Renault McIlreavy",
    "title": "Don",
    "category": "Fantasy",
    "date": "6/11/2020"
  }, {
    "id": 26,
    "author": "Hogan Pulman",
    "title": "Permanent Record",
    "category": "Action",
    "date": "12/7/2021"
  }, {
    "id": 27,
    "author": "Bruno Jorczyk",
    "title": "Street Fight",
    "category": "Fantasy",
    "date": "6/25/2020"
  }, {
    "id": 28,
    "author": "Alric Dobrovsky",
    "title": "Pom Pom Girls, The",
    "category": "Fantasy",
    "date": "12/7/2021"
  }, {
    "id": 29,
    "author": "Maryanne Battell",
    "title": "Samson and Delilah",
    "category": "Fantasy",
    "date": "8/5/2020"
  }, {
    "id": 30,
    "author": "Yovonnda Ivashechkin",
    "title": "Breaking the Maya Code",
    "category": "Fantasy",
    "date": "6/25/2022"
  }, {
    "id": 31,
    "author": "Stacey Hinemoor",
    "title": "Second Civil War, The",
    "category": "Uncategorized",
    "date": "4/13/2022"
  }, {
    "id": 32,
    "author": "Humberto Rofe",
    "title": "Bloodlust: Subspecies III",
    "category": "Fantasy",
    "date": "12/7/2021"
  }, {
    "id": 33,
    "author": "Melvin Rilings",
    "title": "Eden",
    "category": "Drama",
    "date": "10/2/2021"
  }, {
    "id": 34,
    "author": "Owen Boerder",
    "title": "Last Exorcism Part II, The",
    "category": "Drama",
    "date": "6/15/2020"
  }, {
    "id": 35,
    "author": "Ralph Jarrel",
    "title": "Under Our Skin",
    "category": "Drama",
    "date": "11/14/2020"
  }, {
    "id": 36,
    "author": "Katharine Vowdon",
    "title": "Once Upon a Time in Phuket (En gång i Phuket)",
    "category": "Fantasy",
    "date": "8/26/2020"
  }, {
    "id": 37,
    "author": "Goober Henzer",
    "title": "Oasis",
    "category": "Action",
    "date": "5/20/2021"
  }, {
    "id": 38,
    "author": "Hadria Scotney",
    "title": "Gantz",
    "category": "Fantasy",
    "date": "7/15/2020"
  }, {
    "id": 39,
    "author": "Fanechka Jone",
    "title": "Mutiny on the Bounty",
    "category": "Drama",
    "date": "4/29/2022"
  }, {
    "id": 40,
    "author": "Matthias Fishlock",
    "title": "Slaves of New York",
    "category": "Action",
    "date": "6/18/2020"
  }, {
    "id": 41,
    "author": "Ellswerth Yesinin",
    "title": "Bitter Victory",
    "category": "Drama",
    "date": "6/11/2020"
  }, {
    "id": 42,
    "author": "Manfred Sabberton",
    "title": "The Circle",
    "category": "Drama",
    "date": "1/5/2022"
  }, {
    "id": 43,
    "author": "Dennie Goldsworthy",
    "title": "AKA",
    "category": "Fantasy",
    "date": "1/10/2021"
  }, {
    "id": 44,
    "author": "Allyson McClenaghan",
    "title": "Requiem for a Vampire (Vierges et vampires)",
    "category": "Uncategorized",
    "date": "7/24/2020"
  }, {
    "id": 45,
    "author": "Rodi Bonham",
    "title": "Target Shoots First, The",
    "category": "Uncategorized",
    "date": "1/17/2021"
  }, {
    "id": 46,
    "author": "Halimeda O'Hannen",
    "title": "Asfalto",
    "category": "Drama",
    "date": "6/10/2021"
  }, {
    "id": 47,
    "author": "Katerine Kitchiner",
    "title": "Tall Man, The",
    "category": "Fantasy",
    "date": "3/14/2022"
  }, {
    "id": 48,
    "author": "Zulema Henriquet",
    "title": "To Live and Die in L.A.",
    "category": "Fantasy",
    "date": "4/6/2022"
  }, {
    "id": 49,
    "author": "Sigvard Lanyon",
    "title": "Attila (Attila the Hun)",
    "category": "Fantasy",
    "date": "6/16/2021"
  }, {
    "id": 50,
    "author": "Andrus Mingauld",
    "title": "High Spirits",
    "category": "Uncategorized",
    "date": "7/28/2022"
  }, {
    "id": 51,
    "author": "Delilah Manning",
    "title": "Sweet November",
    "category": "Fantasy",
    "date": "1/31/2022"
  }, {
    "id": 52,
    "author": "Rozella MacCaughey",
    "title": "Dark Command",
    "category": "Action",
    "date": "6/16/2022"
  }, {
    "id": 53,
    "author": "Ania Yurkevich",
    "title": "Urban Legend",
    "category": "Action",
    "date": "1/13/2022"
  }, {
    "id": 54,
    "author": "Evyn Simkovich",
    "title": "Romantics Anonymous (Les émotifs anonymes)",
    "category": "Fantasy",
    "date": "12/5/2020"
  }, {
    "id": 55,
    "author": "Eveline Lovick",
    "title": "Bedlam",
    "category": "Drama",
    "date": "6/10/2021"
  }, {
    "id": 56,
    "author": "Carlee Dalby",
    "title": "Repeaters ",
    "category": "Drama",
    "date": "6/6/2022"
  }, {
    "id": 57,
    "author": "Veradis Decourt",
    "title": "The Incident",
    "category": "Drama",
    "date": "2/11/2022"
  }, {
    "id": 58,
    "author": "Kittie Rosenstengel",
    "title": "Noah's Ark",
    "category": "Drama",
    "date": "4/21/2021"
  }, {
    "id": 59,
    "author": "Car Erskine Sandys",
    "title": "Miracle",
    "category": "Action",
    "date": "7/1/2020"
  }, {
    "id": 60,
    "author": "Silvan Clymo",
    "title": "Goods: Live Hard, Sell Hard, The",
    "category": "Drama",
    "date": "7/15/2022"
  }, {
    "id": 61,
    "author": "Davine Avarne",
    "title": "Shadow, The",
    "category": "Fantasy",
    "date": "1/11/2022"
  }, {
    "id": 62,
    "author": "Harold Dallas",
    "title": "Big Trouble",
    "category": "Action",
    "date": "3/14/2021"
  }, {
    "id": 63,
    "author": "Aleksandr Balazot",
    "title": "Home Alone 3",
    "category": "Action",
    "date": "5/11/2022"
  }, {
    "id": 64,
    "author": "Sharai Edser",
    "title": "Earthlings",
    "category": "Drama",
    "date": "5/13/2021"
  }, {
    "id": 65,
    "author": "Valeria Logue",
    "title": "Rob the Mob",
    "category": "Action",
    "date": "1/22/2022"
  }, {
    "id": 66,
    "author": "Pen Lonnon",
    "title": "Sadist, The",
    "category": "Action",
    "date": "11/19/2020"
  }, {
    "id": 67,
    "author": "Thia de Glanville",
    "title": "Cromwell",
    "category": "Action",
    "date": "12/8/2021"
  }, {
    "id": 68,
    "author": "Lorna Tarbard",
    "title": "Diminished Capacity",
    "category": "Drama",
    "date": "1/28/2021"
  }, {
    "id": 69,
    "author": "Early O'Neill",
    "title": "Hanzo the Razor: Sword of Justice (Goyôkiba)",
    "category": "Drama",
    "date": "10/21/2020"
  }, {
    "id": 70,
    "author": "Samantha Bader",
    "title": "Wild Hearts Can't Be Broken",
    "category": "Fantasy",
    "date": "4/1/2021"
  }, {
    "id": 71,
    "author": "Iver Bangiard",
    "title": "Black Coal, Thin Ice (Bai ri yan huo)",
    "category": "Uncategorized",
    "date": "12/14/2020"
  }, {
    "id": 72,
    "author": "Gianna Tomson",
    "title": "Pretty Woman",
    "category": "Drama",
    "date": "6/30/2021"
  }, {
    "id": 73,
    "author": "Marne Shakle",
    "title": "Deceptive Practice: The Mysteries and Mentors of Ricky Jay",
    "category": "Action",
    "date": "6/1/2022"
  }, {
    "id": 74,
    "author": "Dawna Ivashechkin",
    "title": "Apprenticeship of Duddy Kravitz, The",
    "category": "Fantasy",
    "date": "6/22/2021"
  }, {
    "id": 75,
    "author": "Byrle Golsworthy",
    "title": "Journey Beyond Three Seas",
    "category": "Fantasy",
    "date": "2/22/2021"
  }, {
    "id": 76,
    "author": "Ode Trengove",
    "title": "Sweet Smell of Success",
    "category": "Uncategorized",
    "date": "12/13/2021"
  }, {
    "id": 77,
    "author": "Demetris Rois",
    "title": "Outrage (Autoreiji)",
    "category": "Uncategorized",
    "date": "7/17/2021"
  }, {
    "id": 78,
    "author": "Kelci Circuit",
    "title": "Slaughterhouse-Five",
    "category": "Drama",
    "date": "6/17/2021"
  }, {
    "id": 79,
    "author": "Ingamar McIlwain",
    "title": "Messenger: The Story of Joan of Arc, The",
    "category": "Action",
    "date": "8/23/2020"
  }, {
    "id": 80,
    "author": "Hollyanne McGuffie",
    "title": "This is Our Time",
    "category": "Uncategorized",
    "date": "3/6/2021"
  }, {
    "id": 81,
    "author": "Nathanael Pulster",
    "title": "Boy Named Charlie Brown, A",
    "category": "Uncategorized",
    "date": "12/12/2020"
  }, {
    "id": 82,
    "author": "Kore Everley",
    "title": "Opposing Force",
    "category": "Action",
    "date": "1/9/2022"
  }, {
    "id": 83,
    "author": "Cristian Velez",
    "title": "Major League: Back to the Minors",
    "category": "Drama",
    "date": "11/14/2020"
  }, {
    "id": 84,
    "author": "Brendon Spall",
    "title": "Carey Treatment, The",
    "category": "Action",
    "date": "12/30/2020"
  }, {
    "id": 85,
    "author": "Lorrin Spottswood",
    "title": "Casa de mi Padre",
    "category": "Uncategorized",
    "date": "4/6/2022"
  }, {
    "id": 86,
    "author": "Doug Cumming",
    "title": "Shot in the Heart",
    "category": "Action",
    "date": "6/5/2021"
  }, {
    "id": 87,
    "author": "Gabrila Crees",
    "title": "Heart of Dragon (Long de xin)",
    "category": "Action",
    "date": "10/7/2021"
  }, {
    "id": 88,
    "author": "Salim Charleston",
    "title": "The Garden of Sinners - Chapter 5: Paradox Paradigm",
    "category": "Drama",
    "date": "1/20/2021"
  }, {
    "id": 89,
    "author": "Hildagard Shieldon",
    "title": "Primary",
    "category": "Uncategorized",
    "date": "8/18/2020"
  }, {
    "id": 90,
    "author": "Tymon McClelland",
    "title": "Kismet",
    "category": "Fantasy",
    "date": "12/26/2021"
  }, {
    "id": 91,
    "author": "Rubie Peachment",
    "title": "Resurrect Dead: The Mystery of the Toynbee Tiles",
    "category": "Action",
    "date": "7/22/2022"
  }, {
    "id": 92,
    "author": "Roger Gemmell",
    "title": "Velvet Goldmine",
    "category": "Drama",
    "date": "5/15/2022"
  }, {
    "id": 93,
    "author": "Audre Ramsdale",
    "title": "Sommer der Gaukler, Der",
    "category": "Drama",
    "date": "2/6/2021"
  }, {
    "id": 94,
    "author": "Elizabeth Sleeford",
    "title": "Executioner, The (Massacre Mafia Style)",
    "category": "Action",
    "date": "5/19/2022"
  }, {
    "id": 95,
    "author": "Larry Rannie",
    "title": "Jack the Giant Killer",
    "category": "Action",
    "date": "1/3/2022"
  }, {
    "id": 96,
    "author": "Evangelia Old",
    "title": "Rocky III",
    "category": "Drama",
    "date": "12/3/2021"
  }, {
    "id": 97,
    "author": "Lev Abazi",
    "title": "My Bodyguard",
    "category": "Drama",
    "date": "12/17/2020"
  }, {
    "id": 98,
    "author": "Antonella Blemen",
    "title": "Carefree",
    "category": "Uncategorized",
    "date": "7/3/2022"
  }, {
    "id": 99,
    "author": "Annis Bage",
    "title": "Ken Park",
    "category": "Uncategorized",
    "date": "8/4/2021"
  }, {
    "id": 100,
    "author": "Sarah Fullicks",
    "title": "Bad Luck (Zezowate szczescie)",
    "category": "Uncategorized",
    "date": "8/17/2020"
  }])
});

module.exports = router;
