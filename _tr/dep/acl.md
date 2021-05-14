---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite and non-finite clauses that modify a nominal. 
The head of the `acl` relation is the noun that is modified, 
and the dependent is the head of the clause that modifies the noun.

Like non-clausal adjectives, most adjectival clauses in Turkish precede the noun they modify.
The only exception is the adjectival clauses formed by _ki_
that is similar to English relative pronouns "which" or "who"
(not to be confused by suffix _-ki_).

The primary means of subordination, including forming adjectival clauses,
is through the subordinating suffixes attached to the head of the subordinate clause.
The adjectival clauses formed by _-ki_ is not as frequent and cover only a limited range uses of adjectival clauses.

~~~ sdparse
Ali'nin okuduğu kitap \n The book that Ali is reading
acl(kitap, okuduğu)
~~~

~~~ sdparse
Ali , ki çok kitap okur , henüz son kitabını okumamış. \n Ali, who reads a lot, hasn't read your last book yet
acl(Ali, okur)
mark(okur, ki)
~~~

Almost all adjectival clauses in Turkish are relative clauses.
There are only a few marginal constructions where a pronoun referring to the modified noun can be present in the subordinate clause.

~~~ sdparse
Ali , ki onu\/kendisini üç gündür görmüyorduk , evde kitap okuyormuş \n Ali, who we haven't been seeing (him\/himself) for three days, has apparently been reading books at home
acl(Ali, görmüyorduk)
mark(görmüyorduk, ki)
~~~

We currently do not mark (non-)relative clauses differently.
<!-- Interlanguage links updated Pá kvě 14 11:08:44 CEST 2021 -->
