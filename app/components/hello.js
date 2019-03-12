import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember-decorators/object';

export default class HelloComponent extends Component {
	@tracked first = "";
	@tracked last = "";

	get fullName() {
		return `${this.first} ${this.last}`
	}

	@action
	clearName(){
		this.first = "";
		this.last = "";
	}
}
