---
layout: relation
title: 'nummod'
shortdef: 'numeric modifier'
udver: '2'
---

This label is used for number modifiers, counting the modified nouns. Note that for numbers taking a preposition ⲛ, the preposition is attached via the case label to the counted noun, but the article (and any further prepositions preceding the article) are attached to the nominal head as well, as shown below.

~~~ sdparse 
ϩⲙ/ADP ⲡⲉ/DET ϩⲙⲉ/NUM ⲛ/ADP ϩⲟⲟⲩ/NOUN \n in the forty days

case(ϩⲟⲟⲩ, ϩⲙ)
det(ϩⲟⲟⲩ, ⲡⲉ)
nummod(ϩⲟⲟⲩ, ϩⲙⲉ)
case(ϩⲟⲟⲩ, ⲛ)
~~~

For the number ⲥⲛⲁⲩ ‘two’, which follows the counted noun, the noun is still the head, i.e. the dependency arrow points forward from the noun to the number.

For annotating complex numbers, the right-most part of the number is the head of the other number parts with the label `compound`, and the case marker 'ⲛ' is attached to each part individually. 


~~~ sdparse 
ⲙⲛ/PREP ⲙⲏⲧ/NUM ⲛ/PREP ϣⲉ/NUM ⲛ/PREP  ϭⲁⲙⲟⲩⲗ/N \n and ten hundred camels

cc(ϭⲁⲙⲟⲩⲗ, ⲙⲛ)
nummod(ϭⲁⲙⲟⲩⲗ, ϣⲉ)
compound(ϣⲉ, ⲙⲏⲧ)
case(ϣⲉ, ⲛ)

~~~
<!-- Interlanguage links updated Út zář 29 18:41:30 CEST 2020 -->
