---
layout: relation
title: 'fixed'
redirect_from: "cs/dep/mwe.html"
shortdef: 'multi-word expression'
udver: '2'
---

The `fixed` relation is used for certain fixed grammaticized expressions. It is an internal relation annotated between the words of a multiword expression. Such expressions tend to behave like function words.

Fixed expressions typically do not allow intervening words. The assumption is that these expressions do not have any internal syntactic structure and that the structural annotation is in principle arbitrary. Therefore, if a word attaches as `fixed`, it should not have any dependents (except perhaps [punct](), [goeswith](), and [reparandum]() dependents, as these are not true syntactic relations).

The label `fixed` in Lithuanian is used for fossilized expressions (pronouns, adverbs, particles, conjunctions, or other phrases) in which there is a very tight internal connection between the words, the phrase is relatively stable, but it is not considered a morphological compound.

Multiword expressions annotated with `fixed` are represented in a flat structure, where all subsequent words in the expression are attached to the first one using the label `fixed`.

Pronouns: _visa tai (“all this”), vienas kitą (-am, -u) (“each other”), mažai kas (“few people /
little that”), daug kas (“many things / many people”), kažkoks tai (“some kind of”),_ ect.

~~~ sdparse
Jie yra vienas kitam ištikimi . \n They are faithful-to each other .
fixed(vienas, kitam)
fixed(each, other)
~~~

Paired conjunctions: _ne tik… bet ir (“not only… but also”), ne tik… tačiau ir (“not only…
however also”), nors ir… bet (“although… but”)_, ect.

~~~ sdparse
Ne tik mes , bet ir jie nusprendė vykti į kelionę . \n Not only we , but and they decided to-go on a-trip .
fixed(Ne, tik)
fixed(bet, ir)
fixed(Not, only)
fixed(but, and)
~~~

Particles: _kad ir “even if / no matter”, kaip ir “as if / more or less / kind of”, net ir “even”, kaip
tik “exactly / just”, bent jau “at least”, vis dar “still”, dar tik “only just / still only”, kur tau “as
if”_, ect.

~~~ sdparse
Kad ir sunku , reikia tai padaryti . \n Even if it-is-difficult , it has to-be-done .
fixed(Kad, ir)
fixed(Even, if)
~~~

Adverbs: _daug kur “in many places”, šiaip ar taip “one way or another / anyhow”, kaip reikiant
“as needed”, tai yra “that is”_, ect.

~~~ sdparse
Susirinko šimtas žmonių , tai yra visi užsiregistravę . \n A-hundred people gathered , that is , all-of-them registered .
fixed(tai, yra)
fixed(that, is)
~~~

Multiword expressions: _kas sau “each for oneself”, ne ką “not much”, maža to “on top of
that”, negana to “in addition”, kaip sykis “just right”_, ect.

~~~ sdparse
Negana to , jie gali pasiklysti . \n On-top-of that , they may get-lost .
fixed(Negana, to)
fixed(On-top-of, that)
~~~

~~~ sdparse
Jie nuėjo kas sau . \n They went each for-themselves .
fixed(kas, sau)
fixed(each, for-themselves)
~~~

Fixed expressions : _ačiū Dievui “thank God”, sveiki atvykę “welcome”, kokį nori “whatever you
want”, Jėzau Marija “Jesus Mary”, lyg niekur nieko “as if nothing happened”, akis į akį “face
to face”, visi iki vieno “every single one”_, ect.

~~~ sdparse
Ačiū Dievui , jie atvyko . \n Thank God , they arrived .
fixed(Ačiū, Dievui)
fixed(Thank, God)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 10:34:42 CEST -->
