---
layout: relation
title: 'nmod:part'
shortdef: 'nominal modifier indicating part-whole relations'
---

This subtype of [nmod]() is used for marking the part-whole relations.
The structure is similar to [nmod:poss](nmod-poss) in most cases,
but the range structures expressing "part of" is diverse, 
and distinction is often be useful.

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

<!-- Interlanguage links updated Út zář 29 20:43:22 CEST 2020 -->
