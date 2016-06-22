---
layout: base
title:  'Syntax'
permalink: ru/overview/specific-syntax.html
---

# Specific constructions

## Clausal structures

In Russian, the standard case pattern of a predicate-argument construction is as follows: 
* the first argument (subject) is in the Nominative case;
* the second argument (direct object) is in the Accusative case;
* all other arguments are coded in other cases or in the prepositional phrase depending their semantics.
However, there is a number of constructions which have non canonical case patterns.

### Constructions with Dative subject

The constructions are instantiated by an infinitive verb (usually under negation) or a predicative, the first argument of which is in the Dative case and not in the canonical Nominative case. The Dative argument is attached to the predicate as [ru-dep/iobj]().

~~~ sdparse
Роботу не угнаться за собакой . \n Robot.Dat cannot-keep-pace.Inf with dog .
iobj(угнаться, Роботу)
iobj(cannot-keep-pace.Inf, Robot.Dat)
~~~

~~~ sdparse
Мне стыдно за вас . \n I.Dat am-ashamed.PRAEDIC for you .
iobj(стыдно, Мне)
iobj(am-ashamed, I.Dat)
~~~

Cf. "дат-субъект" in SynTagRus.


## Adjectival and adverbial constructions

### Comparative constructions

Most Russian qualitative adjectives and adverbs have both morphological and analytic comparative and superlative forms, 
e. g. _умный_ “smart”, _умнее_ (_умней_) “smarter”, _более умный_ “smarter”, (_наи_)_умнейший_ “smartest”, _наиболее умный_, _самый умный_ “smartest”. The synthetic comparative forms are assigned the Cmp [ru-feat/Degree]() feature while the synthetic superlative 
forms are treated as separate lemmata.
The most frequently used comparative constructions are the following:

* _Миша.Nom <b>умнее</b> брата.Gen._ “Misha is <b>smarter</b> than his brother.” (only with morphological comparatives)
* _Миша.Nom <b>более умный</b> / <b>более умен</b> / <b>умнее</b>, чем брат.Nom._ “Misha is <b>smarter</b> than his brother.” (with both types of comparatives)
* _Миша.Nom <b>самый умный</b> / <b>умнейший</b> из.PREP всех.Gen._ “Misha is <b>the smartest</b> of them all.” (with both types of superlatives)
* _Миша.Nom <b>такой же умный</b> / <b>столь же умен</b>, как (и) его брат._ “Misha is <b>as smart</b> as his brother.” (equality comparison)

The “lesser degree” comparison (expressed periphrastically) is marked the same way: 
* _Миша.Nom <b>менее умный</b> / <b>менее умен</b>, чем его брат.Nom._ “Misha is <b>less smart</b> than his brother.” (with both types of comparatives)
* _Миша.Nom <b>наименее умный</b> из.PREP всех.Gen._ “Misha is <b>the least smart</b> of them all.” (with both types of superlatives)

~~~ sdparse
Миша умнее брата . \n Misha is-smarter than-his-brother .
~~~

~~~ sdparse
Миша умнее, чем брат . \n Misha is-smarter than his-brother .
amod(умнее, брат)
amod(is-smarter, his-brother)
case(брат, чем)
case(his-brother, than)
~~~

## Noun phrases with quantifiers

TBA
