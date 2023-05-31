---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a noun phrase which is the syntactic subject of a clause and which controls the verb contained within the clause. 

### Examples

_Bha <b>Ludovic</b> 'na chabhaig_

'<b>Ludovic</b> was in a hurry'

~~~ conllu
1	Bha	bi	VERB	V-s	Tense=Past	0	root	_	_
2	Ludovic	Ludovic	PROPN	Nn-mn	Case=Nom|Gender=Masc	1	nsubj	_	_
3-4	'na	_	_	_	_	_	_	_	_
3	an	an	ADP	Sp	_	5	case	_	_
4	a	a	PRON	Dp3sm	Gender=Masc|Number=Sing|Person=3|Poss=Yes	5	nmod:poss	_	_
5	chabhaig	cabhaig	NOUN	Ncsfd	Case=Dat|Gender=Fem|Number=Sing	1	xcomp:pred	_	SpaceAfter=No
~~~ 

_Thiormaich <b>e</b> e fhéin_ '<b>He</b> dried himself'

~~~ conllu
1	Thiormaich	tiormaich	VERB	V-s	Tense=Past	0	root	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	obj	_	_
4	fhéin	féin	PRON	Px	Reflex=Yes	3	nmod	_	_
~~~

In a clefted copular construction, the relative particle takes `nsubj`:

_Am b' i Mairearad <b>a</b> rinn an dàn seo?_

'Was it Mairearad <b>who</b> made this song?'

~~~ conllu
1	Am	am	PART	Qq	PartType=Vb|PronType=Int	4	mark:prt	_	_
2	b'	is	AUX	Ws	Tense=Past	4	cop	_	_
3	i	i	PRON	Pp3sf	Gender=Fem|Number=Sing|Person=3	2	fixed	_	_
4	Mairearad	Mairearad	PROPN	Nn-fn	Case=Nom|Gender=Fem	0	root	_	_
5	a	a	PART	Q-r	PartType=Vb|PronType=Rel	6	nsubj	_	_
6	rinn	dèan	VERB	V-s	Tense=Past	4	csubj:cleft	_	_
7	an	an	DET	Tdsm	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	dàn	dàn	NOUN	Ncsmn	Case=Nom|Gender=Masc|Number=Sing	6	obj	_	_
9	seo	seo	DET	Dd	_	8	det	_	SpaceAfter=No
10	?	?	PUNCT	Fg	_	4	punct	_	_
~~~

In zero-copula constructions (_Sin e_, _Seo mise_) the first word is the root and the second word is the nominal subject:

_Sin <b>e</b> dìreach mar a thachair do chroitearan Bheàrnaraigh._

'That's <b>it</b< just as it happened to the crofters of Berneray.'

~~~ conllu
1	Sin	sin	PRON	Pd	_	0	root	_	_
2	e	e	PRON	Pp3sm	Gender=Masc|Number=Sing|Person=3	1	nsubj	_	_
3	dìreach	dìreach	ADV	Rg	_	1	advmod	_	_
4	mar	mar	SCONJ	Cs	_	6	mark	_	_
5	a	a	PART	Q-r	PartType=Vb|PronType=Rel	6	mark:prt	_	_
6	thachair	tachair	VERB	V-s	Tense=Past	3	xcomp	_	_
7	do	do	ADP	Sp	_	8	case	_	_
8	chroitearan	croitear	NOUN	Ncpmd	Case=Dat|Gender=Masc|Number=Plur	6	obl	_	_
9	Bheàrnaraigh	Beàrnaraigh	PROPN	Nt	_	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Fe	_	1	punct	_	_
~~~
<!-- Interlanguage links updated Út 9. května 2023, 20:04:22 CEST -->
