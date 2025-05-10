---
layout: base
title:  'Statistics of nummod in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `nummod`

This relation is universal.

37 nodes (1%) are attached to their parents as `nummod`.

34 instances of `nummod` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10810810810811.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-NUM.html">NUM</a></tt> (36; 97% instances), <tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nmf_suansu-pos-NUM.html">NUM</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nummod	color:blue
1	Peter	Peter	PROPN	_	Number=Sing	4	nsubj	4:nsubj	_
2	rhui	rhui	NOUN	_	Number=Sing	4	obj	4:obj	_
3	ska	ska	NUM	_	NumForm=Word|NumType=Card	2	nummod	2:nummod	_
4	thaile	thai	VERB	_	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nummod	color:blue
1	Tye	tye	DET	_	Deixis=Remt|PronType=Dem	2	det	2:det	_
2	miszu	miszu	NOUN	_	Number=Sing	12	nsubj	12:nsubj|20:nsubj	_
3	nahnva	nahn	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	4	nmod:poss	4:nmod:poss	_
4	clientvada	client	NOUN	_	Case=GenAbl|Number=Sing	6	obl	6:obl	OrigLang=en
5	Insurance	insurance	NOUN	_	Number=Sing	6	obj	6:obj	OrigLang=en
6	luwe	luw	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	2	acl	2:acl	_
7	re	re	PART	REP	_	6	mark	6:mark	_
8	di	di	SCONJ	NMLZ	_	6	mark	6:mark	_
9	State	State	PROPN	_	Number=Sing	12	obl	12:obl	OrigLang=en
10	Highway	Highway	PROPN	_	Number=Sing	9	nmod	9:nmod	OrigLang=en
11	19nahn	19	NUM	_	Case=Loc|NumForm=Digit|NumType=Card	9	nummod	9:nummod	_
12	thathai	thathai	VERB	_	VerbForm=Inf	0	root	0:root	_
13	ga	ga	AUX	_	Evident=Nfh	12	aux	12:aux	SpaceAfter=No
14	,	,	PUNCT	_	_	20	punct	20:punct	_
15	ranan	ranan	CCONJ	_	_	20	cc	20:cc	_
16	control	control	VERB	_	VerbForm=Inf	17	xcomp	17:obj	OrigLang=en
17	thengammaganan	thengam	VERB	SIM.CVB	Aspect=Prog|Polarity=Neg|VerbForm=Conv	20	advcl	20:advcl	_
18	miszu	miszu	NOUN	_	Number=Sing	20	obl	20:obl	_
19	phangenahn	phange	NUM	_	Case=Loc|NumForm=Word|NumType=Card	18	nummod	18:nummod	_
20	thunge	thunge	VERB	_	_	12	conj	12:conj	_
21	ga	ga	AUX	_	Evident=Nfh	20	aux	20:aux	SpaceAfter=No
22	.	.	PUNCT	_	_	12	punct	12:punct	_

~~~


