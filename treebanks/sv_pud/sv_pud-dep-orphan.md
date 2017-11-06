---
layout: base
title:  'Statistics of orphan in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `orphan`

This relation is universal.

12 nodes (0%) are attached to their parents as `orphan`.

7 instances of `orphan` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 9 pairs of parts of speech are connected with `orphan`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (2; 17% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (2; 17% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 8% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 8% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-SCONJ.html">SCONJ</a></tt> (1; 8% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (1; 8% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 orphan	color:blue
1	1912	1912	NUM	RG|NOM	Case=Nom	2	obl	_	_
2	grundades	grunda	VERB	VB|PRT|SFO	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	5	det	_	_
4	första	första	ADJ	RO|NOM	Case=Nom	5	amod	_	_
5	filmbolaget	filmbolag	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	2	nsubj:pass	_	_
6	(	(	PUNCT	PAD	_	8	punct	_	SpaceAfter=No
7	Athina	Athina	PROPN	PM|NOM	Case=Nom	8	nmod	_	_
8	Film	film	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	appos	_	SpaceAfter=No
9	)	)	PUNCT	PAD	_	8	punct	_	_
10	och	och	CCONJ	KN	_	13	cc	_	_
11	1916	1916	NUM	RG|NOM	Case=Nom	13	orphan	_	_
12	Asty	Asty	PROPN	PM|NOM	Case=Nom	13	nmod	_	_
13	Film	film	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	conj	_	SpaceAfter=No
14	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 orphan	color:blue
1	Den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	3	det	_	_
2	norra	norr	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	3	amod	_	_
3	delen	del	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nsubj	_	_
4	av	av	ADP	PP	_	5	case	_	_
5	Kaukasus	Kaukasus	PROPN	PM|NOM	Case=Nom	3	nmod	_	_
6	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	känd	känd	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
8	som	som	CCONJ	KN	_	9	mark	_	_
9	Nordkaukasus	Nordkaukasus	PROPN	PM|NOM	Case=Nom	7	advcl	_	_
10	och	och	CCONJ	KN	_	13	cc	_	_
11	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	13	det	_	_
12	södra	söder	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	13	amod	_	_
13	delen	del	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	conj	_	_
14	som	som	CCONJ	KN	_	15	mark	_	_
15	Transkaukasus	Transkaukasus	PROPN	PM|NOM	Case=Nom	13	orphan	_	SpaceAfter=No
16	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 orphan	color:blue
1	Durán	durán	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	agerar	agera	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	som	som	CCONJ	KN	_	4	mark	_	_
4	talesman	talesman	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	xcomp	_	_
5	och	och	CCONJ	KN	_	6	cc	_	_
6	Ángel	Ángel	PROPN	PM|NOM	Case=Nom	2	conj	_	_
7	Pintado	Pintado	PROPN	PM|NOM	Case=Nom	6	flat:name	_	_
8	som	som	CCONJ	KN	_	9	mark	_	_
9	kassör	kassör	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	orphan	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


