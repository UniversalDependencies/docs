---
layout: base
title:  'Statistics of iobj in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `iobj`

This relation is universal.

86 nodes (0%) are attached to their parents as `iobj`.

83 instances of `iobj` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26744186046512.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (64; 74% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (16; 19% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (6; 7% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 iobj	color:blue
1	Once	once	ADV	_	NumType=Mult	2	advmod	_	_
2	again	again	ADV	_	_	9	advmod	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	2	punct	_	_
4	however	however	ADV	_	_	9	advmod	_	SpaceAfter=No
5	,	,	PUNCT	Comma	_	4	punct	_	_
6	Stillman	Stillman	PROPN	SG	Number=Sing	8	amod	_	SpaceAfter=No
7	's	's	PART	GEN	_	6	case	_	_
8	face	face	NOUN	SG-NOM	Number=Sing	9	nsubj	_	_
9	told	tell	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
10	him	he	PRON	PERS-P3SG-ACC	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	iobj	_	_
11	nothing	nothing	PRON	NEG-SG	Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 iobj	color:blue
1	Quinn	Quinn	PROPN	SG-NOM	Number=Sing	2	nsubj	_	_
2	reached	reach	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	into	into	ADP	_	_	5	case	_	_
4	his	he	PRON	P3SG-GEN	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	pocket	pocket	NOUN	SG-NOM	Number=Sing	2	obl	_	_
6	and	and	CCONJ	_	_	7	cc	_	_
7	gave	give	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	2	conj	_	_
8	the	the	DET	DEF	Definite=Def|PronType=Art	9	det	_	_
9	man	man	NOUN	SG-NOM	Number=Sing	7	iobj	_	_
10	a	a	DET	IND-SG	Definite=Ind|PronType=Art	11	det	_	_
11	dollar	dollar	NOUN	SG-NOM	Number=Sing	7	obj	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 iobj	color:blue
1	I	I	PRON	PERS-P1SG-NOM	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	hardly	hardly	ADV	_	_	3	advmod	_	_
3	know	know	VERB	INF	VerbForm=Inf	0	root	_	_
4	myself	I	PRON	RFL-P1SG	Case=Acc|Number=Sing|Person=1|PronType=Prs|Reflex=Yes	3	dislocated	_	SpaceAfter=No
5	.	.	PUNCT	Period	_	3	punct	_	_
6	Quinn	Quinn	PROPN	SG-NOM	Number=Sing	7	nsubj	_	_
7	gave	give	VERB	PAST	Mood=Ind|Tense=Past|VerbForm=Fin	3	conj	_	_
8	Auster	Auster	PROPN	SG-NOM	Number=Sing	7	iobj	_	_
9	an	an	DET	IND-SG	Definite=Ind|PronType=Art	11	det	_	_
10	honest	honest	ADJ	POS	Degree=Pos	11	amod	_	_
11	look	look	NOUN	SG-NOM	Number=Sing	7	obj	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	7	punct	_	_

~~~


