# CircuitJS1

This repository is a fork of [sharpie7/circuitjs1](https://github.com/sharpie7/circuitjs1).


## Introduction

CircuitJS1 is an electronic circuit simulator that runs in the browser. It was originally written by Paul Falstad as a Java Applet. It was adapted by Iain Sharp to run in the browser using GWT.

For a hosted version of the application see:

* Paul's Page: [http://www.falstad.com/circuit/](http://www.falstad.com/circuit/)
* Iain's Page: [http://lushprojects.com/circuitjs/](http://lushprojects.com/circuitjs/)
* [https://ggeorgovassilis.github.io/circuitjs1/circuitjs.html](https://ggeorgovassilis.github.io/circuitjs1/circuitjs.html) which is a fork and not identical to the previous two

Thanks to Edward Calver for 15 new components and other improvements. Thanks to Rodrigo Hausen for file import/export and many other UI improvements. Thanks to J. Mike Rollins for the Zener diode code. Thanks to Julius Schmidt for the spark gap code and some examples. Thanks to Dustin Soodak for help with the user interface improvements. Thanks to Jacob Calvert for the T Flip Flop. 

## Building and running the web application

The tools you will need to build the project are:

* A Java SDK 1.8 or later
* The git command line client (optional)
* [Apache Maven](https://maven.apache.org/)

Either download this repository or clone with git:

`git clone https://github.com/ggeorgovassilis/circuitjs1`

and then 

```
cd circuitjs1
mvn install
```

Then open the file `/circuitjs1/target/site/circuitjs.html` with a web browser.

## Further reading

For other options like modifications please refer to the original project [sharpie7/circuitjs1](https://github.com/sharpie7/circuitjs1).

## License

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
