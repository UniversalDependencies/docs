---
layout: base
title:  'Syntax'
permalink: en/overview/specific-syntax.html
---

# Specific constructions

## Core clausal syntax: predicates and their arguments

### Predicates

Main predicates in English are most often verbs, but they can also be adjectives, nouns and even adverbs. In UD, predicates are labeled with one of the clausal relations: `root`, `ccomp`, `xcomp`, `advcl`, `acl` (and its subtypes); or one of the loose-joining relations, `conj` and `parataxis`, under a head that has a clausal label.

~~~ sdparse
-ROOT- When you work on something that long , it 's impossible not to get attached to it , I think .
advcl(impossible, work)
xcomp(get, attached)
parataxis(get, think)
root(-ROOT-, impossible)
~~~

Any dependent that can be said to attach at the clausal level (for example, core arguments, adverbial modifiers, complementizers, or conjoined clauses) will have the predicate word as its head.

UD does not distinguish light verbs from full verbs.

~~~sdparse
I 'm going to take a nap .
nsubj(take, I)
dobj(take, nap)
~~~

#### Copulas

This is true even in the case of nonverbal predicates, which is a distinguishing feature of Universal Dependencies. This is evident in the UD treatment of copulas.

~~~sdparse
I think this is very interesting .
ccomp(think, interesting)
nsubj(interesting, this)
~~~

Here, the head of *this* is *interesting*, because `nsubj`-labeled dependents attach at the clausal level, and the head of the lower clause is the adjective *interesting*. Similarly, it is the predicate that receives the clausal label `ccomp`.

In equative uses of copulas, the distinction between predicate ans subject is somewhat arbitrary. In those cases, linear order is used as a cue: the subject is taken to appear first.

In some of these equative uses, the right-hand side may be a clause, finite or not. In those cases, exceptionally, the copular verb is treated as the predicate, and the clause is given attached to it, with the `ccomp` label.

~~~sdparse
-ROOT- The problem is that these sentences are very difficult to analyze .
root(-ROOT-, is)
ccomp(is, difficult)
~~~

#### Nonverbal predicates with no copular verb

The treatment UD adopts for copulas is consistent with its treatment of small clauses. In a surprisingly wide range of constructions in English, a nonverbal predicate forms a constituent with its core arguments without any mediating verb. These constructions are directly parallel to copulas in the UD scheme, since copular verbs do not mediate relations between nonverbal predicates and their dependents.

In some of these constructions, one might argue that there is an ellided copular verb. We make no attempt to represent such a verb, with no cost to the dependency analysis.

~~~sdparse
Email usually free if you use a wifi connection .
nsubj(free, Email)
~~~

~~~sdparse
If you take him here for shots, no big deal .
advcl(deal, take)
~~~

~~~sdparse
The attack killed 600 Iraqis , most of them women and children .
acl(Iraqis, women)
conj(women, children)
nsubj(women, most)
~~~

In other cases, such as the constructions sometimes called __absolute__, it is harder to argue that there is an ellided verb. The analysis is still parallel to that of other nonverbal predicates, and to that of absolute constructions with nonfinite verbal predicates.

~~~sdparse
The year was bad news for animals , with many species now close to extinction .
advcl(news, close)
nsubj(close, species)
mark(close, with)
advmod(close, now)
~~~

~~~sdparse
NASA is planning on using these shuttles , with industry forecasters predicting a launch as early as 2014 .
advcl(planning, predicting)
nsubj(predicting, forecasters)
mark(predicting, with)
~~~

### Core arguments

UD makes a distinction between core arguments and other dependents of predicates. In English, the UD relations that can designate core arguments are `nsubj`, `nsubjpass`, `dobj` and `iobj` for nominal arguments, and `ccomp`, `xcomp`, `csubj` and `csubjpass` for clausal arguments.

`nsubj` and `nsubjpass` are used for external arguments of any predicate (as in the examples above); the only difference is that `nsubjpass` is used in passive-voice clauses.

~~~sdparse
Unsafe cars sold here !
nsubjpass(sold, cars)
~~~

In the above example, it is important to mention that a plausible alternative representation would analyze this as a nominal phrase with a reduced relative. However, when possible, we prefer to choose a predicate as the root of a sentence.

~~~sdparse
Messages will not be delivered simultaneously .
nsubjpass(delivered, Messages)
~~~

Expletives can occur in subject or object position, and are represented with the label `expl`.

~~~sdparse
It is raining .
expl(raining, It)
~~~

~~~sdparse
It was Joseph Goebbels who said that .
expl(Goebbels, It)
~~~

~~~sdparse
I find it best not to think about that .
ccomp(find, think)
expl(find, it)
xcomp(find, best)
~~~

Expletives can have a subject-labeled sister.

~~~sdparse
There is dinner in the fridge .
expl(is, There)
nsubj(is, dinner)
~~~

The internal argument labels, `dobj` and `iobj`, are exclusive to verbal predicates and a handful of adjectives (namely: *worth*, *like* and *unlike*, following Huddleston and Pullum (2001)).

