import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  cardsData = [
    {
      title: 'Titulo',
      subtitle: 'Subtitulo Tarjeta',
      contentText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel repellat eos
    accusamus excepturi velit odio sunt! Quisquam consequatur repellendus,
    similique, doloribus cumque voluptatibus debitis reprehenderit labore itaque
    ex maiores magni!`
    },
    {
      title: 'Titulo 1',
      subtitle: 'Subtitulo Tarjeta 1',
      contentText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel repellat eos
    accusamus excepturi velit odio sunt! Quisquam consequatur repellendus,
    similique, doloribus cumque voluptatibus debitis reprehenderit labore itaque
    ex maiores magni!`
    },
    {
      title: 'Titulo 2',
      subtitle: 'Subtitulo Tarjeta 2',
      contentText: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel repellat eos
    accusamus excepturi velit odio sunt! Quisquam consequatur repellendus,
    similique, doloribus cumque voluptatibus debitis reprehenderit labore itaque
    ex maiores magni!`
    }
  ];
  constructor(public alertController: AlertController) {}
  async openAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }

  onBeerClicked() {
    console.log('Quiero una chela fria');
  }
}
