---
layout: base
title:  'Statistics of discourse in UD_Mbya_Guarani-Thomas'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Thomas: Relations: `discourse`

This relation is universal.

4 nodes (0%) are attached to their parents as `discourse`.

2 instances of `discourse` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.75.

The following 4 pairs of parts of speech are connected with `discourse`: <tt><a href="gun_thomas-pos-PART.html">PART</a></tt>-<tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-INTJ.html">INTJ</a></tt> (1; 25% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 discourse	color:blue
1	Upearã	upearã	PART	mod	_	8	dep:mod	_	because.of.this
2	che	che	PRON	pro	Number=Sing|Person=1|PronType=Prs	3	reparandum	_	1.SG
3	chehistoria	historia	NOUN	n	Number[psor]=Sing	1	discourse	_	B1.SG-story
4	,	,	PUNCT	punct	_	5	punct	_	_
5	historia	historia	NOUN	n	_	3	reparandum	_	story
6	,	,	PUNCT	punct	_	5	punct	_	_
7	che	che	PRON	pro	Number=Sing|Person=1|PronType=Prs	8	nsubj	_	1.SG
8	amombe'u	mombe'u	VERB	vt	Mood=Ind|Person[subj]=1|Subcat=Tran|VerbForm=Fin	0	root	_	A1.SG-tell
9	mba'e	mba'e	PRON	interpron	PronType=Int	12	obj	_	what
10	pa	pa	PART	qprt	_	9	dep:mod	_	Q
11	che	che	PRON	pro	Number=Sing|Person=1|PronType=Prs	12	nsubj	_	1.SG
12	ajapo	apo	VERB	vt	Mood=Ind|Person[subj]=1|Subcat=Tran|VerbForm=Fin	8	ccomp	_	A1.SG-B3-do
13	ra'e	ra'e	PART	illocprt	_	12	dep:mod	_	MIR
14	,	,	PUNCT	punct	_	18	punct	_	_
15	mba'e	mba'e	DET	interpron	PronType=Int	16	det	_	what
16	tembiapo	embiapo	NOUN	n	_	18	obj	_	NPOSSD-NMLZ-do
17	pa	pa	PART	qprt	_	16	dep:mod	_	Q
18	ajapo	apo	VERB	vt	Mood=Ind|Person[subj]=1|Subcat=Tran|VerbForm=Fin	12	conj	_	A1.SG-B3-do
19	.	.	PUNCT	punct	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Gueno	gueno	INTJ	interj	_	5	discourse	_	good
2	pea	upea	PRON	dem	PronType=Dem	5	obl	_	DEM
3	peve	peve	ADP	post	_	2	case	_	until
4	rãe'i	rãe	ADV	mod	_	2	advmod	_	first-=DIM
5	cheayvu	ayvu	VERB	inact	Mood=Ind|Person[subj]=1|Subcat=Int|VerbForm=Fin	0	root	_	B1.SG-speak
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 discourse	color:blue
1	"	"	PUNCT	punct	_	4	punct	_	_
2	Ñande	ñande	PRON	pro	Clusivity=In|Number=Plur|Person=1|PronType=Prs	4	obj	_	1.PL.INCL
3	,	,	PUNCT	punct	_	2	punct	_	_
4	ñanderayvu	ayvu	VERB	vt	Clusivity[obj]=In|Mood=Ind|Person[obj]=1|Subcat=Tran|VerbForm=Fin	0	root	_	B1.PL.INCL-R-love
5	ra'e	ra'e	PART	illocprt	_	4	dep:mod	_	MIR
6	,	,	PUNCT	punct	_	7	punct	_	_
7	añete'i	añete	NOUN	n	_	4	discourse	_	truth-=DIM
8	po	po	PART	illocprt	_	7	dep:mod	_	EPIS
9	ra'e	ra'e	PART	illocprt	_	7	dep:mod	_	MIR
10	ñande	ñande	PRON	pro	Clusivity=In|Number=Plur|Person=1|PronType=Prs	12	reparandum	_	1.PL.INCL
11	,	,	PUNCT	punct	_	12	punct	_	_
12	ñandevy	ñandevy	PRON	pro	Clusivity=In|Number=Plur|Person=1|PronType=Prs	14	obl	_	1.PL.INCL-DAT
13	pe	pe	ADP	post	_	12	case	_	DAT
14	oña'ã	ña'ã	VERB	vd:a	Mood=Ind|Person[subj]=3|Subcat=IntInd|VerbForm=Fin	4	parataxis	_	A3-make.efforts
15	oikovy	iko	VERB	vs	Mood=Ind|Person=3|VerbForm=Ser	14	compound:svc	_	A3-be-V2
16	,	,	PUNCT	punct	_	17	punct	_	_
17	chejaryi	jaryi	NOUN	n	Number[psor]=Sing	14	nsubj	_	B1.SG-grandmother
18	."	."	PUNCT	punct	_	14	punct	_	_

~~~


