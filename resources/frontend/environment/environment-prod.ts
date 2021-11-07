import {Environment} from "./environment";

export class EnvironmentProd implements Environment{
    env: string;
    rootUrl: string;
    snackbarHideDuration: number;
    wsUrl: string;

    constructor() {
        this.env = 'PROD';
        this.rootUrl = 'https://api.containerdemo.live/';
        this.snackbarHideDuration = 5000;
        this.wsUrl = "wss://api.containerdemo.live/"
    }


}