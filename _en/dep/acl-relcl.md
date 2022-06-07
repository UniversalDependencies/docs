---
layout: relation
title:  'acl:relcl'
shortdef : 'adnominal relative clause modifier'
udver: '2'
---

** UNDER REVISION **

A relative clause (RC) is a clause modifying some head (typically a noun) that is understood to fulfill some grammatical role in the RC. 
The head is said to be "extracted" from the RC.

Most RCs are adnominal, hence the relation `acl:relcl`. Adverbial RCs attach as [advcl:relcl](), as discussed [below](#adverbial-relative-clauses).

RCs are usually finite (*people who live in glass houses*), but may also be [infinitival](#infinitival-relatives) (*I found a house in which to live*, *I found a house (for my mother) to live in*). Gerund-participial and past-participial clauses (*people living in glass houses*, *students given high marks*) are never considered relative clauses.

In the Basic Dependencies representation, the main predicate of the RC attaches to the head as `acl:relcl`. This is shown in the example on the left.

In the [Enhanced Dependencies]() layer, there is an additional dependency in the opposite direction to indicate the role from which the head was "extracted". This is shown on the right.

<table id="rc-example1"> <!--I saw the man you love . -->
<tbody><tr><td width="550">
<div class="conllu-parse">
1 I      _ _ _ _ 0 _ _ _
2 saw    _ _ _ _ 0 _ _ _
3 the    _ _ _ _ 0 _ _ _
4 man    _ _ _ _ 2 obj _ _
5 you    _ _ _ _ 6 nsubj   _ _
6 love   _ _ _ _ 4 acl:relcl _ _
7 .      _ _ _ _ 0 _ _ _
</div>
</td><td width="650">
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
<tbody><tr><td width="550">
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
</td><td width="650">
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
<tbody><tr><td width="550">
<div class="conllu-parse">
# visual-style 5 3 advmod color:orange
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 episode episode NOUN NN Number=Sing 0 root _ _
3 where where ADV WRB PronType=Rel 5 advmod _ _
4 Monica Monica PROPN NNP Number=Sing 5 nsubj _ _
5 sings sing VERB VBZ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td><td width="650">
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
<tbody><tr><td width="550">
<div class="conllu-parse">
# visual-style 4 3 nmod:poss color:orange
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 woman woman NOUN NN Number=Sing 0 root _ _
3 whose whose PRON WP$ Poss=Yes|PronType=Rel 4 nmod:poss _ _
4 cat cat NOUN NN Number=Sing 5 nsubj _ _
5 smells smell VERB VBZ Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
</div>
</td><td width="650">
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


<table> <!--the country that we want to be -->
<tbody><tr><td width="550">
<div class="conllu-parse">
# visual-style 5 3 xcomp color:orange
# visual-style 6 3 mark color:orange
# visual-style 7 3 cop color:orange
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 country country NOUN NN Number=Sing 0 root _ _
3 that that PRON WP PronType=Rel 5 xcomp _ _
4 we we PRON PRP Case=Nom|Number=Plur|Person=1|PronType=Pers 5 nsubj _ _
5 want want VERB VBP Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
6 to to PART TO _ 3 mark _ _
7 be be VERB VB VerbForm=Inf 3 cop _ _
 </div>
</td><td width="650">
<div class="conllu-parse">
# visual-style 2 3 ref color:blue
# visual-style 2 6 mark color:blue
# visual-style 2 7 cop color:blue
# visual-style 5 2 xcomp color:blue
1 the the DET DT Definite=Def|PronType=Art 2 det _ _
2 country country NOUN NN Number=Sing 0 root 5:xcomp _
3 that that PRON WP PronType=Rel 2 ref _ _
4 we we PRON PRP Case=Nom|Number=Plur|Person=1|PronType=Pers 5 nsubj _ _
5 want want VERB VBP Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin 2 acl:relcl _ _
6 to to PART TO _ 2 mark _ _
7 be be VERB VB VerbForm=Inf 2 cop _ _
</div>
</td></tr></tbody>
</table>

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

The specifying/ascriptive distinction does not affect the UD analysis.

## Adverbial Relative Clauses

On occasion, a relative clause attaches not as a noun modifier but as a clause modifier, and therefore the appropriate relation is [advcl:relcl]().
One such case is clausal anaphora, where the antecedent is a clause:

~~~ sdparse
I tried to explain myself – which was a bad idea
advcl:relcl(tried, idea)
nsubj(idea, which)
~~~

Another such case occurs in *it*-clefts: see [below](#clefts).

## Predicate Ellipsis in the Relative Clause

A pronominal relativizer may stand for a predicate in a relative clause:

~~~ sdparse
If we lose ( which/PRON we probably will ) , I'm blaming you.
advcl(blaming, lose)
advcl:relcl(lose, which)
nsubj(which, we-6)
advmod(which, probably)
aux(which, will)
~~~

TODO: decide about advcl:relcl

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

## Infinitival Relatives

<!-- Infinitival RCs are discussed in CGEL pp. 1067-1068 -->

Relative clauses may be infinitival, in which case they do not generally have a relativizer.

~~~sdparse
I found a bagel to eat
acl:relcl(bagel, eat)
~~~

~~~sdparse
I have a suggestion to make
acl:relcl(suggestion, make)
~~~

~~~sdparse
I found someone to work on Saturdays
acl:relcl(someone, work)
~~~

~~~sdparse
I found a house (for my mother) to live in
acl:relcl(house, live)
obl(live, in)
~~~

Infinitival [prepositional relatives](#prepositional-relatives) with a relativizer are possible as an alternative to stranding:

~~~sdparse
I found a house in which to live
acl:relcl(house, live)
obl(live, which)
case(which, in)
~~~

Note that an adnominal infinitival clause is only a relative clause if the head noun is understood to double as a dependent of the subordinate clause. 
In the above examples, the bagel is the thing eaten (which corresponds to an `obj` in enhanced dependencies); *someone* is the person assigned to work (the enhanced `nsubj`); and so on.

By contrast, the following are plain [acl]() because *suggestion* and *ability* are not understood as playing any role in the infinitival clause:

~~~sdparse
your suggestion to eat early
acl(suggestion, eat)
~~~

~~~sdparse
your ability to navigate in the dark
acl(ability, navigate)
~~~

Some infinitivals are ambiguous between two plausible readings. *A proposal to speed up the meeting* can be construed as a proposal *of* speeding up the meeting, i.e. speeding up is the content of the proposal ([acl]()); or the proposal can be understood to consist of some method of saving time, in which case the proposal is construed as speeding up the meeting—a subject relative interpretation (`acl:relcl`).

With nouns like *proposal*, the *of*-paraphrase test can be used as a diagnostic for the non-relative interpretation.
Another diagnostic is substituting *something*, *somewhere*, *some way*(?), or similar, which favors the relative clause interpretation:[^3]

TODO: Currently [acl]() has "a simple way to get my discount". Is this an adjunct relative or a complement of "way"? It can be paraphrased as "way of getting my discount". Similarly: "reason to leave"/"reason for leaving".

~~~sdparse
something to speed up the meeting
acl:relcl(something, speed)
~~~ 

[^3]: However, this test fails for *a suggestion to make*: *\*something to make* is not a valid substitution because *make a suggestion* is a light verb construction.

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

☞ TODO: the above (non-relative WH words) would be SCONJ/`mark` not ADV/`advmod` in EWT. Also, relativizers are inconsistent in EWT.
<https://github.com/UniversalDependencies/UD_English-EWT/issues/88>, <http://match.grew.fr/?corpus=UD_English-EWT@dev&custom=61bfec493c0d3&clustering=W.upos>

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

☞ TODO: it may be more complicated than this. look at CGEL pp. 1078-1079

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

☞ TODO: "how old he is": I think this is a good argument to treat WH words introducing an interrogative complement clause as `advmod`, not `mark`, because "how", "what", "which" can be NP dependents. cf. "it depends on [how good a horse] your horse is"

Interrogative WH-clauses can also function as clause adjuncts:

~~~ sdparse
Whether you like it or not , it works .
mark(like, Whether)
conj(like, not)
advcl(works, like)
~~~

~~~ sdparse
Whatever it is , I 'm against it !
advcl(against, Whatever)
nsubj(Whatever, it)
cop(Whatever, is)
~~~

~~~ sdparse
Whatever your reasons , I disagree .
advcl(disagree, Whatever)
nsubj(Whatever, reasons)
~~~

See [*No matter* and similar](#no-matter-and-similar) below.

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
- I love how well everyone behaved.
~~~sdparse
I love how well everyone behaved .
ccomp(love, behaved)
advmod(behaved, well)
advmod(well, how)
~~~
- I noticed how big a car he has. ('I noticed that he has a remarkably big car.')
~~~sdparse
I noticed how big a car he has .
ccomp(noticed, has)
obj(has, car)
amod(car, big)
advmod(big, how)
~~~

☞ TODO: With the exclamative clause analysis [these results with BE as the RC predicate](http://match.grew.fr/?corpus=UD_English-EWT@dev&custom=61c5129ddeaf0) should be revisited.

☞ TODO: plain `acl` for a WH-clause: is this limited to interrogative and exclamative complements of nouns, and non-RC adjuncts ("press conferences when the US forces were already inside Baghdad")? <http://match.grew.fr/?corpus=UD_English-EWT@dev&custom=61c1f3622bda6>


### Cyclic cases

In some cases, promotion is required to avoid a cycle. For example, in the sentence _I want to sample whatever dish this is_, _whatever dish this is_ is a free relative with a copular embedded clause. The word _dish_ cannot simultaneously be treated as the copular predicate and the head of the free relative (because it cannot be an `acl:relcl` dependent on itself), so the auxiliary is promoted to the head of the embedded clause and assigned the `acl:relcl` relation.

~~~sdparse
I want to sample whatever dish this is .
obj(sample, dish)
det(dish, whatever)
acl:relcl(dish, is)
nsubj(is, this)
~~~


## Clefts

A free relative can be used within a copular construction to background some material relative to a foregrounded element. *John* is foregrounded in the following two variants of the __pseudocleft construction__:

~~~sdparse
-ROOT- John is who we want to help .
root(-ROOT-, who)
nsubj(who, John)
acl:relcl(who, want)
cop(who, is)
~~~

~~~sdparse
-ROOT- Who we want to help is John .
root(-ROOT-, John)
nsubj(John, Who)
acl:relcl(Who, want)
cop(John, is)
~~~

The following show the pseudocleft construction being used to foreground a clause:

~~~sdparse
-ROOT- What John did was to play tennis .
mark(play, to)
cop(play, was)
nsubj:outer(play, What)
acl:relcl(What, did)
~~~

~~~sdparse
-ROOT- What the committee asked is whether the plan worked .
nsubj:outer(worked, What)
acl:relcl(What, asked)
cop(worked, is)
mark(worked, whether)
nsubj(worked, plan)
root(-ROOT-, worked)
~~~

☞ TODO: clefts vs. extraposition. 
- CLEFT: "It’s [that he’s so self-satisfied] [that I find offputting]." (CGEL p. 1418). 
- EXTRAPOSITION: "I find it offputting that he's so self-satisfied." expl(find, it), nsubj(find, I), ccomp(find, self-satisfied)


<!--
~~~sdparse
-ROOT- What the committee asked is why all these events transpired .
nsubj(why, What)
acl:relcl(What, asked)
cop(transpired, is)
advmod(transpired, why)
nsubj(transpired, events)
root(-ROOT-, transpired)
~~~
-->

The __*it*-cleft construction__ serves a similar purpose—foregrounding one element (with expletive *it* plus copula). 
The remainder of the sentence is a standard (not free) relative clause that elaborates on the copular predication. 
CGEL (p. 416) describes it as a relative clause functioning as a dependent of the main clause (versus the canonical function of a relative clause as dependent within a nominal phrase). 
In UD terms, the relative clause is *adverbial*; we therefore use `advcl:relcl`:

~~~sdparse
-ROOT- It 's John who we want to help .
expl(John, It)
cop(John, 's)
root(-ROOT-, John)
advcl:relcl(John, want)
xcomp(want, help)
obj(help, who)
~~~

(Previous versions of the guidelines treated *who we want to help* in the *it*-cleft as a free relative. But note that the above can be paraphrased as *It's John __that__ we want to help* or even *It's John we want to help*, whereas free relatives require a WH-word to serve as the head.)

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

☞ TODO: or should it be `advmod(matter, no)`, as in EWT?

☞ TODO: A particular non-relative construction in which WH-ever forms occur (these are interrogative clauses functioning as adjuncts): *Whatever the reasons behind the duel (were), he was convinced of his impending death* (cf. *I'm doing this whether you like it or not.*; see CGEL pp. 985-986)

## Additional Examples

- She was telling me how wrong I was about how another dress that I loved compared to one of her dresses. [issue](https://github.com/UniversalDependencies/UD_English-EWT/issues/78)
- if we lose Dean (which we will if we don't pay 65k + 10k) [issue](https://github.com/UniversalDependencies/UD_English-EWT/issues/203)


<!-- Interlanguage links updated So kvě 14 19:02:49 CEST 2022 -->
