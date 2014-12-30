---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
---

The `dislocated` relation is used for fronted or postposed elements
that do not fulfill the usual core grammatical relations of a
sentence, especially in sentences from transcribed speech. 
The dislocated element attaches to the head of the clause to which they belong:


~~~ sdparse
Το ποδήλατο , πάντα της έλεγα ότι θέλει καινούρια λάστιχα . \n The bicycle , I always told her that it needs new tyres .
dislocated(θέλει, ποδήλατο)
dobj(θέλει, λάστιχα)
ccomp(έλεγα, θέλει)
~~~
