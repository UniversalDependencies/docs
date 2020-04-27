---
layout: base
title:  'Yoruba UD'
udver: '2'
---

# UD for Yorùbá <span class="flagspan"><img class="flag" src="../../flags/svg/NG.svg" /></span>

## Tokenization and Word Segmentation

* Following most tokenization patterns, words are delimited by whitespace. Generally, words are  delimited by whitespace or punctuation except:
  * Hyphenated words that cannot be correctly annotated when split _(níhìn-ín)_ are not split.
  * Multiword tokens are not used in Yorùbá; “what you see is what you tokenize”. Contractions are not undone for words that can be correctly assigned a category.

## Morphology

### Tags

* Yorùbá uses 15 universal tags ([SYM]() and [INTJ]() do not occur in the corpus at present).
* The only word tagged as [PART]() is the negation marker _kò._
* Auxiliary verbs ([AUX]()) are grouped to:
  * _jẹ́_ (copular “be”)
  * _ní_ (copular “be”)
  * _kí_ follows _jẹ́_ in constructions that can be understood as third-person existential imperatives (“let there be light”); it is semantically and syntactically redundant, but currently we tag it as auxiliary, together with _jẹ́_
  * _kìí_ – negative habitual (“usually be/do not”)
  * _ń_ – imperfective or progressive aspect
  * _ti_ – perfective aspect (“have”)
  * _yóò, máa, á, a, ó, yió_ – future tense (“shall, will”)
  * _ìbá, ì bá_ – conditional (“would”); written as one word in old texts, modern spelling is _ì bá_
  * _lè_ – modal “can, may”
  * _gbọdọ̀_ – modal “must”
  * _má, máà_ – negative “do not” (cf. the negative particle _kò_)
* The tag [DET]() is used for articles and pronominal words used with a determiner function;
  they can precede or follow the noun they quantify.
  The tag [PRON]() is used for subjects or objects of a noun phrase and to show possession.
  * A word can belong to both categories `DET` and `PRON` _(àwọn)_
  * Gender of a pronoun is only determined by the antecedent (ó – can be he, she or it). It is not explicitly stated.
* Polysemy is an important phenomenon in Yorùbá, to correctly categorize a word, the context where it occurs is the determining factor. Tone can distinguish meaning but a word with the same tone can mean different things in different circumstance (e.g. bí - “procreate”, “if”, “not” )

### Features

* Determiners must agree with noun in Number.
* The numeral tag NUM is used for quantity. Number words follow words they quantify.
* Adjectives agree with nouns (in attributive position) and they only have the positive Degree.
* There is no morphological Case; instead, adpositions (ADP) are used as case markers and specify the role of a noun in a phrase.
* Verb forms are past/perfect (ti), continuous (preverbial particle - ń), future (yóò). Verb serialization is prominent in Yorùbá, the first verb marks tense while the second indicates the direction of an action.

## Syntax

* Yorùbá is an SVO language with a strict word order.

### Subjects

* Nominal subjects are in initial position followed by adjectives, demonstrative and relative clauses.
* Nominal subject (nsubj) is a noun phrase without preposition.
* A finite subordinate clause may serve as the subject and is labeled csubj.

### Objects

* Objects follow the main verb.
* When a verb has two objects, the second one is preceded by a preposition and therefore labeled as oblique (`obl`).

* Verb phrases and prepositional phrases are also head initial.

Yoruba uses 2 relation subtypes:
* `compound:prt` to attach verbal particles to verbs
* `compound:svc` to connect verbs in a serial verb construction

---

## Treebanks

There is only one Yorùbá UD treebank at present:

  * [Yoruba-YTB](../treebanks/yo_ytb/index.html)

## More

