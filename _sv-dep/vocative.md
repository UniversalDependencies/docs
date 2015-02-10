---
layout: relation
title: 'vocative'
shortdef: 'vocative'
---

The *vocative* relation is used to mark dialogue participant addressed in text (common in conversations, emails and newsgroup postings). The relation links the addressee's name to its host sentence.

~~~ sdparse
Killar , ta det lungt ! \n Guys , take it easy!
vocative(ta, Killar)
~~~

~~~ sdparse
David , hur är läget ? \n David, how 's it going ?
vocative(är, David)
~~~
