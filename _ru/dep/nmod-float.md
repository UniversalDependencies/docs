---
layout: relation
title: 'nmod:float'
shortdef: 'nominal modifier as a floating quantifier'
udver: '2'
---

Russian floating quantifiers _весь_ 'all', _каждый_ 'every', _один_ 'only; alone', _оба_ 'both', _sam_ 'oneself', _pervyj_ 'first' etc. are called “floating” because they are separated from the noun phrase they semantically belong to and can occur in a different syntactic position. The relation `nmod:float` is used when a floating quantifier is attached to the object, dative, or another argument of the predicate, while agreeing with the subject.

~~~ sdparse
Мальчики взяли по пять яблок каждый . \n The boys took five apples each . 
nmod:float(яблок, каждый) 
nmod:float(apples, each)
~~~

The relation `nmod:float` is also used in a depictive construction: 

~~~ sdparse
Все в свету проходят тучи мимо . \n All ( Bathed ) in light , all the clouds pass by . 
nmod:float(свету, Все) 
nmod:float(light, All)
~~~


When a floating quantifier is attached directly to the verb (or other predicative) the relation `obl:float` should be used.

~~~ sdparse
Поймите же оба ! \n Understand ( you ) both . 
obl:float(Поймите, оба) 
obl:float(Understand, both)
~~~

#### References
Я. Г. Тестелец. Введение в общий синтаксис. М.: РГГУ, 2001.
<!-- Interlanguage links updated Út 30. června 2026, 11:00:32 CEST -->
