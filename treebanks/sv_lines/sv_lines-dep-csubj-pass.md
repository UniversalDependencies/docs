---
layout: base
title:  'Statistics of csubj:pass in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-csubj.html">csubj</a></tt>.

9 nodes (0%) are attached to their parents as `csubj:pass`.

7 instances of `csubj:pass` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.22222222222222.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (8; 89% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:pass	color:blue
1	Det	den	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
2	kändes	kännas	VERB	PAST-PASS	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	tröstande	tröstande	ADJ	NDE	Case=Nom|Degree=Pos|Tense=Pres|VerbForm=Part	2	xcomp	_	_
4	att	att	PART	_	_	5	mark	_	_
5	veta	veta	VERB	INF-ACT	VerbForm=Inf|Voice=Act	2	csubj:pass	_	_
6	att	att	SCONJ	_	_	8	mark	_	_
7	han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	8	nsubj	_	_
8	hade	ha	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp	_	_
9	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	10	det	_	_
10	alternativplan	alternativplan	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obj	_	_
11	om	om	SCONJ	_	_	16	mark	_	_
12	saker	sak	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	16	nsubj	_	_
13	och	och	CCONJ	_	_	14	cc	_	_
14	ting	ting	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	12	conj	_	_
15	skulle	skola	AUX	PAST-AUX	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	16	aux	_	_
16	gå	gå	VERB	INF-ACT	VerbForm=Inf|Voice=Act	8	advcl	_	_
17	på	på	ADP	_	_	18	case	_	_
18	tok	tok	NOUN	SG-IND	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	16	obl	_	SpaceAfter=No
19	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj:pass	color:blue
1	Detta	denna	DET	DEM-SG-IND	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	_
2	tillbakavisande	tillbakavisande	NOUN	NDE	Case=Nom|Gender=Neut|Number=Sing	4	csubj:pass	_	_
3	kan	kunna	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	tolkas	tolka	VERB	INF-PASS	VerbForm=Inf|Voice=Pass	0	root	_	_
5	som	som	ADP	_	_	8	case	_	_
6	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	8	det	_	_
7	indirekt	indirekt	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	8	amod	_	_
8	uppmuntran	uppmuntran	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obl	_	_
9	till	till	ADP	_	_	10	case	_	_
10	straffrihet	straffrihet	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	nmod	_	_
11	och	och	CCONJ	_	_	12	cc	_	_
12	immunitet	immunitet	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	10	conj	_	_
13	för	för	ADP	_	_	19	case	_	_
14	gårdagens	gårdag	NOUN	SG-DEF-GEN	Case=Gen|Definite=Def|Gender=Com|Number=Sing	19	nmod:poss	_	SpaceAfter=No
15	,	,	PUNCT	Comma	_	16	punct	_	_
16	dagens	dag	NOUN	SG-DEF-GEN	Case=Gen|Definite=Def|Gender=Com|Number=Sing	14	conj	_	_
17	och	och	CCONJ	_	_	18	cc	_	_
18	morgondagens	morgondag	NOUN	SG-DEF-GEN	Case=Gen|Definite=Def|Gender=Com|Number=Sing	14	conj	_	_
19	terrorister	terrorist	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	12	nmod	_	SpaceAfter=No
20	.	.	PUNCT	Period	_	4	punct	_	_

~~~


