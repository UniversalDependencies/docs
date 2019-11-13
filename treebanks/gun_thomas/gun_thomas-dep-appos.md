---
layout: base
title:  'Statistics of appos in UD_Mbya_Guarani-Thomas'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Thomas: Relations: `appos`

This relation is universal.

10 nodes (1%) are attached to their parents as `appos`.

10 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `appos`: <tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt> (6; 60% instances), <tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_thomas-pos-PROPN.html">PROPN</a></tt> (4; 40% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	Upe	upe	PRON	dem	PronType=Dem	8	obl:sentcon	_	DEM
2	rire	rire	SCONJ	subordconn	_	1	case	_	after
3	ma	ma	PART	discprt	_	1	dep:mod	_	BDY
4	kova'e	kova'e	DET	dem	PronType=Dem	5	det	_	DEM-REL
5	mitã'i	mitã	NOUN	n	_	8	nsubj	_	child-=DIM
6	,	,	PUNCT	punct	_	7	punct	_	_
7	cheremiarirõ'i	emiarirõ	NOUN	n	Number[psor]=Sing	5	appos	_	B1.SG-R-grandchild-=DIM
8	oiko	iko	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	0	root	_	A3-live
9	,	,	PUNCT	punct	_	10	punct	_	_
10	ojau	jau	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Int|VerbForm=Fin	8	parataxis	_	A3-born
11	.	.	PUNCT	punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Cheru	u	NOUN	n	Number[psor]=Sing	3	nmod	_	B1.SG-R-father
2	Tupã	Tupã	PROPN	nprop	_	1	appos	_	Tupã
3	rembiecha	embiecha	NOUN	n	_	7	obl	_	R-NMLZ-see
4	py	py	ADP	post	_	3	case	_	in
5	,	,	PUNCT	punct	_	3	punct	_	_
6	pecha	upecha	ADV	dem	_	7	advmod	_	like.this
7	aiko	iko	VERB	vi:a	Mood=Ind|Person[subj]=1|Subcat=Int|VerbForm=Fin	0	root	_	A1.SG-live
8	.	.	PUNCT	punct	_	7	punct	_	_

~~~


