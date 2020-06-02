pragma solidity >=0.4.25 <0.7.0;

contract UploadMusic {
	struct Music{
		string title;
		string data;
		string description;
		uint like;
		bool available;
	}
	mapping (uint => address) idToOwner;
	mapping (address => uint) musicCount;
	Music[] musicArray;

	// event Transfer(address indexed _from, address indexed _to, uint256 _value);

	function uploadMusic(string memory _title, string memory _data, string memory _description) public {
		uint id = musicArray.push(Music(_title, _data, _description, 0, true)) - 1;
		idToOwner[id] = msg.sender;
        musicCount[msg.sender]++;
		// emit Transfer(msg.sender, receiver, amount);
	}
	//mapping
	function musicOwner(uint _id) public view returns(address) {
		return idToOwner[_id];
	}
	function musicCount(address _address) public view returns(uint) {
		return musicCount[_address];
	}
	//get
	function getTitle(uint _id) public view returns(string memory) {
		return musicArray[_id].title;
	}
	function getMusic(uint _id) public view returns(string memory) {
		return musicArray[_id].data;
	}
	function getDescription(uint _id) public view returns(string memory) {
		return musicArray[_id].description;
	}
	//change
	function changeTitle (uint _id, string memory _newTitle) public {
		musicArray[_id].title = _newTitle;
	}
	function changeDescription (uint _id, string memory _newDescription) public {
		musicArray[_id].description = _newDescription;
	}
	function changeStatus (uint _id, uint _status) public {
		if (_status == 1) {musicArray[_id].available = true;}
		else if (_status == 0) {musicArray[_id].available = false;}
	}
	//like
	function thumbsUp (uint _id) public {
		musicArray[_id].like ++;
	}
	function totalLike(uint _id) public view returns(uint) {
		return musicArray[_id].like;
	}
}