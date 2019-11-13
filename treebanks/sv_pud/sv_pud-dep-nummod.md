---
layout: base
title:  'Statistics of nummod in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `nummod`

This relation is universal.

275 nodes (1%) are attached to their parents as `nummod`.

198 instances of `nummod` (72%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.2.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (248; 90% instances), <tt><a href="sv_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (12; 4% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (11; 4% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	5 000	5 000	NUM	RG|NOM	Case=Nom	2	nummod	2:nummod	_
2	dollar	dollar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	0:root	_
3	per	per	ADP	PP	_	4	case	4:case	_
4	person	person	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	2:nmod:per	SpaceAfter=No
5	,	,	PUNCT	MID	_	2	punct	2:punct	_
6	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	8	det	8:det	_
7	högsta	hög	ADJ	JJ|SUV|UTR/NEU|SIN/PLU|DEF|NOM	Case=Nom|Definite=Def|Degree=Sup	8	amod	8:amod	_
8	belopp	belopp	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	appos	2:appos|10:nsubj:pass	_
9	som	som	PRON	HP|-|-|-	PronType=Int,Rel	10	nsubj:pass	8:ref	_
10	tillåts	tillåta	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	8	acl:relcl	8:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod	color:blue
1	1563	1563	NUM	RG|NOM	Case=Nom	5	obl	5:obl	_
2	hade	ha	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
3	Venedigs	Venedig	PROPN	PM|GEN	Case=Gen	4	nmod:poss	4:nmod:poss	_
4	befolkning	befolkning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	nsubj	5:nsubj	_
5	sjunkit	sjunka	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	0	root	0:root	_
6	till	till	ADP	PP	_	10	case	10:case	_
7	runt	runt	ADV	AB	_	8	advmod	8:advmod	_
8	168	168	NUM	RG|NOM	Case=Nom	10	nummod	10:nummod	_
9	000	000	NUM	RG|NOM	Case=Nom	8	nummod	8:nummod	_
10	personer	person	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obl	5:obl:till	SpaceAfter=No
11	.	.	PUNCT	MAD	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nummod	color:blue
1	I	i	ADP	PP	_	3	case	3:case	_
2	sin	sin	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	3	nmod:poss	3:nmod:poss	_
3	hast	hast	NOUN	NN|-|-|-|-	_	7	obl	7:obl:i	_
4	att	att	PART	IE	_	5	mark	5:mark	_
5	erövra	erövra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	acl	3:acl:att	_
6	Kadesh	Kadesh	PROPN	PM|NOM	Case=Nom	5	obj	5:obj	_
7	begick	begå	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	Ramses	Ramses	PROPN	PM|NOM	Case=Nom	7	nsubj	7:nsubj	_
9	II	2	NUM	RG|NOM	Case=Nom	8	nummod	8:nummod	_
10	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing	13	det	13:det	_
11	stort	stor	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	13	amod	13:amod	_
12	taktiskt	taktisk	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	13	amod	13:amod	_
13	misstag	misstag	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	obj	7:obj	SpaceAfter=No
14	.	.	PUNCT	MAD	_	7	punct	7:punct	_

~~~


