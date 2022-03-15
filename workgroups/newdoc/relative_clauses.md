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

<!-- https://github.com/UniversalDependencies/docs/commit/b7b62a7f9bafdbd8c3f7be9e4f72da62b3cb0d0d#commitcomment-68550464
@nschneid:

CGEL (Huddleston and Pullum) pp. 1043-44:

> - [ii] I said that it might be more efficient to hold the meeting on Saturday morning, [**which suggestion** they all enthusiastically endorsed].
>
> Determinative _which_ is not itself a phrase, and cannot be separated from the head on which it is dependent, as evident from [iii]. We take the relativised element in [ii] to be the whole object NP, _which suggestion_: this is the phrase whose interpretation is given by the antecedent (_it might be more efficient to hold the meeting on Saturday morning_), though the presentation of it as a suggestion is of course contributed by the relative clause rather than being inherent in the antecedent itself.

In other words _which_ by itself does not have an antecedent; it is only the phrase _which suggestion_ that has an antecedent. This matches my intuition that `ref` should point to the head of the phrase (_suggestion_).

-->
Determinative _which_ cannot be separated from the head on which it is dependent. We take the relativized
element in the following example to be the whole nominal, _which amount_: this is the phrase whose interpretation
is given by the antecedent _$38,000_.[^2]

[^2]: *The Cambridge Grammar of the English Language* (Huddleston and Pullum, 2002), pp. 1043–44.

<table> <!--ENA shall pay $38,000, which amount shall be subject to…-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 11 8 nsubj color:orange
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
# visual-style 4 8 ref color:blue
# visual-style 11 4 nsubj color:blue
1 ENA ENA PROPN _ _ 3 nsubj _ _
2 shall shall AUX _ _ 3 aux _ _
3 pay pay VERB _ _ 0 root _ _
4 $ $ SYM _ _ 3 obj 11:nsubj _
5 38,000 38,000 NUM _ _ 4 nummod _ _
6 , , PUNCT _ _ 11 punct _ _
7 which which DET _ _ 8 det _ _
8 amount amount NOUN _ _ 4 ref _ _
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



## Relative Markers

In some languages, the relative clause is marked by a morpheme that does not represent any argument
within the relative clause; it is thus not a pronoun, and not a _relativizer_ in the sense described
above. For example, the _de_ morpheme in Chinese marks the preceding clause as a relative clause.
It does not represent the shared argument within the RC; that argument is either realized by zero
if it is in a core function, or represented by a personal pronoun (他 _tā_ “he” in the second example;
examples from Dixon vol. 2, p.&nbsp;330[^3]).

[^3]: R. M. W. Dixon. 2013 (first published 2010). _Basic Linguistic Theory._ Oxford University Press, Oxford, UK. ISBN 978-0-19-957108-6.

* [zh] 你给我邮来<b>的</b>信一半都是英文。
  _Nǐ gěi wǒ yóu lái <b>de</b> xìn yībàn dōu shì yīngwén._
  “Half of the letters you send to me are in English.”
* [zh] 我给他送书<b>的</b>人是我弟弟。
  _Wǒ gěi tā sòng shū <b>de</b> rén shì wǒ dìdì._
  “The person I gave the book to was my younger brother.”

<table> <!--你给我邮来的信一半都是英文。-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 4 3 obl color:orange
1 你       nǐ       PRON  _ _ 4 nsubj _ _
2 给       gěi      ADP   _ _ 3 case _ _
3 我       wǒ       PRON  _ _ 4 obl _ _
4 邮来     yóulái   VERB  _ _ 6 acl:relcl _ _
5 的       de       SCONJ _ _ 4 mark _ _
6 信       xìn      NOUN  _ _ 7 nmod _ _
7 一半     yībàn    ADV   _ _ 10 nsubj _ _
8 都       dōu      DET   _ _ 7 det _ _
9 是       shì      AUX   _ _ 10 cop _ _
10 英文    yīngwén  NOUN  _ _ 0 root _ _
11 。      .        PUNCT _ _ 10 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 4 3 obl:给 color:blue
# visual-style 4 6 obj color:blue
1 你       nǐ       PRON  _ _ 4 nsubj _ _
2 给       gěi      ADP   _ _ 3 case _ _
3 我       wǒ       PRON  _ _ 4 obl:给 _ _
4 邮来     yóulái   VERB  _ _ 6 acl:relcl _ _
5 的       de       SCONJ _ _ 4 mark _ _
6 信       xìn      NOUN  _ _ 7 nmod 4:obj _
7 一半     yībàn    ADV   _ _ 10 nsubj _ _
8 都       dōu      DET   _ _ 7 det _ _
9 是       shì      AUX   _ _ 10 cop _ _
10 英文    yīngwén  NOUN  _ _ 0 root _ _
11 。      .        PUNCT _ _ 10 punct _ _
</div>
</td></tr></tbody>
</table>

