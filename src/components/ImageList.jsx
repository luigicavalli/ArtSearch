import PropTypes from 'prop-types';
import { ImageItem } from './ImageItem';

export function ImageList({ data }) {
  return (
    <div className="mb-[100px]">
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {data.map((image) => (
          <ImageItem key={image.objectID} image={image} />
        ))}
      </ul>
    </div>
  );
}

ImageList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.number.isRequired,
      primaryImage: PropTypes.string,
      title: PropTypes.string.isRequired,
      artistDisplayName: PropTypes.string.isRequired,
      creditLine: PropTypes.string,
    })
  ).isRequired,
};
