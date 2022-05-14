---
layout: base
title:  'Statistics of parataxis in UD_Munduruku-TuDeT'
udver: '2'
---

## Treebank Statistics: UD_Munduruku-TuDeT: Relations: `parataxis`

This relation is universal.

39 nodes (4%) are attached to their parents as `parataxis`.

39 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.7179487179487.

The following 8 pairs of parts of speech are connected with `parataxis`: <tt><a href="myu_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="myu_tudet-pos-VERB.html">VERB</a></tt> (24; 62% instances), <tt><a href="myu_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myu_tudet-pos-VERB.html">VERB</a></tt> (4; 10% instances), <tt><a href="myu_tudet-pos-VERB.html">VERB</a></tt>-<tt><a href="myu_tudet-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="myu_tudet-pos-NOUN.html">NOUN</a></tt>-<tt><a href="myu_tudet-pos-NOUN.html">NOUN</a></tt> (3; 8% instances), <tt><a href="myu_tudet-pos-ADP.html">ADP</a></tt>-<tt><a href="myu_tudet-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="myu_tudet-pos-ADV.html">ADV</a></tt>-<tt><a href="myu_tudet-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="myu_tudet-pos-PART.html">PART</a></tt>-<tt><a href="myu_tudet-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="myu_tudet-pos-PROPN.html">PROPN</a></tt>-<tt><a href="myu_tudet-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	Ag̃okatkayũ	ag̃okatkat	NOUN	n	Number=Plur	3	nsubj	_	_
2	axĩma	axĩma	NOUN	n	_	3	obj	_	_
3	muyuhum	u	VERB	v	Aspect=Imp|Rel=NCont|Voice=Cau	0	root	_	_
4	idibi	idibi	NOUN	n	_	3	obj	_	_
5	tag̃	dag̃	ADP	posp	Rel=NCont	4	case	_	_
6	.	.	PUNCT	PUNCT	_	3	punct	_	punct
7	Axĩma	axĩma	NOUN	n	_	8	obj	_	_
8	muyuhum	u	VERB	v	Aspect=Imp|Rel=NCont|Voice=Cau	3	parataxis	_	_
9	ip	ip	PRON	pro	Number=Plur|Person=3|PronType=Prs	8	nsubj	_	_
10	pig̃am	pig̃a	NOUN	n	Case=Ins	8	obl	_	_
11	.	.	PUNCT	PUNCT	_	8	punct	_	punct

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	Ixe	ixe	PRON	pro	PronType=Dem	3	nsubj	_	_
2	dak	dak	ADV	adv	_	3	advmod	_	_
3	etaxi'ũm	etaxi'ũm	NOUN	n	_	0	root	_	_
4	puye	puye	ADV	_	_	5	mark	_	_
5	tiwãbu	tiwãbu	NOUN	cl	_	3	advcl	_	_
6	tẽg̃	dẽg̃	ADP	posp	Rel=NCont	5	case	_	_
7	ma	ma	PART	prcl	_	3	discourse	_	_
8	o'ju	cu	VERB	vi	_	3	parataxis	_	_
9	tiwãbu	tiwãbu	VERB	vi	_	8	obl	_	_
10	dag̃	tag̃	ADP	posp	Rel=Cont	9	case	_	_
11	ma	ma	PART	prcl	_	8	discourse	_	_
12	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 parataxis	color:blue
1	Iwi	wi	NOUN	n	Rel=NCont	3	obl	_	_
2	be	be	ADP	posp	_	1	case	_	_
3	imõg̃mõg̃	mõg̃	VERB	v	Aspect=DurIprf|Rel=NCont	0	root	_	_
4	ip	ip	PRON	pro	_	3	nsubj	_	_
5	ta	ta	VERB	v	_	3	advcl	_	_
6	am	am	PART	prcl	_	5	mark	_	_
7	.	.	PUNCT	punct	_	3	punct	_	_
8	Tao	dao	NOUN	n	Rel=NCont	9	nmod	_	_
9	uk	uk	NOUN	n	_	12	advcl	_	_
10	puje	puje	SCONJ	sconj	_	9	mark	_	_
11	axima	axima	NOUN	n	_	12	nsubj	_	_
12	nõm	nõm	NOUN	n	_	3	parataxis	_	_
13	e'em	e'em	AUX	aux	_	12	aux	_	_
14	ip	ip	PRON	pro	_	11	dep	_	_
15	.	.	PUNCT	punct	_	12	punct	_	_
16	Axima	axima	NOUN	n	_	17	obj	_	_
17	tatam	ta	VERB	v	Aspect=DurIprf	3	parataxis	_	_
18	ip	ip	PRON	pro	_	17	nsubj	_	_
19	uktup	uk	NOUN	n	_	17	obl	_	_
20	pe	pe	ADP	posp	_	19	case	_	_
21	.	.	PUNCT	punct	_	17	punct	_	_
22	Iwi	wi	NOUN	n	Rel=NCont	24	obj	_	_
23	be	be	ADP	posp	_	22	case	_	_
24	imõg̃mõg̃	mõg̃	VERB	v	Aspect=DurIprf	3	parataxis	_	_
25	ip	ip	PRON	pro	_	24	nsubj	_	_
26	uktup	uk	NOUN	n	_	24	obl	_	_
27	pe	be	ADP	posp	_	26	case	_	_
28	axima	axima	NOUN	n	_	29	obj	_	_
29	mupuruk	puruk	VERB	v	Voice=Cau	24	advcl	_	_
30	am	am	SCONJ	sconj	_	29	mark	_	_
31	.	.	PUNCT	punct	_	24	punct	_	_

~~~


