---
layout: base
title:  'Statistics of csubj:pass in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="sv-dep-csubj.html">csubj</a></tt>.

34 nodes (0%) are attached to their parents as `csubj:pass`.

32 instances of `csubj:pass` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.76470588235294.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-VERB.html">VERB</a></tt> (24; 71% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (8; 24% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj:pass	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
2	blir	bli	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux:pass	_	_
3	förbjudet	förbjuden	VERB	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	att	att	PART	IE	_	5	mark	_	_
5	göra	göra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	csubj:pass	_	_
6	vänstersväng	vänstersväng	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obj	_	_
7	in	in	ADV	AB	_	5	advmod	_	_
8	mot	mot	ADP	PP	_	9	case	_	_
9	Stortorpsvägen	Stortorpsvägen	PROPN	PM|NOM	Case=Nom	7	obl	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:pass	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
2	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	sagts	säga	VERB	VB|SUP|SFO	VerbForm=Sup|Voice=Pass	0	root	_	_
4	att	att	SCONJ	SN	_	7	mark	_	_
5	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	nsubj	_	_
6	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
7	lätt	lätt	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	csubj:pass	_	_
8	i	i	ADP	PP	_	9	case	_	_
9	vallokalen	vallokal	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl	_	_
10	i	i	ADP	PP	_	7	advmod	_	_
11	år	år	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	10	fixed	_	SpaceAfter=No
12	.	.	PUNCT	MAD	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 23 csubj:pass	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	expl	_	_
2	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
3	inte	inte	ADV	AB	Polarity=Neg	5	advmod	_	_
4	nog	nog	ADV	AB	_	5	advmod	_	_
5	upprepas	upprepa	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	0	root	_	SpaceAfter=No
6	,	,	PUNCT	MID	_	5	punct	_	_
7	att	att	SCONJ	SN	_	23	mark	_	_
8	hem-	hem	NOUN	NN|NEU|-|-|SMS	Gender=Neut	23	nsubj	_	_
9	och	och	CCONJ	KN	_	10	cc	_	_
10	familjeliv	familjeliv	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	8	conj	_	SpaceAfter=No
11	,	,	PUNCT	MID	_	12	punct	_	_
12	vården	vård	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	8	conj	_	_
13	av	av	ADP	PP	_	17	case	_	_
14	de	en	DET	DT|UTR/NEU|PLU|DEF	Definite=Def|Number=Plur|PronType=Art	17	det	_	_
15	intimare	intim	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	17	amod	_	_
16	mänskliga	mänsklig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	17	amod	_	_
17	relationerna	relation	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	12	nmod	_	_
18	överhuvud	överhuvud	ADV	AB	_	17	nmod	_	SpaceAfter=No
19	,	,	PUNCT	MID	_	23	punct	_	_
20	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	23	cop	_	_
21	fundamentalt	fundamental	ADV	AB|POS	Degree=Pos	22	advmod	_	_
22	mänskliga	mänsklig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	23	amod	_	_
23	angelägenheter	angelägenhet	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	csubj:pass	_	_
24	och	och	CCONJ	KN	_	23	cc	_	_
25	inte	inte	ADV	AB	Polarity=Neg	27	advmod	_	_
26	fundamentalt	fundamental	ADV	AB|POS	Degree=Pos	27	advmod	_	_
27	kvinnliga	kvinnlig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	23	amod	_	SpaceAfter=No
28	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


