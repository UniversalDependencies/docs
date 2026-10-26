---
layout: base
title:  'Statistics of nmod:desc in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `nmod:desc`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gentle-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gentle-dep-nmod-unmarked.html">nmod:unmarked</a></tt>.

17 nodes (0%) are attached to their parents as `nmod:desc`.

14 instances of `nmod:desc` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.23529411764706.

The following 2 pairs of parts of speech are connected with `nmod:desc`: <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (14; 82% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (3; 18% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:desc	color:blue
1	StartEngine	StartEngine	PROPN	NNP	Number=Sing	2	compound	2:compound	Discourse=attribution-positive:159->13:8:sem-atsrc-1291-1294,1298-1299,1305-1310,1315-1319-gold|Entity=(6-organization-giv:inact-sssss-cf1-1,2-coref|MSeg=Start-Engine
2	Crowdfunding	Crowdfunding	PROPN	NNP	Number=Sing	0	root	0:root	MSeg=Crowd-fund-ing|SpaceAfter=No
3	,	,	PUNCT	,	_	4	punct	4:punct	_
4	Inc.	Inc.	PROPN	NNP	Abbr=Yes|Number=Sing	2	nmod:desc	2:nmod:desc	Entity=6)

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:desc	color:blue
1	Then	then	ADV	RB	PronType=Dem	4	advmod	4:advmod	Discourse=explanation-evidence:59->61:0:_|PDTB=Explicit:Contingency.Cause.Result:then:460:448-459:461-478
2	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	4:nsubj	Entity=(23-person-giv:inact-nnnnn-cf3-1-ana)
3	can	can	AUX	MD	VerbForm=Fin	4	aux	4:aux	_
4	switch	switch	VERB	VB	VerbForm=Inf	0	root	0:root	_
5	colors	color	NOUN	NNS	Number=Plur	6	nmod:desc	6:nmod:desc	MSeg=color-s
6	c2	c2	NOUN	NN	Number=Sing	4	obj	4:obj	Entity=(52-abstract-giv:inact-nnnnn-cf4-1-coref)
7	and	and	CCONJ	CC	_	8	cc	8:cc	_
8	c4	c4	NOUN	NN	Number=Sing	6	conj	4:obj|6:conj:and	Entity=(54-abstract-giv:inact-nnnnn-cf5-1-coref)
9	in	in	ADP	IN	_	11	case	11:case	_
10	the	the	DET	DT	Definite=Def|PronType=Art	11	det	11:det	Entity=(74-abstract-new-nnnnn-cf6-2-sgl
11	component	component	NOUN	NN	Number=Sing	4	obl	4:obl:in|16:nsubj:pass	_
12	of	of	ADP	IN	_	13	case	13:case	_
13	H2,4	H2,4	NOUN	NN	Number=Sing	11	nmod	11:nmod:of	Entity=(73-abstract-giv:act-nnnnn-cf1*-1-coref)
14	that	that	PRON	WDT	PronType=Rel	16	nsubj:pass	11:ref	Discourse=elaboration-attribute:60->59:0:syn-mdf-470-_+syn-relcl-473,475-_
15	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	aux:pass	16:aux:pass	_
16	connected	connect	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	11	acl:relcl	11:acl:relcl	MSeg=connect-ed
17	to	to	ADP	IN	_	18	case	18:case	_
18	y2	y2	NOUN	NN	Number=Sing	16	obl	16:obl:to	Entity=(46-abstract-giv:act-nnnnn-cf2-1-coref)74)|SpaceAfter=No
19	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


