---
layout: base
title:  'Statistics of obl in UD_Mbya_Guarani-Thomas'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Thomas: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="gun_thomas-dep-obl-sentcon.html">obl:sentcon</a></tt>.

63 nodes (5%) are attached to their parents as `obl`.

33 instances of `obl` (52%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.96825396825397.

The following 5 pairs of parts of speech are connected with `obl`: <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt> (33; 52% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-PRON.html">PRON</a></tt> (25; 40% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-ADP.html">ADP</a></tt> (2; 3% instances), <tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt>-<tt><a href="gun_thomas-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="gun_thomas-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gun_thomas-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl	color:blue
1	Romoĩ	moĩ	VERB	vt	Clusivity[subj]=Ex|Person[subj]=1|Subcat=Tran	0	root	_	A1.EXCL-CAUS-be.localized
2	mitã	mitã	NOUN	n	_	1	obj	_	child
3	oñembo'e	ñembo'e	VERB	vi:a	_	1	xcomp	_	A3-learn
4	aguã	aguã	SCONJ	subordconn	_	3	mark	_	PURP
5	jurua	jurua	NOUN	n	_	3	obl	_	non.indigenous
6	rami	rami	ADP	post	_	5	case	_	like
7	.	.	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 obl	color:blue
1	Upe	upe	PRON	dem	PronType=Dem	7	obl	_	DEM
2	ronguare	ronguare	SCONJ	nmlzer	_	1	mark	_	NMLZ.PAST
3	ni	ni	PART	focprt	_	5	amod	_	not.even
4	vaka	vaka	NOUN	n	_	5	nmod	_	cow
5	ro'o	o'o	NOUN	n	_	7	obj	_	R-meat
6	ore	ore	PRON	pro	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	7	nsubj	_	1.EXCL
7	ndoro'ui	'u	VERB	vt	Clusivity[subj]=Ex|Person[subj]=1|Polarity=Neg|Subcat=Tran	0	root	_	NEG-A1.EXCL-ingest-NEG
8	teri	teri	PART	focprt	_	7	advmod	_	still
9	.	.	PUNCT	punct	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 13 obl	color:blue
1	Pero	pero	CCONJ	coordconn	_	5	cc	_	but
2	upeve	upe	PRON	dem	PronType=Dem	5	obl	_	DEM-more
3	re	e	ADP	post	_	2	case	_	R-ABL
4	ore	ore	PRON	pro	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	1.EXCL
5	roñea'ã	ñea'ã	VERB	vd:a	_	0	root	_	A1.EXCL-make.efforts
6	,	,	PUNCT	punct	_	7	punct	_	_
7	opyta	pyta	VERB	vi:a	_	5	ccomp	_	A3-stay
8	aguã	aguã	SCONJ	subordconn	_	7	mark	_	PURP
9	orevy	orevy	ADP	post	_	7	obl	_	1.EXCL-DAT
10	ko'ape	ko'ape	ADV	demadv	_	7	advmod	_	here
11	ka'aguy	ka'aguy	NOUN	n	_	7	nsubj	_	forest
12	,	,	PUNCT	punct	_	14	punct	_	_
13	orevy	orevy	ADP	post	_	14	obl	_	1.EXCL-DAT
14	opyta	pyta	VERB	vi:a	_	7	conj	_	A3-stay
15	aguã	aguã	SCONJ	subordconn	_	14	mark	_	PURP
16	.	.	PUNCT	punct	_	14	punct	_	_

~~~


