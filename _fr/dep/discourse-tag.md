---
layout: relation
title: 'discourse:tag'
shortdef: 'tag questions'
udver: '2'
---

In French spoken treebanks, the `discourse:tag` subtype of the [discourse]() relation is used for questions tags.
Most frequent questions tags are _…, hein ?_ or _…, non ?_


~~~ sdparse
ah bah , je m' y attendais pas , hein ?  \n Well, I wasn't expecting that, was I?
discourse:tag(attendais,hein)
~~~

But more complex phrases can also be used as a question tag:

~~~ sdparse
mais elle avait beaucoup peur de beaucoup de trucs, tu t'en souviens ? \n but she was really scared of a lot of things—do you remember that?
discourse:tag(avait,souviens)
~~~
<!-- Interlanguage links updated Út 10. listopadu 2026, 22:38:42 CET -->
