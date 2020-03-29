'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const React = require('react');
const open = require('open')
const { render, Box, Text, Color } = require('ink')
const SelectInput = require('ink-select-input').default

const brightRed = [254, 27, 7]
const darkRed = [177, 43, 43]

const Indicator = ({isSelected}) => {
  return (
    <Box marginRight={1}>
      {isSelected ? (
        <Color rgb={brightRed}>
          @
        </Color>
      ) : ' '}
    </Box>    
  )
}

const Item = ({isSelected, label}) => (
	<Color rgb={isSelected ? brightRed : darkRed} underline={isSelected}>
		{label}
	</Color>
);

const Main = () => {
	const handleSelect = item => {
    open(item.link)
	};

	const items = [{
    label: 'Github',
    value: 'gh',
    link: 'https://github.com/schweller'
	}, {
    label: 'Codepen',
    value: 'cp',
    link: 'https://codepen.io/schweller'
	}, {
    label: 'My games',
    value: 'mg',
    link: 'https://thesunda.itch.io/'
  }, {
    label: 'LinkedIn',
    value: 'li',
    link: 'https://www.linkedin.com/in/ischweller/'
	}, {
    label: 'Stack Overflow',
    value: 'so',    
    link: 'https://stackoverflow.com/users/4957796/inacio-schweller'
  }, {
    label: 'Full resume',
    value: 'fr',    
    link: 'https://inacio.dev/inacio-schweller-resume.pdf'
  }, {
    label: 'Say hi!',
    value: 'sh',    
    link: 'mailto:hi@inacio.dev'
  },
];

	return (
    <Box flexDirection="column">
      <Box paddingTop={1}>
        <Text><Color rgb={brightRed} bold>Hello! I'm Inacio. I work and freelance as software engineer.</Color></Text>
      </Box>
      <Box marginBottom={1}>
        <Text><Color rgb={brightRed} bold>You'll find me:</Color></Text>
      </Box>
      <SelectInput items={items} onSelect={handleSelect} indicatorComponent={Indicator} itemComponent={Item} />
      <Box marginTop={1}>
        <Text bold><Color rgb={brightRed} bold>Terminal version of https://inacio.dev/</Color></Text>
      </Box>      
    </Box>
  )
};

render(<Main/>);
