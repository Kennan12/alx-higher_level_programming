#!/usr/bin/node

class Rectangle
{
	costructor (w, h)
	{
		if (w > 0 && h > 0)
		{
		this.width = w;
		this.height = h;
		}
	}
}

module.exports = Rectangle;
