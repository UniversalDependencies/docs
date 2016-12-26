---
layout: relation
title: 'advmod:emph'
shortdef: 'emphasizing word, intensifier'
---

This is a special class of [adverbial modifiers](advmod).
It corresponds to the words that are attached in the analytical layer of PDT with the label `AuxZ`.
In the tectogrammatical layer they often get the label (functor) `RHEM` (rhematizers).

While other adverbial modifiers usually modify verbs, adjectives or adverbs, these emphasizers often modify noun phrases,
including prepositional phrases.

~~~ sdparse
особенно в понедельник \n especially on Monday
advmod:emph(понедельник, особенно)
advmod:emph(Monday, especially)
~~~

~~~ sdparse
только 15 процентов \n only 15 percent
advmod:emph(процентов, только)
advmod:emph(percent, only)
~~~

Other examples:

* _Они начнут <b>аж</b> на месяц позже._ lit. _They will-start <b>even</b> by month later._ “They will start one month later.” (_Až_ expresses that the speaker or the listener did not expect the thing to happen <b>that</b> late.)
* _Он будет играть <b>уж</b> в субботу._ “He will play <b>already</b> on Saturday.”
