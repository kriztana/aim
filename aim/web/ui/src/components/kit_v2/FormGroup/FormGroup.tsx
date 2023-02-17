import React from 'react';

import { IconX } from '@tabler/icons';

import Box from '../Box';
import Button from '../Button';
import Text from '../Text';
import Icon from '../Icon';

const mock = {
  sections: [
    {
      rows: [
        {
          content: <Text as='span'>Row item 1</Text>,
          action: <Button>button</Button>,
          additionalActions: [
            {
              action: <Icon icon={<IconX />} />,
            },
          ],
        },
        {
          content: <span>Row item 1</span>,
          action: <Button>button</Button>,
          additionalActions: [
            {
              action: <Icon icon={<IconX />} />,
            },
          ],
        },
        {
          content: <span>Row item 1</span>,
          action: <Button>button</Button>,
          additionalActions: [
            {
              action: <Icon icon={<IconX />} />,
            },
          ],
        },
      ],
    },
  ],
};
function FormGroup({
  ...rest
}: any): React.FunctionComponentElement<React.ReactNode> {
  return (
    <Box css={{ border: '1px solid black' }}>
      <Box>
        {mock.sections.map((section, id) => {
          return (
            <Box key={id} display='flex' fd='column' p='$4'>
              {section.rows.map((row: any, id: number) => {
                return (
                  <Box key={id} display='flex' ai='center'>
                    {row.content}
                    {row.action}
                    <Box display='flex' ml='$3' gap='$3'>
                      {row.additionalActions.map(
                        (additionalAction: any, id: number) => {
                          return (
                            <Box display='flex' key={id}>
                              {additionalAction.action}
                            </Box>
                          );
                        },
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

FormGroup.displayName = 'FormGroup';
export default React.memo(FormGroup);
