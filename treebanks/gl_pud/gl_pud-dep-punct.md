---
layout: base
title:  'Statistics of punct in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `punct`

This relation is universal.

2456 nodes (10%) are attached to their parents as `punct`.

1585 instances of `punct` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.54804560260586.

The following 11 pairs of parts of speech are connected with `punct`: <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (1372; 56% instances), <tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (571; 23% instances), <tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (202; 8% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (91; 4% instances), <tt><a href="gl_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (72; 3% instances), <tt><a href="gl_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (56; 2% instances), <tt><a href="gl_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (53; 2% instances), <tt><a href="gl_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (32; 1% instances), <tt><a href="gl_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="gl_pud-pos-DET.html">DET</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (3; 0% instances), <tt><a href="gl_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="gl_pud-pos-PUNCT.html">PUNCT</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 punct	color:blue
1	Ela	el	PRON	PP3FS000	Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	_
2	tamén	tamén	ADV	RG	_	4	advmod	_	_
3	foi	ser	AUX	VSIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	4	aux:pass	_	_
4	acusada	acusado	VERB	VMP00SF	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
5	de	de	ADP	SP	AdpType=Prep	6	case	_	_
6	tentar	tentar	VERB	VMN0000	VerbForm=Inf	4	xcomp	_	_
7	matar	matar	VERB	VMN0000	VerbForm=Inf	6	xcomp	_	_
8	a	a	ADP	SP	AdpType=Prep	11	case	_	_
9	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	súa	seu	DET	DP3FS0	Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes	11	det	_	_
11	filla	fillo	NOUN	NCFS000	Gender=Fem|Number=Sing	7	obj	_	_
12	de	de	ADP	SP	AdpType=Prep	14	case	_	_
13	dous	2	NUM	Z	NumType=Card	14	nummod	_	_
14	anos	ano	NOUN	NCMP000	Gender=Masc|Number=Plur	11	nmod	_	SpaceAfter=No
15	.	.	PUNCT	Fp	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 punct	color:blue
1	5000	5000	NUM	Z	NumType=Card	2	nummod	_	_
2	dólares	dólar	NOUN	NCMP000	Gender=Masc|Number=Plur	0	root	_	_
3	por	por	ADP	SP	AdpType=Prep	4	case	_	_
4	persoa	persoa	NOUN	NCFS000	Gender=Fem|Number=Sing	2	nmod	_	SpaceAfter=No
5	,	,	PUNCT	Fc	_	7	punct	_	_
6	o	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	máximo	máximo	NOUN	NCMS000	Gender=Masc|Number=Sing	2	appos	_	_
8	permitido	permitir	VERB	VMP00SM	Gender=Masc|Number=Sing|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	Fp	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 punct	color:blue
1	O	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	éxito	éxito	NOUN	NCMS000	Gender=Masc|Number=Sing	6	nsubj	_	_
3	musical	musical	ADJ	AQ0CS	_	2	amod	_	_
4	é	ser	AUX	VSIP3S0	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
5	"	"	PUNCT	Fe	_	6	punct	_	SpaceAfter=No
6	Geronimo	geronimo	PROPN	NP00000	_	0	root	_	SpaceAfter=No
7	"	"	PUNCT	Fe	_	6	punct	_	_
8	de	de	ADP	SP	AdpType=Prep	9	case	_	_
9	Sheppard	sheppard	PROPN	NP00000	_	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Fp	_	6	punct	_	_

~~~


