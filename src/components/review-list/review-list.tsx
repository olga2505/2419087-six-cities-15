import ReviewItem from '../review-item/review-item';
import {comments} from '../review-item/review-data';

function ReviewList(): JSX.Element {
  return (
    <ul className="reviews__list">

      {comments.map((comment) => <ReviewItem comment={comment} key={comment.id}/>)}
    </ul>
  );
}

export default ReviewList;
