import { InjectionToken } from "@angular/core";

export const NOW_TOKEN = new InjectionToken<() => string>('NOW_TOKEN');