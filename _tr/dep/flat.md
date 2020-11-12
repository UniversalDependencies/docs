---
layout: relation
title: 'flat'
redirect_from: "tr/dep/name.html"
shortdef: 'name'
udver: '2'
---

`flat` is one of the relations for multi-word expressionsin UD (together with [compound]() and [fixed]()).
In Turkish it is used for names, and foreign phrases.

~~~ sdparse
Mustafa Kemal
flat(Mustafa, Kemal)
~~~

Similar to some other treebanks, e.g.,  [Czech](cs-dep/flat), 
we use [nmod]() for titles and honorifics.

~~~ sdparse
Gazi Mustafa Kemal
flat(Mustafa, Kemal)
nmod(Mustafa, Gazi)
~~~

~~~ sdparse
Mahmut öğretmen
nmod(Mahmut, öğretmen)
~~~

Names that have a regular syntactic structure, should be annotated
with regular syntactic relations.

~~~ sdparse
Van Gölü
nmod(Gölü, Van)
~~~

~~~ sdparse
Mavi Marmara
amod(Marmara, Mavi)
~~~

~~~ sdparse
Türkiye Büyük Millet Meclisi
nmod(Meclisi, Millet)
amod(Meclisi, Büyük)
nmod(Meclisi, Türkiye)
~~~


Foreign language expressions are also annotated with ``flat``.

~~~ sdparse
play maker olmak istiyorum
flat(play, maker)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:27 CET 2020 -->
