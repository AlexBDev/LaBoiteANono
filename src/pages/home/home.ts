import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  sounds: Array<Object> = [
    {
      "file" : "antibiotique.mp3",
      "title": "Antibiotique"
    },
    {
      "file" : "antiobiotiquedanslevinrouge.mp3",
      "title": "Antiobiotique vin rouge"
    },
    {
      "file" : "antiobiotiqueeau.mp3",
      "title": "Antibiotique eau"
    },
    {
      "file" : "arretetesconneriesrobert.mp3",
      "title": "Arrête tes conneries Robert"
    },
    {
      "file" : "calmetoi.mp3",
      "title": "Calme toi !"
    },
    {
      "file" : "cancerdespoumonsdaccord.mp3",
      "title": "Cancer"
    },
    {
      "file" : "casselagueulelit.mp3",
      "title": "Casser la gueule du lit ..."
    },
    {
      "file" : "commecasoigne.mp3",
      "title": "Soigne"
    },
    {
      "file" : "debutcancer.mp3",
      "title": "Debut Cancer"
    },
    {
      "file" : "docteurlulusong.mp3",
      "title": "Lulu Song"
    },
    {
      "file" : "encoreunpetitverredevin.mp3",
      "title": "Encore un petit verre"
    },
    {
      "file" : "ennuiepetit.mp3",
      "title": "Petit"
    },
    {
      "file" : "etdanslevinblanc.mp3",
      "title": "Dans le vin blanc"
    },
    {
      "file" : "glaire.mp3",
      "title": "Glaire"
    },
    {
      "file" : "hop4012.mp3",
      "title": "Hop 4012"
    },
    {
      "file" : "jesaiscommentfaire.mp3",
      "title": "Je sais comment faire"
    },
    {
      "file" : "jevaisteprendre.mp3",
      "title": "Je vais te prendre"
    },
    {
      "file" : "lulutufaislecon.mp3",
      "title": "Lulu tu fais le con"
    },
    {
      "file" : "manono.mp3",
      "title": "Ma nono"
    },
    {
      "file" : "menteur.mp3",
      "title": "Menteur"
    },
    {
      "file" : "nonjeneveuxpas.mp3",
      "title": "Non je n'veux pas"
    },
    {
      "file" : "ouicestvraismonsieur.mp3",
      "title": "Oui c'est vrais monsieur"
    },
    {
      "file" : "pasdaccident.mp3",
      "title": "Pas d'accident"
    },
    {
      "file" : "pasdemal.mp3",
      "title": "Pas de mal"
    },
    {
      "file" : "petitebete.mp3",
      "title": "Petite bete"
    },
    {
      "file" : "tadoreca.mp3",
      "title": "T'adore ça !"
    },
    {
      "file" : "tespasgate.mp3",
      "title": "T'es pas gâté !"
    },
    {
      "file" : "toujoursavecduvinrouge.mp3",
      "title": "Avec du vin rouge"
    },
    {
      "file" : "tuelemicrobe.mp3",
      "title": "Tue le microbe"
    },
    {
      "file" : "tumontedetension.mp3",
      "title": "Tu monte de tension"
    },
  ];

  audio = new Audio();

  play(song) {
    this.audio.src = 'assets/sounds/'+song;
    this.audio.pause();
    this.audio.currentTime = 0;
    this.audio.play();
  }   
}
