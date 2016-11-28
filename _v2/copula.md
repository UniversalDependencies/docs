---
layout: base
title:  'Copula in UD v2'
udver: '2'
---

# Nonverbal Predication and Copulas in UD v2

The treatment of copula constructions (non-verbal intransitive predication) is quite diverse in the current
version of the treebanks (see table below for the _status quo_). In order to provide more concrete guidelines
and to achieve better consistency cross-lingually and within a single language, we propose the
following changes in v2:

* The `cop` relation is restricted to function words (verbal or nonverbal) whose sole function is to link a nonverbal predicate to its subject and which do not add any meaning other than grammaticalized TAME categories (only one word in most languages). 
* The range of constructions that are analyzed using the cop relation is subject to language-specific variation but can be identified using universal guidelines specified below.

## Problems with the current copula analysis

The main problem is the lack of standardisation. Leaving aside the Galician example, which appears to be a conversion error, the Spanish treebank has over 229 verbs with the `cop` relation, where the Swedish treebank has one.

~~~sdparse
Éste quedó sorprendido . \n He was/stayed surprised
cop(sorprendido, quedó)
nsubj(sorprendido, Éste)
~~~

~~~sdparse
Han blev överraskad . \n He was/became surprised
nsubj(blev, Han)
xcomp(blev, överraskad)
~~~

Treebanks differ in if they treat the PP/case-marked nominal as head, in Swedish it is head, while in Finnish it is dependent:

~~~sdparse
Hon är i huset
nsubj(huset, Hon)
cop(huset, är)
~~~

~~~sdparse
Se on talossa
nsubj(on, Se)
nmod(on, talossa)
~~~

There is also variation within a language, for example, the existential construction with copula in English:

~~~sdparse
There is a book on the table .
expl(is, There)
nsubj(is, book)
~~~

Compared to the bare copula:

~~~sdparse
A book is on the table .
nsubj(table, book)
cop(table, is)
~~~

We also do not provide a consistent analysis when one side of the copula is a clause:

~~~sdparse
The important thing is to keep calm
nsubj(is, thing)
ccomp(is, keep)
~~~

## Guidelines for UDv2

In order to achieve a more consistent treatment of nonverbal predication in v2, we first define six categories of nonverbal predication that can be found cross-linguistically (with or without a copula):

1. Equation (aka identification): “she is my mother”
2. Attribution: “she is nice”
3. Location: “she is in the bathroom”
4. Possession: “the book is hers”
5. Benefaction: “the book is for her”
6. Existence: “there is food (in the kitchen)”

We then give the following guidelines for the analysis of these constructions:

* If there is no overt linking word (or if such a word can be omitted at least in some persons or tenses), then the final nominal is treated as the head of the clause regardless of which of the six categories it falls in.
* If there is an overt linking word used in equational constructions (category 1), then that word is treated as a copula and marked with the `cop` dependency, and is not the head of the clause. **Exception:** If the second element in the equation is a clause, then the copula verb is treated as the head of the clause, with the following clause as an `xcomp` (to prevent that the head of the smaller clause gets two subjects).
* If there is an overt word used in existential constructions (category 6), which is different from the copula in equational constructions (either a different lemma or with different syntax), then it should be regarded as being the head of existence clauses, taking a subject (and often a locative obl).
* All other cases of putative copula constructions (categories 2-5) should be assimilated to the equational and existential cases as seems to make most sense according to the inherent logic of the language concerned. 
* A language should normally have at most one copula, but exceptions can be made in case of defective paradigms or if there are two verbs alternating in categories 1-5 (but not in 6) and where any meaning difference reflect at most TAME categories.

### Language-specific examples

We now exemplify how these guidelines apply to different languages. 

#### English

The English analysis more or less follows the analysis in the current `UD_English` treebank. A non-head copula is used in categories (1-5), except for equated clauses, but (6) is treated differently because the verb must be the head in pure existentials.

(1a)

~~~ sdparse
she is my mother
nsubj(mother, she)
cop(mother, is)
~~~

(1b)

~~~ sdparse
the fact is that she is my mother
nsubj(is-3, fact)
xcomp(is-3, mother)
nsubj(mother, she)
cop(mother, is-6)
~~~

(2)

~~~ sdparse
she is nice
nsubj(nice, she)
cop(nice, is)
~~~

