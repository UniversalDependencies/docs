---
layout: relation
title: 'remnant'
shortdef: 'remnant in ellipsis'
---

The `remnant` relation is used to provide a treatment of ellipsis (in
the case of gapping and stripping, where a predicational or verbal
head gets elided). A `remnant` corresponds to a *correlate* in a preceding clause. 
The `remnant` relation connects each remnant to its correlate in the basic dependency representation. 

~~~ sdparse
Η Προοδευτική κέρδισε το Αιγάλεω , και ο Ιωνικός τη Δόξα . 
nsubj(κέρδισε, Προοδευτική)
dobj(κέρδισε, Αιγάλεω)
cc(κέρδισε, και)
remnant(Προοδευτική, Ιωνικός)
remnant(Αιγάλεω, Δόξα)
~~~

