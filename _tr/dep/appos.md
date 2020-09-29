---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following
the first noun that serves to define or modify that noun. It includes
parenthesized examples, as well as defining abbreviations in one of
these structures.


~~~ sdparse
Ali , en iyi arkadaşım , beni partiye davet etmedi . \n Ali, my best friend, did not invite me to the party .
appos(Ali, arkadaşım)
~~~

~~~ sdparse
Devlet Tiyatroları ( DT ) \n State Theatre ( DT )
appos(Tiyatroları, DT)
~~~

*appos* is also used to link key-value pairs in addresses, signatures,
etc. (see also the [list]() label):

~~~ sdparse
Ali Yılmaz ,  tel : 555-55-55 , email : ali@example.com
name(Ali, Yılmaz)
list(Ali, tel)
list(Ali, email)
appos(tel, 555-55-55)
appos(email, ali@example.com)
~~~
<!-- Interlanguage links updated Út zář 29 20:23:19 CEST 2020 -->
