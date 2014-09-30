---
layout: base
title:  'ccomp:nf'
shortdef : 'non-finite clausal complement'
---

## {{ page.title }}: {{ page.shortdef }} <a name="sec-iccomp"></a>

The dependency type {{ page.title }}, which stands for 
*{{ page.shortdef }}*, is a subtype of [ccomp]() (*clausal complement*).
It is used for clausal complements where the complement clause has a
different subject from that of the governing clause and is infinite,
i.e. where the verb is an infinitive or a participle.

<!-- TODO The differences between types of verbal dependents, such as `ccomp:nf`, are thoroughly discussed in Section [verbal](#sec-verbal). -->

<!-- fname:iccomp.pdf -->
~~~ sdparse
Sain hänet itkemään . \n I_made him cry .
ccomp:nf(Sain-1, itkemään-3)
nsubj(itkemään-3, hänet-2)
punct(Sain-1, .-4)
~~~
