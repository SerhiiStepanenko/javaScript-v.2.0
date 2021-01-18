class Valid2 extends Valid{
    constructor(email, password, isValid, emaiError, passwordError){
      super(email, password, isValid)
      this.emaiError = '';
      this.passwordError = '';
    }
    validate(){
      if(this.password.length >= 6){
        this.isValid = true;
      }else{
        this.isValid = false;
        this.passwordError = 'min length 6';
      }
      if(this.email == ''){
        this.isValid = false;
        this.emaiError = "email empty";
      }
    }
  }