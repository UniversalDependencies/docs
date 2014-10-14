---
layout: entry
title:  'acl'
shortdef : 'clausal modifier of noun'
---

`acl` is used for finite and non-finite clauses that modify a
noun. Note that in English relative clauses get assigned a specific
relation [acl:relcl](), a subtype of `acl`.

~~~ sdparse
the issues as he sees them
acl(issues, sees)
~~~

~~~ sdparse
Points to establish are ...
acl(Points, establish)
~~~

~~~ sdparse
I don't have anything to say to you
acl(anything, say)
~~~

~~~ sdparse
I admire the fact that you are honest 
acl(fact, honest) 
mark(honest, that) 
cop(honest, are) 
nsubj(honest, you) 
~~~
