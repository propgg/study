Problems = new Mongo.Collection("problems");
Email = new Mongo.Collection("email");

if (Meteor.isClient) {

    Template.body.helpers({
        answers: function () {
            return Problems.find();
        },
        testText: "tja"
    });

    Template.body.events({
        "submit .answer": function (event) {
            event.preventDefault();

            var newTest = Email.find();

            var i = newTest.fetch()[2];

            var rnd = Math.floor((Math.random() * i.value1[1]) + i.value1[0]);

            var html = Spacebars.toHTML({ value1 : rnd, value2 : i.value2}, i.emailText);

            console.log(rnd + i.value2);

            console.log(html);

            var answer = event.target.text.value;

            var right_answer = 1+1;

            if (answer == right_answer) {
                alert(2);
            }
            else{
                alert(1);
            }
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
