---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "ps/dep/aux.html"
udver: '2'
---

An auxiliary of a clause is a function word associated with a verbal predicate
that expresses [Aspect](), [Mood](), [Tense]() or [Voice]().
All words marked with `aux` relation have Part-of-Speech `AUX`.

### bare `aux`
Bare `aux` relation is currently used only for the word ونۀ _wënë́_,
combining perfective prefix -و _wë́-_ (otherwise attached to affirmative forms)
and negative particle _në́_ (written separately).

#### Examples
* دا کتاب بۀ **ونۀ** لیکم _dâ kitấb bë **wënë́** likëm_ “I will not write this book”
~~~ sdparse
Přijel jsem včera . \n Arrived I-have yesterday .
aux(Přijel, jsem)
aux(Arrived, I-have)
~~~

### `aux` subtypes
This dependency relation is used mostly with subtypes.
See the particular subtype for details and examples.

[aux:cnd](): conditional mood, words وای _wây_ and بۀ _bë_

[aux:fut](): future tense, word بۀ _bë_

[aux:hab](): habitual aspect, word بۀ _bë_

[aux:pass](): passive voice, verb کېدل _kedë́l_ “to become”

[aux:perf](): perfect aspect, verb ول _wël_ “to be”

[aux:pot](): potential mood, verbs کېدل _kedë́l_ “to become” and کول _kawë́l_ “to do”

[aux:sub](): subjunctive mood, verb کېدل _kedë́l_ “to become”
