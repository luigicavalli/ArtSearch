import PropTypes from 'prop-types';

export function ImageItem({ image }) {
  return (
    <li key={image.objectID}>
      {image.primaryImage && (
        <div className="flex flex-col h-full border-[3px] rounded-lg border-sky-900 bg-slate-100 overflow-hidden">
          <img
            alt={image.title}
            src={image.primaryImage}
            className="h-64  object-cover sm:h-80 lg:h-96 border-b-[3px] border-sky-900"
          />
          <h3 className="mt-4 mx-4 text-lg font-bold text-gray-900 sm:text-xl">
            {image.title}
          </h3>
          <h5 className="mt-2 mx-4 text-base font-bold">
            {image.artistDisplayName}
          </h5>
          <p className="mt-2 mb-4 mx-4 max-w-sm text-gray-900">
            {image.creditLine}
          </p>
        </div>
      )}
    </li>
  );
}

ImageItem.propTypes = {
  image: PropTypes.shape({
    objectID: PropTypes.number.isRequired,
    primaryImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    artistDisplayName: PropTypes.string.isRequired,
    creditLine: PropTypes.string,
  }).isRequired,
};
