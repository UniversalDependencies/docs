---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial clause modifier is a clause which modifies
a verb or other predicate (adjective, etc.),
as a modifier not as a core complement. 
This includes things such as a temporal clause,
consequence, conditional clause, purpose clause, etc.
The dependent must be clausal (or else it is an [advmod]())
and the dependent is the main predicate of the clause.

Turkish adverbial clauses are mainly formed through morphological inflections.

~~~ sdparse
Ali gelince sevindi . \n He\/she became happy when Ali arrived
advcl(sevindi, gelince)
~~~

~~~ sdparse
Okurken uyuyakalmışım . \n I fell asleep while reading
advcl(uyuyakalmışım, Okurken)
~~~

~~~ sdparse
Kitabı okusaydın anlardın . \n You would understand if you had read the book
advcl(anlardın, okusaydın)
~~~

The subordinator _ki_ and a few other subordinating words may also form adverbial clauses.

~~~ sdparse
Bu kitabı sen de okursun diye aldım \n I bought this book so that you would read it too
advcl(aldım, okursun)
mark(okursun, diye)
~~~

~~~ sdparse
Bu kitabı aldım ki sen de okuyasın \n I bought this book so that you would read it too
advcl(aldım, okuyasın)
mark(okuyasın, ki)
~~~

~~~ sdparse
Bu kitabı okudun mu herşeyi anlayacaksın \n You will understand everything once you have read this book
advcl(anlayacaksın, okudun)
mark(okudun, mu)
~~~

<!-- Interlanguage links updated St lis 3 20:58:34 CET 2021 -->
