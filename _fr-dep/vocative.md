---
layout: relation
title: 'vocative'
shortdef: 'vocative'
---

The `vocative` relation is used to mark a dialogue participant addressed in text (common in conversations, emails and newsgroup postings). The relation links the addressee's name to its host sentence.

~~~ sdparse
Les gars , faites attention ! \n Guys , be careful !
vocative(faites, gars)
~~~

~~~ sdparse
David , comment ça va ? \n David, how 's it going ?
vocative(va, David)
~~~

Note: the `vocative` relation is not currently annotated in the French data.
