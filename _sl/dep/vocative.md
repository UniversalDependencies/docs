---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

The `vocative` relation is used to mark a dialogue participant addressed in a text (common in conversations, dialogue, emails, newsgroup postings, etc.). The head of the relation is the head of the relevant clause, and the dependent is the head of the verbless vocative element (usually a nominal phrase in the nominative case). 

~~~ sdparse
Tebi gre najbrž drugače, rdečečopek , kajne ? \n To-you it-goes probably differently , red-ponytail , right ?
vocative(gre,rdečečopek)
vocative(it-goes,red-ponytail)
~~~
~~~ sdparse
Kako s kej , Nelly ? \n How have-you-been lately , Nelly ?
vocative(s,Nelly-5)
vocative(have-you-been,Nelly-12)
~~~