The distinction between `dobj` and `iobj` is strictly syntactic; `iobj` is reserved for "second objects" with restricted theta-roles, and is relatively rare in English. Only when another internal argument is present can `iobj` occur.

~~~sdparse
They gave me the trip as a gift.
iobj(gave, me)
dobj(gave, trip)
~~~

The other internal argument need not be nominal. In English, some verbs can take a nominal complement and a clausal complement together. In the case of these verbs, the nominal complement is always thematically restricted, which suggests it is an `iobj` serving as a "second object" to the clausal complement. For that reason, the clausal complement label `ccomp` never cooccurs with `dobj`, but does cooccur with `dobj`.

~~~sdparse
I told them that I 'm planning to come visit .
ccomp(told, planning)
iobj(told, them)
~~~

However, the same observation does not hold of verbs that take open complements, labeled `xcomp` (more on this label below). Those can clearly cooccur with thematically unrestricted objects under some verbs. For that reason, nominal complements cooccuring with `xcomp` are uniformly labeled `dobj`, and never `iobj`.

~~~sdparse
I told them to expect my visit.
dobj(told, them)
xcomp(told, expect)
~~~

#### Clausal core arguments

Like other clausal labels, the clausal core argument labels apply to finite and nonfinite clauses without distinction. (In English `xcomp` can only be applied to nonfinite clauses because there is no control into finite clauses; but this is not part of the definition of `xcomp`.)

The distinction between `csubj` and `csubjpass` mirrors that between `nsubj` and `nsubjpass`.

~~~sdparse
Islamists may disagree on whether killing innocents is sanctioned by the laws of jihad .
csubjpass(sanctioned, killing)
~~~

~~~sdparse
Whether or not you pick them up again is probably a question of practice .
csubj(question, pick)
~~~

The clausal subject labels apply to verbal as well as nonverbal predicates.

~~~sdparse
On the side is a waste , leave it on the bottom .
csubj(waste, side)
cop(waste, is)
~~~

Much like `nsubj(pass)`, `csubj(pass)` can (and often does) cooccur with an expletive.

~~~sdparse
It is rare to find a company with such nice workers .
expl(rare, It)
csubj(rare, find)
~~~

