import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Money from '../money';
import Text from '../text';

const VirtualWalletCardContent = ({ amount, currency, has_footer, wallet_name }) => {
    return (
        <div
            className={classNames('dc-virtual-wallet-card__content', {
                'dc-virtual-wallet-card__content--no-footer': !has_footer,
            })}
        >
            <Text color='colored-background' size='xxxs'>
                {wallet_name}
            </Text>
            <Text color='colored-background' size='s' weight='bold'>
                <Money amount={amount} currency={currency} show_currency />
            </Text>
        </div>
    );
};

VirtualWalletCardContent.propTypes = {
    amount: PropTypes.number,
    currency: PropTypes.string,
    has_footer: PropTypes.bool,
    wallet_name: PropTypes.string,
};

export default VirtualWalletCardContent;
