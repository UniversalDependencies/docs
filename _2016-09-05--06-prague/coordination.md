---
layout: base
title:  'Coordination in UD v2'
---

# Coordination in UD v2

Coordination is analyzed by having direct [u-dep/conj]() relations between conjuncts in accordance with the general principle of prioritizing relations between content word. In v1, the first conjunct was taken to be the head not only of all following conjuncts but also of any intervening coordinating conjunctions and punctuation. For v2, we propose the following changes:

* Attach coordinating conjunctions and punctuation to the immediately succeding conjunct (instead of the first)
* Treat coordination as a right-headed structure that consistently allow gapping (only) in earlier conjuncts

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

## Right-headed coordination

One of the arguments for analyzing coordination as a left-headed structure is that it facilitates the analysis of ellipsis, in particular gapping, in most languages:

~~~sdparse
Mary won gold and Sue won bronze
nsubj(won-2, Mary)
dobj(won-2, gold)
conj(won-2, won-6)
cc(won-6, and)
nsubj(won-6, Sue)
dobj(won-6, bronze)
~~~

~~~sdparse
Mary won gold and Sue bronze
nsubj(won, Mary)
dobj(won, gold)
conj/cc(won, and)
conj/nsubj(won, Sue)
conj/dobj(won, bronze)
~~~

If the verb of the rightmost clause was treated as the root in the first sentence, there would be no parallel analysis of the second sentence.

For the same reason, if a language consistently exhibits gapping in preceding (rather than following) clauses, this may be an argument for treating coordination structures as right-headed in that language. If, on the other hand, the language allows gapping in both preceding and succeeding clauses, the default assumption of left-headedness should be maintained for coordination.
