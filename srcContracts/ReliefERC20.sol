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
    bool isDist;
    bool state;
  }

  struct itemDetail{
    string itemName;
    string itemDescription;
    bool state;
  }

  uint256 noItems;
  uint256 noDist;
  uint256 noUser;

  mapping (uint256 => address ) public coutUsermap;
  mapping (uint256 => address ) public coutDistmap;
  mapping (address => userDetail ) public user;

  mapping ( uint256 => itemDetail ) public item;
  mapping ( address => mapping( uint256 => uint256 ) ) public balance;

  modifier isUser( address _userAddr){
    require(user[_userAddr].state == true );
    _;
  }

  modifier isDist( ){
    require( (user[msg.sender].isDist == true) && (user[msg.sender].state == true) );
    _;
  }
  modifier isValidTransfe( uint256 itemID , uint256 qty ) {
    require( balance[msg.sender][itemID] >= qty );
    _;
  }


  function addCamp( address _userAddr , string _campName , string _location, string _ContactDetails )
    onlyOwner
    public
  {
    noDist +=1;
    coutDistmap[noUser] = _userAddr;
    user[_userAddr].name = _campName;
    user[_userAddr].contactDetail = _ContactDetails;
    user[_userAddr].location = _location;
    user[_userAddr].isDist = true;
    user[_userAddr].state = true;
  }

  function addUser( address _userAddr , string _name , string _location, string _ContactDetails )
    isDist
    public
  {
    noUser +=1;
    coutUsermap[noUser] = _userAddr;
    user[_userAddr].name = _name;
    user[_userAddr].contactDetail = _ContactDetails;
    user[_userAddr].location = _location;
    user[_userAddr].isDist = false;
    user[_userAddr].state = true;
  }

  function addItem( string _item , string _itemDesc )
    onlyOwner
    public
  {
    noItems +=1;
    item[noItems].itemName = _item;
    item[noItems].itemDescription = _itemDesc;
    item[noItems].state = true;
  }

  function mintItemAdmin ( uint256 _itemid , uint256 _distid , uint256 qty )
    onlyOwner
    public
  {
    balance[coutDistmap[_distid]][_itemid] = qty;
  }

  function mintItemDist ( uint256 _itemid , uint256 qty )
    isDist
    public
  {
    balance[msg.sender][_itemid] = qty;
  }

  function transfer ( uint256 _itemid , uint256 qty, uint256 userID )
    isDist
    isUser(coutUsermap[userID])
    public
  {
    balance[msg.sender][_itemid] = balance[msg.sender][_itemid].sub(qty);
    balance[coutUsermap[userID]][_itemid] = balance[coutUsermap[userID]][_itemid].add(qty);
  }


}
