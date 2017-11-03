---
layout: base
title:  'Statistics of orphan in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `orphan`

This relation is universal.

55 nodes (0%) are attached to their parents as `orphan`.

55 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.27272727272727.

The following 14 pairs of parts of speech are connected with `orphan`: <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (16; 29% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (10; 18% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-VERB.html">VERB</a></tt> (6; 11% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (6; 11% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (5; 9% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-NUM.html">NUM</a></tt> (3; 5% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="sv-pos-NUM.html">NUM</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 orphan	color:blue
1	Sjuktalet	sjuktal	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	0	root	_	Enhanced=root
2	upp	upp	ADV	AB	_	1	advmod	_	_
3	26	26	NUM	RG|NOM	Case=Nom|NumType=Card	4	nummod	_	_
4	proc	proc	NOUN	NN|AN	Abbr=Yes	1	orphan	_	Enhanced=obl
5	sen	sen	ADP	PP	_	6	case	_	_
6	1966	1966	NUM	RG|NOM	Case=Nom|NumType=Card	1	orphan	_	Enhanced=obl

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 orphan	color:blue
1	Se	se	VERB	VB|IMP|AKT	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	Arv	arv	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	obj	_	_
3	sida	sida	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	nmod	_	_
4	5	5	NUM	RG|NOM	Case=Nom|NumType=Card	1	obl	_	SpaceAfter=No
5	,	,	PUNCT	MID	_	6	punct	_	_
6	Förmyndare	förmyndare	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	1	conj	_	Enhanced=obj
7	sida	sida	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	nmod	_	_
8	12	12	NUM	RG|NOM	Case=Nom|NumType=Card	6	orphan	_	Enhanced=obl
9	och	och	CCONJ	KN	_	10	cc	_	_
10	Testamente	testamente	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	conj	_	Enhanced=obj
11	sida	sida	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	12	nmod	_	_
12	22	22	NUM	RG|NOM	Case=Nom|NumType=Card	10	orphan	_	Enhanced=obl|SpaceAfter=No
13	.	.	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 11 orphan	color:blue
1	Reflexband	reflexband	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	4	nsubj	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	4	det	_	_
4	fördel	fördel	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	SpaceAfter=No
5	,	,	PUNCT	MID	_	8	punct	_	_
6	likaså	likaså	ADV	AB	_	8	advmod	_	_
7	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	8	det	_	_
8	visselpipa	visselpipa	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	conj	_	Enhanced=nsubj
9	för	för	ADP	PP	_	11	mark	_	_
10	att	att	PART	IE	_	11	mark	_	_
11	kalla	kalla	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	8	orphan	_	Enhanced=advcl
12	på	på	ADP	PP	_	13	case	_	_
13	hjälp	hjälp	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


