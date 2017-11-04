---
layout: base
title:  'Syntax'
permalink: no/overview/specific-syntax.html
---

# Specific constructions

###Passive
In Norwegian there are two ways of expressing passive voice: morphological passive and a periphrastic passive construction. The morphological passive is expressed by the passive *-s* suffix, e.g. *bygges* "to be built" and the periphrastic passive is constructed with the passive auxiliary *bli* "to become" and a participle form of the main verb, e.g. *opprettet* "established".

~~~ sdparse
freden bygges også dag for dag \n peace is being built day by day
nsubjpass(bygges,freden)
~~~

~~~ sdparse
FN ble opprettet for å sikre verdensfreden \n FN was established to secure world peace
nsubjpass(opprettet,FN)
auxpass(opprettet,ble)
~~~

###Verbal particles
Verbal particles are analyzed using the language-specific relation [compound:prt](compund-prt).
Particles exhibit a number of syntactic properties which sets them apart from regular prepositions. For instance, a pronominal object may intercede the verb and the preposition in the particle case *satte den på* "put it on", but not in the case of a regular preposition and its complement _\*lette den etter_ "\*looked it for",  and only complements of a preposition may occur in an impersonal passive *Det ble lett etter den nye boka* "It was looked for the new book", but an object in a particle construction may not _\*Det ble satt den på_ "\*It was put it on".

~~~ sdparse
Den gang ble alt samlet inn \n That time all was collected
compound:prt(samlet,inn)
~~~

~~~ sdparse
Regjeringen har lagt frem et raust statsbudsjett \n The government has put forward a generous budget
compound:prt(lagt,frem)
~~~

~~~ sdparse
Forskningsrådet delte onsdag kveld ut to sentrale priser \n The research council handed out to central prizes Wednesday evening
compound:prt(delte,ut)
~~~

###Expletives
In Norwegian, expletive arguments are expressed using the neuter pronoun *det* "it" and the [expl](expl) relation is used for both expletive subjects and objects. Expletives occur in several syntactic constructions in Norwegian.

####Presentational construction
In Norwegian expletives occur in the presentational construction, which involves an expletive subject, an active verb and an indefinite subject (*en debatt* "a debate" in the example below).

~~~ sdparse
Det eksisterer allerede en debatt \n There already exists a debate
expl(eksisterer-2,Det-1)
nsubj(eksisterer-2,debatt-5)
~~~

####Impersonal passive
Norwegian employs the impersonal passive construction, where there is an expletive subject and the underlying subject is unexpressed.

~~~ sdparse
Senere har det blitt fremsatt flere forslag \n Later has there been proposed several suggestions
expl(fremsatt,det)
~~~

####Clause-anticipating constructions
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

####Clefts
Clefts are quite  common in Norwegian. They contain an expletive subject, a form of *være* "to be" and a relative clause. Note that in clefts we do not adopt a copula analysis of the verb *være* "er".

~~~ sdparse
Det er forholdsvis få arter som har klart å tilpasse seg \n There are quite few species that have managed to adapt 
expl(er-2,Det-1)
acl:relcl(arter-5,klart-8)
~~~


###References

Kari Kinn, Per Erik Solberg and Pål Kristian Eriksen. "[NDT Guidelines for Morphological Annotation](http://www.nb.no/sbfil/dok/20140314_guidelines_ndt_english.pdf)". National Library Tech Report.
