---
udver: '2'
layout: relation
title: 'iobj'
shortdef: 'indirect object'
---

`iobj` marks a noun phrase that is the indirect object of a verb. The indirect object is usually in the dative case.

~~~ sdparse
Die Frau gibt dem Kind einen Apfel . \n The woman gives the child an apple .
obj (gibt, Apfel)
iobj(gibt, Kind)
~~~

In general, if there is just one object, it should be labeled [obj](), regardless of the morphological case or semantic role.

~~~ sdparse
Sie hilft ihrem Mann . \n She helps her husband .
obj(hilft, Mann)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:24 CEST 2020 -->
