---
layout: relation
title:  'obl:prep'
shortdef : 'prepositional pronouns'
udver: '2'
---

The subtype `obl:prep`, is used for prepositional pronouns (conjugated prepositions), in Old Irish treebanks.

### Justification

Use of this subtype in Old Irish treebanks follows the pattern set by Modern Irish treebanks which, like the Old Irish ones, treat prepositional pronouns like discreet lexical words. In this regard both Old and Modern Irish treebanks adhere to Professor Stifter's assertion that by the Old Irish period such conjugated prepositions had already "merged into a single unsegmentable form" (p. 295), and hence "the preposition in question is 'conjugated,' comparable to the way verbs are inflected" (p. 87). As such, conjugated prepositions are treated as nominal modifiers in Old Irish rather than prepositional modifiers.

It is noteworthy that this same grammatical feature also occurs in both Scottish and Manx Gaelic, languages which are closely related to Modern Irish, all having ultimately developed from Old Irish. Treebanks for these languages, however, do not follow the Irish model for tokenising prepositional pronouns, and instead treat them as orthographic compound-words comprised of a preposition and a pronoun.

### Examples
_dom_ "to me"; _limm_ "with me"; _lat_ "with you"

_is huasneurt <b>dom</b>_ "It is beyond <b>my</b> strength"
 
~~~ sdparse
is huas neurt dom \n it_is above strength to_me
obl:prep(neurt, dom)
~~~

_is machdad <b>limm</b>_ "it is a wonder <b>to me</b>"

~~~ sdparse
is machdad limm \n it_is a_wonder with_me
obl:prep(machdad, limm)
~~~

_nib machdad <b>lat</b>_ "let it not be a wonder <b>to you</b>"

~~~ sdparse
ni b machdad lat \n not that_it_be a_wonder with_you
obl:prep(machdad, lat)
~~~
