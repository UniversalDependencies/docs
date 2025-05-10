---
layout: relation
title: 'obl:unmarked'
shortdef: 'unmarked oblique nominal'
udver: '2'
---

The `obl:unmarked` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or adjunct which is not marked with a preposition.
Usually this is for expressions of time but can also be for expressions of location or dimension.

Where the nominal is marked with a preposition we use [obl]().

### Examples
#### Days of the week

_[...] a lorg faisg air baile Thetford ann an Sasuinn <b>Dihaoine</b> 'sa chaidh_ '[...] found near Thetford in England last <b>Friday</b>' (ns05\_008)

~~~sdparse
a lorg faisg air baile Thetford ann an Sasuinn <b>Dihaoine</b> 'sa chaidh
nmod:unmarked(Dihaoine, lorg)
acl:relcl(chaidh, Dihaoine)
det('sa, Dihaoine)
mark:prt(a, lorg)
~~~

#### Relative particles

_[...] an dòigh <b>a</b> bha a’ chluich a' dol_ '[...] the way the play was going' (s02\_032, train)

~~~ conllu
1	an	an	DET	Tdsf	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	dòigh	dòigh	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	0	root	_	_
3	a	a	PART	Q-r	PartType=Vb|PronType=Rel	4	obl:unmarked	_	_
4	bha	bi	VERB	V-s	Mood=Ind|Tense=Past|VerbForm=Fin	2	acl:relcl	_	_
5	a’	an	DET	Tdsf	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	_
6	chluich	cluich	NOUN	Ncsfn	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
7	a'	ag	PART	Sa	_	8	case	_	_
8	dol	rach	NOUN	Nv	VerbForm=Vnoun	4	xcomp:pred	_	_
~~~

#### Spells of time

_bidh ainm air Clàr nan Drabastair <b>fad</b> deich bliadhna_ 'his name will be on the Sex Offenders Register for a <b>spell</b> of ten years_ (ns07\_009)

~~~sdparse
bidh ainm air Clàr nan Drabastair fad deich bliadhna
nsubj(ainm, bidh)
xcomp:pred(Clàr, bidh)
obl:unmarked(fad, bidh)
nmod(bliadhna, fad)
nummod(deich, bliadhna)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:16:04 CEST -->
