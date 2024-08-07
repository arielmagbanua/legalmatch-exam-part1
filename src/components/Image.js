import classNames from 'classnames';

function Image({ src, alt, className }) {
  const classes = classNames('p-8', className);

  return (
    <>
      <img src={src} alt={alt} className={classes} />
    </>
  )
}

export default Image;
