---
layout: base
title:  'Statistics of nsubj:pass in UD_Galician-PUD'
udver: '2'
---

## Treebank Statistics: UD_Galician-PUD: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="gl_pud-dep-nsubj.html">nsubj</a></tt>.

38 nodes (0%) are attached to their parents as `nsubj:pass`.

37 instances of `nsubj:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.47368421052632.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (20; 53% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-PRON.html">PRON</a></tt> (9; 24% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-PROPN.html">PROPN</a></tt> (7; 18% instances), <tt><a href="gl_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gl_pud-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="gl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="gl_pud-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	O	o	DET	DA0MS0	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	himno	himno	NOUN	NCMS000	Gender=Masc|Number=Sing	5	nsubj:pass	_	_
3	foi	ser	AUX	VSIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	aux:pass	_	_
4	ben	ben	ADV	RG	_	5	advmod	_	_
5	recibido	recibir	VERB	VMP00SM	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
6	e	e	CCONJ	CC	_	9	cc	_	_
7	a	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	audiencia	audiencia	NOUN	NCFS000	Gender=Fem|Number=Sing	9	nsubj	_	_
9	esixiu	esixir	VERB	VMIS3S0	Mood=Ind|Number=Sing|Person=3|Tense=Past	5	conj	_	_
10	un	un	DET	DI0MS0	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	bis	bis	NOUN	NCMS000	Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No
12	.	.	PUNCT	Fp	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nsubj:pass	color:blue
1	A	o	DET	DA0FS0	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Universíada	universíada	PROPN	NP00000	_	8	nsubj:pass	_	_
3	de	de	ADP	NP00000	_	4	case	_	_
4	Inverno	inverno	PROPN	NP00000	_	2	nmod	_	_
5	de	de	ADP	SP	AdpType=Prep	6	case	_	_
6	2019	2019	NUM	Z	NumType=Card	2	nmod	_	_
7	será	ser	AUX	VSIF3S0	Mood=Ind|Number=Sing|Person=3|Tense=Fut	8	aux:pass	_	_
8	organizada	organizar	VERB	VMP00SF	Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	_
9	por	por	ADP	SP	AdpType=Prep	10	case	_	_
10	Krasnoyarsk	krasnoyarsk	PROPN	NP00000	_	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	Fp	_	8	punct	_	_

~~~


