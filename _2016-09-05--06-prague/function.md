---
layout: base
title:  'Function words in UD v2'
---

# Copula in UD v2

Treatment of copula constructions in the treebanks of UD v1.x is very diverse (see Table on the _status quo_ below). The main point of departure for UD v2.0 is that differences between languages in copula constructions should be motivated by real syntactic differences, not by differences in traditional grammars.

Because of the variability in how copulas are treated, it is hard to come up with a consistent scheme that can be applied totally cross-linguistically. There are also many cases, such as copulas with clausal arguments that require more in-depth investigation. However, we hope that by the following guidelines the treebanks released under UD v2.0 will be more consistent in their treatment of the copula both cross-linguistically and within a single language.

## General guidelines and overview

If a language (e.g. Irish) has its own clear guidelines, they are in the spirit of UD, and they don't conflict, then we see no
reason to change them. However, if there are no clear guidelines, then we should follow the following principles:

* There should be only one copula in a language.[1]
  * Subjects of copula constructions should receive a special label, either `nsubjcop` or `nsubj:cop`. This has several benefits, including solving the problem of double subjects. "The idea is you first find the general case.", `nsubj:cop(find, idea)`, `nsubj(find, you)`
  * In languages where the copula is a verb, for verbs that are sometimes called "copula" (e.g. {eng} _become_, {swe} _bli_, {spa} _estar_) other than the prototypical copula (e.g. {eng} _be_, {swe} _vara_, {spa} _ser_), the nominal complement should be `xcomp`.

We propose keeping with current practice in UD v1.x for the following copula constructions:

* with the meaning `is of type` (where `type` is typically an NP), the type should be the head, and the copula word dependent on it with the relation `cop`.
* with the meaning `has quality` (where `quality` is typically an AP), we have the quality as the head and the copula as the dependent.

These are largely consistent across the current UD languages.

The next type we'll consider is `has location` (where `location` [in time, space, company, capacity etc.] is typically a PP or case-marked NP). Current practice in UD v1.x for prepositional phrases/case-marked NPs is inconsistent and we propose changing it. Currently some treebanks (English, Swedish, ...) have the PP as head and the copula depending on it, and others (Finnish, Spanish, ...) have the verb as head and the PP as `nmod`

* We propose making the copula the head in these constructions.
  * It is difficult to establish the root in sentences with multiple adverbials/PPs, e.g. "She is in Prague today with her friends on a school trip".
  * It is related to "existential" constructions that use the copula. Currently in English there is a very different analysis for "The book is on the table here." and "There is a book on the table here."

What to do if there is "zero copula":

