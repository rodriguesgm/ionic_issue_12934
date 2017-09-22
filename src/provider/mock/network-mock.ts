/**
 * Mock of Ionic Network to simulate on browser
 */
export class NetworkMock {

	type: string;
  isMock: boolean;

	constructor() {
		this.type = navigator.onLine ? 'wifi (mock)' : 'none (mock)';

		window.addEventListener('offline', e => {
			this.type = 'none';
		});
		window.addEventListener('online',  e => {
			this.type = 'wifi';
		});
	}
}
