pragma solidity ^0.4.18;


import './Ownable.sol';
import './SafeMath.sol';

/**
 * @title Kerela Relief ERC 20
 * Tweeked version of ERC 20 to help better manage inventory of relief camps
 * @author Harsh Patel / harsh.patel54@gmail.com
 */
contract ReliefERC20 is Ownable{

  using SafeMath for uint256;

  struct userDetail{
    string name;
    string contactDetail;
    string location;
    uint256 no;
    bool state;
  }

  struct itemDetail{
    string itemName;
    string itemDescription;
    bool state;
    bool isCentral;
  }

  uint256 noItems;
  uint256 noDist;
  uint256 noUser;

  mapping (uint256 => bytes32 ) public coutUsermap;
  mapping (uint256 => address ) public coutDistmap;
  mapping (bytes32 => userDetail ) public user;
  mapping (address => userDetail ) public dist;

  mapping ( uint256 => itemDetail ) public item;
  mapping ( address => mapping( uint256 => uint256 ) ) public balanceDist;
  mapping ( bytes32 => mapping( uint256 => uint256 ) ) public balanceUser;

  modifier isUser( bytes32 _userAddr){
    require(user[_userAddr].state == true );
    _;
  }

  modifier isDist( ){
    require( (dist[msg.sender].state == true) );
    _;
  }

  modifier isValidTransfe( uint256 itemID , uint256 qty ) {
    require( balanceDist[msg.sender][itemID] >= qty );
    _;
  }

  modifier isCentralItem( uint256 itemID ) {
    require( item[itemID].isCentral == true );
    _;
  }

  modifier isnonCentralItem( uint256 itemID ) {
    require( item[itemID].isCentral == false );
    _;
  }

  function addCamp( address _userAddr , string _campName , string _location, string _ContactDetails )
    onlyOwner
    public
  {
    noDist +=1;
    coutDistmap[noUser] = _userAddr;
    dist[_userAddr].name = _campName;
    dist[_userAddr].contactDetail = _ContactDetails;
    dist[_userAddr].location = _location;
    dist[_userAddr].state = true;
  }

  function addUser( bytes32 _userAddr , string _name , string _location, string _ContactDetails )
    isDist
    public
  {
    noUser +=1;
    coutUsermap[noUser] = _userAddr;
    user[_userAddr].name = _name;
    user[_userAddr].contactDetail = _ContactDetails;
    user[_userAddr].location = _location;
    user[_userAddr].state = true;
  }

  function addItem( string _item , string _itemDesc , bool _isCentral )
    onlyOwner
    public
  {
    noItems +=1;
    item[noItems].itemName = _item;
    item[noItems].itemDescription = _itemDesc;
    item[noItems].state = true;
    item[noItems].isCentral = _isCentral;
  }

  function removeUser( bytes32 _uid)
    onlyOwner
    public
  {
    user[_uid].state = false;
  }

  function mintItemAdmin ( uint256 _itemid , uint256 _distid , uint256 qty )
    onlyOwner
    isCentralItem(_itemid)
    public
  {
    balanceDist[coutDistmap[_distid]][_itemid] = qty;
  }

  function mintItemDist ( uint256 _itemid , uint256 qty )
    isDist
    isnonCentralItem(_itemid)
    public
  {
    balanceDist[msg.sender][_itemid] = qty;
  }

  function transfer ( uint256 _itemid , uint256 qty, uint256 userID )
    isDist
    isUser(coutUsermap[userID])
    public
  {
    balanceDist[msg.sender][_itemid] = balanceDist[msg.sender][_itemid].sub(qty);
    balanceUser[coutUsermap[userID]][_itemid] = balanceUser[coutUsermap[userID]][_itemid].add(qty);
  }


}
