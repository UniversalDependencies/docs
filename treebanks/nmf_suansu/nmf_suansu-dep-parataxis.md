---
layout: base
title:  'Statistics of parataxis in UD_Naga-Suansu'
udver: '2'
---

## Treebank Statistics: UD_Naga-Suansu: Relations: `parataxis`

This relation is universal.

28 nodes (1%) are attached to their parents as `parataxis`.

28 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.96428571428571.

The following 12 pairs of parts of speech are connected with `parataxis`: <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (16; 57% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="nmf_suansu-pos-ADV.html">ADV</a></tt>-<tt><a href="nmf_suansu-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-ADV.html">ADV</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-AUX.html">AUX</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-INTJ.html">INTJ</a></tt>-<tt><a href="nmf_suansu-pos-INTJ.html">INTJ</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nmf_suansu-pos-PART.html">PART</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt>-<tt><a href="nmf_suansu-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-PRON.html">PRON</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="nmf_suansu-pos-VERB.html">VERB</a></tt>-<tt><a href="nmf_suansu-pos-PART.html">PART</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 parataxis	color:blue
1	Peter	Peter	PROPN	_	Number=Sing	3	nsubj	3:nsubj|6:nsubj	_
2	gae	gae	NOUN	_	Number=Sing	3	compound	3:compound	_
3	taiprai	taiprai	VERB	_	VerbForm=Inf	0	root	0:root	_
4	ra	ra	ADV	CONJ*	_	6	advmod	6:advmod	_
5	kelasdi	kelas	NOUN	_	Case=Top|Number=Sing	6	nsubj	6:nsubj	_
6	filhia	filhia	VERB	_	Aspect=Imp|Mood=Ind|Tense=Past|VerbForm=Fin	3	parataxis	3:parataxis	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	3:punct	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 parataxis	color:blue
1	Ame	ame	INTJ	_	Polarity=Pos	6	discourse	6:discourse	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	1:punct	_
3	A	a	PRON	_	Number=Sing|Person=1|PronType=Prs	6	nsubj	6:nsubj	_
4	ska	ska	NUM	_	ExtPos=ADV|NumForm=Word|NumType=Card	6	advmod	6:advmod	_
5	li	li	ADV	ASC	_	4	flat	4:flat	_
6	phabtama	phabta	VERB	_	Polarity=Neg|VerbForm=Inf	0	root	0:root	SpaceAfter=No
7	,	,	PUNCT	_	_	11	punct	11:punct	_
8	mwetheda	mwetheda	ADV	_	PronType=Int	11	advmod	11:advmod	_
9	Adi	a	PRON	_	Case=Top|Number=Sing|Person=1|PronType=Prs	11	obj	11:obj	_
10	hano	hano	ADV	_	Deixis=Prox|PronType=Dem	11	advmod	11:advmod	_
11	thyire	thyi	ADJ	_	Degree=Pos	12	advcl	12:advcl	_
12	maram	maram	NOUN	_	Number=Sing	6	parataxis	6:parataxis	_
13	dai	dai	AUX	_	Mood=Jus	12	aux	12:aux	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	Gare	gare	ADV	_	PronType=Int	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	_	_	3	punct	3:punct	_
3	khakhahnnan	khakhahnnan	ADV	_	_	1	parataxis	1:parataxis	SpaceAfter=No
4	?	?	PUNCT	_	_	1	punct	1:punct	SpacesAfter=\n

~~~


