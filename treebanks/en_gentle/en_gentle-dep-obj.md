---
layout: base
title:  'Statistics of obj in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `obj`

This relation is universal.

728 nodes (4%) are attached to their parents as `obj`.

697 instances of `obj` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2760989010989.

The following 17 pairs of parts of speech are connected with `obj`: <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (484; 66% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (131; 18% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (48; 7% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (22; 3% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="en_gentle-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="en_gentle-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gentle-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obj	color:blue
1	Next	next	ADJ	JJ	Degree=Pos	0	root	0:root	Discourse=explanation-evidence:130->128:1:_|SpaceAfter=No|XML=<hi rend:::"italic">
2	,	,	PUNCT	,	_	3	punct	3:punct	_
3	please	please	INTJ	UH	_	1	discourse	1:discourse	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	7:punct	_
5	do	do	AUX	VB	VerbForm=Inf	7	aux	7:aux	Discourse=joint-list_m:131->130:0:_
6	n't	not	PART	RB	Polarity=Neg	7	advmod	7:advmod	_
7	hold	hold	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	1	parataxis	1:parataxis	_
8	up	up	ADP	RP	_	7	compound:prt	7:compound:prt	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Entity=(175-abstract-acc:com-cf1-2-sgl
10	queue	queue	NOUN	NN	Number=Sing	7	obj	7:obj	Entity=175)|SpaceAfter=No
11	!	!	PUNCT	.	_	1	punct	1:punct	XML=</hi>

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	3:nsubj	Discourse=explanation-evidence:126->124:1:_|Entity=(172-person-new-cf2-1-sgl)
2	'll	will	AUX	MD	VerbForm=Fin	3	aux	3:aux	_
3	see	see	VERB	VB	VerbForm=Inf	0	root	0:root	_
4	you	you	PRON	PRP	Case=Acc|Number=Sing|Person=2|PronType=Prs	3	obj	3:obj	Entity=(173-person-acc:com-cf1-1-sgl)
5	after	after	ADP	IN	_	6	case	6:case	_
6	school	school	NOUN	NN	Number=Sing	3	obl	3:obl:after	Entity=(174-time-new-cf3-1-sgl)|SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	He	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	Discourse=joint-sequence_m:80->62:0:_|Entity=(32-person-giv:act-cf1*-1-ana-Donny_van_de_Beek)
2	finds	find	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	MSeg=find-s
3	Galano	Galano	PROPN	NNP	Number=Sing	2	obj	2:obj	Entity=(49-person-giv:inact-cf2-1-coref-Cristian_Galano)
4	in	in	ADP	IN	_	6	case	6:case	_
5	some	some	DET	DT	PronType=Ind	6	det	6:det	Entity=(77-place-new-cf5-2-sgl
6	space	space	NOUN	NN	Number=Sing	2	obl	2:obl:in	Entity=77)|SpaceAfter=No
7	,	,	PUNCT	,	_	9	punct	9:punct	_
8	somebody	somebody	PRON	NN	Number=Sing|PronType=Ind	9	nsubj	9:nsubj	Discourse=joint-sequence_m:81->62:0:_|Entity=(78-person-new-cf3-1-sgl)|MSeg=some-body
9	take	take	VERB	VB	VerbForm=Inf	2	parataxis	2:parataxis	_
10	a	a	DET	DT	Definite=Ind|PronType=Art	11	det	11:det	Entity=(79-event-new-cf4-2-coref
11	shot	shot	NOUN	NN	Number=Sing	9	obj	9:obj	Entity=79)|SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


