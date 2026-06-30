---
layout: relation
title: 'advmod:emph'
shortdef: 'emphasizing word, intensifier'
udver: '2'
---

This is a special class of adverbial modifiers. While other adverbial modifiers usually modify verbs, adjectives or adverbs, these emphasizers often modify noun phrases, including prepositional phrases. The purpose of these adverbs is to emphasize or strengthen. `Advmod:emph` should be applied only to those adverbs that are actually used as particles, i.e., they emphasize adjacent words but do not essentially add extra meaning.

~~~ sdparse
Šią savaitę labai pavargau , ypač pirmadienį . \n I-was very tired this week , especially on-Monday .
advmod:emph(pirmadienį, ypač)
advmod:emph(on-Monday, especially)
~~~

This tag also marks emphatic particles (used with nouns and other parts of speech).

~~~ sdparse
Ateisi tik tu . \n Only you will-come .
advmod:emph(tu, tik)
advmod:emph(you, Only)
~~~

~~~ sdparse
Jis toks gražus . \n He-is so handsome .
advmod:emph(gražus, toks)
advmod:emph(handsome, so)
~~~

~~~ sdparse
Aš gal neateisiu . \n Maybe I will-not-come .
advmod:emph(neateisiu, gal)
advmod:emph(will-not-come, Maybe)
~~~

It was decided to annotate participles _įskaitant (including)_ and _išskyrus (except for)_ with `advmod:emph`, when they function as particles.

~~~ sdparse
Visi klausimai , įskaitant sveikatą , bus išspręsti . \n All issues, including health , will-be resolved .
advmod:emph(sveikatą, įskaitant)
advmod:emph(health, including)
~~~

Also, `advmod:emph` is used for infinitive _palyginti (relatively)_ when it functions as a particle (synonymous with _būtent (exactly)_), for example:

~~~ sdparse
Kainos tokios dėl palyginti naujos statybos pastatų . \n Prices are-like-that because-of relatively newly built buildings .
advmod:emph(naujos, palyginti)
advmod:emph(newly, relatively)
~~~

The label `advmod:emph` is also used for the pronoun _pats (him/herself/the very)_ which is used with superlative adjectives, because it emphasizes the abundance:

~~~ sdparse
Patys geriausi metai . \n The-very best year .
advmod:emph(geriausi, Patys)
advmod:emph(best, The-very)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:59:35 CEST -->
