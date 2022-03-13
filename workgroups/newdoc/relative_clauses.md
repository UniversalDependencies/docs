---
layout: base
title:  'Relative Clauses'
udver: '2'
---

<!-- Cloned from Nathan's draft of the documentation of `acl:relcl` in English. Modified by Dan to reflect more languages. -->

A prototypical **relative clause (RC)** modifies a nominal that is understood to fulfill some grammatical role in the RC.
The head is said to be “extracted” from the RC. Occasionally the head may be another clause rather than a nominal;
this special case will be discussed below.

In the basic dependency representation, the main predicate of the prototypical (that is, adnominal) RC attaches to the head as [acl:relcl]()
(if a language has relative clauses, it should use the `:relcl` subtype to distinguish relative clauses from other adnominal clauses).
This is shown in the example on the left.

In the [enhanced dependency layer](/u/overview/enhanced-syntax.html), there is an additional dependency in the opposite direction
to indicate the role from which the head was “extracted”. This is shown on the right.

<table id="rc-example1"> <!--I saw the man you love . -->
<tbody><tr><td width="480">
<div class="conllu-parse">
1 I      _ _ _ _ 2 nsubj _ _
2 saw    _ _ _ _ 0 root _ _
3 the    _ _ _ _ 4 det _ _
4 man    _ _ _ _ 2 obj _ _
5 you    _ _ _ _ 6 nsubj   _ _
6 love   _ _ _ _ 4 acl:relcl _ _
7 .      _ _ _ _ 2 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 6 4 obj color:blue
1 I      _ _ _ _ 2 nsubj _ _
2 saw    _ _ _ _ 0 root _ _
3 the    _ _ _ _ 4 det _ _
4 man    _ _ _ _ 2 obj 6:obj _
5 you    _ _ _ _ 6 nsubj   _ _
6 love   _ _ _ _ 4 acl:relcl _ _
7 .      _ _ _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>

The RC may contain a **relativizer** (relative pronoun _that_, _who_, relative determiner _which_, _whose_ etc.; see [PronType]()`=Rel`).
The relativizer can be understood as an anaphor whose antecedent is the head of the relative clause. Not all languages use a relativizer.
Even in English, the relativizer is optional in some contexts, as in the object relativization in the examples above.

Basic UD (left) analyzes the relativizer, if present, as filling a role in the RC.
Specifically:

* Pronominal relativizers (_that_, _which_, _who_, _what_, etc.) are nominals and fill roles such as subject, object, or oblique.[^1]
* Adverbial relativizers (_where_, _when_, _why_, _how_, etc.) attach as [advmod]() within the RC.
* A possessive pronominal relativizer _(whose)_ modifies a nominal (subject, object, oblique modifier) within the RC the same way
  as a normal possessive modifier would, i.e., depending on language, it can be [nmod:poss](), [det:poss](), [nmod]() or [det]().
* A relative determiner _(which)_ may modify another noun within the RC via the [det]() relation.

[^1]: *The Cambridge Grammar of the English Language* (Huddleston and Pullum, 2002) considers _that_ at the beginning of a relative clause to be a subordinator. UD adopts the traditional analysis of _that_ as a relative pronoun roughly interchangeable with _which_ etc.

In Enhanced UD (right), the relativizer instead attaches to its antecedent via the `ref` relation
(as the antecedent is directly connected to a role in the RC).

<table id="rc-example3"> <!--I saw the book which you bought . -->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 7 5 obj color:orange
1 I      _ PRON  _ _ 2 nsubj _ _
2 saw    _ VERB  _ _ 0 root _ _
3 the    _ DET   _ _ 4 det _ _
4 book   _ NOUN  _ _ 2 obj _ _
5 which  which PRON WDT PronType=Rel 7 obj   _ _
6 you    _ PRON  _ _ 7 nsubj   _ _
7 bought _ VERB  _ _ 4 acl:relcl _ _
8 .      _ PUNCT _ _ 2 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 4 5 ref color:blue
# visual-style 7 4 obj color:blue
1 I      _ PRON  _ _ 2 nsubj _ _
2 saw    _ VERB  _ _ 0 root _ _
3 the    _ DET   _ _ 4 det _ _
4 book   _ NOUN  _ _ 2 obj 7:obj _
5 which  which PRON WDT PronType=Rel 4 ref   _ _
6 you    _ PRON  _ _ 7 nsubj   _ _
7 bought _ VERB  _ _ 4 acl:relcl _ _
8 .      _ PUNCT _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>

