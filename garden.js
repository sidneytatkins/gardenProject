// GARDEN
// parent object of Building, Landscape, & Plant
class Garden
{
    // define constructor with default values,
    // use set methods to initialize variables
    constructor(length = 1, width = 1, name = 'untitled', price = 1)
    {
        this.set_length(length);
        this.set_width(width);
        this.set_name(name);
        this.set_price(price);
    }

    // get methods
    get_length() { return this.length; }
    get_width() { return this.width; }
    get_name() { return this.name; }
    get_price() { return this.price; }

    // set length value
    set_length(length = 1)
    {
        if (length >= 1)
        {
            this.length = length;
        }
        else
        {
            this.length = 1;
        }
    }

    // set width value
    set_width(width = 1)
    {
        if (width >= 1)
        {
            this.width = width;
        }
        else
        {
            this.width = 1;
        }
    }

    // set name
    set_name(name = 'untitled')
    {
        this.name = name;
    }

    // set price with non-negative integer
    set_price(price = 1)
    {
        if (price >= 0)
        {
            this.price = price;
        }
        else
        {
            this.price = 0;
        }
    }

    // print Garden variables
    print() 
    {
        console.log(`Garden Name: ${this.get_name()}`);
        console.log(`Dimensions: ${this.get_length()} x ${this.get_width()}`);
        console.log(`Price: $${this.get_price()}`);
    }
}

// BUILDING
class Building extends Garden
{
    // define constructor with default values,
    // use set methods to initialize variables
    constructor(length = 1, width = 1, name = 'untitled', price = 1, upgrade_stages = 1, upgrade_cost = 1, paint = 'white', paint_cost = 1)
    {
        super(length, width, name, price);
        this.set_upgrade_stages(upgrade_stages);
        this.set_upgrade_cost(upgrade_cost);
        this.set_paint(paint);
        this.set_paint_cost(paint_cost);
    }

    // get methods
    get_upgrade_stages() { return this.upgrade_stages; }
    get_upgrade_cost() { return this.upgrade_cost; }
    get_paint() { return this.paint; }
    get_paint_cost() { return this.paint_cost; }

    // set upgrade stages value
    set_upgrade_stages(upgrade_stages = 1)
    {
        if (upgrade_stages >= 1)
        {
            this.upgrade_stages = upgrade_stages;
        }
        else
        {
            this.upgrade_stages = 1;
        }
    }

    // set upgrade cost with non-negative integer
    set_upgrade_cost(upgrade_cost = 1)
    {
        if (upgrade_cost >= 0)
        {
            this.upgrade_cost = upgrade_cost;
        }
        else
        {
            this.upgrade_cost = 0;
        }
    }

    // set paint with available colors
    set_paint(paint = 'white')
    {
        const colors = ['white', 'red', 'blue', 'yellow'];
        if (colors.includes(paint))
        {
            this.paint = paint;
        }
        else
        {
            this.paint = 'white';
        }
    }

    // set paint cost with non-negative integer
    set_paint_cost(paint_cost = 1)
    {
        if (paint_cost >= 0)
        {
            this.paint_cost = paint_cost;
        }
        else
        {
            this.paint_cost = 0;
        }
    }

    // print Building variables
    print() 
    {
        console.log(`Building Name: ${this.get_name()}`);
        console.log(`Dimensions: ${this.get_length()} x ${this.get_width()}`);
        console.log(`Price: $${this.get_price()}`);
        console.log(`Upgrade Cost: $${this.get_upgrade_cost()}`);
        console.log(`Upgrade Stages: ${this.get_upgrade_stages()}`);
        console.log(`Paint: ${this.get_paint()}`);
        console.log(`Paint Cost: $${this.get_paint_cost()}`);
    }
}

// PLANT
class Plant extends Garden
{
    // define constructor with default values,
    // use set methods to initialize variables
    constructor(length = 1, width = 1, name = 'untitled', price = 1, growth_rate = 1, growth_stages = 1)
    {
        super(length, width, name, price);
        this.set_growth_rate(growth_rate);
        this.set_growth_stage(growth_stages);
    }

    // get methods
    get_growth_rate() { return this.growth_rate; }
    get_growth_stages() { return this.growth_stages; }

    // set growth rate value
    set_growth_rate(growth_rate = 1)
    {
        if (growth_rate >= 1)
        {
            this.growth_rate = growth_rate;
        }
        else
        {
            this.growth_rate = 1;
        }
    }

    // set growth stages value
    set_growth_stage(growth_stages = 1)
    {
        if (growth_stages >= 1)
        {
            this.growth_stages = growth_stages;
        }
        else
        {
            this.growth_stages = 1;
        }
    }

    // print Plant variables
    print()
    {
        console.log(`Plant Name: ${this.get_name()}`);
        console.log(`Dimensions: ${this.get_length()} x ${this.get_width()}`);
        console.log(`Price: $${this.get_price()}`);
        console.log(`Growth Rate: ${this.get_growth_rate()}`);
        console.log(`Growth Stages: ${this.get_growth_stages()}`);
    }
}

// // create Garden
// const garden_test = new Garden(1, 1, 'Rock', 7);

// // print Garden
// garden_test.print();

// // create Building
// const building_test = new Building(3, 3, 'House', 100, 1, 10, 'red', 5);

// // print Building
// building_test.print();

// // create Plant
// const plant_test = new Plant(1, 1, 'Rose', 3, 1, 3);

// // print Plant
// plant_test.print();

// const garden = new Garden(1, 1, 'Rock', 7);
// const gardenJson = JSON.stringify(garden);
// localStorage.setItem('garden', gardenJson);

// const gardenJson2 = localStorage.getItem('garden');
// console.log(gardenJson2);
// const garden2 = JSON.parse(gardenJson2);
// console.log(garden2);
// JavaScript
// JavaScript
// server.js


