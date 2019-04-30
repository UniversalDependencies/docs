---
layout: relation
title: 'foreign'
shortdef: 'foreign words'
---

This label is no longer in use in V2 

There are a handful of instances of intra-sentential Irish/English code-mixing in the treebank. Where possible we analyse the sentential structure using the appropriate labels for the English words.
The foreign word now carried morphological information (Foreign=Yes) to identify this. 

### Example

_ar oscailt / <b>open</b> : Bealtaine - Meán Fómhair / <b>May - September</b>_  `open / open : May - September / May - September
'

~~~ sdparse
ar oscailt / open : Bealtaine - Meán Fómhair / May - September \n open / open : May - September / May - September
flat(oscailt,open)
flat(Meán, May)
flat(May,September)
~~~
