/***/
module.exports = class DetectMutePlugin extends BasePlugin {


/***
import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'


export default class DetectMutePlugin extends BasePlugin {
/***/


	// Plugin info
	static id = "detect-mute-plugin"
	static name = "Detect Mute Plugin 005"
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
		});
		// Hook
		this.hooks.addHandler('core.user.audio.mute-change',
			(data) => this.onHookStatusChange(data)
    );
	}


	async onBtnCheckStatus() {
		const statusText = ( !! this.user.isMuted() ) ? 'User is muted' : 'User mic is on air';
		//
    this.myStatusOnBtnToastID = await this.menus.toast({
      text: statusText + '\t(per query)',
      duration: 5000
    });
    //
    console.log(`myStatusOnBtnToastID: ${this.myStatusOnBtnToastID}.`);
	}


	async onHookStatusChange(data) {
		const statusText = ( !! data.muted ) ? 'User is muted' : 'User mic is on air';
		//
    this.myStatusOnHookToastID = await this.menus.toast({
      text: statusText + '\t(per hook)',
      duration: 5000
    });
    //
    console.log(`myStatusOnHookToastID: ${this.myStatusOnHookToastID}.`);
	}


}// class DetectMutePlugin
