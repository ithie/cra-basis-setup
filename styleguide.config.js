module.exports = {
  title: 'CRA Styleguide',
  sections: [
    {
      name: 'Atoms',
      content: 'src/components/atoms/atoms.md',
      components: 'src/components/atoms/**/[A-Z]*.js',
    },
    {
      name: 'Molecules',
      content: 'src/components/molecules/molecules.md',
      components: 'src/components/molecules/**/[A-Z]*.js',
    },
    {
      name: 'Organisms',
      content: 'src/components/organisms/organisms.md',
      components: 'src/components/organisms/**/[A-Z]*.js',
    },
    {
      name: 'Templates',
      content: 'src/components/templates/templates.md',
      components: 'src/components/templates/**/[A-Z]*.js',
    },
  ],
};
