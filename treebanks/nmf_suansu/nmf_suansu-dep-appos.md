---
layout: base
title:  'Statistics of appos in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `appos`

This relation is universal.

5 nodes (0%) are attached to their parents as `appos`.

5 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.4.

The following 5 pairs of parts of speech are connected with `appos`: <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt> (1; 20% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (1; 20% instances), <tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt> (1; 20% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 appos	color:blue
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


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Haithaimai	Haithaimai	NOUN	_	Number=Sing	5	nmod:poss	5:nmod:poss	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	3:punct	_
3	Jesu	Jesu	PROPN	_	Number=Sing	1	appos	1:appos	_
4	Christa	Christa	PROPN	_	Number=Sing	3	flat:name	3:flat:name	_
5	mungda	mung	NOUN	_	Case=Abl|Number=Sing	6	obl	6:obl	_
6	khurumha	khurum	VERB	_	Aspect=Imp|Mood=Ind|Tense=Pqp|VerbForm=Fin	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	6:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 appos	color:blue
1	Ba	ba	PRON	_	Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
2	Parisda	Paris	PROPN	_	Case=Abl|Number=Sing	3	obl	3:obl	_
3	mathaikaie	mathaika	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	6:punct	_
5	Franceva	France	PROPN	_	Case=Gen|Number=Sing	6	nmod:poss	6:nmod:poss	_
6	capitalda	capital	NOUN	_	Case=Abl|Number=Sing	2	appos	2:appos	OrigLang=en|SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\s\n

~~~


