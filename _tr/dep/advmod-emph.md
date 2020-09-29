---
layout: relation
title: 'advmod:emph'
shortdef: 'emphasizing word, intensifier'
udver: '2'
---

This is a subtype of  [advmod](). 
It used for (non-clausal) modifiers that emphasize or intensify their heads.

~~~ sdparse
Çok da güzel bir kızmış \n She was (apparently) a very (very) beautiful girl.
admod:emph(Çok, da)
admod(güzel, Çok)
~~~

~~~ sdparse
Güzel mi güzel bir kız \n A very (very,very) beautiful girl
advmod:emph(Güzel-1, mi)
~~~

~~~ sdparse
İlk kitabı bile okumamış \n He (apparently) hasn't read even the book
admod:emph(kitabı, bile)
~~~


<!-- Interlanguage links updated Út zář 29 20:31:42 CEST 2020 -->
