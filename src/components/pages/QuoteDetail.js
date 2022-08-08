import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comment from "../comments/Comments";
const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      <p>{params.quoteId}</p>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comment />
      </Route>
    </Fragment>
  );
};
export default QuoteDetail;
