---
layout: base
title:  'Statistics of advcl:relcl in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-advcl.html">advcl</a></tt>.

271 nodes (0%) are attached to their parents as `advcl:relcl`.

271 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5719557195572.

The following 17 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (170; 63% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (27; 10% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (16; 6% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (12; 4% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (9; 3% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (6; 2% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-ADP.html">ADP</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:relcl	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	2:nsubj	Discourse=attribution-positive:65->66:0:sem-atsrc-344+lex-indwd-345|Entity=(9-person-giv:inact-cf1-1-ana)
2	know	know	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	how	how	ADV	WRB	PronType=Rel	2	obj	2:obj	Discourse=evaluation-comment:66->64:0:_
4	that	that	PRON	DT	Number=Sing|PronType=Dem	5	nsubj	5:nsubj	_
5	works	work	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	advcl:relcl	3:advcl:relcl	MSeg=work-s|SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 12 advcl:relcl	color:blue
1	Some	some	DET	DT	PronType=Ind	2	det	2:det	Discourse=joint-other_m:83->82:0:_|Entity=(195-place-new-cf2-2-sgl
2	countries	country	NOUN	NNS	Number=Plur	5	nsubj	5:nsubj	Entity=195)|MSeg=countrie-s
3	have	have	AUX	VBP	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	aux	5:aux	_
4	recently	recently	ADV	RB	Degree=Pos	5	advmod	5:advmod	MSeg=recent-ly
5	adopted	adopt	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root|12:ccomp	MSeg=ad-opt-ed
6	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	Entity=(196-abstract-new-cf3-3-sgl
7	similar	similar	ADJ	JJ	Degree=Pos	8	amod	8:amod	_
8	course	course	NOUN	NN	Number=Sing	5	obj	5:obj	Entity=196)|SpaceAfter=No
9	,	,	PUNCT	,	_	12	punct	12:punct	_
10	which	which	PRON	WDT	PronType=Rel	12	obj	5:ref|12:obj	Discourse=evaluation-comment:84->83:0:lex-indwd-914
11	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	12:nsubj	Entity=(27-person-giv:inact-cf1-1-ana)
12	welcome	welcome	VERB	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	advcl:relcl	5:advcl:relcl	SpaceAfter=No
13	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 advcl:relcl	color:blue
1	When	when	ADV	WRB	PronType=Int	3	advmod	3:advmod	Discourse=context-circumstance:45->46:0:dm-when-325
2	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	3:nsubj	Entity=(1-person-giv:act-cf1*-1-ana)
3	ate	eat	VERB	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	8	advcl	8:advcl:when	SpaceAfter=No
4	,	,	PUNCT	,	_	3	punct	3:punct	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	8:nsubj	Discourse=joint-list_m:46->40:2:_|Entity=(1-person-giv:act-cf1*-1-ana)
6	did	do	AUX	VBD	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin	8	aux	8:aux	_
7	not	not	PART	RB	Polarity=Neg	8	advmod	8:advmod	_
8	know	know	VERB	VB	VerbForm=Inf	0	root	0:root	_
9	when	when	ADV	WRB	PronType=Rel	8	obj	8:obj	_
10	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Entity=(57-time-acc:com-cf2-3-sgl
11	next	next	ADJ	JJ	Degree=Pos	12	amod	12:amod	_
12	time	time	NOUN	NN	Number=Sing	14	nsubj	14:nsubj	Entity=57)
13	would	would	AUX	MD	VerbForm=Fin	14	aux	14:aux	_
14	be	be	AUX	VB	VerbForm=Inf	9	advcl:relcl	9:advcl:relcl	SpaceAfter=No
15	.	.	PUNCT	.	_	8	punct	8:punct	_

~~~


