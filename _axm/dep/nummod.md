---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

A numeric modifier of a noun is any [number](NUM) phrase that serves to modify the meaning of the noun with a quantity.

~~~ sdparse
երեք հետ \n erek’ het \n three times
nummod(հետ, երեք)
nummod(times, three)
~~~

~~~ sdparse
ԳՃ. (=300) դեկան պերպեռատ \n GČ̣. dekan perpeṙat \n 300 Decans [coins] of Perperat [gold]
nummod(դեկան, ԳՃ.)
nummod(Decans, 300)
~~~

Note that indefinite quantifiers such as _մի, մի այլ_/_mi, mi ayl_ “a (one), another” are tagged [DET]() rather than [NUM](). Therefore their relation to the quantified noun is not `nummod` but [det]():

~~~ sdparse
ազգ մի այլ \n azg mi ayl \n another type
det(ազգ, մի)
det(type, another)
~~~

## Additional remarks

Note that two numeral words are joined using the [flat]() relation.
Also note that intensifiers are attached to the head of the phrase and not to the number.
This is in accord with the UD guidelines.

Similarly there may be other nodes (such as punctuation) that are attached to the head of the phrase
and they are related to the whole phrase rather than directly to the head noun:

~~~ sdparse
( 9 օր ) \n ( 9 days )
punct(օր, (-1)
nummod(օր, 9-2)
punct(օր, )-4)
punct(days, (-6)
nummod(days, 9-7)
punct(days, )-9)
~~~

## Dates

Dates are annotated as follows: if present, the day is the head, the month is _nmod:poss_ and the year is _nummod_:

~~~ sdparse
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:18 CET -->
