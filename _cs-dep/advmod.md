---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
---

An adverbial modifier of a word is a (non-clausal) [adverb](cs-pos/ADV)
or adverbial phrase that serves to modify the meaning of the word.

Note that in the Czech grammatical tradition, the term _adverbial modifier_ covers
constituents that function like adverbs regardless whether they are realized
by adverbs, adpositional phrases, or nouns in particular morphological 
[cases](cs-feat/Case).
We differentiate adverbials realized as adverbs (`advmod`) and
adverbials realized by noun phrases or adpositional phrases
([nmod]()).

~~~ sdparse
geneticky upravené potraviny \n genetically modified food
advmod(upravené, geneticky)
advmod(modified, genetically)
~~~

~~~ sdparse
méně často \n less often
advmod(často, méně)
advmod(often, less)
~~~

~~~ sdparse
Kam/ADV chcete/VERB jít/VERB zítra/ADV ?/PUNCT \n Where do-you-want to-go tomorrow ?
advmod(jít, Kam)
advmod(jít, zítra)
advmod(to-go, Where)
advmod(to-go, tomorrow)
~~~

~~~ sdparse
Na demonstraci přišlo nanejvýš 200 lidí . \n To demonstration came at-most 200 people .
advmod(200-5, nanejvýš)
advmod(200-13, at-most)
~~~
