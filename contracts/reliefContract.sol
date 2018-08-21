pragma solidity ^0.4.18;


/**
 * @title Ownable
 * @dev The Ownable contract has an owner address, and provides basic authorization control
 * functions, this simplifies the implementation of "user permissions".
 */
contract Ownable {
  address public owner;

  event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);


  /**
   * @dev The Ownable constructor sets the original `owner` of the contract to the sender
   * account.
   */
  constructor ()
    public
  {
    owner = msg.sender;
  }

  /**
   * @dev Throws if called by any account other than the owner.
   */
  modifier onlyOwner() {
    require(msg.sender == owner);
    _;
  }

  /**
   * @dev Allows the current owner to transfer control of the contract to a newOwner.
   * @param newOwner The address to transfer ownership to.
   */
  function transferOwnership(address newOwner) public onlyOwner {
    require(newOwner != address(0));
    emit OwnershipTransferred(owner, newOwner);
    owner = newOwner;
  }

}

contract relief is Ownable{

  struct distDetails{
    uint256 campName;
    string name;
    bool state;
  }

  struct campDetails {
    string district;
    string town;
  }

  mapping (uint256 => mapping(uint256 => bool) ) public user;
  mapping (address => distDetails ) public distributor;
  mapping (uint256 => campDetails ) public camp;
  mapping (uint256 => string ) public reliefsupply;
  mapping (uint256 => mapping(uint256 => bool )) public allotment;              // userid to reliefid == true;

  modifier onlydistributor() {
    require(distributor[msg.sender].state);
    _;
  }

  modifier isAlloted(uint256 userid,uint256 reliefID ) {
    require(!allotment[userid][reliefID]);
    _;
  }

  function registerDistributors(address distAddr,uint256 campname, string name)
    public
    onlyOwner
  {
    distributor[distAddr].campName = campname;
    distDetails[distAddr].name     = name;
    distDetails[distAddr].state    = true;
  }

  function registerCamp(uint256 campID , string _district, string _town)
    public
    onlyOwner
  {
    camp[campID].district = _district;
    camp[campID].town     = _town;
  }

  function addReliefPackage(uint256 packageID , string shortName)
    public
    onlyOwner
  {
    reliefsupply[packageID] = shortName;
  }

  function registerUser (uint256 campID,uint256 userID)
    onlydistributor
    public
  {
    user[campID][userID] = true;
  }

  function allotRelief(uint256 userID,uint256 reliefid)
    onlydistributor
    isAlloted(userID,reliefid)
    public
  {
    allotment[userid][reliefID] = true;
  }

}
