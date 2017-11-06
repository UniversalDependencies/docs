---
layout: base
title:  'Statistics of nummod in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `nummod`

This relation is universal.

277 nodes (1%) are attached to their parents as `nummod`.

200 instances of `nummod` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1985559566787.

The following 12 pairs of parts of speech are connected with `nummod`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (242; 87% instances), <tt><a href="sv_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (12; 4% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (8; 3% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5 000	5 000	NUM	RG|NOM	Case=Nom	2	nummod	_	_
2	dollar	dollar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	_	_
3	per	per	ADP	PP	_	4	case	_	_
4	person	person	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	MID	_	2	punct	_	_
6	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	8	det	_	_
7	högsta	hög	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	8	amod	_	_
8	belopp	belopp	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	appos	_	_
9	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	nsubj:pass	_	_
10	tillåts	tillåta	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	8	acl:relcl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod	color:blue
1	1563	1563	NUM	RG|NOM	Case=Nom	5	obl	_	_
2	hade	ha	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	_	_
3	Venedigs	Venedig	PROPN	PM|GEN	Case=Gen	4	nmod:poss	_	_
4	befolkning	befolkning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nsubj	_	_
5	sjunkit	sjunka	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	0	root	_	_
6	till	till	ADP	PP	_	10	case	_	_
7	runt	runt	ADV	AB	_	8	advmod	_	_
8	168	168	NUM	RG|NOM	Case=Nom	10	nummod	_	_
9	000	000	NUM	RG|NOM	Case=Nom	8	nummod	_	_
10	personer	person	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obl	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod	color:blue
1	I	i	ADP	PP	_	3	case	_	_
2	sin	sin	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	3	nmod:poss	_	_
3	hast	hast	NOUN	NN|-|-|-|-	_	7	obl	_	_
4	att	att	PART	IE	_	5	mark	_	_
5	erövra	erövra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	acl	_	_
6	Kadesh	Kadesh	PROPN	PM|NOM	Case=Nom	5	obj	_	_
7	begick	begå	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	Ramses	Ramses	PROPN	PM|NOM	Case=Nom	7	nsubj	_	_
9	II	2	NUM	RG|NOM	Case=Nom	8	nummod	_	_
10	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing	13	det	_	_
11	stort	stor	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
12	taktiskt	taktisk	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	misstag	misstag	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	obj	_	SpaceAfter=No
14	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


