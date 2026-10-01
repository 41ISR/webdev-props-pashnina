export const ReviewsCard = ({author, dish, avatar, avatarAlt, text}) => {
    return(
       <div className="review-card">
          <img
            className="review-card__avatar"
            src={avatar}
            alt={avatarAlt}
          />
          <div className="review-card__content">
            <p className="review-card__text">
              {text}
            </p>
            <span className="review-card__author">
              {author} — блюдо {dish}
            </span>
          </div>
        </div>
    )
}