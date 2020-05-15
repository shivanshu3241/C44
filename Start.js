class Start
{
    constructor()
    {
        this.button = createButton("Start");
        this.place = createSelect();

        this.place.option('jamnagar');
        this.place.option('mudhol');
        
        this.situation = createSelect();
        this.situation.option('Car racing');
        this.situation.option('gangster');
        this.situation.option('free roam');
        this.situation.option('shooting');
        this.situation.selected('');

        this.name = createInput("Name");
    }

    display()
    {   
        textSize(18);
        fill("white");
        this.name.position(530, 350);
        text("Enter Your Name", 530, 340);
       
        this.place.position(530, 430);
        text("Enter Your Place/Map", 530, 420);

        this.situation.position(530, 510);  
        text("Enter The Situation/Gameplay", 530, 500)       

        this.button.position(530, 590);
        text("Press Here To Start",530, 580);

        this.button.mousePressed(()=>
        {
          this.place.hide();
          this.situation.hide();
          this.button.hide();
          this.name.hide();

          place = this.place.value();
          situation = this.situation.value();
          name = this.name.value();
          
          console.log(place);
          console.log(situation);
          console.log(name);
        })
    }
}