This section will probably be moved to a separate page.
Examples are taken from the [Language Gulper](http://www.languagesgulper.com/eng/Yoruba.html).

The default interpretation of the bare verb stem is the past tense.

~~~sdparse
Olú ra aga \n Olú buy chair
nsubj(ra, Olú)
obj(ra, aga)
~~~
“Olu bought a chair.”

The imperfective auxiliary _ń_ is used to refer to an action in progress in
the past or present, or to a habitual action.

~~~sdparse
Wọ́n ń jó \n They IMPF play
nsubj(jó, Wọ́n)
aux(jó, ń)
~~~
“They are (were) playing.”

The perfective auxiliary _ti_ denotes a completed action.

~~~sdparse
Ó ti lọ \n He/she PERF go
nsubj(lọ, Ó)
aux(lọ, ti)
~~~
“He/she has gone.”

The auxiliaries _á/ó/yió_ denote the future tense.

~~~sdparse
ọ̀rẹ́ mi á lọ \n friend my FUT go
nmod(ọ̀rẹ́, mi)
nsubj(lọ, ọ̀rẹ́)
aux(lọ, á)
~~~
“My friend will go.”

A combination of the imperfective/progressive and perfective auxiliaries
indicates the beginning of an action in the past _(progressive perfect)._

~~~sdparse
Mo ti ń gba lẹ́tà rẹ \n I PERF IMPF receive letter your
nsubj(gba, Mo)
aux(gba, ti)
aux(gba, ń)
obj(gba, lẹ́tà)
nmod(lẹ́tà, rẹ)
~~~
“I have started to receive your letters.”

If the verb has two objects, the second one is preceded by the preposition _ní_.
Therefore the second object is treated as an oblique argument in UD.

~~~sdparse
Ó kọ wa ní Yorùbá \n He teach us to Yoruba
nsubj(kọ, Ó)
obj(kọ, wa)
obl(kọ, Yorùbá)
case(Yorùbá, ní)
~~~
“He taught us Yoruba.”

There are _serial verb constructions,_ in which several verbs appear in a sequence
without any intervening coordinator or subordinator. They share tense-aspect markers
if any, and they may share arguments, although an argument may have different roles
with respect to different verbs in the chain.
Some of these constructions could be annotated as either `compound:svc` or `xcomp`.
Precise criteria have yet to be formulated.

~~~sdparse
Ó gbé e wá \n He/she carry it come
nsubj(gbé, Ó)
obj(gbé, e)
compound:svc(gbé, wá)
~~~
“He/she brought it.”

~~~sdparse
Ó tì mí ṣubú \n He/she push me fall
nsubj(tì, Ó)
obj(tì, mí)
compound:svc(tì, ṣubú)
~~~
“He/she pushed me and I fell.”

Two transitive verbs combined may have each their own object.

~~~sdparse
Ó pọn omi kún kete \n He/she draw water fill pot
nsubj(pọn, Ó)
obj(pọn, omi)
compound:svc(pọn, kún)
obj(kún, kete)
~~~
“He/she drew water and filled the pot.”

But there can also be one shared object:

~~~sdparse
Ade ń ra ẹran jẹ \n Ade IMPF buy meat eat
nsubj(ra, Ade)
aux(ra, ń)
obj(ra, ẹran)
compound:svc(ra, jẹ)
~~~
“Ade is buying meat and eating it.”

In _focus constructions,_ a constituent is placed at the front and marked by the morpheme _ni_.
Normal sentence without focus:

~~~sdparse
Olú ra ìwé \n Olú buy book
nsubj(ra, Olú)
obj(ra, ìwé)
~~~
“Olú bought a book.”

Object focus:

~~~sdparse
Ìwé ni Olú rà \n Book FOC Olú buy
nsubj(rà, Olú)
obj(rà, Ìwé)
case(Ìwé, ni)
~~~
“It was a book that Olú bought.”

If the subject is focused, there must be a pronoun at the subject position.
We treat this as an instance of clitic doubling: the fronted noun phrase
is analyzed as the subject, and the pronoun is attached as an expletive:

~~~sdparse
Olú ni ó ra ìwé \n Olú FOC he buy book
nsubj(ra, Olú)
case(Olú, ni)
expl(ra, ó)
obj(ra, ìwé)
~~~
“It was Olú who bought the book.”

Oblique dependent focus:

~~~sdparse
Ní ilé ni ó ti bẹ̀rẹ̀ \n At house FOC it PERF start
case(ilé, Ní)
case(ilé, ni)
obl(bẹ̀rẹ̀, ilé)
nsubj(bẹ̀rẹ̀, ó)
aux(bẹ̀rẹ̀, ti)
~~~
“It was in the house that it started.”

The verb can be fronted in its nominalized form. It must be then repeated as a verb.

~~~sdparse
Rírà ni bàbá ra bàtà \n Buying FOC father buy shoes
case(Rírà, ni)
dislocated(ra, Rírà)
nsubj(ra, bàbá)
obj(ra, bàtà)
~~~
“Father bought shoes.”
