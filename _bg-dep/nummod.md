---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
---

This document is a placeholder for the language-specific documentation
for `nummod`.

A numeric modifier of a noun is any [number](u-pos/NUM) phrase
that serves to modify the meaning of the noun with a quantity.


~~~ sdparse
Къщата ни беше на два етажа . \n House-the our was at two floors  .
nummod(етажа, два)
nummod(floors, two)
~~~

~~~ sdparse
Бензинът поевтинява средно с десет стотинки . \n Petrol-the gets-cheap average with deset stotinki  .
nummod(стотинки, десет)
nummod(stotinki, deset)
~~~

Note that indefinite quantifiers such as _few, many_ are tagged
[u-pos/DET]() rather than [u-pos/NUM](). 
Therefore their relation to the quantified noun is not `nummod` but
[det]():

~~~ sdparse
Ако бях поет , аз бих написал много стихове . \n If was-I poet , I would written many poems  .
det(стихове, много)
det(poems, many)
~~~

