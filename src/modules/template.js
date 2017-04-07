/*------------------------------------------------------------------------------
            ___________                   .__          __
            \__    ___/___   _____ ______ |  | _____ _/  |_  ____
              |    |_/ __ \ /     \\____ \|  | \__  \\   __\/ __ \
              |    |\  ___/|  Y Y  \  |_> >  |__/ __ \|  | \  ___/
              |____| \___  >__|_|  /   __/|____(____  /__|  \___  >
                         \/      \/|__|             \/          \/

                              Template module
------------------------------------------------------------------------------*/

/** A template class */
class Template {

  /**
   * @param  {String} param - A template parameter.
   */
  constructor(param){
    this.param = param;
  }

  /**
   * Check that input is of type string
   * @param  {Any}  input - Variable to check if it is a string
   * @return {Boolean} - True if the type of the variable is a string; false
   * otherwise.
   */
  static isString(input){
    if(typeof input === 'string') return true;
    return false;
  }

  /**
   * Console logs input
   * @private
   * @param {Any} input - Input to send to the console.log
   */
  _log(input){
    console.log("Message: %j", input);
  }

  /**
   * Start the template
   * @param {String} [msg=false] - Optional message to console log.
   * @return {Bool} True if something was logged out; false otherwise.
   */
  start(msg = false){

    let logged = false;

    if(typeof msg === 'string') {
      console.log("Addional message is: " + msg);
      logged = true;
    }

    if(this.param){
      this._log(this.param);
      logged = true;
    }

    return logged;
  }

}

exports.Template = Template;
