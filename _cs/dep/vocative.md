---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

The `vocative` relation is used to mark the dialogue participant addressed in text.
The relation links the addressee's name or title to its host sentence.
In Czech, the addressee's name must also appear in the vocative [cs-feat/Case]() form.

~~~ sdparse
Pane , jste blázen ! \n Sir , you-are a-fool !
vocative(blázen, Pane)
vocative(a-fool, Sir)
cop(blázen, jste)
cop(a-fool, you-are)
~~~
<!-- Interlanguage links updated St lis 3 20:59:10 CET 2021 -->
