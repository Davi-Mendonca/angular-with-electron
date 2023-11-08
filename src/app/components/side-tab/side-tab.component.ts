import { Component } from '@angular/core';

@Component({
  selector: 'app-side-tab',
  templateUrl: './side-tab.component.html',
  styleUrls: ['./side-tab.component.scss']
})
export class SideTabComponent {
  tab = document.querySelector('.my-tab');

  tab.addEventListener('click', (event: any) => {
      tab.classList.toggle('active')
  })
}
