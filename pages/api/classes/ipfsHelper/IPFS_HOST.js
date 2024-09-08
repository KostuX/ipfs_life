export default class Host {
  host = "";
  constructor() {
    this.host = process.env.IPFS_HOST;
  }
  get() {
    return this.host;
  }
}

exports;
