class Storage {
  isBrowser: boolean;

  constructor() {
    this.isBrowser = typeof window !== "undefined";
  }

  set = (key: string, data: any) => {
    this.isBrowser && localStorage.setItem(key, JSON.stringify(data));
  };

  get = (key: string): any => {
    return (
      this.isBrowser &&
      JSON.parse(localStorage.getItem(key as string) ?? "null")
    );
  };

  remove = (key: string) => this.isBrowser && localStorage.removeItem(key);

  clear = () => this.isBrowser && localStorage.clear();
}

const storage = new Storage();

export default storage;