(3)

~~~ sdparse
she is in the kitchen
nsubj(kitchen, she)
cop(kitchen, is)
case(kitchen, in)
~~~

(4)

~~~ sdparse
it is hers
nsubj(hers, it)
cop(hers, is)
~~~

(5)

~~~ sdparse
it is for her
nsubj(her, it)
cop(her, is)
case(her, for)
~~~

(6a) 

~~~ sdparse
there is food
expl(is, there)
nsubj(is, food)
~~~

(6b) 

~~~ sdparse
there is food in the kitchen
expl(is, there)
nsubj(is, food)
obl(is, kitchen)
case(kitchen, in)
~~~

#### Irish

Irish uses a copula verb in categories 1, 4 and 5, and a different verb in categories 2, 3 and 6. Not only the verb but also the word order is different.

(1) 

~~~sdparse
is ise mo mháthair \n COP her my mother
nsubj(mháthair, ise)
cop(mháthair, is)
~~~

(2) 

~~~sdparse
tá sí deas \n is she nice
nsubj(tá, sí)
xcomp(tá, deas)
~~~

(3)

~~~sdparse
tá sí sa seomra folctha \n is she in room bath
nsubj(tá, sí)
xcomp(tá, seomra)
~~~

(4)

~~~sdparse
is lei an leabhar \n COP with her the book
nsubj(leabhar, lei)
cop(leabhar, is)
~~~ 

(5)

~~~sdparse
is di an leabhar \n COP with her the book
nsubj(leabhar, di)
cop(leabhar, is)
~~~ 

(6)

~~~sdparse
tá bia ann
nsubj(tá, bia)
~~~~

#### Czech

The Czech verb _být_ is used in all categories (1-6) and can be analyzed as copula everywhere except for pure existentials (without location) where no predicate other than the verb is available. Czech word order is free and it is not guaranteed that all constructions will come out as subject-copula-predicate. Reversed order (predicate-copula-subject) is less common but possible, even in the “equation” category (1). Czech is a pro-drop language which means that pronominal subjects are optional.

(1a)

~~~ sdparse
(ona) je moje matka \n she is my mother
nsubj(matka, (ona))
nsubj(mother, she)
cop(matka, je)
cop(mother, is)
~~~

(1b)

When the second part is a clause, the demonstrative pronoun _то_ must be inserted. As a result, we have a different syntactic structure with different analysis: the clause formally modifies a nominal represented by the demonstrative.

~~~ sdparse
дело в том , что она моя мать \n fact in that , that she my mother
nsubj(том, дело)
nsubj(that-12, fact)
acl(том, мать)
acl(that-12, mother)
nsubj(мать, она)
nsubj(mother, she)
~~~

(2)

~~~ sdparse
она милая \n she nice
nsubj(милая, она)
nsubj(nice, she)
~~~

(3)

~~~ sdparse
она на кухне \n she in kitchen
nsubj(кухне, она)
nsubj(kitchen, she)
case(кухне, на)
case(kitchen, in)
~~~

(4)

~~~ sdparse
это ее \n it hers
nsubj(ее, это)
nsubj(hers, it)
~~~

(5)

~~~ sdparse
это для нее \n it for her
nsubj(нее, это)
nsubj(her, it)
case(нее, для)
case(her, for)
~~~

(6a) 

The form _есть_ is originally the 3rd person singular present indicative of the verb _быть_ (which also functions as copula). However, in Modern Russian this form is used only in existential statements, in both numbers and all persons. Past and future existential statements still use normal forms of _быть._

~~~ sdparse
есть еда \n is food
nsubj(есть, еда)
nsubj(is, food)
~~~

(6b) 

~~~ sdparse
есть еда на кухне \n is food in kitchen
nsubj(есть, еда)
nsubj(is, food)
obl(есть, кухне)
obl(is, kitchen)
case(кухне, на)
case(kitchen, in)
~~~


#### Russian

In Russian, there is no copula verb in the present tense. In the future and past tenses, the verb _быть_ "be" is used.
The same analysis applies to categories (1-5).

(1a)

~~~ sdparse
она моя мать \n she my mother
nsubj(мать, она)
nsubj(mother, she)
~~~

(1b)

