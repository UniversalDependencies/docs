---
layout: relation
title: 'nmod:float'
shortdef: 'nominal modifier as a floating quantifier'
udver: '2'
---

The East Slavic floating quantifiers _весь_ 'all', _каждый_ 'every', _одинъ_ 'only; alone', _оба_ 'both', _самъ_ 'oneself' etc. are called “floating” because they are separated from the noun phrase they semantically belong to and can occur in a different syntactic position. The relation `nmod:float` is used when a floating quantifier is attached to the object, dative, or another argument of the predicate, while agreeing with the subject.

~~~ sdparse
и живяху кождо на своих мѣстѣх \n and lived in their own place each 
nmod:float(мѣстѣх, кождо) 
nmod:float(place, each)
~~~

The relation `nmod:float` is also used in a depictive construction: 

~~~ sdparse
девица седит вся в золоте \n a maiden sits all (adorned) in gold  
nmod:float(золоте, вся) 
nmod:float(gold, all)
~~~


When a floating quantifier is attached directly to the verb (or other predicative) the relation `obl:float` should be used.

~~~ sdparse
Владѣемъ своим государством сами . \n We own our state ourselves . 
obl:float(Владѣемъ, сами) 
obl:float(own, ourselves)
~~~

#### References
Я. Г. Тестелец. Введение в общий синтаксис. М.: РГГУ, 2001.
<!-- Interlanguage links updated Út 30. června 2026, 11:00:32 CEST -->
