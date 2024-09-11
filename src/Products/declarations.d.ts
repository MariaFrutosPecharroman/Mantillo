// Permite declarar como importacion archivos jpg en typescript.
// de lo contrario da error
declare module '*.jpg' {
    const value: string;
    export default value;
  }