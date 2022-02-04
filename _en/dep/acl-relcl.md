---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

** UNDER REVISION **

A relative clause (RC) is a clause modifying some head (typically a noun) that is understood to fulfill some grammatical role in the RC. 
The head is said to be "extracted" from the RC.

RCs are usually finite (*people who live in glass houses*), but may also be infinitival (*I found a house in which to live*, *I found a house (for my mother) to live in*). Gerund-participial and past-participial clauses (*people living in glass houses*, *students given high marks*) are never considered relative clauses.
<!-- Infinitival RCs are discussed in CGEL pp. 1067-1068 -->

TODO: do we want to implement infinitival RCs? EWT only has them for free relatives. "nice people to meet here" is plain `acl(people,meet)`. Not marking it as an RC means there is no way to find that there is a gap/extracted element (cf. "the idea to meet").

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
See [PronType]()`=Rel`. 
The relativizer can be understood as an anaphor whose antecedent is the head of the relative clause.

Basic UD (left) analyzes the relativizer, if present, as filling a role in the RC. 
Specifically:
- Pronominal relativizers (*that*, *which*, *who*, *what*, etc.) fill roles such as subject, object, or oblique.[^1]
- WH-adverb relativizers (*where*, *when*, *why*, *how*, etc.) attach as [advmod]() within the RC.
- The possessive pronominal relativizer *whose* may occur within a subject, object, or oblique phrase.

[^1]: *CGEL* considers *that* at the beginning of a relative clause to be a subordinator. UD adopts the traditional analysis of *that* as a relative pronoun roughly interchangeable with *which* etc.

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
I saw the book which you pretended to think was boring
acl:relcl(book, pretended)
nsubj(boring, which)
xcomp(pretended, think)
ccomp(think, boring)
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

## Preposition Stranding

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

## Prepositional Relatives

As an alternative to stranding, the preposition may occur before the relativizer (for some relativizers, particularly *which*, *whom*, and *whose*):

~~~ sdparse
the house in which you live
acl:relcl(house, live)
obl(live, which)
case(which, in)
~~~

~~~ sdparse
the crown from where the jewels were stolen
acl:relcl(crown, stolen)
obl(stolen, where)
case(where, from)
~~~

~~~ sdparse
the king from whom the jewels were stolen
acl:relcl(king, stolen)
obl(stolen, whom)
case(whom, from)
~~~

~~~ sdparse
the king from whose crown we stole the jewels
acl:relcl(king, stole)
obl(stole, crown)
case(crown, from)
nmod:poss(crown, whose)
~~~

~~~ sdparse
the king bequeathed a crown , the jewels of which were stolen
acl:relcl(crown, stolen)
nmod(jewels, which)
case(which, of)
nsubj:pass(stolen, jewels)
~~~

## RCs Versus Non-relative Modifier Clauses

*When*, *where*, *why*, and *how* frequently introduce **adverbial clauses** ([advcl]()). They can also introduce non-relative **adnominal modifier clauses** ([acl]()) similarly providing time/place/manner information:

~~~sdparse
When you leave , be sure to let me know .
advmod(leave, When)
advcl(sure, leave)
~~~

~~~sdparse
The headlines when Nixon resigned were legendary .
advmod(resigned, when)
acl(headlines, resigned)
~~~

TODO: the above would be `mark` not `advmod` in EWT

However, it should be considered a relative construction if the WH-adverb can be paraphrased by *in which* or similar, or if the head noun reifies the kind of relation (*the time when*, *the place where*, *the reason why*).

~~~sdparse
the time when the pizza exploded
acl:relcl(time, exploded)
advmod(exploded, when)
~~~

Some phrases are ambiguous. *The ceremony where/when we became citizens* can be interpreted as an RC if the bestowal of citizenship happened during the ceremony (*in which* interpretation[^2], thus `acl:relcl`). 
But *the ceremony when we became citizens* could be used to refer to a particular ceremony held around the time of becoming a citizen, as opposed to some other ceremony held at some other time; the modifier can be fronted as an `advmod` within the higher clause: *When we became citizens, the ceremony...*. This is the `acl` interpretation.

Illustrating the contrast with *where*:
- The house where Kim grew up is on Elm Street: `acl:relcl`. Cf.:
   * the house **in which** Kim grew up
   * #Where Kim grew up, the house is on Elm Street.
