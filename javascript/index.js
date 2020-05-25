const e = React.createElement;
const container = document.getElementById('container');

const UserSection = () => {
  return (
    e(
      'div',
      {id: 'gridOneItemOne'},
      e('img', {id: 'avatar', src: CONFIG['avatarPic']}, null),
      e('div', {id: 'username'}, CONFIG['username'])
    )
  );
}

const IntroSection = () => {
  return (
    e(
      'div',
      {id: 'gridOneItemTwo'},
      e('div', {id: 'introduction'}, CONFIG['summary'])
    )
  );
}

const Header = () => {
  return (
    e(
      'div',
      {id: 'gridTwoItemOne', className: 'withBorder'},
      e('div', {id: 'subtitle'}, 'Latest Projects')
    )
  );
}

const Projects = () => {
  const projectClick = (e) => {
    const id = parseInt(e.target.id.replace('project_',''));
    window.location.href = `./projects/${id}/index.html`;
  }
  const list = CONFIG['projects'].map((item) => {
    return (
      e(
        'div',
        {id: `project_${item.id}`, className: 'projectCard withBorder', onClick: projectClick},
        item.name
      )
    );
  });
  return (
    e('div', {id: 'projectGrid'}, list)
  );
}

const Body = () => {
  return (
    e('div', {id: 'gridTwoItemTwo'}, Projects())
  );
}

const Footer = () => {
  return (
    e(
      'div',
      {id: 'gridTwoItemThree', className: 'withBorder'},
      e('div', {id: 'footer'}, 'Show More')
    )
  );
}

const UserGrid = () => {
  return (
    e('div', {id: 'gridOne', className: 'withBorder'}, UserSection(), IntroSection())
  );
}

const ProjectGrid = () => {
  return (
    e('div', {id: 'gridTwo'}, Header(), Body(), Footer())
  );
}

const MainGrid = () => {
  return (
    e('div', {id: 'mainGrid'}, UserGrid(), ProjectGrid())
  );
}

ReactDOM.render(e(MainGrid), container);
