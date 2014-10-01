---
layout: base
title: 'vocative'
shortdef: 'vocative'
---

## {{ page.title }}: {{ page.shortdef }}

The *vocative* relation is used to mark dialogue participant addressed in text (common in emails and newsgroup postings). The relation links the addressee's name to its host sentence.

~~~ sdparse
Guys , take it easy!
vocative(take, Guys)
~~~

~~~ sdparse
Marie , comment vas - tu ?
vocative(vas, Marie)
~~~

