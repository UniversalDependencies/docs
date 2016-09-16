---
layout: base
title:  'Syntax'
permalink: fr/overview/specific-syntax.html
---

# Specific constructions

## Qu'est-ce que ... ?

We analyze "qu'est-ce que ..." as follows: the first _qu'_ gets the true grammatical relation given the sentence , _ce_ is an expletive, _est_ is a copula and the second _que_ is a mwe dependent on _ce_

~~~ sdparse
Qu' est - ce qu' un déliquant ? \n What is an offender?
root(ROOT, Qu')
cop(est,  Qu')
expl(Qu', ce)
mwe(ce, qu')
nsubj(Qu', délinquant)
~~~

~~~ sdparse
Qu' est - ce qu' il a fait ? \n What did he do ?
root(ROOT, fait)
dobj(fait, Qu')
expl(fait, ce)
mwe(ce, qu')
cop(fait, est)
nsubj(fait, il)
~~~





