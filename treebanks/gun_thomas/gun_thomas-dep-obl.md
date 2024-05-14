---
layout: base
title:  'Statistics of obl in UD_Mbya_Guarani-Thomas'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Thomas: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="gun_thomas-dep-obl-sentcon.html">obl:sentcon</a></tt>.

64 nodes (5%) are attached to their parents as `obl`.

32 instances of `obl` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.046875.

The following 4 pairs of parts of speech are connected with `obl`: <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt> (34; 53% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-PRON.html">PRON</a></tt> (26; 41% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-ADP.html">ADP</a></tt> (2; 3% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt> (2; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl	color:blue
1	Romoĩ	moĩ	VERB	vt	Clusivity[subj]=Ex|Mood=Ind|Person[subj]=1|Subcat=Tran|VerbForm=Fin	0	root	_	A1.PL.EXCL-CAUS-localized
2	mitã	mitã	NOUN	n	_	1	obj	_	child
3	oñembo'e	ñembo'e	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	1	xcomp	_	A3-learn
4	aguã	aguã	SCONJ	subordconn	_	3	mark	_	PURP
5	jurua	jurua	NOUN	n	_	3	obl	_	non.indigenous
6	rami	rami	ADP	post	_	5	case	_	like
7	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 obl	color:blue
1	Ha'e	ha'e	CCONJ	coordconn	_	5	cc	_	and
2	,	,	PUNCT	punct	_	5	punct	_	_
3	opa	opa	PRON	quant	PronType=Tot	5	obl	_	everywhere
4	rupi	upi	ADP	post	_	3	case	_	R-through
5	ka'aguy	ka'aguy	VERB	n:pred	Mood=Ind|Subcat=Intr|VerbForm=Vnoun	0	root	_	forest
6	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 obl	color:blue
1	Pero	pero	CCONJ	coordconn	_	5	cc	_	but
2	upeve	upeve	PRON	dem	PronType=Dem	5	obl	_	DEM-INT
3	re	e	ADP	post	_	2	case	_	R-ABL
4	ore	ore	PRON	pro	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	1.PL.EXCL
5	roñea'ã	ñea'ã	VERB	vd:a	Clusivity[subj]=Ex|Mood=Ind|Person[subj]=1|Subcat=Indir|VerbForm=Fin	0	root	_	A1.PL.EXCL-make.efforts
6	,	,	PUNCT	punct	_	7	punct	_	_
7	opyta	pyta	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	5	ccomp	_	A3-stay
8	aguã	aguã	SCONJ	subordconn	_	7	mark	_	PURP
9	orevy	orevy	ADP	post	_	7	obl	_	1.PL.EXCL-DAT
10	ko'ape	ko'ape	ADV	dem	_	7	advmod	_	here
11	ka'aguy	ka'aguy	NOUN	n	_	7	nsubj	_	forest
12	,	,	PUNCT	punct	_	14	punct	_	_
13	orevy	orevy	ADP	post	_	14	obl	_	1.PL.EXCL-DAT
14	opyta	pyta	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	7	conj	_	A3-stay
15	aguã	aguã	SCONJ	subordconn	_	14	mark	_	PURP
16	.	.	PUNCT	punct	_	14	punct	_	_

~~~


