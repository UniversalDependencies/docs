---
layout: relation
title: 'vocative'
shortdef: 'vocative'
---

The `vocative` relation is used to mark dialogue participant addressed in text.
The relation links the addressee's name to its host sentence.
In Czech, the addressee's name must also appear in the vocative [cs-feat/Case]() form.

~~~ sdparse
Pane , jste blázen ! \n Sir , you-are a-fool !
vocative(jste, Pane)
vocative(you-are, Sir)
~~~
