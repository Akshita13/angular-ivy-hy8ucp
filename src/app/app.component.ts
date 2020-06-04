import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
    styles: [
    `.clearfix::after {
    content: "";
    clear: both;
    display: table;
}`]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
turn='x'
cells:any[]=[]
combinations=[]
idArray=[]
turnArray=[]
sliceArray
  ngOnInit(){
    for(let i=0;i<9;i++){
      this.cells[i]=null;
    }
  }

  clickHandler(i){
    this.cells[i]=this.turn;
    this.changeTurn(i);
    this.winner(i)
  }

changeTurn(i){
  if(this.turn==='x'){
    this.turn='o'
  }else{
    this.turn='x'
  }
}

winner(idx){
  this.combinations=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ]

  this.idArray.push(idx)
  this.sliceArray=this.idArray.slice(0,idx+3)
// console.log(this.cells)
// console.log("idarray",this.sliceArray)
// console.log(this.turnArray,"this.turnArray")
  this.combinations.forEach((item,i)=>{
    item.forEach((itemValue,i2)=>{
      if(itemValue===idx)
      console.log(itemValue,"itemvalue",idx)
    })
  })

  // this.cells.forEach((cell,i)=>{
  //   console.log(cell)
  // })
}

}
