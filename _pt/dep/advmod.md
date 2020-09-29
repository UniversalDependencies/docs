---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
---

An adverbial modifier of a word is a (non-clausal) [adverb](u-pos/ADV)
or adverbial phrase that serves to modify the meaning of the word.

Note that in some grammatical traditions, the term _adverbial
modifier_ covers constituents that function like adverbs regardless
whether they are realized by adverbs, adpositional phrases, or nouns
in particular morphological [cases](u-feat/Case).  We differentiate
adverbials realized as adverbs _(advmod)_ and adverbials realized by
noun phrases or adpositional phrases ([nmod]()).

~~~ sdparse
Seca afeta pouco a produção de grãos.
advmod(afeta, pouco)
~~~

~~~ sdparse
O fã daquela época vai ser fã sempre.
advmod(fã, sempre)
~~~

~~~ sdparse
Talvez isto seja muito barulho por nada.
advmod(barulho, talvez)
~~~

Note that in the last example, the relation hold between the adverb
("talvez") and the head of the main clause ("barulho", since it is a
copular clause).
<!-- Interlanguage links updated Út zář 29 18:41:06 CEST 2020 -->