<table> <!--我给他送书的人是我弟弟。-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 4 3 obl color:orange
1 我       wǒ       PRON  _ _ 4 nsubj _ _
2 给       gěi      ADP   _ _ 3 case _ _
3 他       tā       PRON  _ _ 4 obl _ _
4 送       sòng     VERB  _ _ 7 acl:relcl _ _
5 书       shū      NOUN  _ _ 4 obj _ _
6 的       de       SCONJ _ _ 4 mark _ _
7 人       rén      NOUN  _ _ 10 nsubj _ _
8 是       shì      AUX   _ _ 10 cop _ _
9 我       wǒ       PRON  _ _ 10 nmod:poss _ _
10 弟弟    dìdì     NOUN  _ _ 0 root _ _
11 。      .        PUNCT _ _ 10 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 7 3 ref color:blue
# visual-style 4 7 obl:给 color:blue
1 我       wǒ       PRON  _ _ 4 nsubj _ _
2 给       gěi      ADP   _ _ 3 case _ _
3 他       tā       PRON  _ _ 7 ref _ _
4 送       sòng     VERB  _ _ 7 acl:relcl _ _
5 书       shū      NOUN  _ _ 4 obj _ _
6 的       de       SCONJ _ _ 4 mark _ _
7 人       rén      NOUN  _ _ 10 nsubj 4:obl:给 _
8 是       shì      AUX   _ _ 10 cop _ _
9 我       wǒ       PRON  _ _ 10 nmod:poss _ _
10 弟弟    dìdì     NOUN  _ _ 0 root _ _
11 。      .        PUNCT _ _ 10 punct _ _
</div>
</td></tr></tbody>
</table>

The relative marker may also be a bound morpheme. In Dyirbal, a relative clause is marked by relative suffix
_-ŋu_ replacing the tense suffix on the RC verb (Dixon vol. 2, p.&nbsp;323).

* [dbl] _Jani manigu budilŋa<b>ŋu</b> banagañu._ “John, who had got the money, returned.”
  (lit. John-`Abs` money-`Dat` get-`Antip`-`Relative`-`Abs` return-`Past`.)

<table> <!--我给他送书的人是我弟弟。-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 3 2 obl color:orange
1 Jani      Jani   PROPN _ Case=Abs 4 nsubj _ _
2 manigu    mani   NOUN  _ Case=Dat 3 obl _ _
3 budilŋaŋu budil  VERB  _ Case=Abs 1 acl:relcl _ _
4 banagañu  banaga VERB  _ _ 0 root _ _
5 .         .      PUNCT _ _ 4 punct _ _
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 3 2 obl:dat color:blue
# visual-style 3 1 nsubj color:blue
1 Jani      Jani   PROPN _ Case=Abs 4 nsubj 3:nsubj _
2 manigu    mani   NOUN  _ Case=Dat 3 obl:dat _ _
3 budilŋaŋu budil  VERB  _ Case=Abs 1 acl:relcl _ _
4 banagañu  banaga VERB  _ _ 0 root _ _
5 .         .      PUNCT _ _ 4 punct _ _
</div>
</td></tr></tbody>
</table>



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

In languages where the set of relativizers overlaps with interrogative words (such as English or Czech),
some clauses may superficially look like relative clauses while they are in fact interrogative clauses
(indirect questions). Such clauses are typically complements of verbs of saying or knowing _(I don't know
where he lives)_ but they may also depend on a similar nominal. Compare

* [cs] _dům, kde bydlel Hemingway_ “the house where Hemingway lived”
* [cs] _otázka, kde bydlel Hemingway_ “the question of where Hemingway lived”

