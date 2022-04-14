/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IStays, IStaysInterface } from "../IStays";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Cancel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "CheckIn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "CheckOut",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "spaceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Deposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "facilityId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "LodgingFacilityActiveState",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "facilityId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dataURI",
        type: "string",
      },
    ],
    name: "LodgingFacilityCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "facilityId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "prevOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "LodgingFacilityOwnershipTransfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "facilityId",
        type: "bytes32",
      },
    ],
    name: "LodgingFacilityRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "facilityId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dataURI",
        type: "string",
      },
    ],
    name: "LodgingFacilityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "spaceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "NewStay",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "spaceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Refund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "spaceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "SpaceActiveState",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "spaceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "facilityId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "capacity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pricePerNightWei",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dataURI",
        type: "string",
      },
    ],
    name: "SpaceAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "spaceId",
        type: "bytes32",
      },
    ],
    name: "SpaceRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "spaceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "capacity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pricePerNightWei",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "dataURI",
        type: "string",
      },
    ],
    name: "SpaceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "payee",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "spaceId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_lodgingFacilityId",
        type: "bytes32",
      },
    ],
    name: "activateLodgingFacility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_spaceId",
        type: "bytes32",
      },
    ],
    name: "activateSpace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_lodgingFacilityId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_capacity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pricePerNightWei",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_active",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_dataURI",
        type: "string",
      },
    ],
    name: "addSpace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "tokenId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct IStays.CheckInVoucher",
        name: "voucher",
        type: "tuple",
      },
    ],
    name: "checkIn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "checkOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_lodgingFacilityId",
        type: "bytes32",
      },
    ],
    name: "deactivateLodgingFacility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_spaceId",
        type: "bytes32",
      },
    ],
    name: "deactivateSpace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_lodgingFacilityId",
        type: "bytes32",
      },
    ],
    name: "deleteLodgingFacility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "spaceId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "payer",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "spaceId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "depositOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "depositState",
    outputs: [
      {
        internalType: "enum IStayEscrow.State",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getActiveLodgingFacilityIds",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_lodgingFacilityId",
        type: "bytes32",
      },
    ],
    name: "getActiveSpaceIdsByFacilityId",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllLodgingFacilityIds",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_spaceId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_startDay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numberOfDays",
        type: "uint256",
      },
    ],
    name: "getAvailability",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_lodgingFacilityId",
        type: "bytes32",
      },
    ],
    name: "getLodgingFacilityById",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        internalType: "string",
        name: "dataURI",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getLodgingFacilityIdsByOwner",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_spaceId",
        type: "bytes32",
      },
    ],
    name: "getSpaceById",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
      {
        internalType: "bytes32",
        name: "lodgingFacilityId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "capacity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePerNightWei",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        internalType: "string",
        name: "dataURI",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_lodgingFacilityId",
        type: "bytes32",
      },
    ],
    name: "getSpaceIdsByFacilityId",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_spaceId",
        type: "bytes32",
      },
      {
        internalType: "enum IStayEscrow.State",
        name: "_state",
        type: "uint8",
      },
    ],
    name: "getTokensBySpaceId",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_spaceId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_startDay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_numberOfDays",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
    ],
    name: "newStay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_dataURI",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_active",
        type: "bool",
      },
    ],
    name: "registerLodgingFacility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_dataURI",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_active",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_fren",
        type: "address",
      },
    ],
    name: "registerLodgingFacility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_lodgingFacilityId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_newDataURI",
        type: "string",
      },
    ],
    name: "updateLodgingFacility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_spaceId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_capacity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pricePerNightWei",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_dataURI",
        type: "string",
      },
    ],
    name: "updateSpace",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_lodgingFacilityId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "yieldLodgingFacility",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IStays__factory {
  static readonly abi = _abi;
  static createInterface(): IStaysInterface {
    return new utils.Interface(_abi) as IStaysInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IStays {
    return new Contract(address, _abi, signerOrProvider) as IStays;
  }
}
