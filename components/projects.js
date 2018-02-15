import marked from 'marked'

const Projects = ({ data }) => {
  const lis = data.map(({ id, title, link, description }) => (
    <li key={id}>
      <h3 className='h2 mb0'>
        <a href={link} target='_blank'>{title}&nbsp;
          <svg viewBox='0 0 32 32' fill='none' stroke='currentcolor' strokeLinecap='round' strokeLinejoin='round'
            strokeWidth='10.9375%' className='icon mr05'>
            <path d='M14 9 L3 9 3 29 23 29 23 18 M18 4 L28 4 28 14 M28 4 L14 18' />
          </svg>
        </a>
      </h3>
      <p className='mt0' />
      <div dangerouslySetInnerHTML={{ __html: marked(description) }} />
    </li>
))
  return <ul>{lis}</ul>
}

export default Projects
