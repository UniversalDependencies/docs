---
layout: base
title:  'Statistics of fixed in UD_Mbya_Guarani-Thomas'
udver: '2'
---

## Treebank Statistics: UD_Mbya_Guarani-Thomas: Relations: `fixed`

This relation is universal.

4 nodes (0%) are attached to their parents as `fixed`.

4 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25.

The following 3 pairs of parts of speech are connected with `fixed`: <tt><a href="gun_thomas-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gun_thomas-pos-PROPN.html">PROPN</a></tt> (2; 50% instances), <tt><a href="gun_thomas-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="gun_thomas-pos-SCONJ.html">SCONJ</a></tt> (1; 25% instances), <tt><a href="gun_thomas-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="gun_thomas-pos-PART.html">PART</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 fixed	color:blue
1	Ko'apy	ko'apy	ADV	dem	_	2	advmod	_	here
2	roju	ju	VERB	vi:a	Clusivity[subj]=Ex|Mood=Ind|Person[subj]=1|Subcat=Intr|VerbForm=Fin	6	advcl	_	A1.PL.EXCL-come
3	rire	rire	SCONJ	subordconn	_	2	mark	_	after
4	ma	ma	PART	aspprt	_	2	dep:mod	_	ASP
5	,	,	PUNCT	punct	_	6	punct	_	_
6	ou	u	VERB	vi:a	Mood=Ind|Person[subj]=3|Subcat=Intr|VerbForm=Fin	0	root	_	A3-come
7	kuri	kuri	PART	temprt	_	6	dep:mod	_	CUR
8	cheñora	cheñora	NOUN	n	_	6	nsubj	_	lady
9	,	,	PUNCT	punct	_	13	punct	_	_
10	Patricia	Patricia	PROPN	nprop	_	13	nsubj	_	Patricia
11	Madre	Madre	PROPN	nprop	_	10	fixed	_	Madre
12	Tierra	Tierra	PROPN	nprop	_	10	fixed	_	Tierra
13	oje'ea	je'e	VERB	vt	Mood=Ind|Person[subj]=3|Subcat=Tran|VerbForm=Fin	8	acl	_	A3-REFL-say-IMPRS
14	.	.	PUNCT	punct	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 fixed	color:blue
1	Mokoĩ	mokoĩ	NUM	num	NumType=Card	3	nummod	_	two
2	ñevanga	ñevanga	NOUN	n	_	3	nmod	_	play
3	reko	eko	NOUN	n	_	6	obj	_	R-way.of.life
4	ma	ma	PART	discprt	_	3	dep:mod	_	BDY
5	aỹ	aỹ	ADV	dem	_	6	advmod	_	now
6	jareko	riko	VERB	vt	Clusivity[subj]=In|Mood=Ind|Person[subj]=1|Subcat=Tran|VerbForm=Fin	0	root	_	A1.PL.INCL-COM-be
7	ha'e	ha'e	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	6	parataxis	_	say
8	jepi	jepi	PART	aspprt	_	7	dep:mod	_	ITER
9	ichupe	ichupe	PRON	pro	Person=3|PronType=Prs	7	obl	_	3.DAT
10	kuera	kuera	PART	quantprt	_	9	dep:mod	_	COL
11	ajeve	ajeve	CCONJ	coordconn	_	14	cc	_	furthermore
12	rã	rã	SCONJ	subordconn	_	11	fixed	_	DS
13	mokoĩ	mokoĩ	NUM	num	NumType=Card	14	nummod	_	two
14	teko	eko	NOUN	n	_	3	conj	_	NPOSSD-way.of.life
15	,	,	PUNCT	punct	_	16	punct	_	_
16	jaraa	ra	VERB	vt	Clusivity[subj]=In|Mood=Ind|Person[subj]=1|Subcat=Tran|VerbForm=Fin	14	acl	_	A1.PL.INCL-COM-go
17	porã	porã	ADV	inact	_	16	advmod	_	INT
18	arã	a	SCONJ	nmlzer	_	16	mark	_	NMLZ-FUT
19	peteĩ	peteĩ	NUM	num	NumType=Card	20	nummod	_	one
20	jokota	kota	NOUN	n	_	16	obl	_	RECP-side
21	re	e	ADP	post	_	20	case	_	R-ABL
22	porã	porã	ADJ	inact	_	20	amod	_	beautiful
23	peteĩcha	peteĩ	ADV	mod	_	24	advmod	_	one-MAN
24	jaraa	ra	VERB	vt	Clusivity[subj]=In|Mood=Ind|Person[subj]=1|Subcat=Tran|VerbForm=Fin	14	acl	_	A1.PL.INCL-COM-go
25	porã	porã	ADV	inact	_	24	advmod	_	beautiful
26	arã	a	SCONJ	nmlzer	_	24	mark	_	NMLZ-FUT
27	,	,	PUNCT	punct	_	28	punct	_	_
28	ñandereko	eko	NOUN	n	Clusivity[psor]=In|Number[psor]=Plur	14	appos	_	B1.PL.INCL-R-way.of.life
29	,	,	PUNCT	punct	_	30	punct	_	_
30	ñanerembiapo	embiapo	NOUN	n	Clusivity[psor]=In|Number[psor]=Plur	14	appos	_	B1.PL.INCL-R-NMLZ-do
31	,	,	PUNCT	punct	_	32	punct	_	_
32	ha'e	ha'e	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	6	parataxis	_	say
33	.	.	PUNCT	punct	_	32	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 fixed	color:blue
1	Jurua	jurua	NOUN	n	_	5	obl	_	non.indigenous
2	rami	rami	ADP	post	_	1	case	_	like
3	tembiapo	embiapo	NOUN	n	_	4	nmod	_	NPOSSD-NMLZ-do
4	reko	eko	NOUN	n	_	5	obj	_	R-way.of.life
5	pereko	riko	VERB	vt	Mood=Ind|Person[subj]=2|Subcat=Tran|VerbForm=Fin	12	advcl	_	A2.PL-COM-be
6	vy	vy	SCONJ	subordconn	_	5	mark	_	SS
7	jepe	jepe	PART	discprt	_	6	fixed	_	CONC
8	,	,	PUNCT	punct	_	5	punct	_	_
9	opy	opy	NOUN	n	_	12	obl	_	prayer.house
10	rupi	upi	ADP	post	_	9	case	_	R-through
11	ani	ani	PART	negprt	_	12	dep:mod	_	NEG
12	penderecharãi	echarãi	VERB	vd:i	Mood=Ind|Person[subj]=2|Subcat=Indir|VerbForm=Fin	0	root	_	B2.PL-R-forget
13	,	,	PUNCT	punct	_	14	punct	_	_
14	ha'e	ha'e	VERB	vt	Mood=Ind|Subcat=Tran|VerbForm=Inf	12	parataxis	_	say
15	jepi	jepi	PART	aspprt	_	14	dep:mod	_	ITER
16	pendevy	pendevy	PRON	pro	Number=Plur|Person=2|PronType=Prs	14	obl	_	B2.PL-DAT
17	.	.	PUNCT	punct	_	14	punct	_	_

~~~


