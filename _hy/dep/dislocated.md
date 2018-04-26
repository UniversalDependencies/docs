---
layout: relation
title:  'dislocated'
shortdef : 'dislocated elements'
---
The dislocated relation is used for elements that have been displaced from its regular syntactic position, often to the front or back of
the clause it resides within or of the whole sentence. This applies often to an argument of a clause that has been moved to the periphery
for topic, focus, or similar types of effects. However, this relation is also used generally for topic elements that otherwise do not fulfill
any core grammatical relation of a sentence. These elements may be separated off with a comma intonation.
The dislocated elements attach to the same governor as the dependent that they double for. Right dislocated elements are frequent in
spoken languages.
~~~ sdparse
Դա էլ հենց վատ է, որ ընտանիքներով են եկել : \n That is just bad, that they have come with families .
dislocated(վատ, Դա)
dislocated(bad, That)
csubj(եկել, վատ)
csubj(come, bad)
~~~
Note that the dislocated relation is also used for "fronted" apposition, which is not usual for Armenian, as in traditional grammar it is
always described as a postposed construction:
~~~
Նրանց՝ ծերերին ու երեխաներին փրկեք առաջինը ։ \n Them elderly and children save first .
obj(փրկեք, Նրանց)
appos(ծերերին, Նրանց)
appos(elderly, Them)
conj(երեխաներին,ծերերին)
~~~
Ծերերին ու երեխաներին, նրանց փրկեք առաջինը ։ \n Elderly and and children save them first .
obj(փրկեք, նրանց)
dilocated(փրկեք, Ծերերին)
dilocated(save, Elderly)
conj(երեխաներին, Ծերերին)
conj(children, Elderly)
~~~
