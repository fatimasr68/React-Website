import styled, { css } from "styled-components";

export const Category = styled.div`
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 40px 30px;
  max-height: 135px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 0;
    height: 100%;
    background-color: #08a9e6;
    opacity: 0;
    transition: all 0.3s ease-in;
    transition-duration: 0.6s;
    border-radius: 5px;
  }

  &:hover::before {
    opacity: 1;
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
  }

  a .icon-7 {
    padding-top: 2px;
    padding-right: 7px;
    font-size: 52px;
  }

  &:hover a h3 {
    color: #ffffff;
  }

  &:hover a span {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    color: #fff;
  }

  &:hover span::after {
    background: #fff;
    opacity: 0.15;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 767px) {
    margin-bottom: 16px;
    padding: 30px 33px;
  }
`;

export const IconArea = styled.span`
  padding-top: 10px;
  padding-right: 10px;
  position: relative;
  font-size: 40px;
  text-align: center;
  line-height: 1;
  color: #08a9e6;
  transition: 0.5s;
  background-color: transparent;
  margin-left: 18px;

  &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: -5px;
    right: -5px;
    width: 45px;
    height: 45px;
    border-radius: 30px;
    transition: 0.5s;
    background: #08a9e6;
    opacity: 0.1;
  }
`;

export const Title = styled.h3`
  font-size: 17px;
  font-weight: 500;
  color: #21225f;
  line-height: 1.4;
  margin-bottom: 0;
  transition: 0.9s;
`;
