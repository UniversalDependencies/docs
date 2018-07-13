---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is one of the three relations for multiword expressions (MWEs)
(the other two being [flat]() and [compound]()). 
It is used for certain fixed grammaticized expressions that behave
like function words or short adverbials.

**New from v2:** The `fixed` relation replaces the old `mwe` relation to prevent misunderstanding regarding its scope.

The scope of `fixed` MWEs corresponds roughly to the *fixed
expressions* category of
[Sag et al.](http://lingo.stanford.edu/pubs/WP-2001-03.pdf)
and excludes any semi-fixed or flexible MWEs. 

Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression 
are attached to the first one using the `fixed` label. The assumption is that these expressions
do not have any internal syntactic structure (except from a historical perspective) and that the
structural annotation is in principle arbitrary. In practice, however, it is highly desirable to use
a consistent annotation of all fixed MWEs in all languages.

~~~ sdparse
I like dogs as well as cats
fixed(as-4, well-5)
fixed(as-4, as-6)
~~~

~~~ sdparse
He cried because of you
fixed(because, of)
~~~

~~~ sdparse
Je préfère prendre un dessert plutôt qu' une entrée \n I prefer getting a dessert rather than an appetizer
fixed(plutôt, qu')
~~~

