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

The constructions are instantiated by an infinitive verb (usually under negation) or a predicative, the first argument of which is in the Dative case and not in the canonical Nominative case. The Dative argument is labeled [ru-dep/iobj]().

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
* _Миша.Nom <b>такой же умный</b> / <b>так же умен</b> / <b>столь же умен</b>, как (и) его брат.Nom._ “Misha is <b>as smart</b> as his brother.” (equality comparison)

The “lesser degree” comparison (expressed periphrastically) is marked the same way: 
* _Миша.Nom <b>менее умный</b> / <b>менее умен</b>, чем его брат.Nom._ “Misha is <b>less smart</b> than his brother.” (with both types of comparatives)
* _Миша.Nom <b>наименее глупый</b> из.PREP всех.Gen._ “Misha is <b>the least stupid</b> of them all.” (with both types of superlatives)

~~~ sdparse
Миша умнее брата . \n Misha is-smarter than-his-brother .
nmod(умнее, брата)
nmod(is-smarter, than-his-brother)
~~~

~~~ sdparse
Миша умнее , чем брат . \n Misha is-smarter , than his-brother .
amod(умнее, брат)
amod(is-smarter, his-brother)
case(брат, чем)
case(his-brother, than)
~~~

~~~ sdparse
Миша самый умный из всех . \n Misha is-the-most smart of them-all .
nmod(умный, всех)
nmod(smart, them-all)
case(всех, из)
case(them-all, of)
amod(умный, самый)
amod(smart, is-the-most)
~~~

~~~ sdparse
Миша так же умен , как и его брат . \n Misha as then smart , as his brother .
amod(умен, брат)
amod(smart, brother)
case(брат, как)
case(brother, as-6)
advmod(умен, так)
advmod(smart, as-2)
discourse(так, же)
discourse(as-2, then)
~~~

## Noun phrases with quantifiers

See [ru-dep/nummod:gov]() for numerals governing the case of the noun: _две.Nom жены.Gen_, _пять.Nom жен.Gen_.
See [ru-dep/nummod]() for numerals not governing the case of the noun: _с двумя.Ins женами.Ins_.
See [ru-dep/det:numgov]() for the pronominal quantifiers governing the case of the noun: _сколько.Nom жен.Gen_.
See [ru-dep/det:nummod]() for the pronominal quantifiers agreeing in case with the noun: _со сколькими.Ins женами.Ins_.
See [ru-dep/compound]() for the compound numerals: _двадцать два_.

Other types of QP:
* _две.Nom целых.Gen.Sg четыре.Nom десятых.Gen.Sg миллиона.Gen.Sg рублей.Gen.Pl_ “2.4 million rubles” (i.e. “four tenth parts of million” with the ellipsis of “parts”)
* _к двум.Dat целым.Dat четырем.Dat десятым.Dat миллиона.Gen.Sg рублей.Gen.Pl_ “to 2.4 million rubles”
~~~ sdparse
Две целых четыре десятых миллиона рублей . \n Two whole-parts four tenth million rubles .
nummod:gov(рублей, миллиона)
nummod:gov(rubles, million)
nummod:gov(миллиона, десятых)
nummod:gov(million, tenth)
nummod:gov(десятых, четыре)
nummod:gov(tenth, four)
nummod:gov(целых, Две)
nummod:gov(whole-parts, Two)
conj(целых, десятых)
conj(whole-parts, tenth)
~~~
