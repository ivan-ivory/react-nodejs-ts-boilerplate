declare module '*.png'
declare module '*.svg'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.scss' {
  const content: {[className: string]: string}
  export = content
}
declare module 'availity-reactstrap-validation'