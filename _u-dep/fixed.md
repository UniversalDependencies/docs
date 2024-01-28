---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is used for certain fixed grammaticized expressions. Such expressions tend to behave like function words. For example, _<b>in spite of</b>_ is a fixed expression functioning as a preposition in English; _<b>bien que</b>_ ('although', lit. 'well that') functions as a subordinating conjunction in French; and _<b>vare sig</b>_ ('either', lit. 'be itself') functions as a (pre)conjunction in Swedish.
The scope of `fixed` MWEs corresponds roughly to the *fixed expressions* category of [Sag et al.](http://lingo.stanford.edu/pubs/WP-2001-03.pdf) and should not be used for multiword expressions that are morphosyntactically flexible. 

## Criteria

Fixed expressions typically do not allow intervening words, except in a few special cases such as clitics that go in a fixed position in the clause and can interrupt even fixed expressions. In addition, there may be inherently discontiguous fixed expressions, such as _<b>för … sedan</b>_ in Swedish, corresponding to the English _<b>ago</b>_, which is syntactically irregular and always encloses a temporal expression, as in _<b>för</b> 10 år <b>sedan</b>_ [“10 years ago”]. 

The creation of fixed multiword expressions is the end phase of a process of grammaticalization and there are always going to be cases of multiword expressions that are only somewhat grammaticalized. For practical treebanking, it is recommended to restrict this relation to the most grammaticalized cases and to treat them as a closed class by writing language-specific documentation listing the fixed expressions of the language.

## Structure

Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression 
are attached to the first one using the `fixed` label. The assumption is that these expressions
do not have any internal syntactic structure (except from a historical perspective) and that the
structural annotation is in principle arbitrary. In practice, however, it is highly desirable to use
a consistent annotation of all fixed MWEs in all languages.

Fixed MWEs should not have any internal modification. Therefore, if a word attaches as `fixed`, 
it should not have any dependents (except perhaps `punct`, `goeswith`, and `reparandum` dependents, 
as these are not true syntactic relations).

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

**New from v2:** The `fixed` relation replaces the old `mwe` relation to prevent misunderstanding regarding its scope.
For v2.14, this page has been revised to more clearly articulate the relationship to multiword expressions.

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:55 CET -->
