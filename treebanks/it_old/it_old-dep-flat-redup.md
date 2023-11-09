---
layout: base
title:  'Statistics of flat:redup in UD_Italian-Old'
udver: '2'
---

## Treebank Statistics: UD_Italian-Old: Relations: `flat:redup`

This relation is a language-specific subtype of <tt><a href="it_old-dep-flat.html">flat</a></tt>.
There are also 2 other language-specific subtypes of `flat`: <tt><a href="it_old-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="it_old-dep-flat-name.html">flat:name</a></tt>.

29 nodes (0%) are attached to their parents as `flat:redup`.

29 instances of `flat:redup` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 7 pairs of parts of speech are connected with `flat:redup`: <tt><a href="it_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_old-pos-NOUN.html">NOUN</a></tt> (12; 41% instances), <tt><a href="it_old-pos-ADV.html">ADV</a></tt>-<tt><a href="it_old-pos-ADV.html">ADV</a></tt> (8; 28% instances), <tt><a href="it_old-pos-VERB.html">VERB</a></tt>-<tt><a href="it_old-pos-VERB.html">VERB</a></tt> (3; 10% instances), <tt><a href="it_old-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_old-pos-ADJ.html">ADJ</a></tt> (2; 7% instances), <tt><a href="it_old-pos-DET.html">DET</a></tt>-<tt><a href="it_old-pos-DET.html">DET</a></tt> (2; 7% instances), <tt><a href="it_old-pos-NUM.html">NUM</a></tt>-<tt><a href="it_old-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="it_old-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_old-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 23 flat:redup	color:blue
1	La	il	DET	rdfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	Canto=14|Verso=10
2	dolorosa	doloroso	ADJ	a1fs	Gender=Fem|Number=Sing	3	amod	_	Canto=14|Verso=10
3	selva	selva	NOUN	sf1fs	Gender=Fem|Number=Sing	6	nsubj	_	Canto=14|Verso=10
4	l'	il	PRON	pp3fsyda	Clitic=Yes|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	iobj	_	Canto=14|SpaceAfter=No|Verso=10
5	è	essere	AUX	vi4ips3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	Canto=14|Verso=10
6	ghirlanda	ghirlanda	NOUN	sf1fs	Gender=Fem|Number=Sing	0	root	_	Canto=14|Verso=10
7	intorno	intorno	ADV	eisksl	_	6	advmod:lmod	_	Canto=14|SpaceAfter=No|Verso=11
8	,	,	PUNCT	_	_	11	punct	_	_
9	come	come	ADV	b	_	11	mark	_	Canto=14|Verso=11
10	'l	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	Canto=14|Verso=11
11	fosso	fosso	NOUN	sm2ms	Gender=Masc|Number=Sing	6	advcl:cmp	_	Canto=14|Verso=11
12	tristo	tristo	ADJ	a1ms	Gender=Masc|Number=Sing	11	amod	_	Canto=14|Verso=11
13	ad	a	ADP	epsk1d	_	14	case	_	Canto=14|Verso=11
14	essa	esso	PRON	pp3slco	Number=Sing|Person=3|PronType=Prs	11	orphan	_	Canto=14|SpaceAfter=No|Verso=11
15	;	;	PUNCT	_	_	17	punct	_	_
16	quivi	quivi	ADV	b	_	17	advmod:lmod	_	Canto=14|Verso=12
17	fermammo	fermare	VERB	vta1irp1	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	6	parataxis	_	Canto=14|Verso=12
18	i	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	19	det	_	Canto=14|Verso=12
19	passi	passo	NOUN	sm2mp	Gender=Masc|Number=Plur	17	obj	_	Canto=14|Verso=12
20	a	a	ADP	_	_	21	case	_	Canto=14|Verso=12
21	randa	randa	NOUN	_	Gender=Fem|Number=Sing	17	obl	_	Canto=14|Verso=12
22	a	a	ADP	_	_	23	case	_	Canto=14|Verso=12
23	randa	randa	NOUN	_	Gender=Fem|Number=Sing	21	flat:redup	_	Canto=14|SpaceAfter=No|Verso=12
24	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 flat:redup	color:blue
1	Così	così	ADV	b	_	7	advmod	_	Canto=12|Verso=124
2	a	a	ADP	_	_	3	case	_	Canto=12|Verso=124
3	più	più	ADV	_	_	7	advmod	_	Canto=12|Verso=124
4	a	a	ADP	_	_	5	case	_	Canto=12|Verso=124
5	più	più	ADV	_	_	3	flat:redup	_	Canto=12|Verso=124
6	si	si	PRON	pf3ypr	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	7	expl:pv	_	Canto=12|Verso=124
7	facea	fare	VERB	vta+1iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=12|Verso=124
8	basso	basso	ADJ	a1ms	Gender=Masc|Number=Sing	7	xcomp	_	Canto=12|Verso=124
9	quel	quello	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	10	det	_	Canto=12|Verso=125
10	sangue	sangue	NOUN	sm3ms	Gender=Masc|Number=Sing	7	nsubj	_	Canto=12|SpaceAfter=No|Verso=125
11	,	,	PUNCT	_	_	14	punct	_	_
12	sì	così	ADV	_	_	14	advmod	_	Canto=12|Verso=125
13	che	che	SCONJ	cssu	_	14	mark	_	Canto=12|Verso=125
14	cocea	cuocere	VERB	vta2iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl	_	Canto=12|Verso=125
15	pur	pure	ADV	b	_	14	advmod	_	Canto=12|Verso=125
16	li	il	DET	rdmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	17	det	_	Canto=12|Verso=125
17	piedi	piede	NOUN	sm3mp	Gender=Masc|Number=Plur	14	obj	_	Canto=12|SpaceAfter=No|Verso=125
18	;	;	PUNCT	_	_	27	punct	_	_
19	e	e	CCONJ	cscc	_	27	discourse	_	Canto=12|Verso=126
20	quindi	quindi	ADV	b	_	27	advmod:lmod	_	Canto=12|Verso=126
21	fu	essere	AUX	vi4irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	27	cop	_	Canto=12|Verso=126
22	di	di	ADP	_	_	24	case	_	Canto=12|Comment=de-l|Verso=126
23	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	Canto=12|Comment=de-l|Verso=126
24	fosso	fosso	NOUN	sm2ms	Gender=Masc|Number=Sing	27	nmod	_	Canto=12|Verso=126
25	il	il	DET	rdms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	Canto=12|Verso=126
26	nostro	nostro	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	27	det:poss	_	Canto=12|Verso=126
27	passo	passo	NOUN	sm2ms	Gender=Masc|Number=Sing	7	parataxis	_	Canto=12|SpaceAfter=No|Verso=126
28	.	.	PUNCT	_	_	27	punct	_	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 flat:redup	color:blue
1	Ma	ma	CCONJ	csca	_	13	cc	_	Canto=21|Verso=103
2	quel	quello	DET	ad1ms	Gender=Masc|Number=Sing|PronType=Dem	3	det	_	Canto=21|Verso=103
3	demonio	demonio	NOUN	sm2ms	Gender=Masc|Number=Sing	13	nsubj	_	Canto=21|Verso=103
4	che	che	PRON	pr	PronType=Rel	5	nsubj	_	Canto=21|Verso=103
5	tenea	tenere	VERB	vta2iis3	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	Canto=21|Verso=103
6	sermone	sermone	NOUN	sm3ms	Gender=Masc|Number=Sing	5	obj	_	Canto=21|Verso=103
7	con	con	ADP	_	_	9	case	_	Canto=21|Comment=co-l|Verso=104
8	il	il	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	Canto=21|Comment=co-l|Verso=104
9	duca	duca	NOUN	sm1ms	Gender=Masc|Number=Sing	5	obl	_	Canto=21|Verso=104
10	mio	mio	DET	as1ms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	9	det:poss	_	Canto=21|SpaceAfter=No|Verso=104
11	,	,	PUNCT	_	_	3	punct	_	_
12	si	si	PRON	pf3ypr	Clitic=Yes|Person=3|PronType=Prs|Reflex=Yes	13	expl:pv	_	Canto=21|Verso=104
13	volse	volgere	VERB	vta+2irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Canto=21|Verso=104
14	tutto	tutto	DET	b	Gender=Masc|Number=Sing|PronType=Tot	15	advmod	_	Canto=21|Verso=104
15	presto	presto	ADJ	a1mssa	Degree=Abs|Gender=Masc|Number=Sing	13	advcl:pred	_	Canto=21|Verso=104
16	e	e	CCONJ	cscc	_	17	cc	_	Canto=21|Verso=105
17	disse	dire	VERB	vta3irs3	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	13	conj	_	Canto=21|SpaceAfter=No|Verso=105
18	:	:	PUNCT	_	_	20	punct	_	_
19	«	«	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	Posa	posare	VERB	vi1mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	17	ccomp:reported	_	Canto=21|SpaceAfter=No|Verso=105
21	,	,	PUNCT	_	_	22	punct	_	_
22	posa	posare	VERB	vi1mps2	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	20	flat:redup	_	Canto=21|SpaceAfter=No|Verso=105
23	,	,	PUNCT	_	_	24	punct	_	_
24	Scarmiglione	Scarmiglione	PROPN	np	_	20	vocative	_	Canto=21|SpaceAfter=No|Verso=105
25	!	!	PUNCT	_	_	20	punct	_	SpaceAfter=No
26	»	»	PUNCT	_	_	20	punct	_	SpaceAfter=No
27	.	.	PUNCT	_	_	20	punct	_	_

~~~


