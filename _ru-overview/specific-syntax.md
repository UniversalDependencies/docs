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

* _Миша_.Nom <b>_умнее_</b> _брата_.Gen. “Misha is <b>smarter</b> than his brother.” (only with morphological comparatives)
* _Миша_.Nom <b>_более умный_</b> / <b>_более умен_</b> / <b>_умнее_</b>, _чем брат_.Nom. “Misha is <b>smarter</b> than his brother.” (with both types of comparatives)
* _Миша_.Nom <b>_самый умный_</b> / <b>_умнейший_</b> _из_.PREP _всех_.Gen. “Misha is <b>the smartest</b> of them all.” (with both types of superlatives)
* _Миша_.Nom <b>_такой же умный_</b> / <b>_так же умен_</b> / <b>_столь же умен_</b>, _как_ (_и_) _его брат_.Nom. “Misha is <b>as smart</b> as his brother.” (equality comparison)

The “lesser degree” comparison (expressed periphrastically) is marked the same way: 

* _Миша_.Nom <b>_менее умный_</b> / <b>_менее умен_</b>, _чем его брат_.Nom. “Misha is <b>less smart</b> than his brother.” (with both types of comparatives)

* _Миша_.Nom <b>_наименее глупый_</b> _из_.PREP _всех_.Gen. “Misha is <b>the least stupid</b> of them all.” (with both types of superlatives)

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
See [ru-dep/nummod:gov]() on numerals governing the case of the noun: _две.Nom жены.Gen_, _пять.Nom жен.Gen_, including phrases with paucal numerals. 

See [ru-dep/nummod]() on numerals not governing the case of the noun: _с двумя.Ins женами.Ins_. 

See [ru-dep/det:numgov]() on the pronominal quantifiers governing the case of the noun: _сколько.Nom жен.Gen_. 

See [ru-dep/det:nummod]() on the pronominal quantifiers agreeing in case with the noun: _со сколькими.Ins женами.Ins_. 

See [ru-dep/compound]() on the compound numerals: _двадцать два_.

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

The finite predicate takes either singular (3rd person in present tense, neutral in past tense) or plural with the subject QP (e.g. _На столе <b>стоит</b> две чашки_ “lit. On the table there-stands.Sg two.Nom cups.Nom”, _На столе <b>стоят</b> две чашки_ “lit. On the table there-stand.Pl two.Nom cups.Nom”).

### Postposition of cardinal numerals

The phrase with the postposition of cardinal numerals refers to approximate quantity (usually used with simplex numerals 2-10, 20, 30... etc.). The rules of agreement and case government in such QPs preserve.

~~~ sdparse
Человека четыре . \n People about-four .
nummod:gov(Человека, четыре)
nummod:gov(People, about-four)
~~~

### Constructions with paucal numerals and adjectives

If the phrase with a paucal numeral (_два, три, четыре, оба, полтора_ “two, three, four, both, half, one and a half”) is in the Nominative or Accusative case, the adjective modifying the noun takes either Nominative (Accusative) plural or Genitive plural, cf.

* <b>_Две_</b>.Fem.Nom <b>_белые_</b>.Nom.Pl <b>_лодки_</b>.Fem.Gen.Sg

~~~ sdparse
Две белые лодки . \n Two white boats .
nummod:gov(лодки, Две)
nummod:gov(boats, Two)
amod(лодки, белые)
amod(boats, white)
~~~

* <b>_Две_</b>.Fem.Nom <b>_белых_</b>.Nom.Pl <b>_лодки_</b>.Fem.Gen.Sg

~~~ sdparse
Две белых лодки . \n Two white boats .
nummod:gov(лодки, Две)
nummod:gov(boats, Two)
amod(лодки, белых)
amod(boats, white)
~~~

With non-paucal numerals (which refer to five objects and more; also _половина, четверть_ “half, one fourth” etc.), the adjective is always in Genitive plural.

### Constructions of more and less quantity 

The comparative forms _более_, _больше_, _менее_, _меньше_ “more than, less than” are used in constructions like _более двухсот человек_ “more than 200 people”, _(не) меньше пяти машин_ “(no) less than five cars”. _Более_ / _больше_ / _менее_ / _меньше_ governs the Genitive case of the cardinal numeral. If this QP is a subject, the finite predicate takes either singular (3rd person in present tense, neutral in past tense) or plural depending the information structure and some other factors (e.g. _Пришло более двухсот человек_ “More than 200 people came.Neut.Sg”, _Более двухсот человек пришли к памятнику_ “More than 200 people came.pl to the monument”). The distribution of singular and plural is similar but not the same as with cardinal numerals.

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

The collective numerals like _двое, трое, четверо_ “a group of two/three/four”, etc. govern the Genitive case of the noun in Nominative and Accusative (e.g. _двое_.NUM.Nom _студентов_.NOUN.Gen.Pl “two.Nom students.Nom”) and agree in case with the noun in all other grammatical cases (e.g. _с_ _двумя_.NUM.Ins _студентами_.NOUN.Ins.Pl “with two.Ins students.Ins”). The noun is always in plural. If this QP is a subject, the finite predicate takes either singular (3rd person in present tense, neutral in past tense) or plural depending the information structure and some other factors (e.g. _Пришло двое студентов_, _Пришли двое студентов_ “Two students came.Neut.Sg / came.pl”). The distribution of singular and plural is similar but not the same as with cardinal numerals and comparative forms.

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
* Сичинава Д. В. [Числительное](http://rusgram.ru/Числительное). Материалы для проекта корпусного описания русской грамматики [rusgram.ru](http://rusgram.ru). На правах рукописи. М. 2012.
