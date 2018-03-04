---
layout: base
title:  'Statistics of cop in UD_Bulgarian'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian: Relations: `cop`

This relation is universal.

2384 nodes (2%) are attached to their parents as `cop`.

1894 instances of `cop` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7386744966443.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="bg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (1182; 50% instances), <tt><a href="bg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (660; 28% instances), <tt><a href="bg-pos-ADV.html">ADV</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (310; 13% instances), <tt><a href="bg-pos-DET.html">DET</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (84; 4% instances), <tt><a href="bg-pos-PRON.html">PRON</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (74; 3% instances), <tt><a href="bg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (32; 1% instances), <tt><a href="bg-pos-NUM.html">NUM</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (26; 1% instances), <tt><a href="bg-pos-VERB.html">VERB</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (14; 1% instances), <tt><a href="bg-pos-ADP.html">ADP</a></tt>-<tt><a href="bg-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 cop	color:blue
1	Страх	страх	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
2	ли	ли	PART	Ti	_	1	discourse	_	_
3	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	obj	_	_
4	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	SpaceAfter=No
5	?	?	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 cop	color:blue
1	Дете	дете	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
2	ли	ли	PART	Ti	_	1	discourse	_	_
3	бях	съм	AUX	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	_	SpaceAfter=No
4	,	,	PUNCT	punct	_	5	punct	_	_
5	стар	стар	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	conj	_	_
6	ли	ли	PART	Ti	_	5	discourse	_	_
7	бях	съм	AUX	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	SpaceAfter=No
8	,	,	PUNCT	punct	_	9	punct	_	_
9	или	или	CCONJ	Cp	_	12	cc	_	_
10	бях	съм	AUX	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	_	_
11	вече	вече	ADV	Dt	Degree=Pos	12	advmod	_	_
12	мъртъв	мъртъв	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	conj	_	SpaceAfter=No
13	?	?	PUNCT	punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cop	color:blue
1	Всички	всеки	PRON	Pce-op	Case=Nom|Number=Plur|PronType=Tot	3	nsubj	_	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	_	_
3	чувстват	чувствам-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	близки	близък	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	punct	_	10	punct	_	_
6	сякаш	сякаш	ADV	Dd	Degree=Pos	10	advmod	_	_
7	са	съм	AUX	Vxitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
8	били	съм	AUX	Vxitcat-p-i	Aspect=Imp|Definite=Ind|Mood=Ind|Number=Plur|VerbForm=Part|Voice=Act	10	cop	_	_
9	столетия	столетие	NOUN	Ncnpi	Definite=Ind|Gender=Neut|Number=Plur	10	obl	_	_
10	заедно	заедно	ADV	Dm	Degree=Pos	3	advcl	_	SpaceAfter=No
11	.	.	PUNCT	punct	_	3	punct	_	_

~~~


