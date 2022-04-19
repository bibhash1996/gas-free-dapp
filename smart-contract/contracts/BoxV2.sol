// contracts/Box.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@opengsn/contracts/src/BaseRelayRecipient.sol";
import "./Box.sol";

contract BoxV2 is Box, BaseRelayRecipient {
    function setTrustedForwarder(address forwarder) public {
        _setTrustedForwarder(forwarder);
    }

    function versionRecipient() external pure override returns (string memory) {
        return "1";
    }
}
