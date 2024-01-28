---
layout: postag
title: 'ADV'
shortdef: 'adverb'
udver: '2'
---

### Definition

Adverbs are words that typically modify [verbs](VERB) for such categories as time, place, direction or manner.
They may also modify [adjectives](ADJ) (as in _<b>claramente</b> falso_ “clearly fake”), other adverbs (as in
_<b>muy brevemente</b>_ “very briefly”) or even [nouns](NOUN) / [pronouns](PRON) (as in _<b>solamente</b> tú_
“only you”).

There is a closed subclass of _pronominal adverbs_ that refer to circumstances in context, rather than naming
them directly; similarly to pronouns, these can be categorized as interrogative, relative, demonstrative, etc.
To conform to the UD guidelines, pronominal adverbs also get the `ADV` part-of-speech tag but they are
differentiated by additional features (see [pronominal type](PronType)).

### Examples

- _muy_ “very”
- _bien_ “well”
- _exactamente_ “exactly”
- _mañana_ “tomorrow”
- _arriba, abajo_ “up, down”
- interrogative adverbs: _dónde, cuándo_ “where, when”
- relative adverbs: _donde, cuando_ “where, when” (depending on context, these can be also subordinating conjunctions)
- demonstrative adverbs: _aquí, allí, ahora, después_ “here, there, now, then”
- totality adverbs: _siempre_ “always”
- negative adverbs: _nunca_ “never”

In Spanish adverbs can be derived from adjectives using the suffix  _{-mente}_, such as _<b>lentamente</b>_ (“slowly”)
or _<b>rápidamente</b>_ (“quickly”), or without any formal modification, where many adjectives in masculine singular
form are used as adverbs, such as _hablar <b>alto</b>_ (“speak loudly”) or _trabajar <b>duro</b>_ (“work hard”).
These are still tagged as [ADJ]() and not `ADV`; note that their adverbial function is captured by the relation
[advmod]().

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:41:21 CET -->
