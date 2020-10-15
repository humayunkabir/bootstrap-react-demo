import React from 'react';
import PropTypes from 'prop-types';
import { CardHeader } from 'bootstrap-react';
import classNames from 'classnames';

const Title = ({ titleTag: TitleTag, className, breakPoint, children }) => (
  <TitleTag
    className={classNames(
      {
        'mb-0': !breakPoint,
        [`mb-${breakPoint}-0`]: !!breakPoint,
      },
      className
    )}
  >
    {children}
  </TitleTag>
);

Title.propsType = {
  breakPoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  titleTag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.node,
};

Title.defaultProps = { titleTag: 'h5' };

const FalconCardHeader = ({
  title,
  light,
  titleTag,
  titleClass,
  className,
  breakPoint,
  children,
}) => (
  <CardHeader className={classNames({ 'bg-light': light }, className)}>
    {children ? (
      <div className="row align-items-center">
        <div className="col">
          <Title
            breakPoint={breakPoint}
            titleTag={titleTag}
            className={titleClass}
          >
            {title}
          </Title>
        </div>
        <div
          {...{ [breakPoint ? breakPoint : 'xs']: 'auto' }}
          className={`col text${breakPoint ? `-${breakPoint}` : ''}-right`}
        >
          {children}
        </div>
      </div>
    ) : (
      <Title breakPoint={breakPoint} titleTag={titleTag} className={titleClass}>
        {title}
      </Title>
    )}
  </CardHeader>
);

FalconCardHeader.propTypes = {
  title: PropTypes.node.isRequired,
  light: PropTypes.bool,
  breakPoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl']),
  titleTag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  titleClass: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

FalconCardHeader.defaultProps = { light: true };

export default FalconCardHeader;
