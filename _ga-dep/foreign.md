---
layout: relation
title: 'foreign'
shortdef: 'foreign words'
---

There are a handful of instances of intra-sentential Irish/English code-mixing in the treebank. Where possible we analyse the sentential structure using the appropriate labels for the English words. We only use the `foreign` relation
when we want to explicitly mark the English words as foreign, e.g. the title of an English film in quotation marks, an example of an Irish-English dictionary entry within a sentence, or an Irish-English sign (see example below). When the `foreign` label is used, the sequence of words is given a linear analysis with the first word as the head.

### Example

_ar oscailt / <b>open</b> : Bealtaine - Meán Fómhair / <b>May - September</b>_  `open / open : May - September / May - September
'

~~~ sdparse
ar oscailt / open : Bealtaine - Meán Fómhair / May - September \n open / open : May - September / May - September
foreign(oscailt,open)
foreign(Bealtaine,May)
foreign(May,September)
~~~
