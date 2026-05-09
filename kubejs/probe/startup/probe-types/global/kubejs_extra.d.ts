declare global {
  const KubeJS: {
    readonly Events: {
      onClientRegistration(handler: (event: any) => void): void
      onCommonRegistration(handler: (event: any) => void): void
    }
  }
  const JadeEvents: typeof KubeJS.Events
}
export {}