export type Callback = (...args: any[]) => any;

export class Callbacks {
  #callbacks: Map<string, Callback[]>;

  constructor() {
    this.#callbacks = new Map();
  }

  add(name: string, fn: any) {
    const newCallbacks: Callback[] = [];
    if (this.#callbacks.has(name)) {
      const callbacks = this.#callbacks.get(name) as Callback[];
      newCallbacks.push(...[...callbacks, fn]);
    } else {
      newCallbacks.push(fn);
    }
    this.#callbacks.set(name, newCallbacks);
  }

  remove(name: string) {
    this.#callbacks.delete(name);
  }

  run(name: string, ...args: any) {
    const callbacks = this.#callbacks.get(name) as Callback[];
    return callbacks.reduce(async (p: any, fn: Callback) => {
      p = await fn(...args);
      return p;
    }, undefined);
  }

  emit(name: string, ...args: any) {
    const callbacks = this.#callbacks.get(name) as Callback[];
    callbacks.forEach(fn => fn(...args));
  }
}

export const callbacks = new Callbacks();
