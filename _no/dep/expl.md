---
layout: relation
title: 'expl'
shortdef: 'expletive'
---

This relation captures expletive nominals. These are nominals that appear in an argument position of a predicate but which do not themselves satisfy any of the semantic roles of the predicate. The main predicate of the clause (the verb or predicate adjective or noun) is the governor. 

For Norwegian, the expletive element is expressed using the neuter pronoun *det* "it" and the `expl` relation is used for both expletive subjects and objects.

#####Presentational construction
In Norwegian expletives occur in the presentational construction, which involves an expletive subject, an active verb and an indefinite subject (*en debatt* "a debate" in the example below).

~~~ sdparse
Det eksisterer allerede en debatt \n There already exists a debate
expl(eksisterer-2,Det-1)
nsubj(eksisterer-2,debatt-5)
~~~

#####Impersonal passive
Norwegian employs the impersonal passive construction, where there is an expletive subject and the underlying subject is unexpressed.

~~~ sdparse
Senere har det blitt fremsatt flere forslag \n Later has there been proposed several suggestions
expl(fremsatt,det)
~~~

#####Clause-anticipating constructions
These constructions contain a finite or non-finite clause which semantically may be regarded as the subject, but where the subject position is occupied by an expletive.

~~~ sdparse
Det er ønskelig at utvalget arbeider i dialog \n It is desirable that the committee works in dialogue
expl(ønskelig-3,Det-1)
csubj(ønskelig-3,arbeider-6)
~~~

~~~ sdparse
Det er en offentlig oppgave å bidra økonomisk \n It is a public duty to contribute financially
expl(oppgave-5,Det-1)
csubj(oppgave-5,bidra-7)
~~~
We also find clause-anticipating constructions with expletive objects.

~~~ sdparse
Retten finner det bevist at han handlet forsettlig \n The court finds it proven that he acted intentionally
expl(finner-2,det-3)
ccomp(finner-2,handlet-7)
~~~

#####Clefts
Clefts are quite  common in Norwegian. They contain an expletive subject, a form of *være* "to be" and a relative clause. Note that in clefts we do not adopt a copula analysis of the verb *være* "er".

~~~ sdparse
Det er forholdsvis få arter som har klart å tilpasse seg \n There are quite few species that have managed to adapt 
expl(er-2,Det-1)
acl:relcl(arter-5,klart-8)
~~~


#####References
Kari Kinn, Per Erik Solberg and Pål Kristian Eriksen. [NDT Guidelines for Morphological Annotation](http://www.nb.no/sbfil/dok/20140314_guidelines_ndt_english.pdf)". National Library Tech Report.




~~~

<!-- Interlanguage links updated Út zář 29 20:31:52 CEST 2020 -->