- The economy where Kim lives is struggling: probably `acl`, interpreted like *Where Kim lives, the economy is struggling.* 

[^2]: Or, formally, *wherein*.


## Free Relatives

NOTE: partially adapted from <https://universaldependencies.org/en/specific-syntax.html#free-relatives>

**Free relatives** are noun phrases containing a relative clause modifying a WH-phrase. 
There is no separate relativizer in the RC; it is "fused" with the head (thus these constructions are also known as **fused relatives**).

<!-- In free relative constructions, the _wh_-clause functions as an argument in the higher clause. In these cases, the _wh_-phrase is deemed the head of the construction, thereby receiving a dependency relation reflective of its function in the higher clause, and the rest of the _wh_-clause is an `acl:relcl` dependent on it. -->

~~~sdparse
I 'll have whatever she 's having .
obj(have, whatever)
acl:relcl(whatever, having)
~~~

~~~sdparse
You can go where you want and eat what you want .
advmod(go, where)
acl:relcl(where, want-6)
obj(eat, what)
acl:relcl(what, want-11)
~~~

~~~sdparse
What money we have left will go to charity
det(money, What)
acl:relcl(money, have)
nsubj(go, money)
~~~

~~~sdparse
I don't like how it looks (CGEL p. 1077)
obj(like, how)
acl:relcl(how, looks)
~~~

~~~sdparse
I love how well everyone behaved .
obj(love, well)
advmod(well, how)
acl:relcl(well, behaved)
~~~

TODO: GKP: exclamative. CGEL p. 919: exclamatives license *very*: "I love how very well everyone behaved" (\*I wonder how very well everyone behaved). cf. "I love how appreciative everyone was" (cyclic example)

### Free Relatives Versus Interrogative/Exclamative Complement Clauses

Free relatives are subtly different from **interrogative clauses**, where the WH-word making it interrogative is inside the clause.
Verbs such as *wonder*, *know*, and *tell* license interrogative complement clauses (including ones beginning with *whether*).
According to *CGEL* (Huddleston and Pullum 2002, pp. 1070–1079), in contrast to interrogative clauses, free relatives 
- are always finite;
- are never marked by *whether*; 
- generally permit WH-*ever* heads (*Eat what(ever) you want*); 
- cannot be reduced with a non-*ever* head, even given sufficient context
  * Free relative: *He bought what I was selling* → *\*I was selling something (he bought what!).*
  * cf. interrogative: *He wondered what I was selling* → *I was selling something (he wondered what!).*;
- never license *else* after a non-*ever* head (*\*He bought what else I was selling*) [this test is from *SIEG*, Huddleston et al. 2021, p. 291].

The following contain interrogative complement clauses, not free relatives, and thus use [ccomp]():

~~~sdparse
I need to know who you are planning to leave with .
obl(leave, who)
case(who, with)
ccomp(know, leave)
~~~

~~~sdparse
I don't know where he lives , who he is , how old he is , how much money he has , what car he drives , to whom he is married , whether he has kids , or why he is here .
ccomp(know, lives)
advmod(lives, where)
conj(lives, who)
nsubj(who, he-9)
cop(who, is-10)
conj(lives, old)
advmod(old, how-12)
cop(old, is-15)
conj(lives, has-21)
advmod(much, how-17)
amod(money, much)
obj(has, money)
conj(lives, drives)
nsubj(drives, car)
det(car, what)
conj(lives, married)
obl(married, whom)
case(whom, to)
conj(lives, has-36)
mark(has-36, whether)
conj(lives, here)
advmod(here, why)
~~~

TODO: "how old he is": I think this is a good argument to treat WH words introducing an interrogative complement clause as `advmod`, not `mark`, because "how", "what", "which" can be NP dependents. cf. "it depends on [how good a horse] your horse is"

Interrogative WH-clauses can also function as clause adjuncts:

