---
layout: base
title:  'Statistics of cc:preconj in UD_Indonesian-PUD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-PUD: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="id_pud-dep-cc.html">cc</a></tt>.

5 nodes (0%) are attached to their parents as `cc:preconj`.

5 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8.

The following 4 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="id_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (2; 40% instances), <tt><a href="id_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances), <tt><a href="id_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances), <tt><a href="id_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="id_pud-pos-CCONJ.html">CCONJ</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Baik	baik	CCONJ	_	_	2	cc:preconj	_	_
2	waktu	waktu	NOUN	_	Number=Sing	6	nsubj:pass	_	_
3	dan	dan	CCONJ	_	_	4	cc	_	_
4	urutan	urut	NOUN	_	Number=Sing	2	conj	_	_
5	kejadian	jadi	NOUN	_	Number=Sing	4	nmod	_	_
6	dibahas	bahas	VERB	_	Mood=Ind|Voice=Pass	0	root	_	_
7	dengan	dengan	ADP	_	_	8	case:adv	_	_
8	mendalam	dalam	VERB	_	Mood=Ind|Voice=Act	6	advcl	_	SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 cc:preconj	color:blue
1	Secara	cara	ADP	_	_	2	case:adv	_	_
2	khusus	khusus	ADJ	_	_	6	advmod	_	_
3	dalam	dalam	ADP	_	_	5	case	_	_
4	beberapa	berapa	DET	_	Number=Plur|PronType=Ind	5	det	_	_
5	bagian	bagi	NOUN	_	Number=Sing	6	obl	_	_
6	membahas	bahas	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
7	efek	efek	NOUN	_	Number=Sing	6	obj	_	_
8	kemunduran	mundur	NOUN	_	Number=Sing	7	nmod	_	_
9	perang	perang	NOUN	_	Number=Sing	8	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	baik	baik	CCONJ	_	_	13	cc:preconj	_	_
12	secara	cara	ADP	_	_	13	case:adv	_	_
13	sosial	sosial	ADJ	_	_	7	advmod	_	_
14	maupun	maupun	CCONJ	_	_	15	cc	_	_
15	budaya	budaya	NOUN	_	Number=Sing	13	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	18	punct	_	_
17	terhadap	hadap	ADP	_	_	18	case	_	_
18	kemanusiaan	manusia	NOUN	_	Number=Sing	7	nmod	_	_
19	itu	itu	DET	_	PronType=Dem	18	det	_	_
20	sendiri	sendiri	DET	_	PronType=Emp	18	nmod	_	SpaceAfter=No
21	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Bogd	Bogd	PROPN	_	_	3	nsubj	_	_
2	Khaan	Khaan	PROPN	_	_	1	flat:name	_	_
3	mengatakan	kata	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	bahwa	bahwa	SCONJ	_	_	10	mark	_	_
5	baik	baik	CCONJ	_	_	6	cc:preconj	_	_
6	Mongolia	Mongolia	PROPN	_	_	10	nsubj:pass	_	_
7	maupun	maupun	CCONJ	_	_	8	cc	_	_
8	Tiongkok	Tiongkok	PROPN	_	_	6	conj	_	_
9	telah	telah	AUX	_	_	10	aux	_	_
10	diperintah	perintah	VERB	_	Mood=Ind|Voice=Pass	3	ccomp	_	_
11	oleh	oleh	ADP	_	_	12	case	_	_
12	Manchu	Manchu	PROPN	_	_	10	obl:agent	_	_
13	selama	lama	ADP	_	_	14	case	_	_
14	Dinasti	Dinasti	PROPN	_	_	10	obl	_	_
15	Qing	Qing	PROPN	_	_	14	flat:name	_	SpaceAfter=No
16	,	,	PUNCT	_	_	31	punct	_	_
17	dan	dan	CCONJ	_	_	31	cc	_	_
18	setelah	telah	ADP	_	_	19	case	_	_
19	kejatuhan	jatuh	NOUN	_	Number=Sing	31	obl	_	_
20	Dinasti	Dinasti	PROPN	_	_	19	nmod	_	_
21	Qing	Qing	PROPN	_	_	20	flat:name	_	_
22	pada	pada	ADP	_	_	23	case	_	_
23	tahun	tahun	NOUN	_	Number=Sing	19	nmod:tmod	_	_
24	1911	1911	NUM	_	NumType=Card	23	nummod	_	SpaceAfter=No
25	,	,	PUNCT	_	_	31	punct	_	_
26	kontrak	kontrak	NOUN	_	Number=Sing	31	nsubj	_	_
27	ketundukan	tunduk	NOUN	_	Number=Sing	26	nmod	_	_
28	Mongolia	Mongolia	PROPN	_	_	27	nmod	_	_
29	ke	ke	ADP	_	_	30	case	_	_
30	Manchu	Manchu	PROPN	_	_	26	nmod	_	_
31	menjadi	jadi	VERB	_	Mood=Ind|Voice=Act	10	conj	_	_
32	tidak	tidak	PART	_	Polarity=Neg	33	advmod	_	_
33	sah	sah	ADJ	_	_	31	xcomp	_	SpaceAfter=No
34	.	.	PUNCT	_	_	3	punct	_	_

~~~


