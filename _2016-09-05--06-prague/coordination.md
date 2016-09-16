---
layout: base
title:  'Coordination in UD v2'
---

# Coordination in UD v2

We suggest changing the guidelines for coordination, following the proposal of Gerdes & Kahane (LAW 2016).

* Kim Gerdes and Sylvain Kahane. 2016. Dependency Annotation Choices: Assessing Theoretical and Practical Issues of Universal Dependencies. Proceedings of the 10th Linguistic Annotation Workshop (LAW).

We will attach [u-dep/cc]() and internal [u-dep/punct]() to the immediately succeeding conjunct (instead of to the first conjunct). The guidelines for [u-dep/conj]() remain unchanged. For example:

<div id="s1" class="sd-parse">
I love apples and bananas.
dobj(love, apples)
conj(apples, bananas)
cc(bananas, and)
</div>

This new choice of governor for conjunctions allows a parallel treatment of sentences headed by a conjunction (where the conjunction has to depend on the root of the sentence, and can't be attached to the previous conjunct).

<div id="s1" class="sd-parse">
And he left.
cc(left, And)
</div>

This will also mesh better with our proposal for analyzing ellipsis.


