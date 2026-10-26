---
layout: base
title:  'Statistics of nmod in UD_Xavante-XDT'
udver: '2'
---

## Treebank Statistics: UD_Xavante-XDT: Relations: `nmod`

This relation is universal.

59 nodes (3%) are attached to their parents as `nmod`.

36 instances of `nmod` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23728813559322.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="xav_xdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xav_xdt-pos-NOUN.html">NOUN</a></tt> (46; 78% instances), <tt><a href="xav_xdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xav_xdt-pos-PRON.html">PRON</a></tt> (9; 15% instances), <tt><a href="xav_xdt-pos-ADP.html">ADP</a></tt>-<tt><a href="xav_xdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="xav_xdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xav_xdt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="xav_xdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xav_xdt-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="xav_xdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="xav_xdt-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod	color:blue
1	Aibö	aibö	NOUN	n	_	5	nsubj	_	man;homem
2	pi'õi	pi'õ	NOUN	n	_	1	nmod	_	woman;mulher
3	me	me	ADP	posp	_	2	case	_	with;com
4	te	te	AUX	aux	Person=Non1	5	dep	_	_
5	tineb	ne	VERB	v	Person[abs]=3	0	root	_	walk;andar,caminhar
6	zahuré	zahuré	NUM	num	Number=Dual	1	nummod	_	_
7	buru	buru	NOUN	n	_	5	obl	_	slash;roça
8	u	u	ADP	posp	_	7	case	_	to;a,para
9	.	.	PUNCT	punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod	color:blue
1	Tãma	ti	PRON	pron	Case=Dat|Person=3	2	nmod	_	lhe,a.ele,.para.ele
2	sei	se	NOUN	n	_	0	root	_	tasty;gostoso
3	wa	wa	PRON	ego	Person=1	2	dep	_	_
4	ma	ma	PART	prcl	Htp=Yes|Tense=Past	6	dep	_	heterophoric.marker.perfective.aspect;marcardor.heterofórico.aspecto.perfectivo
5	tô	tô	PART	prcl	Fact=Yes	6	dep	_	factive;fictício
6	tiwĩ	wĩrĩ	VERB	v	Person[abs]=3	2	parataxis	_	kill.a.being;matar.um.ser
7	.	.	PUNCT	punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod	color:blue
1	A'uwẽ	a'uwẽ	NOUN	n	_	14	dislocated	_	_
2	ãma	ãma	ADP	posp	_	1	case	_	_
3	hã	hã	PART	prcl	_	1	dep	_	_
4	,	,	PUNCT	punct	_	1	punct	_	_
5	wapté	wapté	NOUN	n	_	14	nsubj	_	_
6	norĩ	_	PART	prcl	Number=Coll	5	dep	_	_
7	hã	hã	PART	prcl	_	5	dep	_	_
8	,	,	PUNCT	punct	_	5	punct	_	_
9	mara	mara	NOUN	n	_	10	nmod	_	_
10	wa'wa	wa'wa	ADP	posp	_	14	obl	_	no meio
11	,	,	PUNCT	punct	_	10	punct	_	_
12	te	te	AUX	aux	Person=Non1|Tense=Pres	14	aux	_	_
13	're	're	PART	prcl	_	14	dep	_	_
14	utu	utu	VERB	v	_	0	root	_	leventar-se
15	za'ra	za'ra	PART	prcl	Number=Plur	5	dep	_	_
16	sõ're	sõ're	VERB	v	_	14	advcl	_	cantar
17	da	da	SCONJ	_	_	16	mark	_	para,afim de
18	hã	hã	PART	prcl	_	16	dep	_	_
19	.	.	PUNCT	punct	_	16	punct	_	_

~~~


