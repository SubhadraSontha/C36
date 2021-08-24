class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter Your Name Here....");
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.numberInput = createElement('h3');
    this.options = createElement('h4');

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.title.hide();
    this.numberInput.hide();
    this.options.hide();
  }

  handleMousedPressed() {

    this.button.mousePressed(()=>{
      var message = `
      Hello ${(this.input1.value())}
      </br> Thank you, your answer has been submitted.`;
      this.greeting.html(message);
    })
    
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    


    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    


  }
}
