---
layout: base
title:  'Statistics of ccomp in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `ccomp`

This relation is universal.

97 nodes (0%) are attached to their parents as `ccomp`.

97 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.93814432989691.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (69; 71% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt> (13; 13% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (6; 6% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="id_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-SYM.html">SYM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
1	Dengan	dengan	ADP	_	_	2	case	_	_
2	ini	ini	PRON	_	PronType=Dem	4	obl	_	_
3	saya	saya	PRON	_	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	menyatakan	nyata	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
5	pertandingan	tanding	NOUN	_	Number=Sing	8	nsubj	_	_
6	Olimpiade	Olimpiade	PROPN	_	_	5	nmod	_	_
7	pertama	pertama	ADJ	_	NumType=Ord	5	amod	_	_
8	selesai	selesai	VERB	_	Mood=Ind|Voice=Act	4	ccomp	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Katakan	kata	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
2	lah	lah	PART	_	_	1	advmod:emph	_	_
3	dia	dia	PRON	_	Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
4	salah	salah	ADJ	_	_	1	ccomp	_	SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp	color:blue
1	Ketika	ketika	ADV	_	PronType=Rel	3	advmod	_	_
2	Millican	Millican	PROPN	_	_	3	nsubj	_	_
3	meninggal	tinggal	VERB	_	Mood=Ind|Voice=Act	6	advcl	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	kami	kami	PRON	_	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
6	kira	kira	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
7	bahwa	bahwa	SCONJ	_	_	10	mark	_	_
8	itu	itu	PRON	_	PronType=Dem	10	nsubj	_	_
9	juga	juga	ADV	_	_	10	advmod	_	_
10	pertemuan	temu	NOUN	_	Number=Sing	6	ccomp	_	_
11	kami	kami	PRON	_	Clusivity=Ex|Number=Plur|Person=1|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
12	yang	yang	PRON	_	PronType=Rel	13	nsubj	_	_
13	terakhir	akhir	ADJ	_	Degree=Sup	10	acl:relcl	_	_
14	dengan	dengan	ADP	_	_	16	case	_	_
15	si	si	DET	_	PronType=Dem	16	det	_	_
16	gugup	gugup	NOUN	_	Number=Sing	10	nmod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	18	punct	_	_
18	Odi	Odi	PROPN	_	_	16	appos	_	SpaceAfter=No
19	.	.	PUNCT	_	_	6	punct	_	_

~~~


