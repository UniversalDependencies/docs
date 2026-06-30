---
layout: relation
title: 'discourse:enunc'
shortdef: 'enunciative particle'
udver: '2'
---

Gascon varieties of Modern Occitan have enunciative particles which signal the modality of the sentence or clause. They are obligatory (although they can be elided in some phonetic contexts), they have a fixed position in the clause (before the main predicate, but after the subject if the subject is realized), and they can only be separated from the predicate by clitics. 
Most frequent ones include: 

- *que* (declarative, assertive)
- *ja* (declarative, assertive, underlines the certainty)
- *e* (interrogative)
- *be* (exclamative)

In Old Gascon, we see the emergence of the declarative particle *que*.
In the Old Gascon corpus **UD_Old_Occitan-CorAG** `discourse:enunc` is used to attach these particles to the predicate of the clause they belong to.

Some examples from **UD_Occitan-CorAG**:

~~~ sdparse
e-l judgament que deu ester feit e complid ses tot tens ades \n and the judgment has to be made and completed without delay then
discourse:enunc(deu, que)
~~~

~~~ sdparse
E que-ls dam per for que totz ans se cabien judges em-Banheres\n And we give them as a law that every year judges should change in Banières
discourse:enunc(dam, que)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:04 CEST -->
