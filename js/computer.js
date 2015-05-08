/**
 * Created by vitaliy on 5/6/15.
 */
var Computer = function(
    /*2DContext*/   Context,
    /*Point*/       Position
) {
    //- Initialization -//
    this.context = Context;
    this.position = Position;
};

/**
 * Draw computer
 */
Computer.prototype.draw = function()// : void
{
    var image = new Image();
        image.src = '../images/computer.png';

    // Computer
    this.context.drawImage(image, 10, 5, 100, 100)

    /*this.context.strokeStyle = "#000";
    this.context.fillStyle = "#fff";
    this.context.beginPath();
    this.context.rect(this.position.x, this.position.y, 300, 450);
    this.context.closePath();
    this.context.stroke();
    this.context.fill();*/


    // Рисуем левый глаз
    /*this.context.fillStyle = "#fff";
    this.context.beginPath();
    this.context.arc(84,90,8,0,Math.PI*2,true);
    this.context.closePath();
    this.context.stroke();
    this.context.fill();
    // Рисуем правый глаз
    this.context.beginPath();
    this.context.arc(116,90,8,0,Math.PI*2,true);
    this.context.closePath();
    this.context.stroke();
    this.context.fill();
    // Рисуем рот
    this.context.beginPath();
    this.context.moveTo(70,115);
    this.context.quadraticCurveTo(100,130,130,115);
    this.context.quadraticCurveTo(100,150,70,115);
    this.context.closePath();
    this.context.stroke();
    this.context.fill();*/
};
