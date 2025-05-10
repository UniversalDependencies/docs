---
layout: base
title:  'Statistics of ccomp in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `ccomp`

This relation is universal.

23 nodes (1%) are attached to their parents as `ccomp`.

17 instances of `ccomp` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.52173913043478.

The following 6 pairs of parts of speech are connected with `ccomp`: <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (13; 57% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-INTJ.html">INTJ</a></tt> (5; 22% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 ccomp	color:blue
1	Peternan	Peter	PROPN	_	Case=Erg|Number=Sing	11	nsubj	11:nsubj	_
2	Mariadi	Maria	PROPN	_	Case=Top|Number=Sing	11	obj	11:obj	_
3	“	“	PUNCT	_	_	7	punct	7:punct	SpaceAfter=No
4	Athoo	athoo	ADV	_	_	7	advmod	7:advmod	_
5	trumlehn	trumlehn	NOUN	_	Number=Sing	7	obl	7:obl	_
6	call	call	VERB	_	VerbForm=Inf	7	xcomp	7:xcomp	OrigLang=en
7	the	the	VERB	_	VerbForm=Inf	11	ccomp	11:ccomp	_
8	ra	ra	AUX	_	Mood=Imp	7	aux	7:aux	SpaceAfter=No
9	”	”	PUNCT	_	_	7	punct	7:punct	_
10	re	re	PART	REP	_	7	mark	7:mark	_
11	runge	rung	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 ccomp	color:blue
1	Ay	ay	INTJ	_	Polarity=Pos	2	ccomp	2:ccomp	_
2	ra	ra	VERB	_	VerbForm=Inf	6	advcl	6:advcl	_
3	gama	ga	AUX	_	Mood=Jus|Polarity=Neg	2	aux	2:aux	_
4	re	re	ADV	_	_	2	advmod	2:advmod	SpaceAfter=No
5	,	,	PUNCT	_	_	2	punct	2:punct	_
6	phanungle	phanung	VERB	_	Aspect=Imp|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	re	re	ADV	_	_	6	advmod	6:advmod	_
8	nahn	nahn	PRON	_	Number=Sing|Person=2|PronType=Prs	10	nsubj	10:nsubj	_
9	athan	athan	ADV	_	_	10	advmod	10:advmod	_
10	runge	rung	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	6	ccomp	6:ccomp	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	6:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 9 ccomp	color:blue
1	Nahnnan	nahn	PRON	_	Case=Erg|Number=Sing|Person=2|PronType=Prs	13	nsubj	13:nsubj	_
2	la	la	PART	_	_	13	discourse	13:discourse	_
3	za	za	INTJ	_	_	13	discourse	13:discourse	_
4	nahn	nahn	PRON	_	Number=Sing|Person=2|PronType=Prs	5	nmod:poss	5:nmod:poss	_
5	baswe	basw	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	13	iobj	13:iobj	_
6	CIAnahn	CIA	PROPN	_	Abbr=Yes|Case=Loc|Number=Sing	5	nmod	5:nmod	OrigLang=en
7	dhohnphala	dhohn	NOUN	_	Aspect=Imp|Case=Dat|Number=Plur|VerbForm=Vnoun	5	appos	5:appos	_
8	Anan	a	PRON	_	Case=Erg|Number=Sing|Person=1|PronType=Prs	9	nsubj	9:nsubj	_
9	runge	rung	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	13	ccomp	13:ccomp	_
10	di	di	SCONJ	NMLZ	_	9	mark	9:mark	_
11	kathathahn	kathathahn	ADV	_	_	9	advmod	9:advmod	_
12	re	re	PART	REP	_	9	mark	9:mark	_
13	rungami	rungami	NOUN	_	Number=Sing	0	root	0:root	_
14	raga	raga	AUX	HORT	Mood=Hort	13	aux	13:aux	SpacesAfter=\n

~~~