Clausal core arguments are restricted to verbal and adjectival predicates. Nouns never take clausal core arguments. (See [](#### Clausal modifiers of nouns) for how to represent clausal dependents of nouns.)

#### Functional control

The label `xcomp` is used for predicates whose external argument is _controlled_ by an argument of a higher clause. This applies in multiple types of constructions (often referred to as "small clauses"): _raising_, _obligatory control_, _resultatives_ (obligatory and optional alike) and _obligatory depictives_.

~~~sdparse
The cat seems to be in pain .
nsubj(seems, cat)
xcomp(seems, be)
~~~

~~~sdparse
Convince your parents to let you get a pet .
dobj(Convince, parents)
xcomp(Convince, let)
dobj(let, you)
xcomp(let, get)
~~~

~~~sdparse
Put an oily sauce on the food to make it moist .
dobj(make, it)
xcomp(make, moist)
~~~

~~~sdparse
The pond froze solid .
nsubj(pond, froze)
xcomp(froze, solid)
~~~

~~~sdparse
She thinks it looks artistic .
nsubj(looks, it)
xcomp(looks, artistic)
~~~

This includes copula-like English verbs such as *become*, *remain*.

~~~sdparse
I became very upset .
nsubj(became, I)
xcomp(became, upset)
~~~

### Noncore arguments and predicate modifiers

UD marks core arguments, but it does not make a distinction between noncore arguments and modifiers of a predicate. In English, noncore arguments are introduced by prepositions or subordinating conjunctions (which largely overlap with each other). Optional modifiers can also be introduced by such words. In UD, the representation of noncore arguments and predicate modifiers, while distinct from that of core arguments, is uniform. The entire set will be referred to here as _noncore dependents_.

Noncore dependents are classified by their syntactic properties. Nominal dependents (i.e., phrases whose lexical head is a noun) are labeled `nmod`. Most of these, in English, are introduced by prepositions.

~~~sdparse
My parents lived in England in the 1980s .
nmod(lived, England)
nmod(lived, 1980s)
~~~

In the example above, note that *in England* and *in the 1980s* are annotated with the same label, even though the former is arguably a noncore argument of *live*, while the latter is certainly not.

Bare nominals receive the label `nmod:npmod`, which is an English-specific relation.

~~~sdparse
I am 3 blocks west of Broadway .
nmod:npmod(west, blocks)
~~~

~~~sdparse
The price of crude oil advanced 53 cents .
nmod:npmod(advanced, cents)
~~~

More narrowly, bare nominals denoting a point in time receive the label `nmod:tmod`, also English-specific.

~~~sdparse
The company will be making an announcement this year that formalizes the relationship.
nmod:tmod(company, year)
~~~

Clausal noncore dependents, whether finite or nonfinite, receive the label `advcl`.

This label can also apply to nonverbal predicates, as shown in this example (repeated from [](#### Nonverbal predicates with no copular verb)).

~~~sdparse
The year was bad news for animals , with many species now close to extinction .
advcl(news, close)
nsubj(close, species)
mark(close, with)
advmod(close, now)
~~~

~~~sdparse
I know what they are , so no suggestions on just going out to buy one .
advcl(know, suggestions)
~~~

In the example above, an alternative analysis might represent *no suggestions* as a nominal dependent. However, we take the presence of *so*, which usually attaches to predicates, as evidence of clausal status.

### Function words attaching to predicates

The labels `mark`, `aux`, `auxpass` and `cop` are used for function words that attach to predicates. While in some linguistic theories these are argued to be heads of constituents, in UD they are demoted to dependents of lexical heads, in line with the principle of primacy of content words.

These function words do not normally have dependents, but there are exceptions. They may have word-level dependents; they may also be coordinated (on the surface, due to VP-ellipsis), and have conjunction and conjunct dependents.

~~~sdparse
We can and will get to the bottom of this .
aux(get, can)
cc(can, and)
conj(can, will)
~~~

Unfortunately, not all conjunctions of function words attaching to predicates lend themselves of this analysis, which leads to a lack of parallelism across some constructions. In the following example, the first conjunct receives a promotion-by-head-ellision treatment.

~~~sdparse
-ROOT- This change has been and will be taken to provide focus for the project .
root(-ROOT-, has)
auxpass(has, been)
cc(has, and)
conj(has, taken)
~~~

#### Complementizers, subordinating conjunctions and the infinitival marker

In English, the label `mark` applies uniformly to complementizers, subordinating conjunctions and the infinitival marker.

~~~sdparse
Remember that the occupation is ephemeral .
mark(ephemeral, that)
~~~

~~~sdparse
They already have rights to take it .
mark(take, to)
~~~

~~~sdparse
Probably just gon na kick it .
mark(kick, na)
~~~

~~~sdparse
This gives the company a way of influencing and anticipating the direction of change .
mark(influencing, of)
~~~

~~~sdparse
A warming of the magnitude predicted is more likely than not to be beneficial .
mark(not, than)
~~~

~~~sdparse
Bush spent little time reviewing capital punishment cases while governor of Texas .
mark(governor, while)
~~~

#### Copular verbs

~~~sdparse
I think this is very interesting .
ccomp(think, interesting)
nsubj(interesting, this)
~~~

The copular verb *be* is treated as a function word: it is attached to the predicate and labeled `cop`, a special label for copular verbs. In English, only *be* receives this treatment. See [](#### Functional control) for copula-like verbs such as *become*.

#### Auxiliaries

Modal and auxiliary verbs are uniformly labeled as `aux` or `auxpass` in UD, and attached to their main verb. (When there is no main verb, the auxiliary is promoted by head ellision.) This is the case even when there are multiple auxiliaries; rather than chained together to reflect scope properties, they are flatly attached to the main verb.

The `auxpass` label applies only to passive auxiliaries.

~~~sdparse
By that time , Elena 's story would have been revealed to be a fake .
aux(revealed, would)
aux(revealed, have)
auxpass(revealed, been)
~~~

The verb *get* can behave as a passive auxiliary, and when it does, it is annotated as such.

~~~sdparse
I got put on hold twice .
auxpass(put, got)
nsubjpass(put, I)
~~~

## Below the clause

### Word-level dependents: complex lexical units

While most types of dependents can be said to attach to phrases (i.e., `nsubj` dependents attach to verbal phrases; `det` dependents attach to noun phrases), some attach only at the word level. These types of dependencies form complex lexical units which then enter, as a composite, dependencies of their own.

Three relations can be used to form complex lexical units. The most straightforward one is `goeswith`, which can be used between any two tokens and serves to indicate that, as a result of input error, a single orthographic word is split into two space-separated tokens in the data.

~~~sdparse
I felt as if I was in an over priced Olive Garden .
goeswith(priced, over)
~~~

The other two relations, `mwe` and `compound`, are more interesting. The main difference between them is that `mwe` applies between function words and other function words or lexical words, while `compound` applies only between lexical words.

The `mwe` relation is used sparingly. In general, the relation is used in grammaticalized uses of two or more function words together, often giving rise to noncompositional meaning. Since words joined by the `mwe` relation often have equal claim to the status of head, any such construction is, by convention, head-initial.

~~~sdparse
How come no one bothers to ask any questions in this section ?
mwe(How, come)
advmod(bothers, How)
~~~

~~~sdparse
I just kind of sat there .
mwe(kind, of)
advmod(sat, kind)
~~~

~~~sdparse
You have to wait , due to financial reasons .
mwe(due, to-7)
case(reasons, due)
~~~

When the multiword expression is composed of more than two words, all non-head words attach directly to the head, in a flat structure.

Decisions about what should be annotated as a multiword expression are difficult due to the fact that such expressions exist in a continuous spectrum between phrases built via fully productive rules on the one hand, and fixed lexicalized expressions on the other. A series of criteria can be used to rule out the `mwe` label: optionality of one word in the construction; meaning compositionality;  availability of variants in which one of the words is substituted.

The `compound` relation, on the other hand, can be used freely to represent productive phrase-building. The difference is that `compound` is used when a string of words joined together are analyzed as a single lexical unit that behaves as a head (i.e., an X^0 node) rather than as a constituent (i.e., an XP node) in the sentence.

~~~sdparse
Most of those making charges flip - flopped .
compound(flopped, flip)
~~~

~~~sdparse
The duck breast was really good .
compound(breast, duck)
~~~

~~~sdparse
There is a pool for the potty - trained children .
compound(trained, potty)
~~~

A distinguished type of compound is the English particle verb. Particles that combine with verbs receive the language-specific label `compound:prt`.

~~~sdparse
What time are you going to pick me up ?
compound:prt(pick, up)
~~~

Unlike multiword expressions, compounds can have inner structure, when appropriate.

~~~sdparse
The therapeutic agents under discussion include oolong tea extract .
compound(tea, oolong)
compound(extract, tea)
~~~

### The nominal domain: nominal and prepositional phrases

Nominal and prepositional phrases are uniformly organized around their nominal lexical head in UD. In addition to their argument roles, labeled `nsubj`, `nsubjpass`, `dobj` and `iobj`, nominal phrases can have roles as noncore dependents. In these roles, they are labeled `nmod` (and subtypes). Commonly, noncore dependents are realized as prepositional phrases.

#### Prepositions

Within prepositional phrases, prepositions are represented as dependents of their complements and labeled `case`.

~~~sdparse
Foz on the Brazilian side is the larger town.
nmod(Foz, side)
case(side, on)
~~~

~~~sdparse
Convert into DVD .
nmod(Convert, DVD)
case(DVD, into)
~~~

Nested prepositional phrases are also organized around the single lexical head, in a flat representation parallel to that of verb groups.

~~~sdparse
She ran out of the room .
nmod(ran, room)
case(room, of)
case(room, out)
~~~

#### Possessives

The label `case` is also used for the genitive *'s* in English. The genitive nominal phrase receives the language-specific label `nmod:poss`.

~~~sdparse
Tomorrow is Mother 's Day .
nmod:poss(Mother, Day)
case(Mother, 's)
~~~

The `nmod:poss` label is also used for possessive determiners.

~~~sdparse
That 's your prerogative .
nmod:poss(prerogative, your)
~~~

This possessive modifier analysis is also used for genitives attaching to gerunds.

~~~sdparse
I appreciate your coming here .
nmod:poss(coming, your)
~~~

#### Determiners

In addition to `case`, the label `det` and its language-specific extension `det:predet` also designate function-word dependents of nominal heads. These labels are used for determiners: definite and indefinite articles, demonstrative determiners, quantifiers such as `all`, `some`, `every` and `each`.

~~~sdparse
I did find this website .
det(website, this)
~~~

Floating quantifiers are attached to the nominal head they modify.

~~~sdparse
The five companies that made the short list all proposed structural changes .
det(companies, all)
~~~

In some English constructions, pronouns can cooccur with nominal heads and exhibit determiner-like behavior. In those constructions, these pronouns are annotated as `det`.

~~~sdparse
You guys do everything wonderful !
det(guys, You)
~~~

~~~sdparse
She is a disgrace to the rest of us Pet Smart associates .
det(associates, us)
~~~

The label `det:predet` applies when a determiner is present, and preceding it is another determiner.

~~~sdparse
All the girls were totally shocked .
det(girls, the)
det:predet(girls, All)
~~~

~~~sdparse
What an amazing group !
det:predet(group, What)
det(group, an)
~~~

The label can only apply when `det` is also present.

~~~sdparse
All girls were totally shocked .
det(girls, All)
~~~

Determiners with negative meaning receive the label `neg` instead of `det`.

~~~sdparse
I have no inside information .
neg(information, no)
~~~

#### Appositives

### Optional modifiers: adverbial and adjectival phrases

Both predicates and nominals can be modified by optional phrases -- adverbial and adjectival, respectively. Again, a distinction is made between clausal and nonclausal dependents. Adverbial clauses are labeled `advcl`. Adjectival clauses (of which relative clauses are a subtype) are labeled `acl`. Nonclausal adverbials are labeled `advmod`, and nonclausal adjectivals are labeled `amod`.

#### Clausal modifiers of nouns

Relative clauses are the canonical case of clausal modifiers of nouns, and they receive a special language-specific label, `acl:relcl`. In these clauses, the relative pronoun is analyzed in the function it takes in the lower clause, as illustrated here by *that*, labeled `nsubj`, and *which*, labeled `nmod`.

~~~sdparse
These links present the many viewpoints that existed .
acl:relcl(viewpoints, existed)
nsubj(existed, that)
~~~

~~~sdparse
Archibald says the frequency with which the subject was discussed was off-putting .
acl:relcl(frequency, discussed)
nmod(discussed, which)
case(which, with)
~~~

The `acl:relcl` relation is also used in free relatives, which are discussed in [](### Free relatives).

Relatives clauses are not, however, the only type of clausal modifiers of nouns. For one example, reduced relative clauses are not typed `acl:relcl`, but rather `acl`.

~~~sdparse
There are many online sites offering booking facilities .
acl(sites, offering)
~~~

~~~sdparse
I have a parakeet named cookie .
acl(parakeet, named)
~~~

Additionally, many optional clausal dependents on nominals receive the `acl` label.

~~~sdparse
These are the issues as I see them .
acl(issues, see)
~~~

~~~sdparse
I just want a simple way to get my discount .
acl(way, get)
~~~

_Depictives_ are also represented with the `acl` relation.

#### Quantifier phrases

The notion of _quantifier phrase_ is applied loosely here to a variety of structures that modify nominals. The simplest type is probably simple numerical adjectives, which are labeled `nummod`.

~~~sdparse
I don 't want to spend more than 20 dollars .
nummod(dollars, 20)
~~~

Often some form of modification is applied to these numerical dependents, in the form of expressions such as *more than* (which is considered a multiword expression), *about*, *over*. These are analyzed as dependents of the numerical modifier, forming a complex quantifier phrase.

~~~sdparse
I don 't want to spend more than 20 dollars .
nummod(dollars, 20)
advmod(20, more)
mwe(more, than)
~~~

Ranges are also treated as numerical dependents. Note that in this case the dash *-* is represented as a preposition, because it is a functional equivalent of *to* (as becomes clear from the fact that it is normally read that way).

~~~sdparse
In just 2 - 3 focused lessons , you will be ready .
nummod(lessons, 2)
nmod(2, 3)
case(3,-)
~~~

## Beyond the clause

Beyond core clausal structures, there are many linguistic constructions, usually with discourse functions, that need to be represented in a complete dependency tree. Additionally, complex structures such as coordination and juxtaposition of structures in the same ortographical sentence need to be analyzed. Finally, written communication includes a wealth of information that is structured by rules that exist at the fringes of (or perhaps outside) the grammar of a language. In order to provide a complete representation, we integrate even that information into syntax trees, leading to some special dependency labels, and some peculiar annotation conventions.

### Discourse-level dependents

UD introduces two special relations for discourse-level dependents: `discourse`, which is used to type a limited range of discourse markers, and the informatively named `vocative`, which is used for vocatives. These always attach to predicates, not because they modify them directly, but to express the fact that they have the highest-possible level of attachment.

~~~sdparse
Malach , what say makes sense .
vocative(Malach, makes)
~~~

~~~sdparse
Okay , it 's partly about strippers .
discourse(strippers, Okay)
~~~

~~~sdparse
Morcillas is coagulated blood from animals , ewww .
discourse(blood, ewww)
~~~

~~~sdparse
Can somebody please list ALL the food ?
discourse(list, please)
~~~

~~~sdparse
Of course you can .
discourse(can, Of)
mwe(Of, course)
~~~

### Coordination and loose joining

Coordination is, in a sense, below as well as beyond the clause, since it can occur at any level. But that property is exactly what distinguishes it, and justifies placing it outside of core clausal syntax.

The difficulty of representing coordination, which is symmetrical, with an inherently-asymmetric dependency representation is well-known. UD makes no attempt to disguise this, and adopts first conjuncts, by convention, as the heads of coordinated phrases. Any other conjuncts and conjunctions are attached to that first conjunct.

~~~sdparse
The elated bride and groom danced and sang songs .
cc(bride, and)
conj(bride, groom)
cc(danced, and)
conj(danced, sang)
amod(bride, excited)
dobj(sang, songs)
~~~

This creates some ambiguities: it is not possible to tell, from the representation alone, whether *elated* modified *bride* only, or *bride and groom*. Conversely, it is clear that *songs* is an object only of *sang*, since it attaches to that verb directly rather than to the head of the conjunction, which is *danced*. A change in the ordering of these constituents can introduce that ambiguity.

~~~sdparse
The elated bride and groom sang songs and danced .
cc(sang, and)
conj(sang, danced)
dobj(sang, songs)
~~~

Another (much less frequent) difficulty is the representation of nested coordinations, which is not always possible. In the following example, the heterogeneous coordination of *incarcerated*, *on probation* and *on parole* forms a complex predicate for the first verbal phrase in this sentence. That first VP is then itself coordinated with *once were in one of those categories*. The fact that there are two levels of coordination does not come through in the UD representation.

~~~sdparse
Approximately 10 million Americans are incarcerated , on probation , on parole , or once were in one of those categories ?
cop(incarcerated, are)
conj(incarcerated, probation)
conj(incarcerated, parole)
conj(incarcerated, one)
cop(were, one)
nmod(one, categories)
~~~

The auxiliaries *have* and *be* occasionally appear outside of coordinated predicates having a different function with respect to each predicate, as shown below. In such cases, we annotate the verb only as a dependent of the first conjunct.

~~~sdparse
The toilet seat was peeling and rough .
conj(peeling, rough)
cc(peeling, and)
nsubj(peeling, seat)
aux(peeling, was)
~~~

In this sentence, *was* is also a `cop` dependent of *rough*, but that edge is not represented.

#### Conjunctions

#### Loose joining: parataxis and list

### Special annotation conventions

#### Dates, times, addresses

#### Contact information

#### Itemizations

## Specific constructions

### Unpronounced material

#### VP ellipsis (and related)

While auxiliaries are normally not analyzed as being heads, when a verb has been elided from VP ellipsis, the auxiliary inherits the head-status. This includes the _to_ nonfinite auxiliary.

~~~sdparse
Mary did n't leave , John did
parataxis(leave, did-7)
nsubj(did-7, John)
~~~

~~~sdparse
So please update whatever you need to
dobj(update, whatever)
rcmod(whatever, need)
xcomp(need, to)
~~~

Similarly, when a preposition is stranded in a passive construction, the preposition receives the `nmod` label on account of lacking a nominal head.

~~~sdparse
That matter was talked about in detail already
nmod(talked, about)
~~~

#### Gapping / Stripping

In 'gapping' constructions, where the head of a clause has been elided but two arguments that contrast with arguments in the antecedent clause remain, and 'stripping' constructions, where the head of a clause has been elided but one contrasting argument and one polarity adverbial such as _not_ or _only_ remain, the `remnant` relation is used between the remaining constituents and the words they contrast with:

~~~sdparse
it took another 20 mins to get our orders and a further 45 mins till our starters landed on our table.
cc(took, and)
remnant(mins-5, mins-14)
remnant(get-7, landed-18)
~~~

~~~sdparse
" Commander in Chief " does n't mean that he is the boss of the military , merely that he is the Administrator
remnant(n't, merely)
remnant(boss, Administrator)
~~~

~~~sdparse
He 's not against gays in the bedroom , just at the altar
remnant(not, just)
remnant(bedroom, altar)
~~~

When an argument is 'sprouted'--present in the second clause with no antecedent--it depends on the head of the antecedent clause.

~~~sdparse
" Commander in Chief " means that he is the Administrator of the military , not the boss
remnant(means, not)
remnant(Administrator, boss)
~~~

#### Right-node raising

In right-node raising constructions where the head of the left conjunct has been elided under identity with the head of the second conjunct, the right conjunct undergoes "promotion by head elision", and gains the label that would be assigned to the head if it had been present.

~~~sdparse
-ROOT- Iguazu is a big or a small country ?
root(-ROOT-, big)
cc(big, or)
conj(big, country)
~~~

~~~sdparse
-ROOT- I have never been and I will never be a government official
root(-ROOT-, been)
neg(been, never-4)
aux(been, have)
nsubj(been, I-2)
cc(been, and)
neg(official, never-9)
aux(official, will)
nsubj(official, I-7)
conj(been, official)
~~~

#### Marginal disfluencies

In informal language usage, nonstandard constructions and disfluencies sometimes arise. When this involves a gapping-like construction--with one or more contrasting arguments that depend on an absent head--the remnant relation should be used.

~~~sdparse
The letters were to different AMI publications -- one to the National Enquirer and another to The Sun
cc(were, --)
remnant(--, and)
remnant(letters, one)
remnant(publications, Enquirer)
remnant(one, another)
remnant(Enquirer, Sun)
~~~

If, however, the second clause is largely unparallel to the first clause, a different relation should be used (`conj` or `parataxis` if the smaller clause is not obviously modifying the larger one, `acl` or `advcl` otherwise)

~~~sdparse
Too bad you wo n't make the Compaq thing , but maybe next year
conj(make, year)
cc(make, but)
~~~

~~~sdparse
31 -- Number of Bush administration employees ... ( includes four cabinet secretaries , the six most powerful ... )
acl(Number, includes)
~~~

### Resultatives and depictives

#### Resultatives

Resultatives--predicate arguments of verbs that indicate how another argument of the verb has changed--are considered to be arguments, and therefore receive the `xcomp` relation instead of a modifier one.

~~~sdparse
-ROOT- He painted the barn red .
root(-ROOT-, painted)
dobj(painted, barn)
xcomp(painted, red)
~~~

~~~sdparse
-ROOT- He made them martyrs .
root(-ROOT-, made)
dobj(made, them)
xcomp(made, martyrs)
~~~

~~~sdparse
-ROOT- The terrorists stormed the church and took the priests hostage
root(-ROOT-, stormed)
conj(stormed, took)
dobj(took, priests)
xcomp(took, hostage)
~~~

#### Depictives

[<!> May be subject to change]

Depictives are generally subject-less modifiers of predicates--consequently, they should be analyzed using the `advmod` relation.
<!---
Should this be `advmod` or `advcl`?
-->

~~~sdparse
I still remember him stuttering about " the general " , unable to remember Musharraf 's name
advmod(stuttering, unable)
~~~

~~~sdparse
You can rest assured that it 's not going to go away
advmod(rest, assured)
ccomp(assured, going)
~~~

~~~sdparse
Find attached resume and cover letter
advmod(Find, attached)
dobj(Find, resume)
~~~

~~~sdparse
Attached please find resume and cover letter
advmod(find, Attached)
dobj(find, resume)
~~~

~~~sdparse
Elk in Yellowstone used to browse unmolested
advmod(browse, unmolested)
~~~

### *Tough*-constructions

#### Clauses with expletives
In constructions without any dislocation, of the form _it is_ adj _to_ pred, the _it_ is an `expl`, meaning that the lower predicate must be a `csubj`.

~~~sdparse
-ROOT- It 's hard to make money in this economy
root(-ROOT-, hard)
expl(hard, It)
cop(hard, 's)
csubj(hard, make)
~~~

This construction can optionally occur with _for_ and a subject; in this case, there are two possible analyses. If the subject is interpreted as experiencing the adjective predicate in some way, then it analysed as an `nmod` on the higher predicate; otherwise, it is analyzed as being exclusively the subject of the lower clause, and the _for_ is analyzed as being a `mark`.

~~~sdparse
-ROOT- It was hard for me to solve this problem.
root(-ROOT-, hard)
expl(hard, It)
nmod(hard, me)
case(me, for)
csubj(hard, solve)
~~~

~~~sdparse
-ROOT- It was helpful for John to solve this problem for us.
root(-ROOT-, helpful)
expl(helpful, It)
csubj(helpful, solve)
nsubj(solve, John)
mark(solve, for)
~~~

#### Fronting in _tough_-constructions

When the subject is not an argument of the higher clause, then the lower clause can displace the expletive.

~~~sdparse
-ROOT- For John to solve this problem for us was helpful
root(-ROOT-, helpful)
csubj(helpful, solve)
nsubj(solve, John)
mark(solve, for)
~~~

When the subject _is_ an argument of the higher clause, the lower verb phrase (in its gerund form) or its object (in its nominative form) can be fronted, displacing the expletive and maintaining its `csubj` label. In the latter case, the clause is no longer a `csubj`, being instead analyzed as an `xcomp`.

~~~sdparse
-ROOT- Solving this problem was hard for me
root(-ROOT-, hard)
nmod(hard, me)
case(me, for)
csubj(hard, Solving)
~~~

~~~sdparse
-ROOT- This problem was hard for me to solve
root(-ROOT-, hard)
nmod(hard, me)
case(me, for)
nsubj(hard, problem)
xcomp(hard, solve)
~~~

### Dependency-introducing Adverbs

#### Comparatives
Canonical comparatives are introduced using a comparative adverb (such as _more_, _less_, or _as_) depending on an adjective, and either a clause or prepositional phrase marked with _than_, which also depends on the adjective. In the clausal case, this normally means that the comparing clause is headed by an auxiliary or copula that has been "promoted by head elision".

~~~sdparse
Natália is much more intelligent than me
advmod(more, much)
advmod(intelligent, more)
nmod(intelligent, me)
case(me, than)
~~~

~~~sdparse
Natália is much more intelligent than I am
advmod(more, much)
advmod(intelligent, more)
advcl(intelligent, am)
mark(am, than)
~~~

In many cases, the initial comparative adverb has been dropped or incorporated into the adjective.

~~~sdparse
Natália is much smarter than I am
advmod(smarter, much)
advcl(smarter, am)
mark(am, than)
~~~

When the quantity of a noun is being compared, the same rules apply. Normally modifiers of nouns are deemed `amod`s, but in this construction the comparative marker is an `advmod` in all cases.

~~~sdparse
Natália has more brains than me
dobj(has, brains)
advmod(brains, more)
nmod(brains, me)
case(me, than)
~~~

_More than_ and _less than_--when not used synonymously with _over_ and _under_ in quantity expressions--complicate matters slightly, since the comparative adverb is being used without the head that it modifies. We use a "promotion by head elision" solution, making the dependent into the head when the head is absent.

~~~sdparse
All my neighbors have more than I do
dobj(have, more)
mark(do, than)
acl(more, do)
~~~

When predicates are compared to predicates or modifiers are compared to modifiers, the comparing phrase is always labeled as an `advcl`.

~~~sdparse
That question was far more hurtful than tactful
advmod(more, far)
advmod(hurtful, more)
advcl(hurtful, tactful)
mark(tactful, than)
~~~

~~~sdparse
It 's more likely than not to be beneficial .
advmod(likely, more)
advcl(likely, not)
mark(not, than)
xcomp(likely, beneficial)
~~~

When a noun phrase is used to restrict the meaning of a comparative, it gets the `npmod` dependency label.

~~~sdparse
Natália is about three times more intelligent than me .
advmod(three, about)
nummod(times, three)
npmod(more, times)
advmod(intelligent, more)
nmod(intelligent, me)
case(me, than)
~~~

~~~sdparse
Some birds are laying eggs four to seven days earlier than they did 25 years ago .
nummod(days, four)
nmod(four, seven)
case(seven, to)
npmod(earlier, days)
advmod(laying, earlier)
advcl(earlier, did)
mark(did, than)
~~~

#### The more, the merrier
In English there exists a very peculiar correlative construction exemplified in the sentences _the more, the merrier_ and _the faster, the better_. Even though both parts of the construction seem equal, suggesting a paratactic relationship between them, it is possible to have the second half be a standard finite clause while the first half remains unchanged, suggesting that the first is actually an adverbial clause depending on the second. For example, the sentence _The angrier he became, the funnier it got_ can be rephrased as _It got funnier the angrier he became_, suggesting the following structure:

~~~sdparse
The more , the merrier
advcl(merrier, more)
~~~

The word _the_ in this construction is not serving its usual purpose as definite article (and in fact, historically the construction required it to be in the instrumental case, rather than in a case dictated by the grammatical function of the word it modified), so instead of labeling it `det` we choose to label it `mark`.

~~~sdparse
The more , the merrier
advcl(merrier, more)
mark(more, The)
mark(merrier, the)
~~~

The comparative morpheme or adjective can be followed by a clause as well, such as "the more people that show up, the merrier the party will be". Because the word _that_ can intervene between the comparative word, the strcuture seems most consistent with a relative clause depending on the comparative, so we analyze it as such.

~~~sdparse
The angrier that he became , the funnier that it got .
mark(angrier, The)
relcl(angrier, became)
advmod(became, that-3)
nsubj(became, he)
mark(funnier, the-7)
relcl(funnier, that-9)
aux(that-9, got)
nsubj(that-9, it)
~~~

The sentence _so far, so good_ should receive the same kind of analysis.

~~~sdparse
So far , so good
mark(far, So)
mark(good, so)
advcl(good, far)
~~~

#### Similar constructions
A non-exhaustive list of constructions with analyses very similar to the analysis of standard comparatives.

_X enough to/that..._

~~~sdparse
This drink is strong enough to knock out an elephant
advmod(strong, enough)
advcl(strong, knock)
mark(knock, to)
~~~

~~~sdparse
-ROOT- For now it was enough that he had learned his lesson .
root(-ROOT-, enough)
cop(enough, was)
advcl(enough, learned)
~~~

_So many... that..._

~~~sdparse
-ROOT- There are so many things to do that you wo n't use your room for much more than sleeping .
root(-ROOT-, things)
amod(things, many)
advmod(many, so)
acl(things, do)
acl(things, use)
mark(use, that)
~~~

_Too X to..._

~~~sdparse
This problem was too hard to do.
advmod(hard, too)
advcl(hard, do)
mark(do, to)
~~~

_Such... that..._

~~~sdparse
The stock would come public at such a ridiculously high price that it would be too hard for investors to make a profit
advmod(price, such)
acl(price, hard)
mark(hard, that)
~~~

### Free relatives

#### Basic analysis
In the canonical case, _wh_-clauses function as interrogative clauses or as adverbial clauses. In these cases, the head of the _wh_-clause is taken to be the verb, and the _wh_-word is assigned the label corresponding to its grammatical function in the _wh_-clause:

~~~sdparse
I need to know who you are planning to leave with .
dobj(leave, who)
case(who, with)
ccomp(know, leave)
~~~

~~~sdparse
When you leave , be sure to let me know .
advmod(leave, When)
advcl(sure, leave)
~~~

In free relative constructions, the _wh_-clause functions as an argument in the lower clause. In these cases, the _wh_-phrase is deemed the head of the construction, thereby receiving a dependency relation reflective of its function in the higher clause, and the rest of the _wh_-clause is an `rcmod` dependent on it.

~~~sdparse
I 'll have whatever she 's having .
dobj(have, whatever)
rcmod(whatever, having)
~~~

~~~sdparse
I love how well everyone behaved .
dobj(love, well)
advmod(well, how)
rcmod(well, behaved)
~~~

This analysis is also extended to cleft constructions.

~~~sdparse
-ROOT- John is who we want to help .
root(-ROOT-, who)
nsubj(who, John)
rcmod(who, want)
cop(who, is)
~~~

~~~sdparse
-ROOT- It 's John who we want to help .
expl(who, It)
root(-ROOT-, who)
nsubj(who, John)
rcmod(who, want)
cop(who, 's)
~~~

~~~sdparse
-ROOT- What the committee hopes to learn is why all these events transpired .
nsubj(why, What)
rcmod(What, hopes)
cop(why, is)
rcmod(why, transpired)
nsubj(transpired, events)
root(-ROOT-, why)
~~~

The phrase _no matter_ is analyzed as taking a `dobj` complement in, e.g., _no matter the cost_. When it takes free relative object, that object is also analyzed according to the rules above.

~~~sdparse
No matter what progress we make as individuals, we will never achieve real health until ...
neg(matter, No)
npmod(achieve, matter)
dobj(matter, progress)
det(progress, what)
rcmod(make, progress)
~~~

#### Cyclic cases
In some cases, the _wh_-phrase would be analyzed as the head of the _wh_-clause. For example, in the sentence _I love how appreciative everyone was_, the word _appreciative_ would normally be a predicative head (since the verb _was_ is a copula and would receive the `cop` relation). Since _appreciative_ cannot be an `rcmod` dependent on itself, the auxiliary is promoted to the head of the relative clause and assigned the `rcmod` relation.

~~~sdparse
I love how appreciative everyone was .
dobj(love, appreciative)
rcmod(appreciative, was)
advmod(how, appreciative)
~~~

~~~sdparse
This is the key to how worthy the effort might be .
nmod(key, worthy)
case(worthy, to)
advmod(worthy, how)
rcmod(worthy, be)
~~~
