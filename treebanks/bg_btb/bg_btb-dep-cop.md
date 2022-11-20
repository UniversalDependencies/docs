---
layout: base
title:  'Statistics of cop in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `cop`

This relation is universal.

2385 nodes (2%) are attached to their parents as `cop`.

1895 instances of `cop` (79%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.74381551362683.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (1183; 50% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (660; 28% instances), <tt><a href="bg_btb-pos-ADV.html">ADV</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (310; 13% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (84; 4% instances), <tt><a href="bg_btb-pos-PRON.html">PRON</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (74; 3% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (32; 1% instances), <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (26; 1% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (14; 1% instances), <tt><a href="bg_btb-pos-ADP.html">ADP</a></tt>-<tt><a href="bg_btb-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 cop	color:blue
1	Страх	страх	NOUN	Ncmsi	Definite=Ind|Gender=Masc|Number=Sing	0	root	0:root	_
2	ли	ли	PART	Ti	_	1	discourse	1:discourse	_
3	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	1	obj	1:obj	_
4	е	съм	AUX	Vxitf-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	1:cop	SpaceAfter=No
5	?	?	PUNCT	punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 cop	color:blue
1	Дете	дете	NOUN	Ncnsi	Definite=Ind|Gender=Neut|Number=Sing	0	root	0:root	_
2	ли	ли	PART	Ti	_	1	discourse	1:discourse	_
3	бях	съм	AUX	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	1:cop	SpaceAfter=No
4	,	,	PUNCT	punct	_	5	punct	5:punct	_
5	стар	стар	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	conj	1:conj	_
6	ли	ли	PART	Ti	_	5	discourse	5:discourse	_
7	бях	съм	AUX	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	5:cop	SpaceAfter=No
8	,	,	PUNCT	punct	_	9	punct	9:punct	_
9	или	или	CCONJ	Cp	_	12	cc	12:cc	_
10	бях	съм	AUX	Vxitf-t1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	12	cop	12:cop	_
11	вече	вече	ADV	Dt	Degree=Pos	12	advmod	12:advmod	_
12	мъртъв	мъртъв	ADJ	Amsi	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	conj	1:conj	SpaceAfter=No
13	?	?	PUNCT	punct	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 cop	color:blue
1	Всички	всеки	PRON	Pce-op	Case=Nom|Number=Plur|PronType=Tot	3	nsubj	3:nsubj|8:nsubj	_
2	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	3	expl	3:expl	_
3	чувстват	чувствам-(се)	VERB	Vpitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	близки	близък	ADJ	A-pi	Definite=Ind|Degree=Pos|Number=Plur	3	obj	3:obj	SpaceAfter=No
5	,	,	PUNCT	punct	_	10	punct	10:punct	_
6	сякаш	сякаш	ADV	Dd	Degree=Pos	10	advmod	10:advmod	_
7	са	съм	AUX	Vxitf-r3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
8	били	съм	AUX	Vxitcat-p-i	Aspect=Imp|Definite=Ind|Mood=Ind|Number=Plur|VerbForm=Part|Voice=Act	10	cop	10:cop	_
9	столетия	столетие	NOUN	Ncnpi	Definite=Ind|Gender=Neut|Number=Plur	10	obl	10:obl	_
10	заедно	заедно	ADV	Dm	Degree=Pos	3	advcl	3:advcl	SpaceAfter=No
11	.	.	PUNCT	punct	_	3	punct	3:punct	_

~~~


