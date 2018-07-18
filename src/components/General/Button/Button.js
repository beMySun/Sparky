import React from 'react';
import PropTypes from 'prop-types';
import classnames  from 'classnames';

import styles from './styles/Button.less';


// TODo

/**
 * @export TODO 
 * @param 统一使用typescript
 * @returns 考虑把组件的事件单独做一层封装处理
 */

export default function Button(props) {
	const {
		type,
		className,
		size,
		style,
		disabled,
		nativeType,
		onClick,
	} = props;

	const btnClass = classnames(styles['btn'], styles[`btn-${size}`], styles[`btn-${type}`], className);
	let iconComponent = null;

	return (
		<button
		type={nativeType}
		className={btnClass}
		style={style}
		disabled={disabled}
		onClick = {onClick}
	>
		{iconComponent}
		{props.children}
	</button>
	);
}

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  nativeType: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  disabled: false,
  nativeType: 'button',
  size: 'default',
  type: 'default',
};
