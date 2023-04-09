---
layout: relation
title:  'aux:q'
shortdef : 'question auxiliary '
udver: '2'
---


[aux:q]() (question auxiliary): This sub-type of the dependency relation [aux]() is used for any optative auxiliary particle. 
Even though this relation has been set in former UD versions, it was necessary to use it in the Pomak treebank where a unique question particle exists. (namely “li ?”), 
which needs to be marked under a label of its own:

~~~ sdparse
dojdéš   li ? 
lit: you-come ?
"are you coming?" 
root(dojdéš)
aux:q(dojdéš, li)
punct(dojdéš, ?)
~~~

