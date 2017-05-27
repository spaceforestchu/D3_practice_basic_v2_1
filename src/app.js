//scaleLinear

// var linearScale = d3.scaleLinear()
//   .domain([0, 100])
//   .range([0,600])
//   .clamp(true);
//
// console.log(linearScale(0));
// console.log(linearScale(50));
// console.log(linearScale(100));
//
// console.log(linearScale.invert(300));

//Time

// var timeScale = d3.scaleTime()
//   .domain([new Date(2016, 0, 1), new Date()])
//   .range([0, 100]);
//
// console.log(timeScale(new Date(2016, 0, 15)));
// console.log(timeScale(new Date(2016, 3, 15)));
// console.log(timeScale(new Date()));
//
// console.log(timeScale.invert(50));

//scaleQuantize

// var qunantizeScale = d3.scaleQuantize()
//    .domain([0, 100])
//    .range(["red", "white", "green"]);
//
// console.log(qunantizeScale(22));
// console.log(qunantizeScale(50));
// console.log(qunantizeScale(88));
// console.log(qunantizeScale(99));
//
// console.log(qunantizeScale.invertExtent('white'));

// scale Ordinal

// var ordinalScale = d3.scaleOrdinal()
//    .domain(["poor", "good", "great"])
//    .range(["red", "white", "green"]);
//
// console.log(ordinalScale("good"));

// data

// d3.json('data/data.json', function (data) {
//   console.log(data);
// });
//
// d3.csv('data/data.csv', function (data) {
//   console.log(data);
// });
//
// d3.csv('data/data.tsv', function (data) {
//   console.log(data);
// });

// d3.json('data/data.json', function(data){
//   var min =  d3.min(data, function (d) {
//     return d.age
//   });
//   console.log(min);
//   var max =  d3.max(data, function (d) {
//     return d.age
//   });
//   console.log(max);
// });

d3.json('data/data.json', function(data){
  var extent =  d3.extent(data, function (d) {
    return d.age
  });
  console.log(extent);

  var scale = d3.scaleLinear()
    .domain(extent)
    .range([0,600]);
    console.log(scale(24));

  var ages = d3.set(data, function (d) {
    return d.age;
  });
  console.log(ages.values());
});
