---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

** UNDER REVISION **

A relative clause (RC) is a finite clause modifying some head (typically a noun) that is understood to fulfill some grammatical role in the RC. 
The head is said to be "extracted" from the RC.

In the Basic Dependencies representation, the main predicate of the RC attaches to the head as `acl:relcl`. This is shown in the example on the left.

In the [Enhanced Dependencies]() layer, there is an additional dependency in the opposite direction to indicate the role from which the head was "extracted". This is shown on the right.

<table id="rc-example1"> <!--I saw the man you love . -->
<tbody><tr><td width="600">
<div class="conllu-parse">
1 I      _ _ _ _ 0 _ _ _
2 saw    _ _ _ _ 0 _ _ _
3 the    _ _ _ _ 0 _ _ _
4 man    _ _ _ _ 2 obj _ _
5 you    _ _ _ _ 6 nsubj   _ _
6 love   _ _ _ _ 4 acl:relcl _ _
7 .      _ _ _ _ 0 _ _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 6 4 obj color:blue
1 I      _ _ _ _ 0 _ _ _
2 saw    _ _ _ _ 0 _ _ _
3 the    _ _ _ _ 0 _ _ _
4 man    _ _ _ _ 2 obj 6:obj _
5 you    _ _ _ _ 6 nsubj   _ _
6 love   _ _ _ _ 4 acl:relcl _ _
7 .      _ _ _ _ 0 _ _ _
</div>
</td></tr></tbody>
</table>

The RC may begin with a **relativizer** (*that*, *which*, *who*, or another WH-word); in some contexts (e.g., object relativization) the relativizer is optional. 
See [PronType=Rel](). 
The relativizer can be understood as an anaphor whose antecedent is the head of the relative clause.

Basic UD (left) analyzes the relativizer, if present, as filling a role in the RC. 
Specifically:
- Pronominal relativizers (*that*, *which*, *who*, *what*, etc.) fill roles such as subject, object, or oblique.
- WH-adverb relativizers (*where*, *when*, *why*, *how*, etc.) attach as [advmod]() within the RC.
- The possessive pronominal relativizer *whose* may occur within a subject, object, or oblique.

In the Enhanced Dependencies layer (right), the relativizer instead attaches to its antecedent via the `ref` relation (as the antecedent is directly connected to a role in the RC).

<table id="rc-example3"> <!--I saw the book which you bought . -->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 7 5 obj color:orange
1 I      _ _ _ _ 0 _ _ _
2 saw    _ _ _ _ 0 _ _ _
3 the    _ _ _ _ 0 _ _ _
4 book   _ _ _ _ 2 obj _ _
5 which  which PRON WDT PronType=Rel 7 obj   _ _
6 you    _ _ _ _ 7 nsubj   _ _
7 bought _ _ _ _ 4 acl:relcl _ _
8 .      _ _ _ _ 0 _ _ _
</div>
</td><td width="600">
<div class="conllu-parse">
# visual-style 4 5 ref color:blue
# visual-style 7 4 obj color:blue
1 I      _ _ _ _ 0 _ _ _
2 saw    _ _ _ _ 0 _ _ _
3 the    _ _ _ _ 0 _ _ _
4 book   _ _ _ _ 2 obj 7:obj _
5 which  which PRON WDT PronType=Rel 4 ref   _ _
6 you    _ _ _ _ 7 nsubj   _ _
7 bought _ _ _ _ 4 acl:relcl _ _
8 .      _ _ _ _ 0 _ _ _
</div>
</td></tr></tbody>
</table>

<table> <!--the episode where Monica sings-->
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 5 3 advmod color:orange
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 episode episode NOUN NN Number=Sing 0 root _ _
3 where where ADV WRB PronType=Rel 5 advmod _ _
4 Monica Monica PROPN NNP Number=Sing 5 nsubj _ _
5 sings sing VERB VBZ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td><td width="600">
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
<tbody><tr><td width="600">
<div class="conllu-parse">
# visual-style 4 3 nmod:poss color:orange
 1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 woman woman NOUN NN Number=Sing 0 root _ _
3 whose whose PRON WP$ Poss=Yes|PronType=Rel 4 nmod:poss _ _
4 cat cat NOUN NN Number=Sing 5 nsubj _ _
5 smells smell VERB VBZ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td><td width="600">
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

