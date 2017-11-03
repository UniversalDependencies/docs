---
layout: base
title:  'Statistics of punct in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `punct`

This relation is universal.

10368 nodes (11%) are attached to their parents as `punct`.

8285 instances of `punct` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.28645833333333.

The following 12 pairs of parts of speech are connected with `punct`: <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (5996; 58% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (2894; 28% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (929; 9% instances), <tt><a href="sv-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (266; 3% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (101; 1% instances), <tt><a href="sv-pos-NUM.html">NUM</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (82; 1% instances), <tt><a href="sv-pos-ADV.html">ADV</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (63; 1% instances), <tt><a href="sv-pos-ADP.html">ADP</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (15; 0% instances), <tt><a href="sv-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (10; 0% instances), <tt><a href="sv-pos-DET.html">DET</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances), <tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), <tt><a href="sv-pos-AUX.html">AUX</a></tt>-<tt><a href="sv-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 punct	color:blue
1	'	'	PUNCT	PAD	_	4	punct	_	SpaceAfter=No
2	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
3	skall	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	lyda	lyda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
5	din	du	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	fader	far	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	MAD	_	4	punct	_	SpaceAfter=No
8	'	'	PUNCT	PAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 punct	color:blue
1	Bördan	börda	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	dislocated	_	_
2	att	att	PART	IE	_	3	mark	_	_
3	fostra	fostra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	1	acl	_	_
4	barn	barn	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	3	obj	_	_
5	-	-	PUNCT	MID	_	1	punct	_	_
6	uttrycket	uttryck	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	_	_
7	låter	låta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	negativt	negativ	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	7	xcomp	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 10 punct	color:blue
1	Publicerad	publicera	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	i	i	ADP	PP	_	3	case	_	_
3	Children	Children	PROPN	PM|NOM	Case=Nom	1	obl	_	_
4	1958	1958	NUM	RG|NOM	Case=Nom|NumType=Card	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	MID	_	4	punct	_	_
6	Vol.	Vol.	NOUN	NN|AN	Abbr=Yes	7	nmod	_	_
7	5	5	NUM	RG|NOM	Case=Nom|NumType=Card	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	MID	_	7	punct	_	_
9	179-184	179-184	NUM	RG|NOM	Case=Nom|NumType=Card	7	nummod	_	_
10	.	.	PUNCT	MAD	_	1	punct	_	_

~~~


