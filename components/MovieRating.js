import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";

const Vote = styled.Text`
    color: ${props => (props.inSlide ? TINT_COLOR : GREY_COLOR)};
    font-size: ${props => (props.inSlide ? "10px" : "8px")};
    font-weight: 600;
`;

const MovieRating = ({ votes, inSlide = false }) => (<Vote>{`⭐️ ${votes} / 10`}</Vote>);

MovieRating.propTypes={
    votes: PropTypes.number.isRequired,
    inSlide: PropTypes.bool
};

export default MovieRating;