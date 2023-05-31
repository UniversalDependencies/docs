---
layout: base
title:  'Statistics of det in UD_Mbya_Guarani-Thomas'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Thomas: Relations: `det`

This relation is universal.

9 nodes (1%) are attached to their parents as `det`.

9 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55555555555556.

The following 2 pairs of parts of speech are connected with `det`: <tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_thomas-pos-DET.html">DET</a></tt> (7; 78% instances), <tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_thomas-pos-PRON.html">PRON</a></tt> (2; 22% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Upe	upe	PRON	dem	PronType=Dem	8	obl:sentcon	_	DEM
2	rire	rire	SCONJ	subordconn	_	1	case	_	after
3	ma	ma	PART	discprt	_	1	dep:mod	_	BDY
4	kova'e	kova'e	DET	dem	PronType=Dem	5	det	_	DEM-REL
5	mitã'i	mitã	NOUN	n	_	8	nsubj	_	child-=DIM
6	,	,	PUNCT	punct	_	7	punct	_	_
7	cheremiarirõ'i	emiarirõ	NOUN	n	Number[psor]=Sing	5	appos	_	B1.SG-R-grandchild-=DIM
8	oiko	iko	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	A3-live
9	,	,	PUNCT	punct	_	10	punct	_	_
10	ojau	jau	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	8	parataxis	_	A3-born
11	.	.	PUNCT	punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det	color:blue
1	Ha'e	ha'e	PRON	pro	Person=3|PronType=Prs	3	det	_	3
2	pavẽ	pavẽ	DET	quant	PronType=Tot	1	amod	_	all
3	ñandejaryi	jaryi	NOUN	n	Clusivity[psor]=In|Number[psor]=Plur	7	nsubj	_	B1.PL.INCL-grandmother
4	kuery	kuery	PART	quantprt	_	3	dep:mod	_	COL
5	pendejaryi	jaryi	NOUN	n	Number[psor]=Plur	3	conj	_	B2.PL-grandmother
6	kuery	kuery	PART	quantprt	_	5	dep:mod	_	COL
7	oikotevẽ	kotevẽ	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	0	root	_	A3-B3-need
8	kova'e	kova'e	DET	dem	PronType=Dem	11	reparandum	_	DEM-REL
9	,	,	PUNCT	punct	_	11	punct	_	_
10	kova'e	kova'e	DET	dem	PronType=Dem	11	det	_	DEM-REL
11	tembiapo	embiapo	NOUN	n	_	7	obl	_	NPOSSD-NMLZ-do
12	ñaroña'ã	roña'ã	VERB	vt	Clusivity[subj]=In|Mood=Ind|Person[subj]=1|Subcat=Tran|VerbForm=Fin	11	acl	_	A1.PL.INCL-COM-make.efforts
13	erekovy	eroiko	VERB	vs	Mood=Ind|VerbForm=Ser	12	compound:svc	_	COM-walk-V2
14	va'e	va'e	SCONJ	rel	_	12	mark	_	REL
15	re	e	ADP	post	_	12	case	_	R-ABL
16	,	,	PUNCT	punct	_	17	punct	_	_
17	ha'e	ha'e	PRON	pro	Person=3|PronType=Prs	7	obl	_	3
18	va'e	va'e	SCONJ	rel	_	17	mark	_	REL
19	re	e	ADP	post	_	17	case	_	R-ABL
20	tove	tove	PART	illocprt	_	17	dep:mod	_	OPT
21	arã	a	SCONJ	nmlzer	_	17	mark	_	NMLZ-FUT
22	.	.	PUNCT	punct	_	17	punct	_	_

~~~


