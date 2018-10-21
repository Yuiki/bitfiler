declare module 'bitcoinfiles' {
  const bfp: bfp

  interface bfp {
    downloadFile(bfpUri: string): Promise<File>
  }

  interface File {
    passesHashCheck: boolean
    fileBuf: Buffer
  }
}