---
layout: base
title:  'Statistics of orphan in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `orphan`

This relation is universal.

7 nodes (0%) are attached to their parents as `orphan`.

5 instances of `orphan` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14285714285714.

The following 4 pairs of parts of speech are connected with `orphan`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (2; 29% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (2; 29% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (2; 29% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 orphan	color:blue
1	1912	1912	NUM	RG|NOM	Case=Nom	2	obl	2:obl	_
2	grundades	grunda	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	5	det	5:det	_
4	första	första	ADJ	RO|NOM	Case=Nom	5	amod	5:amod	_
5	filmbolaget	filmbolag	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	2	nsubj:pass	2:nsubj:pass	_
6	(	(	PUNCT	PAD	_	8	punct	8:punct	SpaceAfter=No
7	Athina	Athina	PROPN	PM|NOM	Case=Nom	8	nmod	8:nmod	_
8	Film	film	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	appos	2:appos	SpaceAfter=No
9	)	)	PUNCT	PAD	_	8	punct	8:punct	_
10	och	och	CCONJ	KN	_	13	cc	11.1:cc	_
11	1916	1916	NUM	RG|NOM	Case=Nom	13	orphan	11.1:obl	_
12	Asty	Asty	PROPN	PM|NOM	Case=Nom	13	nmod	13:nmod	_
13	Film	film	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	conj	11.1:nsubj:pass	SpaceAfter=No
14	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 orphan	color:blue
1	Den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	3	det	3:det	_
2	norra	norr	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	3	amod	3:amod	_
3	delen	del	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nsubj	7:nsubj	_
4	av	av	ADP	PP	_	5	case	5:case	_
5	Kaukasus	Kaukasus	PROPN	PM|NOM	Case=Nom	3	nmod	3:nmod:av	_
6	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
7	känd	känd	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
8	som	som	ADP	KN	_	9	case	9:case	_
9	Nordkaukasus	Nordkaukasus	PROPN	PM|NOM	Case=Nom	7	obl	7:obl:som	_
10	och	och	CCONJ	KN	_	13	cc	13.1:cc	_
11	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	13	det	13:det	_
12	södra	söder	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	13	amod	13:amod	_
13	delen	del	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	conj	13.1:nsubj	_
14	som	som	ADP	KN	_	15	mark	15:mark	_
15	Transkaukasus	Transkaukasus	PROPN	PM|NOM	Case=Nom	13	orphan	13.1:obl	SpaceAfter=No
16	.	.	PUNCT	MAD	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 orphan	color:blue
1	Durán	Durán	PROPN	PM|NOM	Case=Nom	2	nsubj	2:nsubj|4:nsubj	_
2	agerar	agera	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	som	som	SCONJ	KN	_	4	mark	4:mark	_
4	talesman	talesman	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	xcomp	2:xcomp	_
5	och	och	CCONJ	KN	_	6	cc	7.1:cc	_
6	Ángel	Ángel	PROPN	PM|NOM	Case=Nom	2	conj	7.1:nsubj|9:nsubj	_
7	Pintado	Pintado	PROPN	PM|NOM	Case=Nom	6	flat:name	6:flat:name	_
8	som	som	SCONJ	KN	_	9	mark	9:mark	_
9	kassör	kassör	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	orphan	7.1:xcomp	SpaceAfter=No
10	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