When the second part is a clause, the demonstrative pronoun _то_ must be inserted. As a result, we have a different syntactic structure with different analysis: the clause formally modifies a nominal represented by the demonstrative.

~~~ sdparse
дело в том , что она моя мать \n fact in that , that she my mother
nsubj(том, дело)
nsubj(that-12, fact)
acl(том, мать)
acl(that-12, mother)
nsubj(мать, она)
nsubj(mother, she)
~~~

(2)

~~~ sdparse
она милая \n she nice
nsubj(милая, она)
nsubj(nice, she)
~~~

(3)

~~~ sdparse
она на кухне \n she in kitchen
nsubj(кухне, она)
nsubj(kitchen, she)
case(кухне, на)
case(kitchen, in)
~~~

(4)

~~~ sdparse
это ее \n it hers
nsubj(ее, это)
nsubj(hers, it)
~~~

(5)

~~~ sdparse
это для нее \n it for her
nsubj(нее, это)
nsubj(her, it)
case(нее, для)
case(her, for)
~~~

(6a) 

The form _есть_ is originally the 3rd person singular present indicative of the verb _быть_ (which also functions as copula). However, in Modern Russian this form is used only in existential statements, in both numbers and all persons. Past and future existential statements still use normal forms of _быть._

~~~ sdparse
есть еда \n is food
nsubj(есть, еда)
nsubj(is, food)
~~~

(6b) 

~~~ sdparse
есть еда на кухне \n is food in kitchen
nsubj(есть, еда)
nsubj(is, food)
obl(есть, кухне)
obl(is, kitchen)
case(кухне, на)
case(kitchen, in)
~~~


#### Finnish

In Finnish the copula verb is _olla_ "to be". 

#### Turkish

In Turkish, there are two copula verbs, _i-_ and _ol-_. The "true" copula is _i-_ which is defective, only having a limited number of tense forms (aorist and past), and cliticising. When a copula is needed in another tense, _ol-_ is employed. However, if there is a form of _i-_ then the equivalent form of _ol-_ takes on the meaning "become".

In the present tense, third person singular aorist non-formal then there is no overt suffix for third person singular. Unlike Russian, where the copula verb does not appear in any part of the present tense paradigm, in Turkish it appears in all persons except third person. This means that it is more like the nominative case in the paradigm (which also has a -Ø suffix, than like the Russian copula).

In Turkish (and indeed in most Turkic languages), existence is a syntactically different, using an adjective _var_ "existent", and so gets a different structure.

## Status quo

The languages in UD with the tokens which have the `cop` relation. The vast majority will need converting in light of the new guidelines.

