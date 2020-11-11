---
layout: base
title:  'Statistics of obl:agent in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="id_pud-dep-obl-tmod.html">obl:tmod</a></tt>.

82 nodes (0%) are attached to their parents as `obl:agent`.

82 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.21951219512195.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (49; 60% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (29; 35% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PRON.html">PRON</a></tt> (4; 5% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Pengeluaran	keluar	NOUN	_	Number=Sing	4	nsubj:pass	_	_
2	baru	baru	ADJ	_	_	1	amod	_	_
3	ini	ini	DET	_	PronType=Dem	1	det	_	_
4	dipasok	pasok	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
5	oleh	oleh	ADP	_	_	6	case	_	_
6	rekening	rekening	NOUN	_	Number=Sing	4	obl:agent	_	_
7	bank	bank	NOUN	_	Number=Sing	6	nmod	_	_
8	gemuk	gemuk	ADJ	_	_	6	amod	_	_
9	Clinton	Clinton	PROPN	_	_	6	nmod:poss	_	SpaceAfter=No
10	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Universiade	Universiade	PROPN	_	_	6	nsubj:pass	_	_
2	Musim	Musim	PROPN	_	_	1	flat:name	_	_
3	Dingin	Dingin	PROPN	_	_	1	flat:name	_	_
4	2019	2019	NUM	_	NumType=Card	1	nummod	_	_
5	akan	akan	AUX	_	_	6	aux	_	_
6	diselenggarakan	selenggara	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
7	oleh	oleh	ADP	_	_	8	case	_	_
8	Krasnoyarsk	Krasnoyarsk	PROPN	_	_	6	obl:agent	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obl:agent	color:blue
1	Generasi	generasi	NOUN	_	Number=Sing	5	nsubj	_	_
2	ponsel	ponsel	NOUN	_	Number=Sing	1	nmod	_	_
3	cerdas	cerdas	ADJ	_	_	2	amod	_	_
4	ini	ini	DET	_	PronType=Dem	1	det	_	_
5	menerima	terima	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
6	aplikasi	aplikasi	NOUN	_	Number=Sing	5	obj	_	_
7	yang	yang	PRON	_	PronType=Rel	8	nsubj	_	_
8	layak	layak	ADJ	_	_	6	acl:relcl	_	_
9	dimiliki	milik	VERB	_	Mood=Ind|Voice=Pass	8	xcomp	_	_
10	nya	nya	PRON	_	Number=Sing|Person=3|PronType=Prs	9	obl:agent	_	_
11	,	,	PUNCT	_	_	5	punct	_	_
12	di	di	ADP	_	_	13	case	_	_
13	mana	mana	PRON	_	PronType=Rel	22	obl	_	SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	dalam	dalam	ADP	_	_	16	case	_	_
16	skenario	skenario	NOUN	_	Number=Sing	22	obl	_	_
17	terbaik	baik	ADJ	_	Degree=Sup	16	amod	_	SpaceAfter=No
18	,	,	PUNCT	_	_	16	punct	_	_
19	situasi	situasi	NOUN	_	Number=Sing	22	nsubj	_	_
20	paling	paling	ADV	_	_	21	advmod	_	_
21	bodoh	bodoh	ADJ	_	_	19	amod	_	_
22	menerima	terima	VERB	_	Mood=Ind|Voice=Act	5	advcl	_	_
23	jutaan	juta	NUM	_	NumType=Card	24	nummod	_	_
24	pemirsa	pirsa	NOUN	_	Number=Sing	22	obj	_	SpaceAfter=No
25	.	.	PUNCT	_	_	5	punct	_	_

~~~


