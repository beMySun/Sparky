const $bezier = 'cubic-bezier(0.23, 1, 0.32, 1)0ms';

module.exports = {
  theme: {
    color: {
      border: '#eeeeee',
      link: '#707473',
      linkHover: '#44a8f2',
      name: '#266d90',
      sidebarBackground: '#f7f8f9',
      type: '#bf2a5c',
    },
    sidebarWidth: 256,
  },
  styles: {
    ComponentsList: {
      heading: {
        color: 'rgba(0,0,0,.43)!important',
        fontSize: '13px!important',
        lineHeight: '1.5!important',
      },
      item: {
        lineHeight: '35px',
        margin: '0',
      },
    },
    Link: {
      link: {
        transition: `all .3s ${$bezier}!important`,
      },
    },
  },
};
