import {Component, ViewChild, ElementRef, AfterViewInit, OnInit, ViewChildren} from '@angular/core';


@Component({
  selector: 'app-compiler',
  templateUrl: './compiler.component.html',
  styleUrls: ['./compiler.component.css']
})

export class CompilerComponent implements OnInit {

  descriptions: any [];
  model_text: any;
  natural_text: string;
  notifications: any[];
  indexSelected: number;

  tabEnterText: boolean = true;
  tabClassDiagram: boolean = false;
  tabJson: boolean = false;
  tabXml: boolean = false;

  viewJson: any;
  viewXml: any;
  viewXmlText: any;

  jsonStructure: {diagram: [], relationships: []};

  @ViewChild('areaDiagram', {static: false}) areaDiagramDiv : ElementRef;
  @ViewChild('textareaxml', {static: false}) codeXml : ElementRef;

  constructor() {
  }

  ngAfterViewInit(): void {
    //console.log(this.areaDiagramDiv);
    const area = this.areaDiagramDiv.nativeElement;
    this.viewXmlText = this.codeXml.nativeElement;
    // @ts-ignore
    this.viewXmlText.value =  vkbeautify.xml(this.viewXmlText.value,1);
    console.log(this.viewXmlText);
    console.log(area)
    // @ts-ignore
    diagramClass = createDiagram({
      "width": 100,
      "height": 50,
      "id_div": area,
      "diagram": "",
      "interaction": true,
      "draw": true
    })

  }

  execute() {
    this.jsonStructure.diagram.length = 0;
    this.jsonStructure.relationships.length = 0;

    console.log(this.model_text)
    // @ts-ignore
    //let minjson = getHackDiagram(this.model_text);
    //this.natural_text = minjson[0];

    this.descriptions[this.indexSelected].model_text = this.model_text;
    this.descriptions[this.indexSelected].interpret = true;

    for(let i = 0; i < this.descriptions.length; i++){
      // @ts-ignore
      let minjson = getDiagramClass(this.descriptions[i].model_text);
      // @ts-ignore
      mergeClassDiagram(this.jsonStructure, minjson[1]);
      this.viewXml += minjson[1].xmldiagram;
      this.notifications = minjson[1].notifications;
      this.natural_text = minjson[0];
      this.descriptions[i].natural_text = this.natural_text;
    }

    console.log(this.notifications);

    // @ts-ignore
    this.viewXml =  vkbeautify.xml(this.viewXml, 0);

    // @ts-ignore
    updateClassDiagram(this.jsonStructure, "C");

    this.viewJson = JSON.stringify(this.jsonStructure,null,'\t')
    console.log("xml ", this.viewXmlText)

    console.log(this.notifications);
    this.jsonStructure = {diagram: this.jsonStructure.diagram, relationships: this.jsonStructure.relationships};
  }


  changeTab(tab: string) {
    this.closeTab();
    tab === "enterText" ?  this.tabEnterText = true : tab === "classDiagram" ? this.tabClassDiagram = true :
    tab === "json" ? this.tabJson = true : this.tabXml = true;
    console.log(tab);
  }

  closeTab() {
    this.tabEnterText = false;
    this.tabClassDiagram = false;
    this.tabJson = false;
    this.tabXml = false;
  }


  validateColorConsole(type: number) {
    // text-green-500 text-yellow-500 text-blue-500
    return type === 0 ? "text-blue-500" : type === 1 ? "text-green-500" : type === 2 ? "text-yellow-500" : "text-pink-500";
  }

  validateColorDescription (item: any) {
    let css_class = "";
    css_class = item.selected ? 'border-bottom-3 border-blue-800 ' : ' ';
    css_class += item.interpret ? 'bg-green-100' : 'bg-gray-100';
    //console.log(css_class);
    return css_class;
  }

  /**
   * Method for selecting a description
   * */
  selectedDescription(item: any, index: number) {
    this.deselectDescriptions();
    this.indexSelected = index;
    this.model_text = item.model_text;
    this.natural_text = item.natural_text;
    item.selected = true;
  }

  /**
   * Method to add a new description
   * */
  addNewDescription () {
    if(this.descriptions.length > 0) {

      if(!this.descriptions[this.descriptions.length - 1].interpret){
        alert("Debe interpretar la descripcion anterior, mantenga un orden.")
        return;
      }

      this.deselectDescriptions();

      this.descriptions.push({
        "model_text":"test",
        "natural_text": "",
        "interpret": false,
        "selected": true
      });

    } else {
      this.deselectDescriptions();
      this.descriptions.push({
        "model_text":"test",
        "natural_text": "",
        "interpret": false,
        "selected": true
      });
    }
    this.selectedDescription(this.descriptions[this.descriptions.length - 1], 0);
    this.indexSelected = this.descriptions.length - 1;
    console.log(this.descriptions);
  }

  deselectDescriptions() {
    for(let i = 0; i < this.descriptions.length; i++){
      this.descriptions[i].selected = false;
    }
  }

  ngOnInit(): void {
    this.descriptions = [];
    this.notifications = [];
    this.jsonStructure = {diagram: [], relationships: []};
    this.addNewDescription();
  }

}
