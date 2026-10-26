---
layout: base
title:  'Statistics of orphan in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `orphan`

This relation is universal.

4 nodes (0%) are attached to their parents as `orphan`.

4 instances of `orphan` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `orphan`: <tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt>-<tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 orphan	color:blue
1	Mary	Mary	PROPN	_	Number=Sing	3	nsubj	3:nsubj	_
2	bronze	bronze	NOUN	_	Number=Sing	3	obj	3:obj	OrigLang=en
3	thae	tha	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	3:punct	_
5	Peter	Peter	PROPN	_	Number=Sing	3	conj	3:conj	_
6	silver	silver	NOUN	_	Number=Sing	5	orphan	5:orphan	OrigLang=en|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	9:punct	_
8	rateragu	rateragu	CCONJ	_	_	9	cc	9:cc	_
9	Jane	Jane	PROPN	_	Number=Sing	3	conj	3:conj	_
10	gold	gold	NOUN	_	Number=Sing	9	orphan	9:orphan	OrigLang=en
11	re	re	ADV	_	_	9	advmod	9:advmod	SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 orphan	color:blue
1	Ba	ba	PRON	_	Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
2	car	car	NOUN	_	Number=Sing	3	obj	3:obj	OrigLang=en
3	lue	lu	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	riri	riri	CCONJ	DISJ	_	6	cc	6:cc	_
5	ba	ba	PRON	_	Number=Sing|Person=3|PronType=Prs	6	nmod:poss	6:nmod:poss	_
6	thaineo	thaineo	NOUN	_	Number=Sing	3	conj	3:conj	_
7	bike	bike	NOUN	_	Number=Sing	6	orphan	6:orphan	OrigLang=en
8	daichu	daichu	ADV	_	_	3	advmod	3:advmod	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 orphan	color:blue
1	Anan	a	PRON	_	Case=Erg|Number=Sing|Person=1|PronType=Prs	0	root	0:root	_
2	Lynndi	Lynn	PROPN	_	Case=Top|Number=Sing	1	orphan	1:orphan	SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	7:punct	_
4	hai	hai	PRON	_	Number=Plur|Person=1|PronType=Prs	7	nsubj	7:nsubj	_
5	me	me	INTJ	_	Polarity=Neg	7	ccomp	7:ccomp	_
6	re	re	PART	REP	_	5	mark	5:mark	_
7	rungamma	rung	VERB	ABIL-NEG	Modal=Abil|Polarity=Neg|VerbForm=Inf	1	ccomp	1:ccomp	_
8	rahn	rahn	AUX	IRR	Aspect=Imp|Mood=Irr	7	aux	7:aux	_
9	re	re	ADV	_	_	7	advmod:emph	7:advmod:emph	SpaceAfter=No
10	,	,	PUNCT	_	_	18	punct	18:punct	_
11	nahn	nahn	PRON	_	Number=Sing|Person=2|PronType=Prs	15	nsubj	15:nsubj	_
12	li	li	ADV	ASC	_	11	advmod:emph	11:advmod:emph	_
13	me	me	INTJ	_	Polarity=Neg	15	ccomp	15:ccomp	_
14	re	re	PART	REP	_	13	mark	13:mark	_
15	rung	rung	VERB	_	VerbForm=Inf	18	csubj	18:csubj	_
16	geraha	geraha	AUX	MOD	Modal=Obl	15	aux	15:aux	_
17	matikza	matikza	ADV	_	_	18	advmod	18:advmod	_
18	thok	thok	VERB	_	VerbForm=Inf	7	conj	1:ccomp|7:conj	_
19	rahn	rahn	AUX	_	Aspect=Imp|Mood=Irr	18	aux	18:aux	SpaceAfter=No
20	.	.	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