<table> <!--the episode where Monica sings-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 5 3 advmod color:orange
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 episode episode NOUN NN Number=Sing 0 root _ _
3 where where ADV WRB PronType=Rel 5 advmod _ _
4 Monica Monica PROPN NNP Number=Sing 5 nsubj _ _
5 sings sing VERB VBZ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 2 3 ref color:blue
# visual-style 5 2 obl color:blue
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 episode episode NOUN NN Number=Sing 0 root 5:obl _
3 where where ADV WRB PronType=Rel 2 ref _ _
4 Monica Monica PROPN NNP Number=Sing 5 nsubj _ _
5 sings sing VERB VBZ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

<table> <!--the woman whose cat smells-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 4 3 nmod:poss color:orange
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 woman woman NOUN NN Number=Sing 0 root _ _
3 whose whose PRON WP$ Poss=Yes|PronType=Rel 4 nmod:poss _ _
4 cat cat NOUN NN Number=Sing 5 nsubj _ _
5 smells smell VERB VBZ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 2 3 ref color:blue
# visual-style 4 2 nmod:poss color:blue
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 woman woman NOUN NN Number=Sing 0 root 4:nmod:poss _
3 whose whose PRON WP$ Poss=Yes|PronType=Rel 2 ref _ _
4 cat cat NOUN NN Number=Sing 5 nsubj _ _
5 smells smell VERB VBZ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

<!-- https://github.com/UniversalDependencies/docs/commit/b7b62a7f9bafdbd8c3f7be9e4f72da62b3cb0d0d#commitcomment-68550464 -->
<table> <!--ENA shall pay $38,000, which amount shall be subject to…-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 8 7 det color:orange
1 ENA ENA PROPN _ _ 3 nsubj _ _
2 shall shall AUX _ _ 3 aux _ _
3 pay pay VERB _ _ 0 root _ _
4 $ $ SYM _ _ 3 obj _ _
5 38,000 38,000 NUM _ _ 4 nummod _ _
6 , , PUNCT _ _ 11 punct _ _
7 which which DET _ _ 8 det _ _
8 amount amount NOUN _ _ 11 nsubj _ _
9 shall shall AUX _ _ 11 aux _ _
10 be be AUX _ _ 11 cop _ _
11 subject… subject NOUN _ _ 4 acl:relcl _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 4 7 ref color:blue
# visual-style 8 4 nmod color:blue
1 ENA ENA PROPN _ _ 3 nsubj _ _
2 shall shall AUX _ _ 3 aux _ _
3 pay pay VERB _ _ 0 root _ _
4 $ $ SYM _ _ 3 obj 8:nmod _
5 38,000 38,000 NUM _ _ 4 nummod _ _
6 , , PUNCT _ _ 11 punct _ _
7 which which DET _ _ 4 ref _ _
8 amount amount NOUN _ _ 11 nsubj _ _
9 shall shall AUX _ _ 11 aux _ _
10 be be AUX _ _ 11 cop _ _
11 subject… subject NOUN _ _ 4 acl:relcl _ _
</div>
</td></tr></tbody>
</table>

If the relative clause has a nominal predicate, the relative pronoun may occupy the head position
within the clause. In such cases no enhanced relation should be added from its parent to the
head noun (because they are the same node). We should only add a `nsubj` relation from the antecedent
to the `nsubj` of the relative clause (and remove the corresponding `nsubj` relation between the
relative pronoun and the subject).

<span style='color:red; font-weight:bold'>DZ: This example and explanation is taken from our
documentation of enhanced dependencies, where it was added after issue #531. However, the solution
appears half-done (why are the remaining children of _which_ not re-attached to _chairman_?)
and it should be elaborated.</span>

<!-- https://github.com/UniversalDependencies/docs/issues/531 -->
<table> <!--He became chairman, which he still is-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 5 6 nsubj color:orange
1 He       he       PRON  _ Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs 2 nsubj _ _
2 became   become   VERB  _ Mood=Ind|Tense=Past|VerbForm=Fin 0 root _ _
3 chairman chairman NOUN  _ Number=Sing 2 xcomp _ SpaceAfter=No
4 ,        ,        PUNCT _ _ 5 punct _ _
5 which    which    PRON  _ PronType=Rel 3 acl:relcl _ _
6 he       he       PRON  _ Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs 5 nsubj _ _
7 still    still    ADV   _ _ 5 advmod _ _
8 is       be       AUX   _ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 5 cop _ SpaceAfter=No
9 .        .        PUNCT _ _ 2 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 3 6 nsubj color:blue
# visual-style 3 5 ref color:blue
# visual-style 3 1 nsubj:xsubj color:blue
1 He       he       PRON  _ Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs 2 nsubj 3:nsubj:xsubj _
2 became   become   VERB  _ Mood=Ind|Tense=Past|VerbForm=Fin 0 root _ _
3 chairman chairman NOUN  _ Number=Sing 2 xcomp _ SpaceAfter=No
4 ,        ,        PUNCT _ _ 5 punct _ _
5 which    which    PRON  _ PronType=Rel 3 acl:relcl 3:ref _
6 he       he       PRON  _ Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs 3 nsubj _ _
7 still    still    ADV   _ _ 5 advmod _ _
8 is       be       AUX   _ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 5 cop _ SpaceAfter=No
9 .        .        PUNCT _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>

