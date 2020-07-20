import {
	getResources
} from '../sevices/request';

const showMoreStyle = (trigger, wrapper) => {
	const btn = document.querySelector(trigger);

	btn.addEventListener('click', function () {
		getResources('assets/original.json')
			.then(res => createCards(res.styles))
			.catch(error => console.log(error));

		this.remove();
	});

	const createCards = (response) => {
		response.forEach(({
			src,
			title,
			link
		}) => {
			let card = document.createElement('div');

			card.addEventListener.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

			card.innerHTML = `
								<div class="styles-block">
                    <img src=${src} alt="style">
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
					`;

			document.querySelector(wrapper).appendChild(card);
		});
	};

};

export default showMoreStyle;