class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0 ; i < this.items.length ; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {

        let roomItem = this.currentRoom.getItemByName(itemName);
        this.items.push(roomItem);
        
        this.currentRoom.items.forEach((item, i) => {
            if (item.name === itemName) {
                this.currentRoom.items.splice(i, 1);
                return;
            }
        });
    }

    dropItem(itemName) {

        // Fill this in
    }

    eatItem(itemName) {
        // Fill this in

    }

    getItemByName(name) {

        let playerItem;
        
        this.items.forEach(item => {
            if (item.name === name) {
                playerItem = item;
            }
        });
        
        return playerItem;
    }
}

module.exports = {
  Player,
};
