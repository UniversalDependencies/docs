---
layout: base
title:  'Statistics of amod in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `amod`

This relation is universal.
There are 1 language-specific subtypes of `amod`: <tt><a href="pl_pdb-dep-amod-flat.html">amod:flat</a></tt>.

23076 nodes (7%) are attached to their parents as `amod`.

15021 instances of `amod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17988386202115.

The following 14 pairs of parts of speech are connected with `amod`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (21904; 95% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (328; 1% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (218; 1% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (184; 1% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (184; 1% instances), <tt><a href="pl_pdb-pos-X.html">X</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (145; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (42; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (35; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="pl_pdb-pos-SYM.html">SYM</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 amod	color:blue
1	Pies	pies	NOUN	subst:sg:nom:m2	Animacy=Nhum|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	płynie	płynąć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Ins
4	małą	mały	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	7	amod	7:amod	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	żółtą	żółty	ADJ	adj:sg:inst:f:pos	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	4	conj	4:conj|7:amod	_
7	piłką	piłka	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	2	obl:arg	2:obl:arg	_
8	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	9	case	9:case	Case=Loc
9	pysku	pysk	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	7	nmod	7:nmod	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Spanikowani	spanikowany	ADJ	adj:pl:nom:m1:pos	Animacy=Hum|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	2	amod	2:amod	_
2	Hutu	Hutu	PROPN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	3	nsubj	3:nsubj	_
3	porzucili	porzucić	VERB	praet:pl:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	swoje	swój	DET	adj:pl:acc:m3:pos	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs|Reflex=Yes	5	det:poss	5:det:poss	_
5	szałasy	szałas	NOUN	subst:pl:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur	3	obj	3:obj	_
6	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Gen
7	plastikowej	plastikowy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	8:amod	_
8	folii	folia	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	5	nmod	5:nmod	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 amod	color:blue
1	artykuł	artykuł	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
2	13	13	X	dig	NumForm=Digit	1	amod	1:amod	_
3	ust	ustęp	X	brev:pun	Abbr=Yes|Pun=Yes	1	nmod	1:nmod	SpaceAfter=No
4	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_
5	1	1	X	dig	NumForm=Digit	3	amod	3:amod	_
6	otrzymuje	otrzymywać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	brzmienie	brzmienie	NOUN	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing	6	obj	6:obj	SpaceAfter=No
8	:	:	PUNCT	interp	PunctType=Colo	6	punct	6:punct	_

~~~


