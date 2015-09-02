---
layout: base
title:  'Uppsala Group on Copula and Cleft Sentences'
---

# Uppsala Group on Copula and Cleft Sentences

Using mostly English examples, but also data from Irish, Turkish, Italian, Portuguese and Russian, we discussed a distinction between copular 'be' and existential 'be', and two competing analysis: the be-dependent analysis, where the verb is a cop, and the be-root analysis. We also discussed, more briefly, the analysis of clefts.

No one objects to the be-dependent analysis for:

~~~ sdparse
1) This is fun.
cop(fun, is)
nsubj(fun, This)
~~~ 

~~~ sdparse
2) This is a joke.
cop(joke, is)
nsubj(joke, This)
~~~ 

There are some intermediary examples where the be-dependent analysis elicits mixed responses:

(3) This book is on the table
(4) The meeting is today.

However, everyone is very uncomfortable with the be-dependent analysis for examples such as the following:

~~~ sdparse
(5) The meeting is in the blue room today.
cop(room, is)
nsubj(room, meeting)
advmod(room, today)
~~~ 

~~~ sdparse
(6) The meeting is today in the blue room.
cop(today, is)
nsubj(today, meeting)
nmod(today, room)
~~~ 


(Note that the English treebank currently implements the be-dependent analysis for all of the sentences above.)

It seems arbitrary to promote one of today or in the blue room to predicate over the other, when they both seem to be modifiers. Both can be dropped (although, not both at the same time). We feel that rather than act as a linking verb, be here is has an existential sense, and is synonymous with happens. Notably, be does not have the clear "equals sign" interpretation of 1-2. We already acknowledge an existential sense of be, which receives a be-root analysis, in sentences such as:

~~~ sdparse
(7) There is a meeting today in the blue room .
root(ROOT, is)
nsubj(is, meeting)
advmod(is, today)
nmod(is, room)
~~~ 

So we propose to adopt a parallel analysis for (7):

~~~ sdparse
(7) The meeting is today in the blue room .
root(ROOT, is)
nsubj(is, meeting)
advmod(is, today)
nmod(is, room)
~~~ 

Furthermore, we propose to extend this analysis to 4-5, considering that the verb there also has an existential sense.

~~~ sdparse
(4) This book is on the table .
root(ROOT, is)
nsubj(is, book)
nmod(is, table)
~~~

~~~ sdparse
(5) The meeting is today .
root(ROOT, is)
nsubj(is, meeting)
advmod(is, today)
~~~

This aligns nicely with another analysis already implemented in the English treebank, in which the clausal dependent in (8) is given an adjunct label, advcl.

~~~ sdparse
(8) This is because we don't know what to do .
root(ROOT, is)
nsubj(is, This)
advcl(is, know)
~~~ sdparse

These distinctions align with distinctions that are signaled in Irish at the lexical level.

We should note, however, that they diverge from Russian, where a uniform copula structure with an ellided linking verb can be used to translate 1-5.

It seems that keeping a parallel between Russian and Irish may not be possible, so a parallelism argument for English can 

Then there is the representational issue of subject predicates with clausal form. Currently in the English treebank, the following analysis is implemented for (9).

~~~ sdparse
(9) My reading a book is her eating cake .
root(ROOT, is)
csubj(is, reading)
ccomp(is, eating)
~~~

This is clearly an implementation hack, overloading the ccomp relation. There is no doubt that be here is the linking be, with the "=" meaning. However, adopting the be-dependent analysis would leave reading with two subjects. This will be a problem whenever the subject predicate has an internal subject. The proposal here is to adopt a language-specific label proposed in the Finnish treebank for the higher-level subject. This allows the two subjects to be distinguished, while preserving the be-dependent analysis.

~~~ sdparse
(9) My reading a book is her eating cake .
root(ROOT, eating)
nsubj(eating, her)
csubj:cop(eating, reading)
~~~

We noticed that be making representation distinctions between existential and linking be, we lose the parallel between the conjuncts in (X). The be-dependent analysis allows us to give the sentence a simple analysis:

~~~ sdparse
(10) Millions are unemployed or in the informal economy .
root(ROOT, unemployed)
cop(unemployed, are)
conj(unemployed, economy)
~~~

However, clearly conjunction is very liberal here, as shown in (11):

(11) Millions are unemployed or expecting to be fired .

So this seems to imply that the coordination in (10) does not mean that is has the same function with relation to unemployed and in the informal economy, since clearly in (11) it is a linking verb to unemployed and a progressive auxiliary to expecting.

Finally, we briefly touched on the problem of which verbs should be copulas. Example (12) seems to suggest that more verbs that be (in English) are copulas. (In the English treebank, we follow Huddleston and Pulum in considering only be a copula).

(12) Bill never was and will not become happy

We noticed that languages with a ser/estar distinction currently diverge in whether they treat both as a copula or not. Although the decision is clearly language-specific, we should make sure that everyone is following the same guidelines. To ensure that, we should probably create some guidelines!
