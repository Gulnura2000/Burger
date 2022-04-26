import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Shipment extends Component {
    static propTypes = {
        total: PropTypes.number
      };
    
    render() {
        const {total} = this.props
        const shipping = total>0 && total<500 ? 150 : 50
        const shippingNeon = total === 50 ? (
            <span className='font-effect-neon total_wrap-cheap'>
                {shipping} Сом
            </span>
        ) : ( <span>
              {shipping} Сом
        </span>)

        return (
            <div className="total">
    <div className="total_wrap">
        <div> Доставка {total>0 ? shippingNeon : null}</div>
        <div className="total_wrap-free">
            {total<500 ? `закажите еще ${500 - total}Сом для доставки 50 Сом` : null}
        </div>
        <div className="total_wrap-final">
            итого {total+shipping} Сом
        </div>
    </div>
</div>
        );
    }
}

export default Shipment;
