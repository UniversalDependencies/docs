---
layout: relation
title: 'parataxis'
shortdef: 'parataxis'
---

The parataxis relation (from Greek for "place side by side") is a
relation between a word (often the main predicate of a sentence) and
other elements, such as a sentential parenthetical or a clause after a
“:” or a “;”, placed side by side without any explicit coordination,
subordination, or argument relation with the head word. Parataxis is a
discourse-like equivalent of coordination, and so usually obeys an
iconic ordering. Hence it is normal for the first part of a sentence
to be the head and the second part to be the parataxis dependent,
regardless of the headedness properties of the language.  But things
do get more complicated, such as cases of parentheticals, which appear
medially.

~~~ sdparse
A cama não era um leito de enferma, era um trono de rainha.
parataxis(trono, leito)
~~~

~~~ sdparse
Folha -- O sr. acredita ter influenciado estes filmes ?
parataxis(Folha, acredita)
~~~

## An inventory of constructions to which parataxis has been applied

### Side-by-side sentences ("run-on sentences")

The relation parataxis is used for a pair of what could have been standalone sentences, 
but which are being treated together as a single sentence. This may happen because sentence
segmentation of the sentence was done primarily following the presence of sentence-final punctuation,
and these clauses are joined by punctuation such as a colon or comma, or not delimited by punctuation
at all. In a spoken corpus, it may happen because what is labeled as a sentence is more
commonly an utterance turn. Even if the treebanker is doing the sentence division, it may
happen because there seems to be a clear discourse relation linking two clauses. 
Sometimes there are more than two sentences joined in this way. In this case we make all the later sentences
dependents of the first one, to maximize similarity to the analysis used for conjunction.

~~~ sdparse
Fácil subir nos palanques , defendendo que é necessário « mudar tudo o que está aí .
parataxis(Fácil, defendendo)
~~~

This relation may happen with units that are smaller than sentences:

~~~ sdparse
Mundo dividido a CIA
amod(Mundo, dividido)
parataxis(mundo, CIA)
det(CIA, a)
~~~

### Treatment of reported speech

For this reported speech example:

~~~ sdparse
Encontramos um homem-gol de que sentíamos falta há muitos anos , disse Van Himst.
parataxis(Encontramos, disse)
~~~

There are paraphrases that convey essentially the same meaning but
with a different syntactic structure. When the reported speech is
embedded in a subordinate clause (with or without an overt
complementizer _que_, a not frequent construction in Portuguese, but
frequent in many languages, as English), the subordinate clause is
a [ccomp]() of the speech verb.

~~~ sdparse
Van Himst disse que eles encontraram um homem-gol .
ccomp(disse, encontraram)
~~~

When the reported speech follows the speech verb and is separated by a
colon(:), the reported speech forms a main clause that attaches to the
preceding main clause with a [parataxis]() relation, hence with the
speech verb as its head.

~~~ sdparse
Van Himst disse :  Eles encontraram um homem - gol . 
parataxis(disse, encontraram)
~~~

However, when the speech verb occurs as a medial or final
parenthetical, the relation is reversed and the speech verb is treated
as a [parataxis]() of the reported speech.

~~~ sdparse
Eles encontraram um homem - gol, disse Van Himst.
parataxis(encontraram, disse)
~~~

This analysis is not uncontroversial but follows many authorities,
such as Huddleston and Pullum (2002), _The Cambridge Grammar of the
English Language_ (see chapter 11, section 9).

An argument for this analysis is that in the cases analyzed as
embedding, the entire clause can be further embedded (_Eu estava
triste quando o Van Himst disse que eles encontraram um homem-gol._),
while this is not possible with medial or final placement of the
speech verb (_*Eu estava triste quando encontraram um homem-gol, disse
Van Hismt._ (note that this sentnece is not ungrammatical but has a
different meaning).

### News article bylines

We have used the parataxis relation to connect the parts of a news
article byline.  There does not seem to be a better relation to use.

~~~ sdparse
Lisboa ( Público ) :
parataxis(Lisboa, Público)
~~~

### Interjected clauses

Single word or phrase interjections are analyzed as [discourse](), but
when a whole clause is interjected, we use the relation parataxis.

~~~ sdparse
Calafia tem ótimas batatas ( a gente morre por isto ! )
parataxis(tem, morre)
~~~

~~~ sdparse
Só para confimar João conclui a reversa do dia três.
parataxis(confirmar, conclui)
~~~

In the second example, we treat the second half as the head of the
dependency because the first half feels like a whole clause
interjection, not like the main clause of the utterance.

### Tag questions

We also use the parataxis relation for tag questions such as _isn't
it?_ or _haven't you?_.

~~~ sdparse
Isso é para mim , não é ?
parataxis(mim, é)
~~~
<!-- Interlanguage links updated Čt lis 12 09:43:37 CET 2020 -->
