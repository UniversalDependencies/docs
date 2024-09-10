---
layout: base
title:  'Statistics of csubj in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `csubj`

This relation is universal.
There are 2 language-specific subtypes of `csubj`: <tt><a href="en_gum-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="en_gum-dep-csubj-pass.html">csubj:pass</a></tt>.

305 nodes (0%) are attached to their parents as `csubj`.

170 instances of `csubj` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.77377049180328.

The following 20 pairs of parts of speech are connected with `csubj`: <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (121; 40% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (89; 29% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (50; 16% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-DET.html">DET</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 csubj	color:blue
1	Practicing	practice	VERB	VBG	VerbForm=Ger	5	csubj	5:csubj	Discourse=joint-other_m:110->24:4:_|MSeg=Practic-ing
2	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	3	nmod:poss	3:nmod:poss	Entity=(66-abstract-giv:inact-cf2-2-coref(9-person-giv:act-cf1*-1-ana)
3	joke	joke	NOUN	NN	Number=Sing	1	obj	1:obj	Entity=66)
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
5	crucial	crucial	ADJ	JJ	Degree=Pos	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 csubj	color:blue
1	When	when	ADV	WRB	PronType=Int	3	advmod	3:advmod	Discourse=topic-solutionhood:161->162:0:_;context-circumstance:161->162:0:0:orp-when-1117
2	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
3	comes	come	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	advcl	9:advcl:when	MSeg=come-s
4	to	to	ADP	IN	_	5	case	5:case	_
5	sleep	sleep	NOUN	NN	Number=Sing	3	obl	3:obl:to	Entity=(175-abstract-new-cf2-1-coref)|SpaceAfter=No
6	,	,	PUNCT	,	_	3	punct	3:punct	_
7	changing	change	VERB	VBG	VerbForm=Ger	9	csubj	9:csubj	Discourse=joint-list_m:162->111:3:_|MSeg=chang-ing
8	behavior	behavior	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=(176-abstract-new-cf1-1-sgl)|MSeg=behav-ior
9	works	work	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=work-s|SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	9:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj	color:blue
1	All	all	DET	DT	PronType=Tot	3	obl:npmod	3:obl:npmod	Discourse=explanation-motivation:41->33:3:_
2	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	_
3	takes	take	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	csubj	7:csubj|11:csubj	MSeg=take-s
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	7:cop	_
5	two	two	NUM	CD	NumForm=Word|NumType=Card	7	nummod	7:nummod	Entity=(40-object-giv:inact-cf1-3-pred
6	twist	twist	NOUN	NN	Number=Sing	7	compound	7:compound	_
7	ties	tie	NOUN	NNS	Number=Plur	0	root	0:root	Entity=40)|MSeg=tie-s
8	and	and	CCONJ	CC	_	11	cc	11:cc	_
9	a	a	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(43-time-giv:inact-cf2-3-coref
10	few	few	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
11	seconds	second	NOUN	NNS	Number=Plur	7	conj	7:conj:and	MSeg=second-s
12	of	of	ADP	IN	_	13	case	13:case	_
13	patience	patience	NOUN	NN	Number=Sing	11	nmod	11:nmod:of	Entity=(49-abstract-new-cf3-1-sgl)43)|MSeg=pati-ence|SpaceAfter=No
14	.	.	PUNCT	.	_	7	punct	7:punct	_

~~~