In the second example, _kde bydlel Hemingway_ is an adnominal clause ([acl]()) but not a relative clause.
There is no coreference between _otázka_ “question” and _kde_ “where”. There is such coreference in the
first example, hence the clause is relative there.

Language-specific guidelines must specify whether the wh-word is to be disambiguated between [PronType]()`=Int`
and `Rel`, or it can be `PronType=Int,Rel` everywhere and the disambiguation is only at the syntactic level
between `acl` and `acl:relcl`.

<!--otázka, kde bydlel Hemingway-->
<div class="conllu-parse">
1 otázka    otázka    NOUN  _ _ 0 root                  _ Gloss=question
2 ,         ,         PUNCT _ _ 4 punct                 _ Gloss=,
3 kde       kde       ADV   _ PronType=Int,Rel 4 advmod _ Gloss=where
4 bydlel    bydlet    VERB  _ _ 1 acl                   _ Gloss=lived
5 Hemingway Hemingway PROPN _ _ 4 nsubj                 _ Gloss=Hemingway
</div>

### Adverbial Clauses

Pronominal adverbs such as _where_, _when_, _how_, _why_ frequently introduce **adverbial clauses** ([advcl]()).
They can also introduce non-relative **adnominal modifier clauses** ([acl]()) similarly providing time/place/manner information.
In the following example, _when_ is an interrogative/relative adverb (`PronType=Int,Rel`) but the adnominal clause
it introduces is not relative because there is no coreference between _headlines_ and _when_ (but cf.
_the time when Nixon resigned_, here it would be a relative clause).

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

Some phrases are ambiguous. _The ceremony where/when we became citizens_ can be interpreted as an RC if the bestowal
of citizenship happened during the ceremony (_in which_ interpretation[^4], thus `acl:relcl`).
But _the ceremony when we became citizens_ could be used to refer to a particular ceremony held around the time
of becoming a citizen, as opposed to some other ceremony held at some other time; the modifier can be fronted as
an `advmod` within the higher clause: _When we became citizens, the ceremony..._. This is the `acl` interpretation.

[^4]: Or, formally, _wherein_.

### Interrogative/Relative Adverbs versus Subordinating Conjunctions

Relative adverbs ([ADV]() `PronType=Int,Rel`) should not be confused with subordinating conjunctions ([SCONJ]()).
The former are constituents in the sentence, they refer to circumstances such as location or time of an event.
The latter just mark a clause as such a constituent, but they are not constituents themselves. The problem is
that some words in some languages seem to oscillate between the two categories. For example, the English word _when_
is clearly an adverb in interrogative contexts: _<b>When</b> did he arrive?_ Like other English question words, it
can also be used as a relative adverb: _That's the moment <b>when</b> you'll realize what really matters to you._
In this sentence, _when_ is a constituent of the relative clause and although it is an adverb (and not a nominal),
it is coreferential with the nominal argument in the main clause, _the moment_. However, in other contexts
the reference to a particular time period seems to be weakened and the adverb seems to be in the process of
grammaticalization towards a subordinating conjunction, somewhat similar to _if_ (which is never an adverb):
_These companies find it harder to recruit skilled graduates <b>when</b> financial firms can pay higher salaries._

<span style='color:red; font-weight:bold'>DZ: One option is to say that _when_ is always `ADV` and never `SCONJ`,
despite possible grammaticalization. Another option is to say that when it introduces an adverbial clause, it is
`SCONJ`, otherwise it is `ADV`. Adverbial clauses indeed can be introduced by subordinating conjunctions, such
as _if_.</span>
<!-- https://github.com/UniversalDependencies/docs/commit/b7eeeee6a99be469f2a628e8a0530cbf43008473#commitcomment-68587595 -->

Other languages do not have this problem, as they use distinct words for the adverb and the subordinating
conjunction. For example, the possible Czech translations of _when_ are either _kdy_ (`ADV`) or _když_ (`SCONJ`):

