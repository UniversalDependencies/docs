---
layout: relation
title:  'case:pred'
shortdef : 'predicative particles'
udver: '2'
---

In Welsh, nominal predicates need a special particle _yn_. The same particle is used for adjectives in adverbial position

### Examples

_Mae Mair **yn athro**_ "Mair is **a teacher**"
~~~ sdparse
_Mae Mair yn athro\nMair is a teacher
cop(athro,Mae)
nsubj(Mair,athro)
case:pred(athro,yn)
~~~

_Mae Ioan **yn gryf**_ "Ioan is **strong**"
~~~ sdparse
_Mae Ioan yn gryf\nioan is strong
cop(gryf,Mae)
nsubj(Ioan,gryf)
case:pred(gryf,yn)
~~~

* _Mae Ioan yn cerdded **yn gyflym**_ "Ioan is running **fast**"

~~~ sdparse
Mae Ioan yn cerdded yn gyflym\nIoan is running fast
nsubj(Mae, Ioan)
xcomp(Mae, cerdded)
aux(cerdded, yn)
advmod(cerdded, gyflym)
case:pred(gyflym, yn)
~~~

N.B.: the predicative particle _yn_ triggers soft mutation on the following noun and adjective. It must not be confused with the imperfect TAM _yn_ (before verbnouns) which does not trigger any mutation and the prepostion _yn_ "in" which triggers nasal mutation


<!-- Interlanguage links updated St lis 3 20:58:42 CET 2021 -->
