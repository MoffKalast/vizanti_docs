# <img src="assets/grid.svg" width="34"/> Grid

**Item #:** VZ-614

**Object Class:** Safe

## Special Containment Procedures

VZ-914 is to remain anchored to a TF frame at all times. Operation is performed through the selection dial ("Autoscale") on the setup panel, which has five positions. Any researchers modifying VZ-614 are to be accompanied by at least one PhD for the entirety of testing. 

> **WARNING:** Applying the **Off** setting and then zooming out past the containment threshold is not advised. See Addendum VZ-914-A.

## Description

VZ-914 renders a metric grid across the view and, on demand, "refines" the grid step to a cleaner value. No cell size is truly lost in the process; the dial merely selects how aggressively the step is recomputed as the view is zoomed. The dial positions, in order of increasing line density:

- **Off** - no refinement. The grid holds the fixed **Step (meter)** value you set, exactly like RViz.
- **Rough** - coarsest refinement, few lines on screen.
- **Coarse** - the default position for newly instantiated units.
- **Fine** - denser.
- **Very Fine** - densest, snapping the step to clean 1/2/5 × 10ⁿ values on every zoom.

In any refined position the manual Step value is disregarded, and a small scale bar materializes in the bottom-right corner reporting the current cell size. This scale bar is present only while the dial is off the **Off** position.

- **Step (meter)** - cell size, consulted only in the **Off** position
- **Line thickness (px)** and **Color**
- **Number of subcells per cell** - subdivides each cell, with its own subdivision color

## Addendum VZ-914-A: Test Log

**Input:** 1 moderatly zoomed scene (setting: Rough)

**Output:** Pile of lines of various lengths, appearing to be drawn by canvas.

<br>

**Input:** Grid at 1 m step size, view zoomed to street level (setting: Off)

**Output:** Clean 1 m grid, nominal.

<br>

**Input:** Scene zoomed out to orbital altitude (setting: Off) 

**Output:** Line count exceeds safe limits. Unit first sheds its subdivisions to compensate; when this proves insufficient it clears the canvas entirely and displays [DATA EXPUNGED].

<br>

**Input:** Operator zooms freely (setting: Coarse) 

**Output:** Step self-selects to remain legible at every zoom level; scale bar reports each new cell size. No operator intervention required.

## For the uninitated

[SCP-914](https://scp-wiki.wikidot.com/scp-914)

