---
layout: base
title: 'advmod'
shortdef: 'adverbial modifier'
---

## advmod: adverbial modifier

An adverbial modifier of a word is a (non-clausal) <a href="../ud-pos/ADV.html">adverb</a> or adverbial
phrase that serves to modify the meaning of the word.

Note that in some grammatical traditions, the term _adverbial modifier_ covers
constituents that function like adverbs regardless whether they are realized
by adverbs, adpositional phrases, or nouns in particular morphological <a href="../ud-feat/Case.html">cases</a>.
We differentiate adverbials realized as adverbs _(advmod)_ and adverbials realized
by noun phrases or adpositional phrases (<a href="nmod.html">nmod</a>).

~~~ sdparse
Genetically modified food
advmod(modified, Genetically)
~~~

~~~ sdparse
less often
advmod(often, less)
~~~

~~~ sdparse
Where/ADV do/AUX you/PRON want/VERB to/ADP go/VERB later/ADV ?/PUNCT
advmod(go, Where)
advmod(go, today)
~~~
