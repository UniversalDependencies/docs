---
layout: relation
title: 'obl:float'
shortdef: 'oblique as a floating modifier'
udver: '2'
---

The relation `obl:float` is used for floating modifiers _весь_ 'all', _каждый_ 'every', _один_ 'only; alone', _оба_ 'both', _sam_ 'oneself' etc. that modify objective, dative, etc. argument in the clause. 

~~~ sdparse
Мальчики взяли по пять яблок каждый . \n The boys took five apples each . 
obl:float(яблок, каждый) 
obl:float(apples, each)
~~~

`obl:float` can attach directly to the verb (or other predicative) if the (semantically modified) argument is ommited.

~~~ sdparse
Пойми же оба ! \n Understand ( you ) both . 
obl:float(Пойми, сам) 
obl:float(Understand, both)
~~~

#### References
Я. Г. Тестелец. Введение в общий синтаксис. М.: РГГУ, 2001.
<!-- Interlanguage links updated Út 9. května 2023, 20:04:27 CEST -->
