import Vue from 'vue';
import Button from './button';
import Icon from './icon';
import ButtonGroup from './button-group';

Vue.component('s-button', Button);
Vue.component('s-icon', Icon);
Vue.component('s-button-group', ButtonGroup);

new Vue({
	el: '#app',
	data: {
		loading1: false,
		loading2: true,
		loading3: false,
	}
})

// 测试代码
import chai from 'chai';
const expect = chai.expect;
/*
**  测试icon
*/
{
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'settings'
		}
	})
	vm.$mount()
	let useElement = vm.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-settings')   // 期待href是 i-settings
	vm.$el.remove()
	vm.$destroy()
}
/*
**  测试loading
*/
{
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'settings',
			loading: true
		}
	})
	vm.$mount()
	let useElement = vm.$el.querySelector('use')
	let href = useElement.getAttribute('xlink:href')
	expect(href).to.eq('#i-loading')
	vm.$el.remove()
	vm.$destroy()
}
/*
** 测试order，默认1
*/
{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'settings'
		}
	})
	vm.$mount(div)
	let svg = vm.$el.querySelector('svg')
	let {order} = window.getComputedStyle(svg)
	expect(order).to.eq('1')
	vm.$el.remove()
	vm.$destroy()
}
/*
** 测试order，给iconPositon order为2
*/
{
	const div = document.createElement('div')
	document.body.appendChild(div)
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'settings',
			iconPosition: 'right'
		}
	})
	vm.$mount(div)
	let svg = vm.$el.querySelector('svg')
	let {order} = window.getComputedStyle(svg)
	expect(order).to.eq('2')
	vm.$el.remove()
	vm.$destroy()
}
/*
** 测试click
*/
{
	const Constructor = Vue.extend(Button)
	const vm = new Constructor({
		propsData: {
			icon: 'settings',
		}
	})
	vm.$mount()
	vm.$on('click', function () {
		expect(1).to.eq(1)   // 1===1
	})
	// 希望这个函数被执行
	let button = vm.$el
	button.click()
}