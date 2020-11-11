---
layout: base
title:  'Statistics of obl:tmod in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="id_pud-dep-obl-agent.html">obl:agent</a></tt>.

267 nodes (1%) are attached to their parents as `obl:tmod`.

172 instances of `obl:tmod` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.8314606741573.

The following 5 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (236; 88% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (15; 6% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt> (11; 4% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:tmod	color:blue
1	Ia	ia	PRON	_	Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	lalu	lalu	SCONJ	_	_	3	mark	_	_
3	bekerja	kerja	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	empat	empat	NUM	_	NumType=Card	5	nummod	_	_
5	tahun	tahun	NOUN	_	Number=Sing	3	obl:tmod	_	_
6	di	di	ADP	_	_	7	case	_	_
7	BBC	BBC	PROPN	_	Abbr=Yes	3	obl	_	_
8	World	World	PROPN	_	_	7	flat:name	_	_
9	Service	Service	PROPN	_	_	7	flat:name	_	_
10	di	di	ADP	_	_	11	case	_	_
11	Bush	Bush	PROPN	_	_	3	obl	_	_
12	House	House	PROPN	_	_	11	flat:name	_	SpaceAfter=No
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:tmod	color:blue
1	Masuk	masuk	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
2	ke	ke	ADP	_	_	3	case	_	_
3	2016	2016	NUM	_	NumType=Card	1	obl:tmod	_	_
4	dan	dan	CCONJ	_	_	8	cc	_	_
5	hal	hal	NOUN	_	Number=Sing	8	nsubj	_	_
6	ini	ini	DET	_	PronType=Dem	5	det	_	_
7	semakin	makin	ADV	_	_	8	advmod	_	_
8	layak	layak	ADJ	_	_	1	conj	_	_
9	diperhatikan	hati	VERB	_	Mood=Ind|Voice=Pass	8	xcomp	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 obl:tmod	color:blue
1	Hari	hari	NOUN	_	Number=Sing	4	obl:tmod	_	_
2	ini	ini	DET	_	PronType=Dem	1	det	_	SpaceAfter=No
3	,	,	PUNCT	_	_	1	punct	_	_
4	banyak	banyak	ADJ	_	_	0	root	_	_
5	sekali	kali	ADV	_	_	4	advmod	_	_
6	puing-puing	puing	NOUN	_	Number=Plur	4	nsubj	_	_
7	yang	yang	PRON	_	PronType=Rel	9	nsubj:pass	_	_
8	bisa	bisa	AUX	_	_	9	aux	_	_
9	dilihat	lihat	VERB	_	Mood=Ind|Voice=Pass	6	acl:relcl	_	_
10	di	di	ADP	_	_	11	case	_	_
11	sana	sana	PRON	_	PronType=Dem	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


