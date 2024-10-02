import { Injectable, Component, ApplicationRef, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ModalState {
  isVisible: boolean;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalState = new BehaviorSubject<ModalState>({
    isVisible: false,
    title: '',
    content: ''

  });


  getModalState() {
    return this.modalState.asObservable();
  }

  open(title: string, content: string) {
    this.modalState.next({
      isVisible: true,
      title: title,
      content: content
    })
  }

  close() {
    this.modalState.next({
      isVisible: false,
      title: '',
      content: ''
    })
  }




}