* If the copula is not present, then we have two options:
  1. the first is to use the new system for ellipsis (see [ellipsis](ellipsis.html), for these languages this would entail basic sentences having two (or more) dependents of the root node, "Она в деревне." `root>nsubj(Она)`, `root>nmod(деревне)`
  2. Use simple promotion, "Она в деревне." `root(деревне)` + `nsubj(деревне, Она)`

What to do with clausal arguments:

* When a copula clause is used as a subject of another copula, it should be receive the relation `csubj:cop`. For example in the sentence: "Being well-informed will give you certainty." `csubj:cop(give, well-informed)`, `cop(well-informed, Being)`

__TO DISCUSS: Take a look at the commented out examples__

<!--

==English==

===With gerund subject===

Being well-informed will give you certainty .

===With to + inf subject===

To be free is to be capable of thinking one's own thoughts .

===With poss. gerund complement==

The real red flag in all of this is your having been " slightly drunk " as you describe it .

===With that complement===

The main thing is that the device works .

===With to + inf complement===

This was to be the second time Athens would host the games

===With prep + gerund===

Most of the focus was on developing the economy

His primary interest was in applying the methodology

The expulsion was for hitting a professor

===With wh- words===

A heavily discussed topic between scholars is who founded Rome .

A heavily discussed topic between scholars is who was the founding population of Rome .

Potentiality is what a thing is capable of doing .

Paneloux's loss of faith is what leads to his death .

One decision they have to make is which medium they should use .

This building is where the permanent collection is displayed .

This period in Athens , between 335 and 400 , is when Aristotle is believed to have lived .

That is why Gabriel is represented with wings .

It is how plants work together .

==Swedish==

Två viktiga ting är att säga om svårigheter i äktenskap .

En nödvändig förutsättning är att männen är helt med på saken .

==Russian==

Трудно быть богом .


-->


### Notes

1. In languages such as those of the Iberian Romance group, Basque etc. where there is a "state" copula and "essence" copula, then the __essence__ one should get the `cop` relation. However, if the copula is defective and is filled with different stems in different tenses (e.g. Turkish, Kazakh), this is fine.

## Language-specific examples

For the purposes of demonstrating the new classification system a number of examples have been prepared for a range of UD languages. The examples are in English, but where they are ambiguous in a given language multiple variants will be given.

01. She is a student
02. I am a student
03. She was a student
04. I was a student
05. She is happy
06. I am happy
07. She is in shape
08. She is in the house
09. I am in the house
10. She was in the house
11. There is a house in the village
12. The house is in the village
13. There was a house in the village
14. The house was in the village

    These are examples where both sides are nominals, but they could be extended to clausals, e.g.

15. To be free is to be capable of thinking one's own thoughts
16. This period is when Aristotle is believed to have lived
17. The problem is that this has never been tried
18. The important thing is to keep calm

__TO DISCUSS:__ The analysis of (15) could follow (05) and (06), the analysis of (16) could follow (12) and the analysis of (17) and (18) could follow (01).


### English

The English analysis more or less follows the analysis in the `UD_English` treebank, with the addition of the relation `nsubj:cop` for subjects of copula constructions. There is a difference however with how (8--10) are treated.

(1)

~~~ sdparse
She is a student
root(student)
nsubj:cop(student, She)
cop(student, is)
~~~

(2)
~~~ sdparse
I am a student
root(student)
nsubj:cop(student, I)
cop(student, am)
~~~

(3)
~~~ sdparse
She was a student
root(student)
nsubj:cop(student, She)
cop(student, was)
~~~

(4)
~~~ sdparse
I was a student
root(student)
nsubj:cop(student, I)
cop(student, was)
~~~

(5)
~~~ sdparse
She is happy
root(happy)
nsubj:cop(happy, She)
cop(happy, is)
~~~

(6)
~~~ sdparse
I am happy
root(happy)
nsubj:cop(happy, I)
cop(happy, am)
~~~

(7)
~~~ sdparse
She is in shape
root(shape)
nsubj:cop(shape, She)
cop(shape, is)
~~~

(8)

This analysis differs from how it is currently analysed in the `UD_English` treebank,

~~~ sdparse
She is in the house
root(is)
nsubj(is, She)
nmod(is, house)
~~~

(9)
~~~ sdparse
I am in the house
root(am)
nsubj(am, I)
nmod(am, house)
~~~

(10)
~~~ sdparse
She was in the house
root(was)
nsubj(was, She)
nmod(was, house)
~~~

(11)
~~~ sdparse
There is a house in the village
root(is)
expl(is, There)
nsubj(is, house)
nmod(is, village)
~~~

(12)
~~~ sdparse
The house is in the village
root(is)
nsubj(is, house)
nmod(is, village)
~~~

(13)
~~~ sdparse
There was a house in the village
root(was)
expl(was, There)
nsubj(was, house)
nmod(was, village)
~~~

(14)
~~~ sdparse
The house was in the village
root(was)
nsubj(was, house)
nmod(was, village)
~~~

### Swedish

The current `UD_Swedish` treebank considers all uses of "vara" to take the `cop` relation. Under the new guidelines, 8--14 will be analysed differently.

(1)
~~~ sdparse
Hon är en student
root(student)
nsubj:cop(student, Hon)
cop(student, är)
~~~

(2)
~~~ sdparse
Jag är en student
root(student)
nsubj:cop(student, Jag)
cop(student, är)
~~~

(3)
~~~ sdparse
Hon var en student
root(student)
nsubj:cop(student, Hon)
cop(student, var)
~~~

(4)
~~~ sdparse
Jag var en student
root(student)
nsubj:cop(student, Jag)
cop(student, var)
~~~

(5)
~~~ sdparse
Hon är glad
root(glad)
nsubj:cop(glad, Hon)
cop(glad, är)
~~~

(6)
~~~ sdparse
Jag är glad
root(glad)
nsubj:cop(glad, Jag)
cop(glad, är)
~~~

(7)

_Example needed_

(8)

This analysis is a departure from the existing Swedish analysis where "huset" would be considered `root` of the whole sentence.

~~~ sdparse
Hon är i huset
root(är)
nsubj(är, Hon)
nmod(är, huset)
~~~

(9)
~~~ sdparse
Jag är i huset
root(är)
nsubj(är, Jag)
nmod(är, huset)
~~~

(10)
~~~ sdparse
Hon var i huset
root(var)
nsubj(var, Hon)
nmod(var, huset)
~~~

(11)

Existential constructions,  in Swedish do not use the copula verb.

~~~ sdparse
Det finns et hus i byen
root(finns)
expl(finns, Det)
nsubj(finns, hus)
nmod(finns, byen)
~~~

(12)
~~~ sdparse
Huset är i byen
root(är)
nsubj(är, huset)
nmod(är, byen)
~~~

(13)
~~~ sdparse
Det fanns et hus i byen
root(fanns)
expl(fanns, Det)
nsubj(fanns, hus)
nmod(fanns, byen)
~~~

(14)
~~~ sdparse
Huset var i byen
root(var)
nsubj(var, huset)
nmod(var, byen)
~~~



### Spanish

The `UD_Spanish` treebank has very many verbs classified as copula. We propose reducing it to the single verb "ser".

(1)
~~~ sdparse
Ella es estudiante
root(estudiante)
nsubj:cop(estudiante, es)
cop(estudiante, es)
~~~

(2)
~~~ sdparse
Yo soy estudiante
root(estudiante)
nsubj:cop(student, Yo)
cop(estudiante, soy)
~~~

(3)
~~~ sdparse
Ella fue estudiante
root(estudiante)
nsubj:cop(estudiante, Ella)
cop(estudiante, fue)
~~~

(4)
~~~ sdparse
Yo fui estudiante
root(estudiante)
nsubj:cop(estudiante, Yo)
cop(estudiante, fui)
~~~

(5)

In Spanish you can say either _Soy feliz_ "I am happy" or _Estoy feliz_ "I am happy"/"I feel happy". In the following examples, the subject pronouns are expressed to illustrate the difference in relation for the subject. They may equally well be dropped.

~~~ sdparse
Ella es feliz
root(feliz)
nsubj:cop(feliz, Ella)
cop(feliz, es)
~~~

~~~ sdparse
Ella está feliz
root(está)
nsubj(está, Ella)
xcomp(está, feliz)
~~~

(6)

~~~ sdparse
Yo soy feliz
root(feliz)
nsubj:cop(feliz, Yo)
cop(feliz, soy)
~~~

~~~ sdparse
Yo estoy feliz
root(estoy)
nsubj(estoy, Yo)
xcomp(estoy, feliz)
~~~

(7)

Instead of "in shape" we'll use "de puta madre" which means "really great",

~~~ sdparse
Esta canción es de puta madre
root(madre)
nsubj:cop(madre, canción)
cop(madre, es)
~~~

~~~ sdparse
Esta canción está de puta madre
root(está)
nsubj(está, canción)
xcomp(está, madre)
~~~

(8)

In Spanish position uses the verb _estar_ and not _ser_.

~~~ sdparse
Ella está en la casa
root(está)
nsubj(está, Ella)
nmod(está, casa)
~~~

Note that in Catalan, this would be "Ella és a la casa", using the _ser_ verb, not the _estar_ verb. This would be analysed as:

~~~ sdparse
Ella és a la casa
root(és)
nsubj(és, Ella)
nmod(és, casa)
~~~

(9)
~~~ sdparse
Yo estoy en la casa
root(estoy)
nsubj(estoy, Ella)
nmod(estoy, casa)
~~~

(10)
~~~ sdparse
Ella estaba en la casa
root(estaba)
nsubj(estaba, Ella)
nmod(estaba, casa)
~~~

(11)

Existential constructions,  in Spanish do not use the copula verb.

~~~ sdparse
Hay una casa en el pueblo
root(Hay)
obj:dir(Hay, casa)
nmod(Hay, pueblo)
~~~

(12)
~~~ sdparse
La casa está en el pueblo
root(está)
nsubj(está, casa)
nmod(está, pueblo)
~~~

(13)
~~~ sdparse
Había una casa en el pueblo
root(Había)
obj:dir(Había, casa)
nmod(Había, pueblo)
~~~

(14)
~~~ sdparse
La casa estaba en el pueblo
root(estaba)
nsubj(estaba, casa)
nmod(estaba, pueblo)
~~~


### Russian

In Russian, there is no copula verb in the present tense, in the future tense, the verb _быть_ "be" is used. Note that when the copula verb is used, the complement can be either in nominative or instrumental case. When it is instrumental it is `is type of` and when it is nominative it is more like `has quality of`. We propose using the same structure for both.

(1)
~~~ sdparse
Она студентка
root(студентка)
nsubj:cop(студентка, Она)
~~~

(2)
~~~ sdparse
Я студентка
root(студентка)
nsubj:cop(студентка, Я)
~~~

(3)
~~~ sdparse
Она была студентка
root(студентка)
nsubj:cop(студентка, Она)
cop(студентка, была)
~~~

~~~ sdparse
Она была студенткой
root(студенткой)
nsubj:cop(студенткой, Она)
cop(студенткой, была)
~~~

(4)
~~~ sdparse
Я была студентка
root(студентка)
nsubj:cop(студентка, Я)
cop(студентка, была)
~~~

~~~ sdparse
Я была студенткой
root(студенткой)
nsubj:cop(студенткой, Я)
cop(студенткой, была)
~~~

(5)

The same goes with adjectival uses:

~~~ sdparse
Она счастлива
root(счастлива)
nsubj:cop(счастлива, Она)
~~~

(6)

~~~ sdparse
Я счастлива
root(счастлива)
nsubj:cop(счастлива, Я)
~~~

(7)

Instead of "in shape", we'll use "в курсе" which means "on the ball"

~~~ sdparse
Она в курсе
root(курсе)
nsubj:cop(курсе, Она)
~~~

(8)

In Russian, there is no verb used for locative predication in the present tense, this presents a problem for both inter-language and intra-language consistency. There are two main ways to deal with it. The first is to use promotion and promote the PP to be the root of the sentence. This will allow the distinction of case (7) and case (8) by the relation of the subject.

~~~ sdparse
Она в дому
root(дому)
nsubj(дому, Она)
~~~

The second would be to take advantage of the new system for ellipsis and use ellipsis to deal with it:

~~~ sdparse
Она в дому
root>nmod(дому)
root>nsubj(Она)
~~~

(9)

As with (8),

~~~ sdparse
Я в дому
root(дому)
nsubj(дому, Я)
~~~

~~~ sdparse
Я в дому
root>nmod(дому)
root>nsubj(Я)
~~~

(10)

In the past tense we have the verb and we can use that as the root:

~~~ sdparse
Она была в дому
root(была)
nsubj(была, Она)
nmod(была, дому)
~~~

(11)

In Russian, in the present tense, existential constructions use "есть" which is sometimes described as a "predicative".

~~~ sdparse
Есть дом в деревне
root(Есть)
nsubj(Есть, дом)
nmod(Есть, деревне)
~~~

(12)
~~~ sdparse
Дом в деревне
root(está)
nsubj(está, casa)
nmod(está, pueblo)
~~~

(13)

In the past tense (and future tense), the verb быть is employed. As far as I am able to ascertain, syntactically (13) and (14) are equivalent in Russian aside from the word order considerations.

~~~ sdparse
Был дом в деревне
root(Был)
nsubj(Был, дом)
nmod(Был, деревне)
~~~

(14)
~~~ sdparse
Дом был в деревне
root(был)
nsubj(был, дом)
nmod(был, деревне)
~~~


### Finnish

In Finnish the copula verb is _olla_ "to be". Its omplement is typically in the nominative, although it may also be in the essive case -nA.

(1)
~~~ sdparse
Se on opiskelija
root(opiskelija)
nsubj:cop(opiskelija, Se)
cop(opiskelija, on)
~~~

(2)
~~~ sdparse
Mä oon opiskelija
root(opiskelija)
nsubj:cop(opiskelija, Mä)
cop(opiskelija, oon)
~~~

(3)
~~~ sdparse
Se oli opiskelija
root(opiskelija)
nsubj:cop(opiskelija, Se)
cop(opiskelija, oli)
~~~

(4)
~~~ sdparse
Mä olin opiskelija
root(opiskelija)
nsubj:cop(opiskelija, Mä)
cop(opiskelija, olin)
~~~

(5)
~~~ sdparse
Se on iloinen
root(iloinen)
nsubj:cop(iloinen, Se)
cop(iloinen, on)
~~~

(6)
~~~ sdparse
Mä oon iloinen
root(iloinen)
nsubj:cop(iloinen, Mä)
cop(iloinen, oon)
~~~

(7)
~~~ sdparse
Se on kunnossa
root(kunnossa)
nsubj:cop(kunnossa, Se)
cop(kunnossa, on)
~~~

(8)
~~~ sdparse
Se on talossa
root(on)
nsubj(on, Se)
nmod(on, talossa)
~~~

(9)
~~~ sdparse
Mä oon talossa
root(oon)
nsubj(oon, Mä)
nmod(oon, talossa)
~~~

(10)
~~~ sdparse
Se oli talossa
root(oli)
nsubj(oli, Se)
nmod(oli, talossa)
~~~

(11)

In Finnish, existential and non-existential are identical aside from word order.

~~~ sdparse
Kylässä on talo
root(on)
nsubj(on, talo)
nmod(on, kylässä)
~~~

(12)
~~~ sdparse
Talo on kylässä
root(on)
nsubj(on, talo)
nmod(on, kylässä)
~~~

(13)
~~~ sdparse
Kylässä oli talo
root(oli)
nsubj(oli, talo)
nmod(oli, kylässä)
~~~

(14)
~~~ sdparse
Talo oli kylässä
root(oli)
nsubj(oli, talo)
nmod(oli, kylässä)
~~~


### Turkish

In Turkish, there are two copula verbs, _i-_ and _ol-_. The "true" copula is _i-_ which is defective, only having a limited number of tense forms (aorist and past), and cliticising. When a copula is needed in another tense, _ol-_ is employed. However, if there is a form of _i-_ then the equivalent form of _ol-_ takes on the meaning "become".

(1)

In the present tense, third person singular aorist non-formal then there is no overt suffix for third person singular. Unlike Russian, where the copula verb does not appear in any part of the present tense paradigm, in Turkish it appears in all persons except third person. This means that it is more like the nominative case in the paradigm (which also has a -Ø suffix, than like the Russian copula).


In the following examples the hyphen is used to separate cliticised syntactic words.

~~~ sdparse
O öğrenci -Ø
root(öğrenci)
nsubj:cop(öğrenci, O)
cop(öğrenci, -Ø)
~~~

(2)
~~~ sdparse
Ben öğrenci -yim.
root(öğrenci)
nsubj:cop(öğrenci, Ben)
cop(öğrenci, -yim)
~~~

(3)
~~~ sdparse
O öğrenci -ydi
root(öğrenci)
nsubj:cop(öğrenci, O)
cop(öğrenci, di)
~~~

The copula verb here can also be written separately instead of cliticised in more formal styles,

~~~ sdparse
O öğrenci idi
root(öğrenci)
nsubj:cop(öğrenci, O)
cop(öğrenci, idi)
~~~

(4)
~~~ sdparse
Ben öğrenci -ydim.
root(öğrenci)
nsubj:cop(öğrenci, Ben)
cop(öğrenci, -ydim)
~~~

(5)
~~~ sdparse
O mutlu -Ø
root(mutlu)
nsubj:cop(mutlu, O)
cop(mutlu, -Ø)
~~~

(6)
~~~ sdparse
Ben mutluyum
root(mutlu)
nsubj:cop(mutlu, Ben)
cop(mutlu, -yum)
~~~

(7)

_Example needed_

(8)

The lack of suffix for third person singular present tense non-formal means that it will look like the head of locative predicates is empty, but see argumentation about nominative above. If the parser can guess that something is nominative, it can guess that it's third person singular present tense.

~~~ sdparse
O evde -Ø
root(-Ø)
nsubj(-Ø, O)
nmod(-Ø, evde)
~~~

(9)

~~~ sdparse
Ben evde -yim
root(-yim)
nsubj(-yim, Ben)
nmod(-yim, evde)
~~~

(10)
~~~ sdparse
O evde -ydi
root(-ydi)
nsubj(-ydi, O)
nmod(-ydi, evde)
~~~

(11)

In Turkish (and indeed in most Turkic languages), existence is a different structure, using an adjective _var_ "existent", and so gets a different structure.

~~~ sdparse
Köyde ev var -Ø
root(var)
nsubj:cop(var, ev)
cop(var, -Ø)
nmod(var, Köyde)
~~~

(12)
~~~ sdparse
Ev köyde -Ø
root(-Ø)
nsubj(-Ø, Ev)
nmod(-Ø, köyde)
~~~

(13)
~~~ sdparse
Köyde ev var -dı
root(var)
nsubj:cop(var, ev)
cop(var, -dı)
nmod(var, Köyde)
~~~

(14)
~~~ sdparse
Ev köyde -ydi
root(-ydi)
nsubj(-ydi, Ev)
nmod(-ydi, köyde)
~~~


### Irish

Irish has a difference between a _copula_ verb "is" and what is called a substantive verb "bí". Only the copula verb receives the `cop` relation. The substantive verb is head and takes an argument with `xcomp`. Teresa's thesis [http://www.nclt.dcu.ie/~tlynn/Teresa_PhDThesis_final.pdf] has an in depth description of the treatment of the copula in Irish.

(1)

(2)

(3)
~~~ sdparse
Ba dhalta í
root(dhalta)
cop(dhalta, Ba)
~~~

~~~ sdparse
Bhí sí ina dalta
root(Bhí)
xcomp:pred(Bhí, dalta)
~~~

(4)

_Not applicable._

(5)

_Not applicable._

(6)

(7)

(8)

(9)

(10)

(11)

(12)

(13)

(14)



## Status quo

The languages in UD with the tokens which have the `cop` relation. If we adopt the above recommendations, the vast majority will need converting.

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

* http://universaldependencies.org/u/dep/cop.html
*  https://github.com/UniversalDependencies/docs/issues/329
* http://universaldependencies.org/2015-08-23-uppsala/copula.html
* https://github.com/UniversalDependencies/docs/issues/256



## Further reading

For wider cross-linguistic applicability, it is well worth looking at the following book:

* Stassen, L. (2003), Intransitive predication. Oxford: OUP

The following publications have also been cited:

* Hengeveld, K. (1992), Non-verbal Predication. Berlin & NewYork: Mouton de Gruyter.
* Katz, A. (1996) Cyclical Grammaticalization and the Cognitive Link between Pronoun and Copula. PhD Thesis, Rice University.
* Pustet, R. (2003), Copulas. Universals in the Categorization of the Lexicon. Oxford: OUP.

