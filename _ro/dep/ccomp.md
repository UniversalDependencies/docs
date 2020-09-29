---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
---

A clausal complement of a verb or adjective is a dependent clause which is a core argument. That is, it functions like an object of the verb, or adjective.
Such clausal complements may be finite or nonfinite. 

~~~ sdparse
Înțeleg că ești obosit . \n Understand-I that are-you tired .
ccomp(Înțeleg, obosit)
~~~

~~~ sdparse
Noi putem schia . \n We can ski .
ccomp(putem, schia)
~~~

The clausal predicative of the copula verb `a fi` is also analysed as ccomp. NB: This is the only case when the copula verb `a fi` is treated as a head.

~~~ sdparse
ROOT Noi suntem cum ne știi . \n We are how us know-you .
root(ROOT, suntem)
ccomp(suntem, știi)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:12 CEST 2020 -->
