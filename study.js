Problems = new Mongo.Collection("problems");
Email = new Mongo.Collection("email");

if (Meteor.isClient) {
    var newTest = Email.find();

    var newTest2 = newTest.fetch()[0].emailText;
    
    var html = Spacebars.toHTML({ username: 'lukas' }, newTest2);

    console.log(html);

    Template.body.helpers({
        answers: function () {
            return Problems.find();
        },
        testText: "tja"
    });

    Template.body.events({
        "submit .answer": function (event) {
            event.preventDefault();

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