A relative clause with no relativizer, like (1), is called a **reduced relative clause**. One with a relativizer, like (3), is called a **nonreduced relative clause**.



## Notable Properties

In some languages (such as English), relative clauses are typically expected to be finite _(people who live in glass houses),_
although they may also be infinitival _(I found a house in which to live; I found a house (for my mother) to live in)._
Participial clauses _(people living in glass houses; students given high marks)_ are not considered relative clauses in English,
they are ordinary adnominal clauses ([acl]()), or even adjectival modifiers ([amod]()) if the participle is tagged [ADJ]().
<!-- Infinitival RCs are discussed in CGEL pp. 1067-1068
English EWT only has infinitival relative clauses for free relatives.
_nice people to meet here_ is plain `acl(people, meet)` there.
Not marking it as a RC means there is no way to find that there is a gap/extracted element (cf. _the idea to meet_). -->

Note that the above distinction is not universal, as some languages do not distinguish finite and non-finite verb forms.

An element can be extracted from several levels of embedding:

<table> <!--I saw the book which you pretended to think was boring-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 11 5 nsubj color:orange
1  I         _ PRON  _ _ 2 nsubj _ _
2  saw       _ VERB  _ _ 0 root _ _
3  the       _ DET   _ _ 4 det _ _
4  book      _ NOUN  _ _ 2 obj _ _
5  which which PRON  WDT PronType=Rel 11 nsubj _ _
6  you       _ PRON  _ _ 7 nsubj _ _
7  pretended _ VERB  _ _ 4 acl:relcl _ _
8  to        _ PART  _ _ 9 mark _ _
9  think     _ VERB  _ _ 7 xcomp _ _
10 was       _ AUX   _ _ 11 cop _ _
11 boring    _ ADJ   _ _ 9 ccomp _ _
12 .         _ PUNCT _ _ 2 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 4 5 ref color:blue
# visual-style 11 4 nsubj color:blue
1  I         _ PRON  _ _ 2 nsubj _ _
2  saw       _ VERB  _ _ 0 root _ _
3  the       _ DET   _ _ 4 det _ _
4  book      _ NOUN  _ _ 2 obj 11:nsubj _
5  which which PRON  WDT PronType=Rel 4 ref _ _
6  you       _ PRON  _ _ 7 nsubj 9:nsubj:xsubj _
7  pretended _ VERB  _ _ 4 acl:relcl _ _
8  to        _ PART  _ _ 9 mark _ _
9  think     _ VERB  _ _ 7 xcomp _ _
10 was       _ AUX   _ _ 11 cop _ _
11 boring    _ ADJ   _ _ 9 ccomp _ _
12 .         _ PUNCT _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>

Semantically, relative clauses may be **restrictive** (helping to narrow a set of referents), or **ascriptive** (adding detail about a referent that has already been identified):

* Restrictive
  * _I rented the movie <b>which you bought</b> (as opposed to some other one)._
* Ascriptive
  * _I introduced myself to John, <b>who promptly forgot my name</b>._
  * _I rented the movie, <b>which you bought</b> (as opposed to renting)._

The restrictive/ascriptive distinction does not affect the UD analysis: all RCs are analyzed with the `acl:relcl` relation.

The antecedent of an ascriptive relative clause may be even a clause (rather than a nominal):

  * _I tried to explain myself – <b>which was a bad idea</b>._

<span style='color:red; font-weight:bold'>DZ: Did we reach a consensus about clausal antecedents?
There is the fundamental issue that `acl` must depend on a nominal. I would prefer something like
`parataxis:relcl` or `advcl:relcl` over `acl:relcl` in these cases.</span>

