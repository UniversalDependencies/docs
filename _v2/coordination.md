---
layout: base
title:  'Coordination in UD v2'
udver: '2'
---

# Coordination in UD v2

Coordination is analyzed by having direct [u-dep/conj]() relations between conjuncts in accordance with the general principle of prioritizing relations between content word. In v1, the first conjunct was taken to be the head not only of all following conjuncts but also of any intervening coordinating conjunctions and punctuation. For v2, we propose the following change:

* Attach coordinating conjunctions and punctuation to the immediately succeding conjunct (instead of the first)
<!--* Allow coordination to be analyzed as a right-headed structure in languages that consistently allow gapping (only) in earlier conjuncts-->

## Attachment of coordinating conjunctions and punctuation

We suggest changing the guidelines for coordination, following the proposal of Gerdes & Kahane (LAW 2016).

* Kim Gerdes and Sylvain Kahane. 2016. Dependency Annotation Choices: Assessing Theoretical and Practical Issues of Universal Dependencies. Proceedings of the 10th Linguistic Annotation Workshop (LAW).

We will attach [u-dep/cc]() and internal [u-dep/punct]() to the immediately succeeding conjunct (instead of to the first conjunct). The guidelines for [u-dep/conj]() remain unchanged. For example:

~~~sdparse
I love apples and bananas .
dobj(love,apples)
conj(apples,bananas)
cc(bananas,and)
~~~

This new choice of governor for conjunctions allows a parallel treatment of sentences headed by a conjunction (where the conjunction has to depend on the root of the sentence, and can't be attached to the previous conjunct).

~~~sdparse
And he left .
cc(left,And)
~~~

## Left- vs. right-headed coordination

Although coordination is not really dependency relation, there are good arguments for treating the first conjunct as the head (see, for example, Mel'cuk, 1988). Treating it as a left-headed structure also facilitates the analysis of ellipsis, in particular gapping, in most languages:

~~~sdparse
Mary won gold and Sue won bronze
nsubj(won-2, Mary)
obj(won-2, gold)
conj(won-2, won-6)
cc(won-6, and)
nsubj(won-6, Sue)
obj(won-6, bronze)
~~~

~~~sdparse
Mary won gold and Sue bronze
nsubj(won, Mary)
obj(won, gold)
conj(won, Sue)
cc(Sue, and)
orphan(Sue, bronze)
~~~

If a language predominantly exhibits gapping in preceding (rather than following) clauses (see example in Turkish below), this could therefore be taken as an argument for treating coordination structures as right-headed in that language. 

~~~sdparse 
Erkek kardeşi sadece bisiklet ama o araba aldı . \n Male sibling only bicycle but he car bought .
nsubj(aldı, o)
obj(aldı, araba)
cc(aldı, ama)
conj(aldı, kardeşi)
orphan(kardeşi, bisiklet)
compound(kardeşi, Erkek)
~~~

Analysing this Turkish example as left-headed conjunction has the drawback that the root becomes a promoted dependent in the first clause, instead of the verb in the second clause:

~~~sdparse 
Erkek kardeşi sadece bisiklet ama o araba aldı . \n Male sibling only bicycle but he car bought .
nsubj(aldı, o)
obj(aldı, araba)
cc(aldı, ama)
conj(kardeşi, aldı)
orphan(kardeşi, bisiklet)
compound(kardeşi, Erkek)
~~~

However, since most languages allow gapping (or similar cases in ellipsis) both in the first and in the second clause/phrase, the advantage of having a single direction for `conj` relations, both within and across languages,
outweighs the disadvantage of having a promoted dependent as root in some elliptic structures. We therefore maintain
the consistently left-headed analysis of coordination for all languages. 

For reference, here is an English example of left ellipsis:

~~~sdparse
one green and two red cars
nummod(green, one)
conj(green, cars)
cc(cars, and)
nummod(cars, two)
amod(cars, red)
~~~

Analogous to the Turkish example, we here end up with an adjective as the head of the noun phrase, even though there is a noun in the second conjunct. We consider this an acceptable price for preserving the consistent direction of `conj` relations.
