/***
module.exports = class DetectMutePlugin extends BasePlugin {


/***/
import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'


export default class DetectMutePlugin extends BasePlugin {
/***/


	// Plugin info
	static id = "detect-mute-plugin"
	static name = "Detect Mute Plugin"
	static description = "Description of the plugin goes here."
	//
	myStatusOnBtnToastID		= null;
	myStatusOnHookToastID		= null;


	onLoad() {
		// Create a button in the toolbar
		this.menus.register({
			icon: this.paths.absolute('button-icon.png'),
			text: 'Check Status',
			action: () => this.onBtnCheckStatus()
		})
	}


	async onBtnCheckStatus() {
		const statusText = `Status Message`;
		//
    this.myStatusOnBtnToastID = await this.menus.toast({
      text: statusText,
      duration: 5000
    });
    //
    console.log(`myStatusOnBtnToastID: ${this.myStatusOnBtnToastID}.`);
	}


}// class DetectMutePlugin
