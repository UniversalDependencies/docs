---
layout: base
title:  'Statistics of advcl:relcl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-advcl.html">advcl</a></tt>.

216 nodes (0%) are attached to their parents as `advcl:relcl`.

216 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5.

The following 13 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (147; 68% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (25; 12% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (13; 6% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (8; 4% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (7; 3% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:relcl	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:65->66:0|Entity=(10-person-giv:inact-cf1-1-ana)
2	know	know	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	how	how	ADV	WRB	PronType=Rel	2	obj	2:obj	Discourse=evaluation-comment:66->64:0
4	that	that	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
5	works	work	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:relcl	3:advcl:relcl	SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 advcl:relcl	color:blue
1	Some	some	DET	DT	PronType=Ind	2	det	2:det	Discourse=joint-other_m:83->82:0|Entity=(195-place-new-cf2-2-sgl
2	countries	country	NOUN	NNS	Number=Plur	5	nsubj	5:nsubj	Entity=195)
3	have	have	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
4	recently	recently	ADV	RB	Degree=Pos	5	advmod	5:advmod	_
5	adopted	adopt	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root|12:ccomp	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	Entity=(196-abstract-new-cf3-3-sgl
7	similar	similar	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	course	course	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=196)|SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	12:punct	_
10	which	which	PRON	WDT	PronType=Rel	12	obj	5:ref|12:obj	Discourse=evaluation-comment:84->83:0
11	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	12:nsubj	Entity=(27-person-giv:inact-cf1-1-ana)
12	welcome	welcome	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	advcl:relcl	5:advcl:relcl	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl:relcl	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=context-circumstance:22->23:0
2	higher	high	ADJ	JJR	Degree=Cmp	9	advcl	9:advcl	_
3	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	Entity=(11-object-giv:inact-cf2-2-coref(6-person-giv:act-cf1*-1-ana)
4	hands	hand	NOUN	NNS	Number=Plur	5	nsubj	5:nsubj	Entity=11)
5	go	go	VERB	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	advcl:relcl	2:advcl:relcl	SpaceAfter=No
6	,	,	PUNCT	,	_	2	punct	2:punct	_
7	the	the	DET	DT	Definite=Def|PronType=Art	8	det	8:det	Discourse=joint-other_m:23->20:2
8	more	more	ADV	RBR	Degree=Cmp	9	advmod	9:advmod	_
9	respectful	respectful	ADJ	JJ	Degree=Pos	0	root	0:root	_
10	you	you	PRON	PRP	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	11:nsubj	Entity=(6-person-giv:act-cf1*-1-ana)
11	are	be	VERB	VBP	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	9	advcl:relcl	9:advcl:relcl	SpaceAfter=No
12	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


