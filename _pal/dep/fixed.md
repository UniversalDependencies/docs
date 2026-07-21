---
layout: relation
title: 'fixed'
shortdef: '<shortdef>'
udver: '2'
---

The fixed relation is mainly used for denominal prepositions. Similar to German, where denominal adpositions govern the genitive, Middle Persian denominal prepositions require an *ezāfe* particle as if the complement noun was a nominal modifier, i.e. the original construction is preserved with a new reading.


- "amid the crowd" (constructed example)
~~~ sdparse
mayān ī grōh \n middle EZ crowd
case(grōh, mayān)
fixed(mayān, ī)
~~~
~~~ sdparse
mayān grōh \n middle crowd
case(grōh, mayān)
~~~

- "in the middle of the crowd" (constructed example)
~~~ sdparse
pad mayān ī grōh \n in middle EZ crowd
case(mayān, pad)
det(grōh, ī)
nmod(mayān, grōh)
~~~

The fixed relation is also employed when two words appear instead of one. In the following example, it would have sufficed to use *ka* 'when, if' but the scribe wrote *kū ka* as if *kū* is a general subordinator and *ka* specifies the semantic relation.

- "The body of humans feels such pain from being torn apart when the soul is residing in the body."
~~~ sdparse
tan ī mardōmān az darrišn dard ōwōn mārēd kū ka ruwān hamkadag ī tan \n body EZ humans from tearing pain such perceives that when soul inherent EZ body
fixed(kū, ka)
mark(hamkadag, kū)

Avestan quotations in Middle Persian are annotated as `flat` when they represent a more or less accidental sequence of Avestan words, e.g., referring to a specific text passage. If they represent a fixed expression, the relation is fixed.

- "The reservations is thus required that (one) knows that a dog has not seen the corpse, and that the size of the corpse is at least *nōit̰ maxši.bərətō*." <br>(A corpse has to be ritually treated, which includes its presentation to a dog, who scares away the demon of death. The expression *nōit̰ maxši.bərətō* lit. 'not carried by a fly' is a technical term for the smallest unit relevant for a purification ritual of dead matter.)
~~~ sdparse
handāzīh ōh abāyēd kū dānēnd kū sag nē dīd nasā paymānag hambuniz , nōit̰ maxšibərətō , \n restriction thus is_necessary that know.3PL that dog not saw corpse measure definitely , nōit̰ maxšibərətō ,
nsubj(nōit̰, paymānag)
nmod(paymānag, nasā)
advmod(nōit̰, hambuniz)
punct(nōit̰, ,-13)
punct(nōit̰, ,-16)
fixed(nōit̰, maxšibərətō)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:08 CEST -->