| Treebank      | Unique `cop` | Top-5 lemmas[POS] with `cop` relation  |
|---------------|--------------------------|-----------------------------------|
| UD-Galician   | 1112         | 121/de[ADP], 40/necesario[ADJ], 38/como[PRON], 24/posible[ADJ], 23/importante[ADJ] |
| UD-Dutch      | 253          | 2491/ben[AUX], 283/word[AUX], 91/vind[VERB], 73/blijf[AUX], 67/maak[VERB] |
| UD-Spanish    | 229          | 5136/ser[VERB], 353/estar[VERB], 78/llamado[VERB], 66/encontrar[VERB], 48/hacer[VERB] |
| UD-Arabic     | 216          | 384/كَان[VERB], 75/لَيس[VERB], 31/عَدّ[VERB], 27/اِعتَبَر[VERB], 25/زَال[VERB] |
| UD-Portuguese | 135          | 2120/ser[VERB], 370/estar[VERB], 176/como[ADV], 91/ficar[VERB], 38/parecer[VERB] |
| UD-French     | 99           | 4878/être[VERB], 232/devenir[VERB], 91/appeler[VERB], 70/nommer[VERB], 51/rester[VERB] |
| UD-Greek      | 67           | 531/είμαι[VERB], 86/αποτελώ[VERB], 34/θεωρώ[VERB], 27/γίνομαι[VERB], 20/καθίσταμαι[VERB] |
| UD-Catalan    | 57           | 3609/ser[AUX], 810/estar[VERB], 722/ser[VERB], 136/cop[NOUN], 53/semblar[VERB] |
| UD-Polish     | 18           | 764/być[VERB], 98/to[VERB], 42/być[AUX], 17/stać[VERB], 12/stawać[VERB] |
| UD-Basque     | 15           | 1993/izan[VERB], 266/egon[VERB], 124/ukan[VERB], 31/izan[AUX], 20/ibili[VERB] |
| UD-German     | 11           | 4698/-[VERB], 86/-[NOUN], 31/-[ADJ], 27/-[ADP], 23/-[PROPN] |
| UD-Estonian   | 9            | 3373/olema[VERB], 37/ole[VERB], 29/tunduma[VERB], 5/paistma[VERB], 4/näima[VERB] |
| UD-Czech      | 6            | 20480/být[VERB], 110/bývat[VERB], 3/stát[VERB], 3/bývávat[VERB], 1/moci[VERB] |
| UD-Hungarian  | 6            | 92/van[VERB], 61/lesz[VERB], 11/lehet[VERB], 3/marad[VERB], 1/hoz[VERB] |
| UD-Bulgarian  | 5            | 1940/съм[VERB], 3/съм[AUX], 1/стана[VERB], 1/разпространявам-(се)[VERB], 1/докосна-(се)[VERB] |
| UD-Buryat     | 5            | 70/байха[VERB], 22/болохо[VERB], 2/ябаха[VERB], 2/үнгэхэ[VERB], 2/байха[AUX] |
| UD-Croatian   | 5            | 1236/biti[AUX], 1/željeti[VERB], 1/težiti[VERB], 1/davati[VERB], 1/bivati[VERB] |
| UD-English    | 4            | 5593/be[VERB], 8/`s[VERB], 5/be[AUX], 1/'[VERB] |
| UD-Kazakh     | 4            | 131/е[VERB], 42/бол[VERB], 1/тұр[VERB], 1/атан[VERB] |
| UD-Uyghur     | 4            | 66/-[VERB], 4/-[NOUN], 3/-[ADJ], 1/-[PART] |
| UD-Hindi      | 3            | 3014/है[VERB], 497/था[VERB], 1/बशर्ते[SCONJ] |
| UD-Irish      | 3            | 369/is[VERB], 3/is[PART], 1/má[SCONJ] |
| UD-Russian    | 3            | 538/-[VERB], 5/-[NOUN], 1/-[ADP] |
| UD-Russian-SynTagRus | 3     | 4457/БЫТЬ[AUX], 622/ЭТО[NOUN], 4/ВОТ[PART] |
| UD-Chinese    | 2            | 1795/-[VERB], 8/-[ADJ] |
| UD-Coptic     | 2            | 30/ⲡⲉ[PART], 2/ⲡ[DET] |
| UD-Danish     | 2            | 1576/være[AUX], 185/blive[AUX] |
| UD-Hebrew     | 2            | 387/-[VERB], 7/-[PRON] |
| UD-Persian    | 2            | 4662/-[VERB], 3/-[ADJ] |
| UD-Turkish    | 2            | 751/i[AUX], 113/değil[VERB] |
| UD-Faroese    | 1            | 1081/vera[VERB] |
| UD-Finnish    | 1            | 3279/olla[VERB] |
| UD-Indonesian | 1            | 1055/-[VERB] |
| UD-Italian    | 1            | 2767/essere[VERB] |
| UD_Norwegian	| 1            | 7217/være[VERB] |
| UD-Slovenian  | 1            | 2820/biti[VERB] |
| UD-Swedish    | 1            | 1629/vara[VERB] |
| UD-Tamil      | 1            | 1/முயல்[VERB] |

## UD-internal references

* <http://universaldependencies.org/u/dep/cop.html>
* <https://github.com/UniversalDependencies/docs/issues/329>
* <http://universaldependencies.org/2015-08-23-uppsala/copula.html>
* <https://github.com/UniversalDependencies/docs/issues/256>

## Further reading

For wider cross-linguistic applicability, it is well worth looking at the following book:

* Stassen, L. (1997), Intransitive predication. Oxford: OUP

The following publications have also been cited:

* Hengeveld, K. (1992), Non-verbal Predication. Berlin & NewYork: Mouton de Gruyter.
* Katz, A. (1996) Cyclical Grammaticalization and the Cognitive Link between Pronoun and Copula. PhD Thesis, Rice University.
* Pustet, R. (2003), Copulas. Universals in the Categorization of the Lexicon. Oxford: OUP.

