import StarRating from "./StarRating";

const ReviewsSection = ({ reviewData, className }) => {
  return (
    <section className={className}>
        
      {/* Reviews Summary */}
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
        <div className="flex items-center gap-3 mt-2 flex-wrap">
          {/* Stars for overall reviews */}
          <StarRating rating={reviewData.averageRating} />
          <p className="text-md font-semibold text-gray-800">
            {reviewData.averageRating} out of 5
          </p>
          <p className="text-gray-500">({reviewData.totalReviews} reviews)</p>
        </div>
      </div>

      {/* List of Individual Reviews */}
      <div className="space-y-8">
        {reviewData.reviews.map((review) => (
          <div key={review.id} className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center mb-2">
              {/* Stars for this review */}
              <StarRating rating={review.rating} />
              {/* Reviewer Name and Date */}
              <p className="text-md text-gray-500 sm:text-end">
                <span className="font-medium text-gray-700">{review.name}</span>
                <span className="ml-2">{review.date}</span>
              </p>
            </div>
            {/* Review Text */}
            <p className="text-gray-800 leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
