---
layout: relation
title: 'fixed'
redirect_from: "it/dep/mwe.html"
shortdef: 'multi-word expression'
udver: '2'
---

The <code>fixed</code> relation is one of the three relations for multiword expressions (MWEs)
(the other two being [flat]() and [compound]()). 
It is used for certain fixed grammaticized expressions that behave
like function words or short adverbials.
Any grammatical class can take part in a multiword expression, but usually they are a combination of adverbials and prepositions (usually *a* or *di*).

Some of the most common <code>fixed</code> cases for Italian are listed in the examples below.

~~~ sdparse
Oltre a le tradizionali uniformi . 
fixed(Oltre, a)
~~~
~~~ sdparse
Grazie a la moglie .
fixed(Grazie, a)
~~~
~~~ sdparse
Fino a Forlì . 
fixed(Fino, a)
~~~
~~~ sdparse
Vediamo prima di tutto i fatti . 
fixed(prima, di)
~~~
~~~ sdparse
Pur se . 
fixed(Pur, se)
~~~

Fixed MWEs are annotated in a flat structure, where all subsequent words in the expression are attached to the first one.

~~~ sdparse
Fino a quando . 
fixed(Fino, a)
fixed(Fino, quando)
~~~
<!-- Interlanguage links updated St lis 3 20:58:53 CET 2021 -->
