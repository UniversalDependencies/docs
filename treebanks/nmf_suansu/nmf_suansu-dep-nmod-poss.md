---
layout: base
title:  'Statistics of nmod:poss in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="nmf_suansu-dep-nmod.html">nmod</a></tt>.

95 nodes (3%) are attached to their parents as `nmod:poss`.

94 instances of `nmod:poss` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17894736842105.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt> (73; 77% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (11; 12% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt> (4; 4% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Peter	Peter	PROPN	_	Number=Sing	4	nsubj	4:nsubj	_
2	bava	ba	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod:poss	3:nmod:poss	_
3	chabi	chabi	NOUN	_	Number=Sing	4	obj	4:obj	_
4	kapiuganan	kapiu	VERB	SIM.CVB	Aspect=Prog|VerbForm=Conv	0	root	0:root	_
5	lale	la	AUX	_	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	4:aux	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:poss	color:blue
1	Peter	Peter	PROPN	_	Number=Sing	6	nsubj	6:nsubj	_
2	nenan	nenan	ADV	CONTR	_	1	advmod	1:advmod	_
3	ba	ba	PRON	_	Number=Sing|Person=3|PronType=Prs	4	nmod:poss	4:nmod:poss	_
4	theva	the	NOUN	_	Case=Gen|Number=Sing	5	nmod:poss	5:nmod:poss	_
5	runge	runge	NOUN	NMLZ	Aspect=Imp|Number=Sing|VerbForm=Vnoun	6	obj	6:obj	_
6	chule	chu	VERB	_	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Peterva	Peter	PROPN	_	Case=Gen|Number=Sing	2	nmod:poss	2:nmod:poss	_
2	bya	bya	NOUN	_	Number=Sing	4	nsubj	4:nsubj	_
3	zukathai	zukathai	NUM	_	NumForm=Word|NumType=Card	2	nummod	2:nummod	_
4	chilate	chi	VERB	be-COMPL	Aspect=Perf|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	_	_	4	punct	4:punct	SpacesAfter=\n

~~~


