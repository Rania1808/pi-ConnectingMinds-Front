import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  private apiUrl = 'http://localhost:8083/messages';

  constructor(private http: HttpClient) {}

  sendMessage(content: string, chatId: number, userId: number): Observable<any> {
    const messageBody = {
      content: content,
      chatId: chatId,
      userId: userId
    };

    return this.http.post(this.apiUrl, messageBody);
  }

  newMessage(content: string, senderId: number, recieverId: number): Observable<any> {
    const messageBody = {
      content: content,
      senderId: senderId,
      recieverId: recieverId
    };
    const url = `${this.apiUrl}/new`
    return this.http.post(url, messageBody);
  }
}
