---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
---

The category `acl` is used for adverbial modification of a noun, but not for modification of a predicate; for the latter case, see [advcl]().

~~~ sdparse
POJKE SITTA VARELSE-Vb-BEFINNA-SIG LEDSEN \n The-boy sat (there), sad
nsubj(SITTA, POJKE)
acl(POJKE, LEDSEN)
conj(SITTA, VARELSE-Vb-BEFINNA-SIG)
~~~
