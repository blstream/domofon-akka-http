import { browserDynamicPlatform } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module";

if (process.env.ENV === "production") {
  enableProdMode();
}

browserDynamicPlatform().bootstrapModule(AppModule);

// Temporal solution to include Material dependency, should be fixed however.
///<reference path="../typings/globals/hammerjs/index.d.ts"/>