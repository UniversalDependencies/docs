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

The copular verb *is* is treated as a function word: it is attached to the predicate and labeled `cop`, a special label for copular verbs. In English, only `be` receives this treatment. See [](#### Functional control) for copula-like verbs such as *become*.

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

#### Clausal core arguments

#### Functional control

### Noncore arguments and predicate modifiers

### Functional dependents

### Secondary predication

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

