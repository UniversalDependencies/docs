---
layout: relation
title: 'nmod:part'
shortdef: 'nominal modifier indicating part-whole relations'
udver: '2'
---

This subtype of [nmod]() is used for marking the part-whole relations.
The structure is similar to [nmod:poss](nmod-poss) in most cases,
but the range of structures expressing "part of" is diverse,
and the distinction is often useful.

~~~ sdparse
باھار كۈنلىرىنىڭ بىرىدە \n bahar künlirining biride \n spring of-days in-one
nmod:part(بىرىدە, كۈنلىرىنىڭ)
nmod:poss(كۈنلىرىنىڭ, باھار)
~~~

~~~ sdparse
Kitapların üçü \n three of the books
nmod:part(üçü, Kitapların)
~~~

~~~ sdparse
Kitapların hepsi \n All of the books
nmod:part(hepsi, Kitapların)
~~~

~~~ sdparse
Sevidiğim kitaplardan biri \n One of the books I like
nmod:part(biri, kitaplardan)
~~~

~~~ sdparse
Şu elmalardan bir kilo  \n A kilo of\/from those apples
nmod:part(kilo, elmalardan)
~~~

~~~ sdparse
Öğrencilerden bir kız \n A girl from\/among the students
nmod:part(kız, Öğrencilerden)
~~~

~~~ sdparse
Öğrenciler arasından bir kız \n A girl from\/among the students
nmod:part(kız, Öğrenciler)
case(Öğrenciler, arasından)
~~~

<!-- Interlanguage links updated St lis 3 20:58:59 CET 2021 -->
