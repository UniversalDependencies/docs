---
layout: base
title:  'Statistics of discourse in UD_Low_Saxon-LSDC'
udver: '2'
---

## Treebank Statistics: UD_Low_Saxon-LSDC: Relations: `discourse`

This relation is universal.

6 nodes (0%) are attached to their parents as `discourse`.

5 instances of `discourse` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="nds_lsdc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nds_lsdc-pos-INTJ.html">INTJ</a></tt> (3; 50% instances), <tt><a href="nds_lsdc-pos-VERB.html">VERB</a></tt>-<tt><a href="nds_lsdc-pos-INTJ.html">INTJ</a></tt> (3; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 discourse	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	Och	och	INTJ	_	_	3	discourse	_	lemma[gml]=och¹
3	heyre	heyre	NOUN	_	Number=Sing	0	root	_	lemma[gml]=hêre⁴|SpaceAfter=No
4	,	,	PUNCT	_	_	5	punct	_	_
5	jå	jå	INTJ	_	_	3	discourse	_	lemma[gml]=jâ¹|SpaceAfter=No
6	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	"	"	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	Now	nu	INTJ	_	_	5	discourse	_	lemma[gml]=nû¹|SpaceAfter=No
3	,	,	PUNCT	_	_	2	punct	_	_
4	dan	dan	ADV	_	_	5	advmod	_	lemma[gml]=dan¹
5	segge	seggen	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	lemma[gml]=seggen
6	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	lemma[gml]=ik
7	ow	jy	PRON	_	Case=Acc,Dat|Person=2|PronType=Prs	5	iobj	_	lemma[gml]=gî²|SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	dat	dat	SCONJ	_	_	13	mark	_	lemma[gml]=dat²
10	wy	wy	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	13	nsubj	_	_
11	der	dår	ADV	_	_	13	advmod	_	lemma[gml]=dâr¹
12	hen	hen	ADV	_	_	13	advmod	_	lemma[gml]=hen
13	gåt	gån	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres	5	ccomp	_	lemma[gml]=gân|SpaceAfter=No
14	,	,	PUNCT	_	_	16	punct	_	_
15	dat	dat	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	16	obj	_	lemma[gml]=dat²
16	segge	seggen	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres	5	parataxis	_	lemma[gml]=seggen
17	ik	ik	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	16	nsubj	_	lemma[gml]=ik|SpaceAfter=No
18	!	!	PUNCT	_	_	5	punct	_	_

~~~


