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
iobj(am-ashamed.PRAEDIC, I.Dat)
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
case(brother, as-17)
advmod(умен, так)
advmod(smart, as-13)
discourse(так, же)
discourse(as-13, then)
~~~

## Noun phrases with quantifiers

### Constructions with cardinal numerals
See [ru-dep/nummod:gov]() for numerals governing the case of the noun: _две.Nom жены.Gen_, _пять.Nom жен.Gen_.
See [ru-dep/nummod]() for numerals not governing the case of the noun: _с двумя.Ins женами.Ins_.
See [ru-dep/det:numgov]() for the pronominal quantifiers governing the case of the noun: _сколько.Nom жен.Gen_.
See [ru-dep/det:nummod]() for the pronominal quantifiers agreeing in case with the noun: _со сколькими.Ins женами.Ins_.
See [ru-dep/compound]() for the compound numerals: _двадцать два_.

Other types of QP:
* _две.Nom целых.Gen.Sg четыре.Nom десятых.Gen.Sg миллиона.Gen.Sg рублей.Gen.Pl_ “2.4 million rubles” (i.e. “four tenth parts of million” with the ellipsis of “parts”)
* _к двум.Dat целым.Dat четырем.Dat десятым.Dat миллиона.Gen.Sg рублей.Gen.Pl_ “to 2.4 million rubles” 

~~~ sdparse
Двадцать две целых четыре десятых миллиона рублей . \n Twenty two whole-parts four tenth million rubles .
compound(Двадцать, две)
compound(Twenty, two)
nummod:gov(рублей, миллиона)
nummod:gov(rubles, million)
nummod:gov(миллиона, целых)
nummod:gov(million, whole-parts)
nummod:gov(десятых, четыре)
nummod:gov(tenth, four)
nummod:gov(целых, две)
nummod:gov(whole-parts, two)
conj(целых, десятых)
conj(whole-parts, tenth)
~~~

### Constructions with _более_ and other comparative forms

~~~ sdparse
Пришло более двухсот человек . \n Came more-than 200 people .
nsubj(Пришло, человек)
nsubj(Came, people)
nummod(человек, двухсот)
nummod(people, 200)
advmod(двухсот, более)
advmod(200, more-than)
~~~

### Constructions with collective numerals

The collective numerals like _двое, трое, четверо_ “a group of two/three/four”, etc. govern the Genitive case of the noun in Nominative and Accusative (e.g. _двое_.NUM.Nom _студентов_.NOUN.Gen.Pl “two.Nom students.Nom”) and agree in case with the noun in all other grammatical cases (e.g. _с_ _двумя_.NUM.Ins _студентами_.NOUN.Ins.Pl “with two.Ins students.Ins”). The noun is always in plural. If this QP is subject, the finite predicate takes either singular (3rd person in present tense, neutral in past tense) or plural depending the information structure and some other factors (e.g. _Пришло двое студентов_, _Пришли двое студентов_ “Two students came.Neut.Sg / came.pl”).

~~~ sdparse
Пришло двое студентов . \n Came group-of-two students .
nsubj(Пришло, студентов)
nsubj(Came, students)
nummod:gov(студентов, двое)
nummod:gov(students, group-of-two)
~~~

The choice between cardinal and collective numerals in such constructions depends on animacy, (semantic) gender, semantic class, declination type, and the case of QP \[Мельчук 1985, Сичинава 2012\], the collective numerals are usually used with animate masculine nouns or collective nouns (e.g. _семеро друзей_ “a group of seven friends”, _двое саней_ “two sledges”).

## References

* Мельчук И.А. Поверхностный синтаксис русских числовых выражений. Вена. 1985
* Сичинава Д. В. [http://rusgram.ru/%D0%A7%D0%B8%D1%81%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5](Числительное). Материалы для проекта корпусного описания русской грамматики [http://rusgram.ru][1]. На правах рукописи. М. 2012.