<table> <!--I tried to explain myself – which was a bad idea-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 11 7 nsubj color:orange
1  I         _ PRON  _ _ 2 nsubj _ _
2  tried     _ VERB  _ _ 0 root _ _
3  to        _ PART  _ _ 4 mark _ _
4  explain   _ NOUN  _ _ 2 xcomp _ _
5  myself    _ PRON  _ _ 4 obj _ _
6  –         _ PUNCT _ _ 11 punct _ _
7  which which PRON  WDT PronType=Rel 11 nsubj _ _
8  was       _ AUX   _ _ 11 cop _ _
9  a         _ DET   _ _ 11 det _ _
10 bad       _ ADJ   _ _ 11 amod _ _
11 idea      _ NOUN  _ _ 2 parataxis:relcl _ _
12 .         _ PUNCT _ _ 2 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 2 7 ref color:blue
# visual-style 11 2 csubj color:blue
1  I         _ PRON  _ _ 2 nsubj 4:nsubj:xsubj _
2  tried     _ VERB  _ _ 0 root 11:csubj _
3  to        _ PART  _ _ 4 mark _ _
4  explain   _ NOUN  _ _ 2 xcomp _ _
5  myself    _ PRON  _ _ 4 obj _ _
6  –         _ PUNCT _ _ 11 punct _ _
7  which which PRON  WDT PronType=Rel 2 ref _ _
8  was       _ AUX   _ _ 11 cop _ _
9  a         _ DET   _ _ 11 det _ _
10 bad       _ ADJ   _ _ 11 amod _ _
11 idea      _ NOUN  _ _ 2 parataxis:relcl _ _
12 .         _ PUNCT _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>



## Case-marked Relativizers

If required by the syntactic relations within the RC, the relativizer bears case markers (morphological or
adpositional), just as if the position were filled with a full nominal.

* [cs] _nebezpečí, kterého se bojíte_ “danger which you fear” (lit. danger, which.`Gen` yourself you.fear)
* [cs] _nebezpečí, kterému čelíte_ “danger which you are facing” (lit. danger, which.`Dat` you.face)
* [cs] _nebezpečí, které překonáte_ “danger which you overcome” (lit. danger, which.`Acc` you.overcome)
* [cs] _nebezpečí, o kterém nevíte_ “danger which you do not know about” (lit. danger, about which.`Loc` you.not.know)
* [cs] _nebezpečí, se kterým se vyrovnáte_ “danger which you cope with” (lit. danger, with which.`Ins` yourself you.cope)

The enhanced relations include deep syntactic relations. Therefore, in case marking languages the enhanced
dependencies may link verb dependents that are not in the expected morphological case, required by surface syntax.
In the following Czech example, the relative modifier phrase _v&nbsp;němž_ “in which” is obligatorily in the locative
case form (`Case=Loc`). If it were a main clause, the referent _dům_ “house” would have to be in locative too:
_v&nbsp;domě_ “in house”. However, here it is in the nominative (`Case=Nom`), and the enhanced dependency `obl`
going to a nominative dependent is something we would not expect to see, given the morpho-syntactic rules of the language.

<table> <!--dům, v němž žijeme = the house we live in (lit. house, in that we-live)-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 5 4 obl color:orange
1 dům house NOUN _ Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing 0 root       _ Gloss=house
2 , , PUNCT _ _ 5 punct      _ Gloss=,
3 v in ADP _ _ 4 case       _ Gloss=in
4 němž that PRON _ Case=Loc|Gender=Masc|Number=Sing|PronType=Rel 5 obl     _ Gloss=which
5 žijeme live VERB _ Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 1 acl:relcl _ Gloss=we-live
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 5 1 obl:v:gen color:blue
# visual-style 1 4 ref color:blue
1 dům house NOUN _ Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing  0 root 5:obl:v:gen Gloss=house
2 , , PUNCT _ _ 5 punct      _ Gloss=,
3 v in ADP _ _ 4 case       _ Gloss=in
4 němž that PRON _ Case=Loc|Gender=Masc|Number=Sing|PronType=Rel 1 ref     _ Gloss=which
5 žijeme live VERB _ Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act 1 acl:relcl _ Gloss=we-live
</div>
</td></tr></tbody>
</table>

### Preposition Stranding

In English, a preposition may be left “stranded” in the relative clause (its noun corresponding to the parent of the RC):

* _The house (that) you said you wanted to live <b>in</b> is for sale._
  * Non-RC paraphrase: _The house is on sale; you said you wanted to live <b>in</b> that house._