TODO: Above is from <https://universaldependencies.org/u/overview/enhanced-syntax.html#relative-clauses>
Should relativizers "where", "when" be SCONJ/mark or ADV/advmod? SCONJ/mark is the majority in EWT but not consistent. (They are ADV as question words, SCONJ as interrogative complement clause markers.)
<https://github.com/UniversalDependencies/UD_English-EWT/issues/88>, <http://match.grew.fr/?corpus=UD_English-EWT@dev&custom=61bfec493c0d3&clustering=W.upos>

A relative clause with no relativizer, like (1), is called a **reduced relative clause**. One with a relativizer, like (3), is called a **nonreduced relative clause**.

Basic UD is shown for the rest of the examples below.

## Notable Properties

Relativization can create unbounded dependency—an element can be extracted from several levels of embedding:

~~~ sdparse
I saw the book which you pretended to want to read
acl:relcl(book, pretended)
obj(read, which)
xcomp(pretended, want)
xcomp(want, read)
~~~

Semantically, relative clauses may be **specifying/restrictive** (helping to narrow a set of referents), or **ascriptive/nonrestrictive** (adding detail about a referent that has already been identified):

- Specifying
  * I rented the movie **which you bought** (as opposed to some other one).
- Ascriptive
  * I introduced myself to John, **who promptly forgot my name**.
  * I rented the movie, **which you bought** (as opposed to renting).
  * I tried to explain myself – **which was a bad idea**. [antecedent is a clause]

The specifying/ascriptive distinction does not affect the UD analysis: all RCs are analyzed with the `acl:relcl` relation, even if the antecedent is clausal:

~~~ sdparse
I tried to explain myself – which was a bad idea
acl:relcl(tried, idea)
nsubj(idea, which)
~~~

## Preposition Stranding and Prepositional Relatives

A preposition may be left "stranded" in the relative clause (its object corresponding to the head of the RC):

- The house **(that) you said you wanted to live _in_** is for sale.
  * Non-RC paraphrase: The house is on sale; you said you wanted to live _in_ that house.

The Basic UD analysis depends on whether it is a reduced or nonreduced RC. 
In a nonreduced RC, the relativizer is available to fill a role in the RC, and thus gets marked with 
the preposition (even if this contributes to the nonprojectivity of the tree):

~~~ sdparse
the house that you said you wanted to live in
acl:relcl(house, said)
ccomp(said, wanted)
xcomp(wanted, live)
obl(live, that)
case(that, in)
~~~

In a reduced RC, however, there is no nominal to fill the role in the RC, 
so the preposition gets promoted to the head of the phrase (similar to the treatment of [Ellipsis]()):

~~~ sdparse
the house you said you wanted to live in
acl:relcl(house, said)
ccomp(said, wanted)
xcomp(wanted, live)
obl(live, in)
~~~

TODO: prepositional relatives: the house in which you live; the king from whose crown we stole the jewel

## Free Relatives

TODO: borrow from http://universaldependencies.org/docsv1/en/overview/specific-syntax.html#free-relatives

TODO [free]: You can go where you want and eat what you want.

**Free relatives** are noun phrases containing a relative clause modifying a WH-word head. 
There is no separate relativizer in the RC; it is "fused" with the head (thus these constructions are also known as **fused relatives**).

Free relatives are subtly different from **interrogative clauses**, where the WH-word making it interrogative is inside the clause.
Verbs such as *wonder*, *know*, and *tell* license interrogative complement clauses (including ones beginning with *whether*).
According to *CGEL* (Huddleston and Pullum 2002, pp. 1070–1079), in contrast to interrogative clauses, free relatives 
- are always finite;
- are never marked by *whether*; 
- generally permit WH-*ever* heads (*Eat what(ever) you want*); 
- cannot be reduced with a non-*ever* head, even given sufficient context
  * Free relative: *He bought what I was selling* → *\*I was selling something (he bought what!).*
  * cf. interrogative: *He wondered what I was selling* → *I was selling something (he wondered what!)*).

TODO [interrog]: I don't know who he is, where he lives, how old he is, how much money he has, what car he drives, to whom he is married, whether he has kids, or why he is here.

## Additional Examples

<!-- https://github.com/UniversalDependencies/UD_English-EWT/issues/78 -->
TODO: She was telling me how wrong I was about how another dress that I loved compared to one of her dresses.

<!-- Interlanguage links updated St lis 3 20:58:33 CET 2021 -->
