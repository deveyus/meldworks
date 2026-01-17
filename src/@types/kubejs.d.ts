// Temporary type stubs for KubeJS
// These will be replaced by ProbeJS generated types after running /probejs dump in-game

declare const ServerEvents: any;
declare const ClientEvents: any;
declare const StartupEvents: any;
declare const console: Console;

interface Console {
  info(...args: any[]): void;
  log(...args: any[]): void;
  warn(...args: any[]): void;
  error(...args: any[]): void;
}