The basic UD analysis depends on whether it is a reduced or nonreduced RC.
In a nonreduced RC, the relativizer is available to fill a role in the RC, and thus gets marked with
the preposition (even if this contributes to the nonprojectivity of the tree):

<table> <!--the house that you said you wanted to live in-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 9 3 obl color:orange
1 the    the   DET   _ _ 2 det _ _
2 house  house NOUN  _ _ 0 root _ _
3 that   that  PRON  _ _ 9 obl _ _
4 you    you   PRON  _ _ 5 nsubj _ _
5 said   say   VERB  _ _ 2 acl:relcl _ _
6 you    you   PRON  _ _ 7 nsubj _ _
7 wanted want  VERB  _ _ 5 ccomp _ _
8 to     to    PART  _ _ 9 mark _ _
9 live   live  VERB  _ _ 7 xcomp _ _
10 in    in    ADP   _ _ 3 case _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 2 3 ref color:blue
# visual-style 9 2 obl:in color:blue
# visual-style 9 6 nsubj:xsubj color:blue
1 the    the   DET   _ _ 2 det _ _
2 house  house NOUN  _ _ 0 root 9:obl:in _
3 that   that  PRON  _ _ 2 ref _ _
4 you    you   PRON  _ _ 5 nsubj _ _
5 said   say   VERB  _ _ 2 acl:relcl _ _
6 you    you   PRON  _ _ 7 nsubj 9:nsubj:xsubj _
7 wanted want  VERB  _ _ 5 ccomp _ _
8 to     to    PART  _ _ 9 mark _ _
9 live   live  VERB  _ _ 7 xcomp _ _
10 in    in    ADP   _ _ 3 case _ _
</div>
</td></tr></tbody>
</table>

In a reduced RC, however, the preposition is the only word left from the nominal filling the role in the RC,
so the preposition gets promoted to the head of the nominal (in accord with the standard UD treatment of
ellipsis).

<table> <!--the house you said you wanted to live in-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 8 9 obl color:orange
1 the    the   DET   _ _ 2 det _ _
2 house  house NOUN  _ _ 0 root _ _
3 you    you   PRON  _ _ 4 nsubj _ _
4 said   say   VERB  _ _ 2 acl:relcl _ _
5 you    you   PRON  _ _ 6 nsubj _ _
6 wanted want  VERB  _ _ 4 ccomp _ _
7 to     to    PART  _ _ 8 mark _ _
8 live   live  VERB  _ _ 6 xcomp _ _
9 in     in    ADP   _ _ 8 obl _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 2 9 ref color:blue
# visual-style 8 2 obl:in color:blue
# visual-style 8 5 nsubj:xsubj color:blue
1 the    the   DET   _ _ 2 det _ _
2 house  house NOUN  _ _ 0 root 8:obl:in _
3 you    you   PRON  _ _ 4 nsubj _ _
4 said   say   VERB  _ _ 2 acl:relcl _ _
5 you    you   PRON  _ _ 6 nsubj 8:nsubj:xsubj _
6 wanted want  VERB  _ _ 4 ccomp _ _
7 to     to    PART  _ _ 8 mark _ _
8 live   live  VERB  _ _ 6 xcomp _ _
9 in     in    ADP   _ _ 2 ref _ _
</div>
</td></tr></tbody>
</table>



## Relative versus Non-relative Subordinate Clauses

### Interrogative Clauses