* [cs] _Neodpověděl mi na otázku, <b>kdy</b> hodlá přijet._ “He didn't answer my question of <b>when</b> he was going to come.”
* [cs] _V okamžiku, <b>kdy</b> přijede, jsme připraveni mu předvést výsledky._ “The moment he arrives, we are ready to show him the results.”
* [cs] _Nepřijel, <b>když</b> jsme to nejvíc potřebovali._ “He didn't come <b>when</b> we needed it most.”
* [cs] _<b>Když</b> budete mít výsledky, přijedu také._ “<b>If</b> you have results, I will come too.”



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

Not all languages have free relatives in the same sense as in English. In Czech, the corresponding
construction will typically involve a demonstrative pronoun, which will be modified by a relative
clause. The relative clause will have a relative pronoun, which will be case-marked as required
within the relative clause, while the case marking of the demonstrative is driven by the requirements
of the main clause.

* [cs] _Teď se budeme věnovat <b>tomu</b>, <b>čeho</b> se bojíš._
  “Let's now attend to what you are afraid of.”
  (The demonstrative _tomu_ is in the dative, as required by the predicate _věnovat se_ of the
  main clause. The relative _čeho_ is in the genitive, as required by the predicate _bát se_
  of the relative clause. If we swap the functions and make the main clause relative, the forms
  of the pronouns will change: _Teď se bojíš <b>toho</b>, <b>čemu</b> se věnujeme._
  “You are now afraid of what we are attending to.”)

<table> <!--Teď se budeme věnovat tomu, čeho se bojíš.-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 4 5 obl:arg color:orange
# visual-style 9 7 obl:arg color:orange
1 Teď      teď      ADV   _ _ 4 advmod _ Gloss=now
2 se       se       PRON  _ _ 4 expl:pv _ Gloss=REFL
3 budeme   být      AUX   _ _ 4 aux _ Gloss=we-will
4 věnovat  věnovat  VERB  _ _ 0 root _ Gloss=attend
5 tomu     ten      PRON  _ Case=Dat|PronType=Dem 4 obl:arg _ Gloss=to-that
6 ,        ,        PUNCT _ _ 9 punct _ Gloss=,
7 čeho     co       PRON  _ Case=Gen|PronType=Int,Rel 9 obl:arg _ Gloss=of-what
8 se       se       PRON  _ _ 9 expl:pv _ Gloss=REFL
9 bojíš    bát      VERB  _ _ 5 acl:relcl _ Gloss=you-are-afraid
10 .       .        PUNCT _ _ 4 punct _ Gloss=.
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 4 5 obl:arg:dat color:blue
# visual-style 5 7 ref color:blue
# visual-style 9 5 obl:arg:gen color:blue
1 Teď      teď      ADV   _ _ 4 advmod _ Gloss=now
2 se       se       PRON  _ _ 4 expl:pv _ Gloss=REFL
3 budeme   být      AUX   _ _ 4 aux _ Gloss=we-will
4 věnovat  věnovat  VERB  _ _ 0 root _ Gloss=attend
5 tomu     ten      PRON  _ Case=Dat|PronType=Dem 4 obl:arg:dat 9:obl:arg:gen Gloss=to-that
6 ,        ,        PUNCT _ _ 9 punct _ Gloss=,
7 čeho     co       PRON  _ Case=Gen|PronType=Int,Rel 5 ref _ Gloss=of-what
8 se       se       PRON  _ _ 9 expl:pv _ Gloss=REFL
9 bojíš    bát      VERB  _ _ 5 acl:relcl _ Gloss=you-are-afraid
10 .       .        PUNCT _ _ 4 punct _ Gloss=.
</div>
</td></tr></tbody>
</table>

In rare cases,[^5] the demonstrative can be omitted in Czech. Even when the demonstrative is omitted, the relative
pronoun is considered a part of the relative clause, not of the main clause. First, the relative
pronoun still follows the case requirements of the relative clause. This is not easy to observe
due to limited contexts in which the demonstrative is omitted and to case syncretism, yet it is so.
Second, according to the Czech grammar, the relative clause is obligatorily delimited by a comma
from the main clause in writing, and the comma is invariably put before the relative pronoun, not
after it.

