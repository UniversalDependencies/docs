---
layout: base
title:  'Statistics of csubj:pass in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-csubj.html">csubj</a></tt>.

8 nodes (0%) are attached to their parents as `csubj:pass`.

6 instances of `csubj:pass` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.625.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (8; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 csubj:pass	color:blue
1	Det	den	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
2	kändes	kännas	VERB	PAST-PASS	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	tröstande	trösta	VERB	NDE	Mood=Ind|VerbForm=Part|Voice=Act	2	xcomp	_	_
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
18	tok	tok	NOUN	SG-IND	_	16	obl	_	SpaceAfter=No
19	.	.	PUNCT	Period	_	2	punct	_	_

~~~


