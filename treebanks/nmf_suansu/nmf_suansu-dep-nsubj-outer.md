---
layout: base
title:  'Statistics of nsubj:outer in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="nmf_suansu-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="nmf_suansu-dep-nsubj-pass.html">nsubj:pass</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:outer`.

2 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.5.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="nmf_suansu-pos-INTJ.html">INTJ</a></tt>-<tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt> (1; 50% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 nsubj:outer	color:blue
1	A	a	PRON	_	Number=Sing|Person=1|PronType=Prs	8	nsubj:outer	8:nsubj:outer	_
2	li	li	ADV	ASC	_	1	advmod:emph	1:advmod:emph	_
3	Russian	Russian	NOUN	_	Number=Sing	8	nsubj	8:nsubj	_
4	hainahn	hai	PRON	_	Case=Loc|Number=Sing|Person=1|PronType=Prs	5	obl	5:obl	_
5	mokrwe	mokrwe	VERB	_	VerbForm=Inf	8	advcl	8:advcl	_
6	di	di	SCONJ	NMLZ	_	5	case	5:case	_
7	,	,	PUNCT	_	_	5	punct	5:punct	_
8	ay	ay	INTJ	_	ExtPos=VERB|Polarity=Pos	0	root	0:root	_
9	rema	re	PART	REP	Polarity=Neg	8	fixed	8:fixed	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	8:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 7 nsubj:outer	color:blue
1	Anan	a	PRON	_	Case=Erg|Number=Sing|Person=1|PronType=Prs	2	nmod	2:nmod	_
2	runge	runge	NOUN	_	Aspect=Imp|Number=Sing|VerbForm=Vnoun	0	root	0:root	_
3	point	point	NOUN	_	Number=Sing	2	nmod	2:nmod	_
4	dinan	dinan	PART	_	_	2	discourse	2:discourse	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	7:punct	_
6	tye	tye	DET	_	Deixis=Remt|PronType=Dem	7	det	7:det	_
7	miszu	miszu	NOUN	_	Number=Sing	17	nsubj:outer	11:nsubj|17:nsubj:outer	_
8	nahnva	nahn	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	9	nmod:poss	9:nmod:poss	_
9	clientnahn	client	NOUN	_	Case=Loc|Number=Sing	11	obl	11:obl	OrigLang=en
10	insurance	insurance	NOUN	_	Number=Sing	11	obj	11:obj	OrigLang=en
11	la	la	VERB	_	VerbForm=Inf	7	acl:relcl	7:acl:relcl	SpaceAfter=No
12	,	,	PUNCT	_	_	13	punct	13:punct	_
13	ba	ba	PRON	_	Number=Sing|Person=3|PronType=Prs	7	appos	7:appos	_
14	li	li	ADV	ASC	_	13	advmod:emph	13:advmod:emph	_
15	hai	hai	DET	_	Deixis=Prox|PronType=Dem	16	det	16:det	_
16	thathokphadi	thathok	NOUN	_	Case=Top|Number=Plur	17	nsubj	17:nsubj	_
17	thai	tha	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	2	acl	2:acl	_
18	re	re	ADV	_	_	17	advmod	17:advmod	_
19	dime	di	SCONJ	_	Polarity=Neg	17	mark	17:mark	_
20	rema	re	ADV	_	Polarity=Neg	17	advmod	17:advmod	SpaceAfter=No
21	,	,	PUNCT	_	_	22	punct	22:punct	_
22	reha	reha	PART	REP	_	17	mark	17:mark	SpacesAfter=\n

~~~


