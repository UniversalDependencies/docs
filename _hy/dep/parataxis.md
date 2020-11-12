---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
udver: '2'
---

The parataxis relation (from Greek for “place side by side”) is a
relation between a word (often the main predicate of a sentence) and other
elements, such as a sentential parenthetical or a clause after a “.” (Armenian colon) or
a “—”, placed side by side without any explicit
coordination, subordination, or argument relation with the head word. Parataxis is a discourse-like equivalent of coordination, and so usually obeys an iconic ordering. Hence it is normal for the first part of a sentence to be the head and the second part to be the parataxis dependent, regardless of the headedness properties of the language. But things do get more complicated, such as cases of parentheticals, which appear medially.

## An inventory of constructions to which parataxis has been applied

### Treatment of reported speech

For this reported speech example:

~~~ sdparse
— Տղան , — ասաց ծերունին , — գնացել է վաղ առավոտյան ։ \n — The-guy , — the-old-man said , — has left early in-the-morning .
parataxis(գնացել, ասաց)
parataxis(left, said)
~~~

There are paraphrases that convey essentially the same meaning but
with a different syntactic structure. When the reported speech is embedded in a subordinate clause (with or 
without an overt complementizer _որ_ “that”), the subordinate clause is a [ccomp]() of the speech verb. When the
reported speech follows the speech verb and is separated by a colon, the reported speech forms a main clause
that attaches to the preceding main clause with a [parataxis]() relation, hence with the speech verb as its head.
However, when the speech verb occurs as a medial or final parenthetical, the relation is reversed and the speech
verb is treated as a [parataxis]() of the reported speech. 
This analysis is not uncontroversial but follows many authorities, such as Huddleston and Pullum (2002),
_The Cambridge Grammar of the English Language_ (see chapter 11, section 9).

~~~ sdparse
Ծերունին ասաց , որ տղան գնացել է վաղ առավոտյան ։ \n The-old-man said , that the-guy has left early in-the-morning.
ccomp(ասաց, գնացել)
ccomp(said, left)
~~~

~~~ sdparse
Ծերունին ասաց . « Տղան գնացել է վաղ առավոտյան » ։ \n The-old-man said : “ The-guy has left early in-the-morning . ”
parataxis(ասաց, գնացել)
parataxis(said, left)
~~~

~~~ sdparse
« Տղան գնացել է վաղ առավոտյան » , — ասաց ծերունին : \n “ The-guy has left early in-the-morning ” , — said the-old-man .
parataxis(գնացել, ասաց)
parataxis(left, said)
~~~

~~~ sdparse
«Տղան , — ասաց ծերունին , — գնացել է վաղ առավոտյան » ։ \n “ The-guy , — said the-old-man , — has left early in-the-morning . ” 
parataxis(գնացել, ասաց)
parataxis(left, said)
~~~

An argument for this analysis is that in the cases analyzed as embedding, the entire clause
can be further embedded (_I was taken aback when the old man said the guy left early in the morning._),
while this is not possible with medial or final placement of the speech verb 
(_*I was taken aback when the guy left early this morning, the old man said._).


### News article bylines

The `parataxis` relation should be used to connect the parts of a news article byline.
There does not seem to be a better relation to use.

~~~ sdparse
Երևան ( Արմենպրես ) \n Yerevan ( Armenpress )
parataxis(Երևան, Արմենպրես)
punct(Արմենպրես, (-2)
punct(Արմենպրես, )-4)
~~~

### Interjected clauses and phrases

Single word or phrase interjections are analyzed as [discourse](), but when a whole clause is interjected, we use the relation `parataxis`.

~~~ sdparse
Արամը , ինչպես արդեն գիտեք , վերջերս է վերադարձել ։ \n Aram , as you already know , has come-back recently . 
parataxis(վերադարձել, գիտեք)
parataxis(come-back, know)
punct(գիտեք, ,-2)
punct(գիտեք, ,-6)
punct(know, ,-13)
punct(know, ,-18)
~~~

Note that in Armnian two coordinate clauses in a sentence can be separated with Armenian colon “.”. We do not use the [conj]() relation, but [parataxis]() to connect these clauses, if they are rather independent from each other semantically.
<!-- Interlanguage links updated Čt lis 12 09:43:37 CET 2020 -->
