---
layout: base
title:  'Statistics of discourse in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `discourse`

This relation is universal.

11 nodes (0%) are attached to their parents as `discourse`.

7 instances of `discourse` (64%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.63636363636364.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-INTJ.html">INTJ</a></tt> (4; 36% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-SYM.html">SYM</a></tt> (3; 27% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-SYM.html">SYM</a></tt> (1; 9% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-PART.html">PART</a></tt> (1; 9% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-INTJ.html">INTJ</a></tt> (1; 9% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 discourse	color:blue
1	Ok	Ok	INTJ	ITJ	_	10	discourse	_	SpaceAfter=No
2	,	,	PUNCT	$,	_	1	punct	_	_
3	da	da	ADV	ADV	_	10	advmod	_	_
4	hätte	haben	AUX	VAFIN	Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	_
5	uns	wir	PRON	PPER	Case=Dat|Number=Plur|Person=1|PronType=Prs	10	obl:arg	_	_
6	eigentlich	eigentlich	ADV	ADV	_	7	advmod	_	_
7	schon	schon	ADV	ADV	_	10	advmod	_	_
8	was	was	PRON	PIS	Gender=Neut|Number=Sing|PronType=Int,Rel	10	nsubj	_	_
9	komisch	komisch	ADJ	ADJD	Degree=Pos	10	xcomp	_	_
10	vorkommen	vorkommen	VERB	VVINF	VerbForm=Inf	0	root	_	_
11	müssen	müssen	AUX	VMINF	VerbForm=Inf	10	aux	_	SpaceAfter=No
12	.	.	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 discourse	color:blue
1	Außerdem	außerdem	ADV	PAV	_	2	advmod	_	_
2	spart	sparen	VERB	VVFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	2	nsubj	_	_
4	viele	viel	DET	PIAT	Case=Acc|Gender=Fem|Number=Plur|PronType=Ind	6	det	_	_
5	viele	viel	DET	PIAT	Case=Acc|Gender=Fem|Number=Plur|PronType=Ind	4	conj	_	_
6	Blasen	Blase|Blasen	NOUN	NN	Case=Acc|Gender=Fem|Number=Plur	2	obj	_	_
7	an	an	ADP	APPR	_	9	case	_	_
8	den	der	DET	ART	Case=Dat|Definite=Def|Number=Plur|PronType=Art	9	det	_	_
9	Füßen	Fuß	NOUN	NN	Case=Dat|Gender=Masc|Number=Plur	6	nmod	_	_
10	:-)	:-)	SYM	NE	_	2	discourse	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 discourse	color:blue
1	Besonders	besonders	ADV	ADV	_	2	advmod	_	_
2	lecker	lecker	ADJ	ADJD	Degree=Pos	0	root	_	_
3	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	Tzatziki	Tzatziki	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	2	nsubj	_	SpaceAfter=No
6	;	;	PUNCT	$.	_	7	punct	_	_
7	o	o	SYM	NE	Case=Nom|Gender=Masc|Number=Sing	2	discourse	_	SpaceAfter=No
8	)	)	PUNCT	$(	_	2	punct	_	_

~~~


