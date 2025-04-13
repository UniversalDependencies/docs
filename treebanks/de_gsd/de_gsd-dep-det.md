---
layout: base
title:  'Statistics of det in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="de_gsd-dep-det-poss.html">det:poss</a></tt>.

37324 nodes (13%) are attached to their parents as `det`.

37232 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.46835816096881.

The following 14 pairs of parts of speech are connected with `det`: <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (31239; 84% instances), <tt><a href="de_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (5672; 15% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (143; 0% instances), <tt><a href="de_gsd-pos-DET.html">DET</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (90; 0% instances), <tt><a href="de_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (76; 0% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (58; 0% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (15; 0% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (14; 0% instances), <tt><a href="de_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="de_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="de_gsd-pos-X.html">X</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="de_gsd-pos-PART.html">PART</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="de_gsd-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="de_gsd-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 det	color:blue
1	Manasse	Manasse	PROPN	NN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	NamedEntity=Yes
2	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing|NumType=Card|PronType=Art	5	det	_	_
4	einzigartiger	einzigartig	ADJ	ADJA	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	_
5	Parfümeur	Parfümeur	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	$.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Grund	Grund	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
2	unseres	unser	DET	PPOSAT	Case=Gen|Gender=Masc|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	3	det:poss	_	_
3	Besuchs	Besuch	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing	1	nmod	_	_
4	war	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	cop	_	_
5	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Wunsch	Wunsch	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
7	eine	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	8	det	_	_
8	Vespa	Vespa	PROPN	NN	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	NamedEntity=Yes
9	zu	zu	PART	PTKZU	_	10	mark	_	_
10	mieten	mieten	VERB	VVINF	VerbForm=Inf	6	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 det	color:blue
1	Die	der	DET	ART	Case=Nom|Definite=Def|Number=Plur|PronType=Art	2	det	_	_
2	Großbauern	Großbauer	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
3	streichen	streichen	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	viel	viel	DET	PIS	PronType=Ind	3	obj	_	_
5	ein	ein	ADV	PTKVZ	_	3	compound:prt	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	9	punct	_	_
7	die	der	DET	ART	Case=Nom|Definite=Def|Number=Plur|PronType=Art	8	det	_	_
8	kleinen	klein	ADJ	ADJA	Case=Nom|Degree=Pos|Number=Plur	9	nsubj	_	_
9	bekommen	bekommen	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	conj	_	_
10	wenig	wenig	DET	PIS	PronType=Ind	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	3	punct	_	_

~~~


