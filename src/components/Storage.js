const Storage = {
  read() {
    const data = localStorage.savedState;
    try {
      let savedState = JSON.parse(data);
      return savedState;
    } catch(err) {
      return null;
    }
  },
  write(data) {
    const seridata = JSON.stringify(data);
    localStorage.savedState = seriData;
  }
}

export default Storage;