pragma solidity 0.4.24;

contract CarRecord {

    address owner;
    uint index;

    struct Car {
        string brand;
        int year;
        string color;
        string license;
    }

    struct Event {
        Date date;
        string eventtype;
        int mileage;
        string desc;
        string maker;

    }

    struct Date {
        int day;
        int month;
        int year;
    }

    constructor  () public payable {
        owner = msg.sender;
        isadmin[owner] = true;
    }

    //modifier for the functions that need to be accessed only by the owner
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    modifier onlyAdmin() {
        require(isadmin[msg.sender] == true);
        _;
    }

    mapping(string => Car) theCars;//each VIN has a car struct
    mapping(uint => string)vincar;//index that returns the VIN of the car
    mapping(string => uint)indexcar;//VIN that has the value the index position
    mapping(address => bool)isadmin;//keeps track if an address is an admin or not
    mapping(string => address)adminaddress;//each admin name has a corresponding address
    mapping(address => string)adminname;//each admin has a corresponding name
    mapping(uint => Event[])events;//for each car's index there is an array of events corresponding to said car
    mapping(string => bool)carregistered;//keeps track if a car is registered

    //checks if an address is the owner of the contract
    function checkIfOwner(address _addr) public view returns (bool) {
        return _addr == owner;
    }

    //checks if an address is a registered admin
    function checkIfAdmin(address _addr) public view returns (bool){
        return isadmin[_addr] == true;
    }

    //checks if a name has an admin address
    function checkAdmin(string memory _name) public view returns (bool) {
        address addr = adminaddress[_name];
        return isadmin[addr] == true;
    }

    //registers an address and name as admin
    function addAdmin(address _addr, string memory _name) public onlyOwner {
        require(isadmin[adminaddress[_name]] == false);
        isadmin[_addr] = true;
        adminname[_addr] = _name;
        adminaddress[_name] = _addr;

    }

    //removes an address as admin
    function removeAdmin(string memory _name) public onlyOwner {
        require(isadmin[adminaddress[_name]] == true);
        isadmin[adminaddress[_name]] = false;
    }

    //adds a car to the contract
    function addCar(string _VIN, string _brand, int _year, string _color, string _license) public {
        require(carregistered[_VIN] == false, "Car Already Registered");
        Car memory car = Car(_brand, _year, _color, _license);
        theCars[_VIN] = car;
        indexcar[_VIN] = index;
        carregistered[_VIN] = true;
        index++;
    }

    //registers an event of a car
    function addEvent(string memory _VIN, int _day, int _month, int _year, string memory _eventtype, int _mileage, string memory _desc) public onlyAdmin {
        require(carregistered[_VIN] == true, "Invalid Car");
        uint indexnew = indexcar[_VIN];
        string memory name = adminname[msg.sender];
        Date memory newdate = Date(_day, _month, _year);
        Event memory newevent = Event(newdate, _eventtype, _mileage, _desc, name);
        events[indexnew].push(newevent);

    }

    //returns information regarding a car
    function getCar(string memory _VIN) public view returns (string memory, int, string memory, string memory){
        Car memory car = theCars[_VIN];
        return (car.brand, car.year, car.color, car.license);
    }

    //returns information of an event at a certain index
    function getEvent(string memory _VIN, uint _index) public view returns (int, int, int, string memory, int, string memory, string memory){
        uint indexnew = indexcar[_VIN];
        return (events[indexnew][_index].date.day, events[indexnew][_index].date.month, events[indexnew][_index].date.year, events[indexnew][_index].eventtype, events[indexnew][_index].mileage, events[indexnew][_index].desc, events[indexnew][_index].maker);

    }

    //gets the cnumber of the vents of a car
    function getEventsCount(string memory _VIN) public view returns (uint) {
        uint indexnew = indexcar[_VIN];
        return events[indexnew].length;
    }

    //changes basic inf of a car
    function changeCarInfo(string memory _VIN, string memory _color, string memory _license) public onlyAdmin {
        require(carregistered[_VIN] == true);
        theCars[_VIN].color = _color;
        theCars[_VIN].license = _license;
    }


}


