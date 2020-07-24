import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames/bind"

import styles from "./styles.module.scss"

import Component from "./component"

const Column = ({ className, components, config }) => {
  const wrapperClasses = classNames(styles.column, {
    [className]: className,
    [`mb-${config.margin_bottom}`]: config.margin_bottom,
    [`text-${config.text_align}`]: config.text_align,
    [styles[`col_width_${config.width}`]]: config.width
  })

  return (
    <div className={wrapperClasses}>
      {components.map((comp, idx) => (
        <Component key={idx} data={comp} />
      ))}
    </div>
  )
}

Column.propTypes = {
  /**
   * A CSS class adding to the wrapping element.
   */
  className: PropTypes.string,
  /**
   * An array of component objects that get passed on to the <Component />.
   */
  components: PropTypes.arrayOf(PropTypes.object),
  /**
   * An object that controls the styling of the container on screen.
   */
  config: PropTypes.shape({
    margin_bottom: PropTypes.string,
    text_align: PropTypes.oneOf(["left", "center", "right", ""]),
    width: PropTypes.oneOf(["full", "1/4", "1/3", "1/2", "2/3", "3/4", ""])
  })
}

Column.defaultProps = {
  components: [],
  config: {}
}

export default Column