[^5]: The necessary condition for omissibility of the demonstrative seems to be that the main clause require it to be in accusative or nominative _(to)_. In most cases, the relative clause also requires the relative pronoun to be in accusative or nominative _(co)_, although PDT contains one example where the relative is in the genitive (_Lidé ničili (to), čeho se jim dostalo jako božího daru._ “People destroyed what they received as a gift from God.”) For a query that partially filters examples of omitted demonstrative in UD_Czech-PDT 2.9, see [http://hdl.handle.net/11346/PMLTQ-XWFZ](http://hdl.handle.net/11346/PMLTQ-XWFZ).

* [cs] _Má (to), co si zaslouží._ “He has what he deserves.” (main clause accusative, relative clause accusative)
* [cs] _Dostanou (to), co jim patří._ “They get what belongs to them.” (main clause accusative, relative clause nominative)
* [cs] _Lidé ničili (to), čeho se jim dostalo jako božího daru._ “People destroyed what they received as a gift from God.” (main clause accusative, relative clause genitive)

<span style='color:red; font-weight:bold'>DZ: The recommended analysis of the Czech examples is
not yet final.</span>

Since the relative pronoun does not belong to the main clause, we cannot analyze the Czech examples
the same way as free relatives in English. So what are the options?

1. The “relative” clause is actually an object clause, i.e., the direct object of the main clause
   is realized as a clause. Consequently, it is attached via [ccomp]() to the predicate of the main
   clause. This is the approach that is employed in the current conversion of the Czech data.
   Note that it would be difficult to depart from this approach, as this construction is similar
   to complement clauses: _Vím, co si zaslouží._ “I know what he deserves.” The drawback of this
   approach is that there is no trace of the relativity of the clause, and of the coreference between
   the argument of the relative/complement clause and the omitted argument of the main clause.
2. There is an elided demonstrative _to_ in the main clause; we use the standard UD treatment of
   ellipsis. That is, we promote the relative clause to the position of the elided pronoun. Unlike
   in the previous option, the relation between the predicates of the main and the relative clauses
   will be [obj](), not [ccomp](). There is still the drawback that the construction cannot be
   recognized as involving a relative clause. An additional drawback is that one has to distinguish
   between complement clauses (`ccomp`) and promoted relative clauses (`obj`), which may be difficult
   for annotators, and for large corpora such as Czech PDT it is not tractable.
3. The elided demonstrative could be handled similarly to how UD currently handles gapping constructions.
   The relative clause would be attached to the predicate of the main clause via the [obj]() relation
   (not [orphan](), because it is not a link between two orphaned dependents). In the enhanced representation,
   there would be an empty node representing the demonstrative _to_, and all the expected relations would
   be restored as if the demonstrative were overtly present. The objection that we cannot reliably
   detect these cases in corpora like Czech PDT still holds. The solution would also require a modification
   of the guidelines regarding the usage of empty nodes (but there is a separate proposal for such an
   extension). On the other hand, the similarity of the construction to relative clauses would now be
   recognizable, and so would be the coreference between the missing argument of the main clause and the
   visible argument of the relative clause. The diagrams below illustrate this last option:

<table> <!--Má, co si zaslouží.-->
<tbody><tr><td width="480">
<div class="conllu-parse">
# visual-style 1 5 obj color:orange
1 Má       mít       VERB  _ _ 0 root _ Gloss=he-has
2 ,        ,         PUNCT _ _ 5 punct _ Gloss=,
3 co       co        PRON  _ Case=Acc|PronType=Int,Rel 5 obj _ Gloss=what
4 si       si        PRON  _ _ 5 expl:pv _ Gloss=REFL
5 zaslouží zasloužit VERB  _ _ 1 obj _ Gloss=he-deserves
6 .        .         PUNCT _ _ 1 punct _ Gloss=.
</div>
</td><td width="480">
<div class="conllu-parse">
# visual-style 1 1.1 obj color:blue
# visual-style 1.1 5 acl:relcl color:blue
# visual-style 1.1 3 ref color:blue
# visual-style 5 1.1 obj color:blue
1 Má       mít       VERB  _ _ 0 root _ Gloss=he-has
1.1 E(to)  to        PRON  _ Case=Acc|PronType=Dem _ _ 1:obj|5:obj Gloss=that
2 ,        ,         PUNCT _ _ 5 punct _ Gloss=,
3 co       co        PRON  _ Case=Acc|PronType=Int,Rel 0 _ 1.1:ref Gloss=what
4 si       si        PRON  _ _ 5 expl:pv _ Gloss=REFL
5 zaslouží zasloužit VERB  _ _ 0 _ 1.1:acl:relcl Gloss=he-deserves
6 .        .         PUNCT _ _ 1 punct _ Gloss=.
</div>
</td></tr></tbody>
</table>

In the Czech examples so far, the elided argument always functioned as a direct object in the main clause.
There is another pattern where the common argument acts as a subject both in the main clause and in the
relative clause. There are thus no case conflicts, as both positions require the nominative. These
examples resemble the English free relatives more closely than the previous ones.[^6]

[^6]: See [http://hdl.handle.net/11346/PMLTQ-IXY8](http://hdl.handle.net/11346/PMLTQ-IXY8) for similar examples in UD Czech PDT 2.9.

* [cs] _Kdo neokrádá stát, okrádá svou rodinu._ “He who does not rob the state robs his family.” <!-- http://hdl.handle.net/11346/PMLTQ-IXY8 -->
* [cs] _Kdo kupoval později, může dnes své akcie prodat dráž._ “Whoever bought later can sell their shares more expensive today.” <!-- http://hdl.handle.net/11346/PMLTQ-IXY8 -->
* [cs] _Kdo se bojí, nesmí do lesa._ “He that is afraid of leaves must not come in a forest.” <!-- Petr Karlík, Marek Nekula, Zdenka Rusínová (eds.) 1996. Příruční mluvnice češtiny. Nakladatelství Lidové noviny, Praha. ISBN 80-7106-134-4 (str. 414, bod 640d): „Jsou to podmětné věty vztažné. Nominativní forma podmětu může být signalizována výrazem _ten_ v Nom (Ten, kdo se bojí, nesmí do lesa) a _to_ (To, co se vleče, neuteče), který plní funkci pádového ukazatele. Někdy je možné výraz _ten, to_ opakovat dvakrát: Ten, kdo se opozdí, tak ten nic nedostane.“ Jde tedy o vedlejší větu podmětnou, ale je to jiný druh podmětné věty, než u tzv. podmětu situačního (str. 416, bod 642): Říká se, že elektřina bude od června dražší. Vadilo by mi být poslední v každém závodě.-->
* [cs] _Co se vleče, neuteče._ “All is not lost that is delayed.”

These relative clausal subjects are different from **situational clausal subjects** <!-- PMČ §642 and 622 -->
in that they represent an entity rather than a situation (event or state). An example of a situational
clausal subject would be _Že je nevinen, bylo jasně prokázáno._ “That he was innocent was clearly proven.”
Nevertheless, relative clausal subjects are still clausal subjects, and there is no reason why they
could not be attached via the [csubj]() relation. In particular, there is no indication that the relative
pronoun belongs to the main clause (rather than to the RC).

☞ TODO:
Ohledně free relatives se v práci podívat jednak do Huddleston and Pullum, jednak do nějaké podobně
silné autority pro češtinu (Akademická mluvnice nebo Štíchova mluvnice).

☞ TODO: correlatives (also in Indian languages)
_Koho chleba jíš, toho píseň zpívej._ “Sing the song of those whose bread you eat.”
(a semantically equivalent English proverb: “Let every man praise the bridge he goes over.”)

☞ TODO:
Add examples from languages where the fullest representation of the common argument is in the relative
clause and there is nothing in the main clause.



## Clefts

Relative clauses also occur in the analysis of cleft constructions. In languages that have free relatives,
cleft constructions may have them, too.

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
# visual-style 7 3 obl:dat color:blue
1 Jan      Jan      PROPN _ _ 3 nsubj _ _
2 je       být      AUX   _ _ 3 cop _ _
3 ten      ten      PRON  _ _ 0 root 7:obl:dat _
4 ,        ,        PUNCT _ _ 6 punct _ _
5 komu     kdo      PRON  _ _ 3 ref _ _
6 chceme   chtít    VERB  _ _ 3 acl:relcl _ _
7 pomoct   pomoci   VERB  _ _ 6 xcomp _ _
8 .        .        PUNCT _ _ 3 punct _ _
</div>
</td></tr></tbody>
</table>



## Notes
