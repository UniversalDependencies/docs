---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The <code>obl</code> relation is used for a nominal (noun, pronoun, noun phrase), typically introduced by a preposition, functioning as a non-core (oblique) argument or adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or other adverb.

~~~ sdparse
È successo un quarto d'ora fa
obl(successo, quarto)
advmod(quarto, fa)
~~~
~~~ sdparse
Con legge ordinaria sono stabilite le altre norme necessarie. 
obl(stabilite, legge)
case(legge, Con)
~~~
~~~ sdparse
Ci arriva generalmente alla vigilia degli esami. 
obl(arriva, vigilia)
case(vigilia, alla)
~~~
~~~ sdparse
Collocati in un deposito esterno al sito
obl(esterno, sito)
case(sito, al)
~~~

<code>obl</code> is also used for the agent of a passive verb with the subtype [obl:agent]():

~~~ sdparse
La riunione è stata chiesta dagli stessi commissari 
obl:agent(chiesta, commissari)
case(commissari, dagli)
~~~
~~~ sdparse
Qui solo due anni fa dominava il coprifuoco imposto dai soldati israeliani. 
obl(dominava, anni)
case(anni, fa)
obl:agent(imposto, soldati)
case(soldati, dai)
~~~

The relation <code>obl</code> does not cover nominal dependents of nouns and noun phrases, which are instead covered by the relation <code>nmod</code>:

~~~ sdparse
La sperimentazione dell' atomica ha cambiato il mondo per sempre. 
nmod(sperimentazione, atomica)
case(atomica, dell')
~~~
