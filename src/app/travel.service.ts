import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private destinations: string[] = ['Calicut', 'Kannur', 'Thrissur', 'Palakkad'];
  private distances: { [key: string]: number } = {
    'Calicut-Kannur': 200,
    'Calicut-Thrissur': 150,
    'Calicut-Palakkad': 180,
    'Kannur-Thrissur': 250,
    'Kannur-Palakkad': 280,
    'Thrissur-Palakkad': 100,
    // Add more distances as needed based on your data
  };
  private users: any[] = [];

  constructor( ) { }


  addUser(user: any) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
  getUserByEmail(email: string){
    return this.users.find(user => user.email === email);
  }
  getDestinations(): string[] {
    return this.destinations
  }

  getDistance(source: string, destination: string): number {
    const key = `${source}-${destination}`;
    return this.distances[key] || 0; // Return 0 if the distance is not found
  }

  calculateExpense(distance: number, ratePerKm: number): number {
    return distance * ratePerKm;
  }
}