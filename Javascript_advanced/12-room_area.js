const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function() {
        return this.width * this.length;
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

console.log(roomDimensions); // Output the roomDimensions object
console.log(boundGetArea()); // Output the surface area using the bound getArea function
