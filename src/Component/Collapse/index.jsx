import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const DATA = [
  {
    heading: 'Heading 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    heading: 'Heading 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    heading: 'Heading 3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

export default function Collapse(props) {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      {DATA.map((item, index) => (
        <div key={item.heading + '_' + index}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '5px 10px',
              border: '1px solid var(--border-light)',
              cursor: 'pointer',
            }}
            onClick={() => setOpenIdx(index)}
          >
            <h4 style={{ margin: 0 }}>{item.heading}</h4>
            <FontAwesomeIcon
              icon={openIdx === index ? faChevronUp : faChevronDown}
              size={'xs'}
            />
          </div>
          {openIdx === index && (
            <div
              style={{
                display: 'flex',
                padding: '5px 10px',
                border: '1px solid var(--border-light)',
              }}
            >
              <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
