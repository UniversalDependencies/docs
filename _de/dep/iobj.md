---
udver: '2'
layout: relation
title: 'iobj'
shortdef: 'indirect object'
---

`iobj` marks a noun phrase that is the indirect object of a verb. The indirect object is in dative case.

~~~ sdparse
Die Frau gibt dem Kind einen Apfel . \n The woman gives the child an apple .
iobj(gibt, Kind)
~~~

The indirect object may be the only object mentioned in the phrase, but it will still be in dative case.

~~~ sdparse
Sie hilft ihrem Mann . \n She helps her husband .
iobj(hilft, Mann)
~~~
