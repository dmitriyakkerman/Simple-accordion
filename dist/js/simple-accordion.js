class Accordion {
  constructor(options = {}) {
    this.el = options.el;
    this.el.classList.add('accordion');

    this.toggleState();
  }

  toggleState() {

    let that = this;

    that.el.querySelector('div:first-child').addEventListener('click', function() {
      that.el.classList.toggle('active')
    })
  }
}