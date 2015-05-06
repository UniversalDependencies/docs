---
layout: base
title:  'Syntax'
permalink: en/overview/specific-syntax.html
---

# Specific constructions

## Core clausal syntax

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
I told them that I 'm planning to come visit.
ccomp(told, visit)
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

The clausal subject labels apply to verbal as well as nonverbal predicates. The distinction between `csubj` and `csubjpass` mirrors that between `nsubj` and `nsubjpass`.

~~~sdparse
Islamists may disagree on whether killing innocents is sanctioned by the laws of jihad .
csubjpass(sanctioned, killing)
~~~

~~~sdparse
Whether or not you pick them up again is probably a question of practice .
csubj(question, pick)
~~~

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

The label `xcomp` is used for predicates whose external argument is _controlled_ by an argument of a higher clause. This applies in multiple types of constructions: _raising_, _obligatory control_, _resultatives_ (obligatory and optional alike) and _obligatory depictives_.

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

### Noncore arguments and predicate modifiers

### Function words attaching to predicates

#### Complementizers and subordinating conjunctions

#### Copular verbs

The copular verb *is* is treated as a function word: it is attached to the predicate and labeled `cop`, a special label for copular verbs. In English, only `be` receives this treatment. See [](#### Functional control) for copula-like verbs such as *become*.

#### Auxiliaries

### Resultatives and depictives

## Below the clause

### Word-level dependents: multiword expressions, compounds, etc.

### The nominal domain

#### Clausal modifiers of nouns

#### Appositives

#### Quantifier phrases

#### Functional dependents

## Above the clause

### Discourse-level dependents

### Loose joining relations

## Outside the clause

### Special annotation conventions

## Unpronounced material

