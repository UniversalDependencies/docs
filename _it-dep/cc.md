---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
---

A coordinating conjunction relation (cc) holds between the head conjunct of a coordinate structure (which is taken to be the first conjunct) and any of the coordinating conjunctions involved in the structure. This also includes the first element in paired conjunctions like sia … sia “both … and”. cc also marks the relation between a sentence initial coordinating conjunction and the sentence root. Note that punctuation is never treated as coordinating conjunction. For more on coordination, see the conj relation.

~~~ sdparse
Due bambini e quattro tecnici
cc(bambini, e)
~~~
~~~ sdparse
a il mare e su le strade
cc(mare, e)
~~~
~~~ sdparse
né auspicabile né fattibile
cc(auspicabile, né)
cc(auspicabile, né)
~~~
~~~ sdparse
Ma non è il caso di pensare
cc(caso, Ma)
~~~
