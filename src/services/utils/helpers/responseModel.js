function ResponseModel(data, isSuccess, message) {
    this.data = data;
    this.isSuccess = isSuccess;
    this.message = message;
  }
  
  export { ResponseModel };