In languages where the set of relativizers overlaps with interrogative words (such as the wh-words in English),
some clauses may superficially look like relative clauses while they are in fact interrogative clauses (indirect
questions). Such clauses are typically complements of verbs of saying or knowing _(I don't know who paid the bill),_
but they may also depend on a similar nominal _(the question who paid the bill)._ In this
latter case they are adnominal clauses ([acl]()) but not relative clauses. There is no coreference between
_question_ and _who_ (cf. _the person who paid the bill,_ here _person_ and _who_ are coreferential and it is
a relative clause).

Language-specific guidelines must specify whether the wh-word is to be disambiguated between [PronType]()`=Int`
and `Rel`, or it can be `PronType=Int,Rel` everywhere and the disambiguation is only at the syntactic level
between `acl` and `acl:relcl`.

<!--the question who paid the bill-->
<div class="conllu-parse">
# visual-style 6 4 obl color:orange
1 the      the      DET   _ _ 2 det _ _
2 question question NOUN  _ _ 0 root _ _
3 who      who      PRON  _ _ 4 nsubj _ _
4 paid     pay      VERB  _ _ 2 acl _ _
5 the      the      DET   _ _ 6 det _ _
6 bill     bill     NOUN  _ _ 4 obj _ _
</div>

### Adverbial Clauses

Pronominal adverbs such as _where_, _when_, _how_, _why_ frequently introduce **adverbial clauses** ([advcl]()).
They can also introduce non-relative **adnominal modifier clauses** ([acl]()) similarly providing time/place/manner information.
In the following example, _when_ is an interrogative/relative adverb (`PronType=Int,Rel`) but the adnominal clause
it introduces is not relative because there is no coreference between _headlines_ and _when_ (but cf.
_the times when Nixon resigned_, here it would be a relative clause).

<!--The headlines when Nixon resigned were legendary.-->
<div class="conllu-parse">
1 The       the       DET   _ _ 2 det _ _
2 headlines headline  NOUN  _ _ 7 nsubj _ _
3 when      when      ADV   _ _ 5 advmod _ _
4 Nixon     Nixon     PROPN _ _ 5 nsubj _ _
5 resigned  resign    VERB  _ _ 2 acl _ _
6 were      be        AUX   _ _ 7 cop _ _
7 legendary legendary ADJ   _ _ 0 root _ _
8 .         .         PUNCT _ _ 7 punct _ _
</div>

In general, an adnominal phrase with a wh-adverb is considered a relative clause if the wh-adverb can be paraphrased
by _in which_ or similar, or if the head noun reifies the kind of relation (_the time when_, _the place where_, _the reason why_).

<table> <!--I remember the time when Nixon resigned.-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 7 5 advmod color:orange
1 I        I        PRON  _ _ 2 nsubj _ _
2 remember remember VERB  _ _ 0 root _ _
3 the       the     DET   _ _ 4 det _ _
4 time      time    NOUN  _ _ 2 obj _ _
5 when      when    ADV   _ _ 7 advmod _ _
6 Nixon     Nixon   PROPN _ _ 7 nsubj _ _
7 resigned  resign  VERB  _ _ 4 acl:relcl _ _
8 .         .       PUNCT _ _ 2 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 4 5 ref color:blue
# visual-style 7 4 obl color:blue
1 I        I        PRON  _ _ 2 nsubj _ _
2 remember remember VERB  _ _ 0 root _ _
3 the       the     DET   _ _ 4 det _ _
4 time      time    NOUN  _ _ 2 obj 7:obl _
5 when      when    ADV   _ _ 4 ref _ _
6 Nixon     Nixon   PROPN _ _ 7 nsubj _ _
7 resigned  resign  VERB  _ _ 4 acl:relcl _ _
8 .         .       PUNCT _ _ 2 punct _ _
</div>
</td></tr></tbody>
</table>

Note that the English word _when_ is ambiguous between an interrogative/relative adverb, and a subordinating
conjunction introducing a conditional clause. In the former context it should be tagged [ADV]() `PronType=Int,Rel`,
in the latter it should be tagged [SCONJ]().

* _I don't know <b>when<tt>/ADV</tt></b> he comes._
  * Adnominal: _the question <b>when<tt>/ADV</tt></b> does he come_
  * Adnominal relative: _the moment <b>when<tt>/ADV</tt></b> he comes_
* _You cannot swim <b>when<tt>/SCONJ</tt></b> the weather is like this._

Other languages do not have this problem, as they use distinct words for the adverb and the subordinating conjunction:

* [cs] _Nevím, <b>kdy<tt>/ADV</tt></b> přijde._ “I don't know when he comes.”
  * Adnominal: [cs] _otázka, <b>kdy<tt>/ADV</tt></b> přijde_ “the question when does he come”
  * Adnominal relative: [cs] _okamžik, <b>kdy<tt>/ADV</tt></b> přijde_ “the moment when he comes”
* [cs] _Nemůžeš se koupat, <b>když<tt>/SCONJ</tt></b> je takovéhle počasí._ “You cannot swim when the weather is like this.”

Some phrases are ambiguous. _The ceremony where/when we became citizens_ can be interpreted as an RC if the bestowal
of citizenship happened during the ceremony (_in which_ interpretation[^2], thus `acl:relcl`).
But _the ceremony when we became citizens_ could be used to refer to a particular ceremony held around the time
of becoming a citizen, as opposed to some other ceremony held at some other time; the modifier can be fronted as
an `advmod` within the higher clause: _When we became citizens, the ceremony..._. This is the `acl` interpretation.

[^2]: Or, formally, _wherein_.



## Free Relatives

<!-- Partially adapted from https://universaldependencies.org/en/specific-syntax.html#free-relatives -->

**Free relatives** are nominals containing a relative clause where the relativizer is “fused” with the
head of the whole nominal; in other words, there is no explicit modified noun, and its position is filled
with a relative pronoun which would otherwise serve as the relativizer (thus these constructions are also
known as **fused relatives**). The relative pronoun is deemed as the head of the construction, thereby
receiving a dependency relation reflective of its function in the higher clause, and the rest of the
relative clause depends on it as an [acl:relcl]().

The enhanced representation of a free relative construction will not have a `ref` relation between the
parent nominal and the relativizer because they are the same node. However, a relation between the predicate
of the relative clause and the modified nominal will still be added.

<table> <!--I'll have whatever she's having.-->
<tbody><tr><td width="480">
<div class="conllu-parse">
1 I        I        PRON  _ _ 3 nsubj _ _
2 'll      will     AUX   _ _ 3 aux _ _
3 have     have     VERB  _ _ 0 root _ _
4 whatever whatever PRON  _ _ 3 obj _ _
5 she      she      PRON  _ _ 7 nsubj _ _
6 's       be       AUX   _ _ 7 aux _ _
7 having   have     VERB  _ _ 4 acl:relcl _ _
8 .         .       PUNCT _ _ 3 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 7 4 obj color:blue
1 I        I        PRON  _ _ 3 nsubj _ _
2 'll      will     AUX   _ _ 3 aux _ _
3 have     have     VERB  _ _ 0 root _ _
4 whatever whatever PRON  _ _ 3 obj 7:obj _
5 she      she      PRON  _ _ 7 nsubj _ _
6 's       be       AUX   _ _ 7 aux _ _
7 having   have     VERB  _ _ 4 acl:relcl _ _
8 .         .       PUNCT _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>

<table> <!--You can go where you want and eat what you want.-->
<tbody><tr><td width="480">
<div class="conllu-parse">
1 You      you      PRON  _ _ 3 nsubj _ _
2 can      can      AUX   _ _ 3 aux _ _
3 go       go       VERB  _ _ 0 root _ _
4 where    where    ADV   _ _ 3 advmod _ _
5 you      you      PRON  _ _ 6 nsubj _ _
6 want     want     VERB  _ _ 4 advcl:relcl _ _
7 and      and      CCONJ _ _ 8 cc _ _
8 eat      eat      VERB  _ _ 3 conj _ _
9 what     what     PRON  _ _ 8 obj _ _
10 you     you      PRON  _ _ 11 nsubj _ _
11 want    want     VERB  _ _ 9 acl:relcl _ _
12 .       .        PUNCT _ _ 3 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 8 1 nsubj color:blue
# visual-style 8 2 aux color:blue
# visual-style 6 4 advmod color:blue
# visual-style 0 8 root color:blue
# visual-style 11 9 obj color:blue
1 You      you      PRON  _ _ 3 nsubj 8:nsubj _
2 can      can      AUX   _ _ 3 aux 8:aux _
3 go       go       VERB  _ _ 0 root _ _
4 where    where    ADV   _ _ 3 advmod 6:advmod _
5 you      you      PRON  _ _ 6 nsubj _ _
6 want     want     VERB  _ _ 4 advcl:relcl _ _
7 and      and      CCONJ _ _ 8 cc _ _
8 eat      eat      VERB  _ _ 3 conj 0:root _
9 what     what     PRON  _ _ 8 obj 11:obj _
10 you     you      PRON  _ _ 11 nsubj _ _
11 want    want     VERB  _ _ 9 acl:relcl _ _
12 .       .        PUNCT _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>

<span style='color:red; font-weight:bold'>DZ: In the above example, we have once again the problem
that a relative clause should not be a subtype of `acl` because it does not modify a nominal. Here
it modifies an adverb _(where)_, hence I went with `advcl:relcl`.</span>

☞ TODO: Not all languages have free relatives or use them as frequently as English.
In Czech, the corresponding construction will typically involve a demonstrative pronoun,
which will be modified by a relative clause. The relative clause will have a relative pronoun,
which will be case-marked as required within the relative clause, while the case marking of the
demonstrative is driven by the requirements of the higher clause.
_(Teď se budeme věnovat tomu, čeho se bojíš.)_
Even when the demonstrative is omitted, the relative pronoun is considered a part of the relative
clause. For example, in _Má, co si zaslouží_, the comma before the relativizer _co_ delimits the
boundary between the higher and the lower clause. We could analyze it as an ellipsis of
_Má to, co si zaslouží_. But it would mean that the relative clause would be promoted to the
position of the elided demonstrative, it would get the [obj]() relation and there would be no
trace of [acl:relcl](). In this example, both the elided _to_ and the present _co_ are in the
accusative, so the main obstacle for giving it the English-like free relative analysis is the
comma (in Czech obligatory marking of nested clause boundary). I suspect that it is no coincidence
that both pronouns share the accusative case. If they had different cases, the ellipsis would be
much less likely. Such examples are extremely rare but I have found one:
_Lidé ničili (to), čeho se jim dostalo jako božího daru._ (Higher clause requires accusative,
the nested clause requires genitive. The accusative _to_ is elided. The genitive form of _čeho_
is evidence that it belongs to the nested, not to the higher clause.)
Another example is accusative-nominative (but they have the same form for the pronoun _co_,
so it is not so problematic for the speakers): _Dostanou, co jim patří._
(http://hdl.handle.net/11346/PMLTQ-XWFZ)
Alternatively we could say about these examples that they are not elliptical, they are simply
a complement clause [ccomp]() (that is actually the current conversion of the Czech data;
and if the requirement were to distinguish "ellipsis-free relatives" from normal complement
clauses, there would be no way to achieve it other than disrupting the link with the upstream
data and manually checking thousands of instances in UD).

_Koho chleba jíš, toho píseň zpívej._ “Sing the song of those whose bread you eat.”
(a semantically equivalent English proverb: “Let every man praise the bridge he goes over.”)



## Clefts

Relative clauses also occur in the analysis of cleft constructions. In languages that have free relatives,
cleft constructions may have them, too.

~~~sdparse
-ROOT- John is who we want to help .
root(-ROOT-, who)
nsubj(who, John)
acl:relcl(who, want)
cop(who, is)
~~~

<table> <!--John is who we want to help.-->
<tbody><tr><td width="480">
<div class="conllu-parse">
1 John     John     PROPN _ _ 3 nsubj _ _
2 is       be       AUX   _ _ 3 cop _ _
3 who      who      PRON  _ _ 0 root _ _
4 we       we       PRON  _ _ 5 nsubj _ _
5 want     want     VERB  _ _ 3 acl:relcl _ _
6 to       to       PART  _ _ 7 mark _ _
7 help     help     VERB  _ _ 5 xcomp _ _
8 .        .        PUNCT _ _ 3 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 7 3 obj color:blue
# visual-style 7 4 nsubj:xsubj color:blue
1 John     John     PROPN _ _ 3 nsubj _ _
2 is       be       AUX   _ _ 3 cop _ _
3 who      who      PRON  _ _ 0 root 7:obj _
4 we       we       PRON  _ _ 5 nsubj 7:nsubj:xsubj _
5 want     want     VERB  _ _ 3 acl:relcl _ _
6 to       to       PART  _ _ 7 mark _ _
7 help     help     VERB  _ _ 5 xcomp _ _
8 .        .        PUNCT _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>

The Czech equivalent uses a demonstrative pronoun instead of a free relative:
_Jan je ten, komu chceme pomoct._ “Jan is who we want to help.”
The demonstrative _ten_ is in the nominative, while the relative _komu_ is in the dative,
as required by their respective clauses.

<table> <!--Jan je ten, komu chceme pomoct.-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 7 5 obl color:orange
1 Jan      Jan      PROPN _ _ 3 nsubj _ _
2 je       být      AUX   _ _ 3 cop _ _
3 ten      ten      PRON  _ _ 0 root _ _
4 ,        ,        PUNCT _ _ 6 punct _ _
5 komu     kdo      PRON  _ _ 7 obl _ _
6 chceme   chtít    VERB  _ _ 3 acl:relcl _ _
7 pomoct   pomoci   VERB  _ _ 6 xcomp _ _
8 .        .        PUNCT _ _ 3 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 3 5 ref color:blue
# visual-style 7 3 obj color:blue
1 Jan      Jan      PROPN _ _ 3 nsubj _ _
2 je       být      AUX   _ _ 3 cop _ _
3 ten      ten      PRON  _ _ 0 root 7:obj _
4 ,        ,        PUNCT _ _ 6 punct _ _
5 komu     kdo      PRON  _ _ 3 ref _ _
6 chceme   chtít    VERB  _ _ 3 acl:relcl _ _
7 pomoct   pomoci   VERB  _ _ 6 xcomp _ _
8 .        .        PUNCT _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>



## Notes
