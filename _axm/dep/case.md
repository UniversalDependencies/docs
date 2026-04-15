---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Middle Armenian uses a combination of inflected words (morphological cases) and adpositions to express semantic case. They are treated as dependents of the noun they attach to. The relation between the noun and the adposition is labeled `case`.

~~~ sdparse
ի/ADP կռիւ/NOUN[Case=Nom] \n in the-battle
case(կռիւ, ի)
case(the-battle, in)
~~~

Currently, we also use `case` for some other case-marking elements treated as separate syntactic words (derived from a closed set of nouns, adjectives/participles or adverbs). These elements (known as “adpositional words” in Armenian grammar) are 
treated as dependents of the noun or clause they attach to or introduce. They are tagged and annotated according to their basic use. In this case the [ExtPos]() feature is used, as the word is coerced into a part of speech different from its lexical one. 

~~~ sdparse
սիսռան/NOUN[Case=Dat] չաք/NOUN[Case=Nom|ExtPos=ADP] \n the size-of a chickpea
case(սիսռան, չաք)
case(chickpea, size-of)
~~~

~~~ sdparse
եփելու/VERB ատենն/NOUN[Case=Nom|ExtPos=ADP] \n during/at the time of cooking
case(եփելու, ատենն)
case(cooking, during)
~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:22 CET -->
