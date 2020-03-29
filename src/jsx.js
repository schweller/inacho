'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'production';

const React = require('react');
const open = require('open')
const { render, Box, Text, Color } = require('ink')
const SelectInput = require('ink-select-input').default

const Indicator = ({isSelected}) => {
  return (
    <Box marginRight={1}>
      {isSelected ? (
        <Color white>
          @
        </Color>
      ) : ' '}
    </Box>    
  )
}

const Item = ({isSelected, label}) => (
	<Color hex={isSelected ? `#fff` : `#b12b2b`} underline={isSelected}>
		{label}
	</Color>
);

const Main = () => {
	const handleSelect = item => {
    open(item.link)
	};

	const items = [{
    label: 'Github',
    value: 'first',
    link: 'https://github.com/schweller'
	}, {
    label: 'Codepen',
    value: 'second',
    link: 'https://codepen.io/schweller'
	}, {
    label: 'My games',
    value: 'third',
    link: 'https://thesunda.itch.io/'
  }, {
    label: 'LinkedIn',
    value: 'fourth',
    link: 'https://www.linkedin.com/in/ischweller/'
	}, {
    label: 'Stack Overflow',
    value: 'fifth',    
    link: 'https://stackoverflow.com/users/4957796/inacio-schweller'
  }, {
    label: 'Full resume',
    value: 'sixth',    
    link: 'https://inacio.dev/inacio-schweller-resume.pdf'
  }
];

	return (
    <Box flexDirection="column">
      <Box paddingTop={1}>
        <Text><Color hex="#b12b2b" bold>Hello! I'm Inacio. I work and freelance as software engineer.</Color></Text>
      </Box>
      <Box marginBottom={1}>
        <Text><Color hex="#b12b2b" bold>You'll find me:</Color></Text>
      </Box>
      <SelectInput items={items} onSelect={handleSelect} indicatorComponent={Indicator} itemComponent={Item} />
      <Box marginTop={1}>
        <Text bold><Color hex="#b12b2b" bold>Terminal version of https://inacio.dev/</Color></Text>
      </Box>      
    </Box>
  )
};

render(<Main/>);
