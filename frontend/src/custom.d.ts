declare module '*.svg' {
    const content: any;
    export default content;
  }

declare module '*.gif' {
    const content: any;
    export default content;
  }

declare module'*.scss' {
    const content: {[key: string]: any}
    export = content
}