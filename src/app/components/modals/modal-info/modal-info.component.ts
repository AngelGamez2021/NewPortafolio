import { Component, HostListener, Input, OnInit } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.css']
})
export class ModalInfoComponent {

  @Input() title: string = "";
  @Input() content: string = "";
  isVisible = false;

  constructor(private ModalService: ModalService) { }

  ngOnInit(): void {

    this.ModalService.getModalState().subscribe((state) => {
      this.isVisible = state.isVisible;
      this.title = state.title;
      this.content = state.content;
    })

  }

  closeModal() {

    this.ModalService.close();
  }


  // Escuchar la tecla 'Esc' para cerrar el modal
  @HostListener('document:keydown.escape', ['$event'])
  onEscapePressed(event: KeyboardEvent) {
    this.closeModal();

  }


}