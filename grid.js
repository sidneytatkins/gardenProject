
// GRID
class Grid
{
    // define constructor with default values,
    // use set methods to initialize variables
    constructor(m = 1, n = 1)
    {
        this.set_m(m);
        this.set_n(n);
        this.set_grid(m, n);
    }

    // get methods
    get_m() { return this.m; }
    get_n() { return this.n; }

    // set m to legal value
    set_m(m = 1)
    {
        if (m > 0) 
        {
            this.m = m;
        } 
        else
        {
            this.m = 1;
        }
    }

    // set n to legal value
    set_n(n = 1) 
    {
        if (n > 0)
        {
            this.n = n;
        } 
        else 
        {
            this.n = 1;
        }
    }

    // create grid with all entries empty
    set_grid(m = 1, n = 1)
    {
        this.grid = [];
        for (let i = 0; i < this.m; i++) 
        {
            this.grid.push(new Array(this.n).fill('empty'));
        }
    }

    // add object to grid
    add(x, y, length, width, name)
    {
        // check if the coordinates are within the grid
        if (x >= 0 && x < this.m && y >= 0 && y < this.n)
        {
            // check if the cell is empty
            if (this.grid[x][y] === 'empty') 
            {
                // verify that placing the object at the specified coordinates will not go beyond the grid bounds
                if (x + length <= this.m && y + width <= this.n)
                {
                    // place the object in the grid
                    for (let i = x; i < x + length; i++)
                    {
                        for (let j = y; j < y + width; j++) 
                        {
                            this.grid[i][j] = name;
                        }
                    }
                    console.log("Object placed successfully.");
                } 
                else
                {
                    console.log("Object dimensions exceed grid bounds.");
                }
            }
            else
            {
                console.log("Cell is already occupied.");
            }
        } 
        else
        {
            console.log("Coordinates are outside the grid.");
        }
    }
    
    // remove object from grid
    remove(x, y)
    {
        // check if the coordinates are within the grid
        if (x < 0 || x >= this.grid.length || y < 0 || y >= this.grid[0].length)
        {
            console.log('Invalid coordinates!');
            return false;
        }
        // indentify object to remove
        const itemToRemove = this.grid[x][y];
        // if coordinates point to an empty cell
        if (itemToRemove === 'empty')
        {
            console.log('No item to remove at the given coordinates!');
            return false;
        }
        // iterate through the matrix and remove the object
        for (let i = 0; i < this.grid.length; i++)
        {
            for (let j = 0; j < this.grid[i].length; j++)
            {
                if (this.grid[i][j] == itemToRemove)
                {
                    this.grid[i][j] = 'empty';
                }
            }
        }
    }

    // print matrix
    printGrid() 
    {
        console.log("Grid:");
        for (let i = 0; i < this.m; i++)
        {
            console.log(this.grid[i].join("\t"));
        }
    }
}

// export Grid class
export default Grid;

// create Grid
const grid_test = new Grid(5, 5);

// print Grid
grid_test.printGrid();

// place object
grid_test.add(0, 0, 2, 2, 'test');

// print Grid
grid_test.printGrid();

// remove object
grid_test.remove(0, 0);

// print Grid
grid_test.printGrid();