- **Whether you like it or not**, I'm doing it. TODO: nsubj(like, you), mark(like, Whether), advcl(doing, like)
- **Whatever this is**, I like it! TODO: nsubj(Whatever, this), advcl(like, Whatever)
- **Whatever your reasons (are)**, I disagree. TODO: nsubj(Whatever, reasons), advcl(disagree, Whatever). See [*No matter* and similar](#no-matter-and-similar) below.

**Exclamative clauses** beginning with *how* or *what* may also function as complements:

- I know/\*wonder what a jerk he is!
   ~~~sdparse
I know what a jerk he is !
ccomp(know, jerk)
det:predet(jerk, what)
det(jerk, a)
nsubj(jerk, he)
cop(jerk, is)
~~~
- I noticed how big a car he has. ('I noticed that he has a remarkably big car.')

TODO: plain `acl` for a WH-clause: is this limited to interrogative and exclamative complements of nouns, and non-RC adjuncts ("press conferences when the US forces were already inside Baghdad")? <http://match.grew.fr/?corpus=UD_English-EWT@dev&custom=61c1f3622bda6>


### Cyclic cases

In some cases, the _wh_-phrase would be analyzed as the head of the _wh_-clause. For example, in the sentence _I love how appreciative everyone was_, the word _appreciative_ would normally be a predicative head (since the verb _was_ is a copula and would receive the `cop` relation). Since _appreciative_ cannot be an `acl:relcl` dependent on itself, the auxiliary is promoted to the head of the relative clause and assigned the `acl:relcl` relation.

~~~sdparse
I love how appreciative everyone was .
obj(love, appreciative)
acl:relcl(appreciative, was)
advmod(appreciative, how)
~~~

TODO: If I am reading CGEL correctly this should be an exclamative complement clause, not a free relative, so the cyclicity problem goes away. If we adopt the exclamative clause analysis [these results with BE as the RC predicate](http://match.grew.fr/?corpus=UD_English-EWT@dev&custom=61c5129ddeaf0) should be revisited.
Maybe a better example: "I want to sample whatever dish this is". "Whatever dish" cannot be simultaneously the head of the RC and the predicate of the embedded clause, so "is" gets promoted.


TODO: Also copied from the v1 guidelines:

~~~sdparse
This is the key to how worthy the effort might be .
nmod(key, worthy)
case(worthy, to)
advmod(worthy, how)
acl:relcl(worthy, be)
~~~

But I am not sure whether this is a free relative. Cf. "This is the key to whether the effort might be worthy." (suggests clause-like) "This is the key to its worthiness." (suggests NP-like). Maybe it's ambiguous? How about:

~~~sdparse
This is the key to how worthy the effort might be .
nmod(key, worthy)
mark(worthy, to)
advmod(worthy, how)
acl(key, worthy)
cop(worthy, be)
~~~


## Clefts

The free relative analysis is also extended to cleft constructions.

TODO: potential problem—"that" cannot normally head free relatives, but it can appear in clefts: "It is [the marrying off of young girls to older men often close relatives] that enfurates me."

~~~sdparse
-ROOT- John is who we want to help .
root(-ROOT-, who)
nsubj(who, John)
acl:relcl(who, want)
cop(who, is)
~~~

~~~sdparse
-ROOT- It 's John who we want to help .
expl(who, It)
root(-ROOT-, who)
nsubj(who, John)
acl:relcl(who, want)
cop(who, 's)
~~~

~~~sdparse
-ROOT- What the committee hopes to learn is why all these events transpired .
nsubj(why, What)
acl:relcl(What, hopes)
cop(why, is)
acl:relcl(why, transpired)
nsubj(transpired, events)
root(-ROOT-, why)
~~~

## _No matter_ and similar

The phrase _no matter_ is analyzed as taking a `obj` complement in, e.g., _no matter the cost_. When it takes free relative object, that object is also analyzed according to the rules above.

~~~sdparse
No matter what progress we make as individuals, we will never achieve real health until ...
det(matter, No)
obl:npmod(achieve, matter)
obj(matter, progress)
det(progress, what)
acl:relcl(progress, make)
~~~

TODO: or should it be `advmod(matter, no)`, as in EWT?

TODO: A particular non-relative construction in which WH-ever forms occur (these are interrogative clauses functioning as adjuncts): *Whatever the reasons behind the duel (were), he was convinced of his impending death* (cf. *I'm doing this whether you like it or not.*; see CGEL pp. 985-986)

## Additional Examples

- She was telling me how wrong I was about how another dress that I loved compared to one of her dresses. [issue](https://github.com/UniversalDependencies/UD_English-EWT/issues/78)
- if we lose Dean (which we will if we don't pay 65k + 10k) [issue](https://github.com/UniversalDependencies/UD_English-EWT/issues/203)


<!-- Interlanguage links updated St lis 3 20:58:33 CET 2021 -->
