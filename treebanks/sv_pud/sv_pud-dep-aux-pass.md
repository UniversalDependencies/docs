---
layout: base
title:  'Statistics of aux:pass in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="sv_pud-dep-aux.html">aux</a></tt>.

5 nodes (0%) are attached to their parents as `aux:pass`.

5 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4.

The following 3 pairs of parts of speech are connected with `aux:pass`: <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (2; 40% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (2; 40% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 aux:pass	color:blue
1	Tvångsdop	tvångsdop	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	2	nsubj	_	_
2	stod	stå	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	i	i	ADP	PP	_	4	case	_	_
4	strid	strid	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obl	_	_
5	med	med	ADP	PP	_	9	case	_	_
6	den	den	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing	8	det	_	_
7	katolska	katolsk	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	8	amod	_	_
8	kyrkans	kyrka	NOUN	NN|UTR|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Com|Number=Sing	9	nmod:poss	_	_
9	lag	lag	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	nmod	_	SpaceAfter=No
10	,	,	PUNCT	MID	_	23	punct	_	_
11	och	och	CCONJ	KN	_	23	cc	_	_
12	teoretiskt	teoretisk	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	13	advmod	_	_
13	sett	se	ADJ	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	23	advcl	_	_
14	kunde	kunna	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	23	aux	_	_
15	alla	alla	PRON	PN|UTR/NEU|PLU|IND|SUB/OBJ	Definite=Ind|Number=Plur	23	nsubj	_	_
16	som	som	PRON	HP|-|-|-	PronType=Int,Rel	19	nsubj:pass	_	_
17	hade	ha	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	19	aux	_	_
18	blivit	bliva	AUX	VB|SUP|AKT	VerbForm=Sup|Voice=Act	19	aux:pass	_	_
19	tvingade	tvingad	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	15	acl:relcl	_	_
20	till	till	ADP	PP	_	21	case	_	_
21	dop	dop	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	19	obl	_	_
22	lagligen	lagligen	ADV	AB	_	23	advmod	_	_
23	återgå	återgå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	2	conj	_	_
24	till	till	ADP	PP	_	25	case	_	_
25	judendom	judendom	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	23	obl	_	SpaceAfter=No
26	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Människor	människa	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	nsubj	_	_
2	blev	bli	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	aux:pass	_	_
3	dödade	dödad	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
4	där	där	ADV	AB	_	3	advmod	_	SpaceAfter=No
5	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 aux:pass	color:blue
1	Tidigare	tidigt	ADV	AB|KOM	Degree=Cmp	5	advmod	_	_
2	hade	ha	VERB	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	aux:pass	_	_
3	jetplanen	jetplan	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	5	nsubj	_	_
4	bara	bara	ADV	AB	_	5	advmod	_	_
5	setts	se	VERB	VB|SUP|SFO	VerbForm=Sup|Voice=Pass	0	root	_	_
6	av	av	ADP	PP	_	7	case	_	_
7	bloggare	bloggare	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	obl:agent	_	SpaceAfter=No
8	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


