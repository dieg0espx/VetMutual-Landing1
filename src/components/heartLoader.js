import React from 'react';
import styled from 'styled-components';

const HeartLoader = () => {
  return (
    <StyledWrapper>
      <div className="loading w-[64px] block mx-auto mt-[30px] -mb-[80px]">
        <svg width="64px" height="48px">
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="back" />
          <polyline points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" id="front" />
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loading svg polyline {
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .loading svg polyline#back {
    fill: none;
    stroke:#0a2900;
  }

  .loading svg polyline#front {
    fill: none;
    stroke:rgb(50, 163, 12);
    stroke-dasharray: 48, 144;
    stroke-dashoffset: 192;
    animation: dash_682 1.4s linear infinite;
  }

  @keyframes dash_682 {
    72.5% {
      opacity: 0;
    }

    to {
      stroke-dashoffset: 0;
    }
  }`;

export default HeartLoader;
