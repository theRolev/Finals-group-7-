pragma solidity >=0.4.25 <0.7.0;

contract UploadMusic {
	struct Music{
		string title;
		string data;
		string albumArt;
		string description;
		uint like;
	}
	mapping (uint => address) idToOwner;
	mapping (address => uint) musicCount;
	Music[] musicArray;

	function uploadMusic(string memory _title, string memory _data, string memory _albumArt, string memory _description) public {
		uint id = musicArray.push(Music(_title, _data, _albumArt, _description, 0)) - 1;
		idToOwner[id] = msg.sender;
        musicCount[msg.sender]++;
	}
	function getMusicByOwner(address _owner) external view returns(uint[] memory) {
		uint[] memory result = new uint[](musicCount[_owner]);
		uint counter = 0;
		for (uint i = 0; i < musicArray.length; i++) {
			if (idToOwner[i] == _owner) {
				result[counter] = i;
				counter++;
			}
		}
		return result;
	}
	//mapping
	// function musicOwner(uint _id) public view returns(address) {
	// 	return idToOwner[_id];
	// }
	// function musicCount(address _address) public view returns(uint) {
	// 	return musicCount[_address];
	// }

	//get
	function getTitle(uint _id) public view returns(string memory) {
		return musicArray[_id].title;
	}
	function getMusic(uint _id) public view returns(string memory) {
		return musicArray[_id].data;
	}
	function getAlbumArt(uint _id) public view returns(string memory) {
		return musicArray[_id].albumArt;
	}
	function getDescription(uint _id) public view returns(string memory) {
		return musicArray[_id].description;
	}
	//change
	function changeTitle (uint _id, string memory _newTitle) public {
		musicArray[_id].title = _newTitle;
	}
	function changeAlbumArt (uint _id, string memory _newAlbumArt) public {
		musicArray[_id].albumArt = _newAlbumArt;
	}
	function changeDescription (uint _id, string memory _newDescription) public {
		musicArray[_id].description = _newDescription;
	}
	//like
	function thumbsUp (uint _id) public {
		musicArray[_id].like ++;
	}
	function totalLike(uint _id) public view returns(uint) {
		return musicArray[_id].like;
	}
}
