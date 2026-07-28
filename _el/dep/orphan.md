---
layout: relation
title: 'orphan'
shortdef: 'orphan-to-orphan relation in gapping'
udver: '2'
---

The heads of a phrase are often omitted, particularly in the oral colloquial speech. This phenomenon is referred to as ellipsis. The orphan relation is used to provide a treatment of ellipsis. 


In the case of gapping and stripping, where a predicational or verbal head is elided, an orphan relation corresponds to a correlate in a preceding clause. The orphan relation connects each remnant to its correlate in the basic dependency representation.


~~~ sdparse
Η Προοδευτική κέρδισε το Αιγάλεω , και ο Ιωνικός τη Δόξα .
nsubj(κέρδισε, Προοδευτική)
dobj(κέρδισε, Αιγάλεω)
cc(κέρδισε, και)
remnant(Προοδευτική, Ιωνικός)
remnant(Αιγάλεω, Δόξα)
~~~


When a head of a phrase is omitted, another element is promoted as the head of the sentence.
We use the special relation orphan to connect the non-promoted dependents with the promoted dependent, e.g., Έβγαινε η γλώσσα δυο πιθαμές σαν του σκύλου μας “The tongue was hanging out two inches, just like our dog’s.”

~~~sdparse~~~
Έβγαινε η γλώσσα δυο πιθαμές σαν του σκύλου μας
obl(έβγαινε, σκύλου)
orphan(σκύλου, σαν)
~~~


Σ το πιάτο της φακή και σ του άντρα της λαγός “On her plate was lentils, and on her husband's, hare.”
~~~sdparse~~~
Σ το πιάτο της φακή και σ του άντρα της λαγός
root(ROOT, πιάτο)
nsubj(φακή, πιάτο)
conj(πιάτο, άντρα)
orphan(άντρα, σ)
nsubj(άντρα, λαγός)
~~~

-----------------
**Cretan**

In the case of the omission of the verb in a sentence introducing direct speech, a phenomenon common in oral language, the subject is promoted as the head of the main clause. The direct speech functions as a [ccomp]().

Κι εγώ:« Ε, κερά, να μου μάθετε τσι γητειές;». "And I gο: 'Hey, madam, can you teach me the spells?”
~~~sdparse~~~
Κι εγώ:« Ε, κερά, να μου μάθετε τσι γητειές;».
root(ROOT, εγώ)
ccomp(εγώ, μάθετε)
~~~
----------------
<!-- Interlanguage links updated Út 30. června 2026, 11:00:37 CEST -->
