---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

The `ccomp` relation marks a clausal complement of a verb or adjective, that has its own internal subject. In Irish, clausal complements are usually introduced by complementizers _go_, _nach_, and _gur_.

### Examples

_Tá a fhios agam gur <b>imigh</b> mo mháthair._ 'I know that my mother <b>left</b>.'

~~~ sdparse
Tá a fhios agam gur imigh mo mháthair \n Is the knowledge at-me that left my mother
ccomp(Tá, imigh)
~~~

_Creidimidne, go <b>bhforbraíonn</b> na mic léinn a gcuid tuisceana ar shaol proifisiúnta na tionsclaíochta._ 'We believe that the students <b>develop</b> their understanding of professional life in industry.'

~~~ sdparse
Creidimidne , go bhforbraíonn na mic léinn a gcuid tuisceana ar shaol proifisiúna na tionsclaíochta \n  Believe-we , that develop the students  their own understanding on life professional the industry
ccomp(Creidimidne, bhforbraíonn)
~~~
 
_D'admhaigh Piaras Ó Dochartaigh go <b>raibh</b> an páirtí rólag._ 'Piaras Ó Dochartaigh admitted that the party <b>was</b> too weak.'

~~~ sdparse
D'admhaigh Piaras Ó Dochartaigh go raibh an páirtí rólag. \n Admitted Piaras Ó Dochartaigh that was the party too-weak. 
ccomp(D'admhaigh, raibh)
~~~

Note that interrogative pronouns that occur mid-sentence are also labelled `ccomp`. In the following examples, the verb heads the `ccomp` with the interrogative pronoun being treated as a fronted object, subject or oblique. 

_Níl a fhios agam cad chuige a <b>mbíonn</b> an saol ag magadh air._  `I don't know <b>why</b> everyone makes fun of him.

~~~ sdparse
ROOT Níl a fhios agam cad chuige a mbíonn an saol ag magadh air . \n ROOT Is_not its knowledge at_me what towards that does_be the life at the_mocking on_him . 
root(ROOT, Níl)
obl(mbíonn, cad)
obl:prep(cad, chuige)
mark:prt(mbíonn, a)
ccomp(Níl, mbíonn)
~~~

_Ní deacair a mheas cad <b>tá</b> ar bhur n-iníon._ `It's not hard to guess <b>what's</b> wrong with your daughter.

~~~ sdparse
ROOT Ní deacair a mheas cad tá ar bhur n-iníon . \n Is_not difficult to think what is on your daughter . 
cop(deacair, Ní)
root(ROOT, deacair)
csubj:cop(deacair, mheas)
nsubj(tá, cad)
mark:prt(mheas, a)
ccomp(deacair, tá)
~~~

However, the question word may also be the head of the `ccomp`, usually in the case where it is followed by a relativised noun phrase. 

_Tá MRBI ag déanamh suirbhé ar son Raidió na Gaeltachta chun a fháil amach <b>cad</b> é an lucht éisteachta atá anois ag an stáisiún._ `MRBI is carrying out a survey on behalf of Raidió na Gaeltachta to find out what audience the station now <b>has</b>.

~~~ sdparse
ROOT Tá MRBI ag déanamh suirbhé ar son Raidió na Gaeltachta chun a fháil amach cad é an lucht éisteachta atá anois ag an stáisiún. \n Is MRBI at_the doing of_survey on behalf of_Raidió na Gaeltachta in_order to find out what is the crod of_listening that_is now at the station. 
root(ROOT, Tá)
ccomp(Tá, cad)
nmod(lucht, é)
nsubj(cad, lucht)
acl:relcl(lucht, atá)
~~~

It can also occur where the head of the `ccomp` is simultaneously the head of a copular clause.

_Ní gá aon fhaitíos, cuma <b>cén</b> chré ná cultúr._ `There's no need to be afraid, regardless of creed or culture.

~~~ sdparse
ROOT Ní gá aon fhaitíos , cuma cén chré ná cultúr. \n ROOT NEG need any fear , regardless which creed or culture. 
cop(gá, Ní)
root(ROOT, gá)
nsubj(gá, fhaitíos)
parataxis(gá, cuma)
ccomp(cuma, cén)
nsubj(cén, chré)
(lucht, atá)
~~~
