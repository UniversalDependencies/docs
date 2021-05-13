---
layout: base
title:  'Statistics of vocative in UD_Kazakh-KTB'
udver: '2'
---

## Treebank Statistics: UD_Kazakh-KTB: Relations: `vocative`

This relation is universal.

10 nodes (0%) are attached to their parents as `vocative`.

7 instances of `vocative` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.8.

The following 6 pairs of parts of speech are connected with `vocative`: <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (4; 40% instances), <tt><a href="kk_ktb-pos-VERB.html">VERB</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="kk_ktb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="kk_ktb-pos-ADV.html">ADV</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk_ktb-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="kk_ktb-pos-PRON.html">PRON</a></tt>-<tt><a href="kk_ktb-pos-NOUN.html">NOUN</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 vocative	color:blue
1	"	"	PUNCT	sent	_	6	punct	_	SpaceAfter=No
2	Жоқ	жоқ	INTJ	ij	_	6	discourse	_	SpaceAfter=No
3	,	,	PUNCT	cm	_	2	punct	_	_
4	Айгүл	Айгүл	PROPN	np	Case=Nom|Gender=Fem	6	vocative	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	4	punct	_	_
6	айта	айт	VERB	v	Aspect=Imp|VerbForm=Inf	9	ccomp	_	_
7	алмаймын	ал	AUX	vaux	Aspect=Hab|Mood=Ind|Number=Sing|Person=1|Polarity=Neg|Tense=Pres|VerbForm=Fin	6	aux	_	SpaceAfter=No
8	"	"	PUNCT	sent	_	6	punct	_	_
9	деп	де	VERB	v	Aspect=Perf|VerbForm=Conv	12	advcl	_	_
10	анасы	ана	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	12	nsubj	_	_
11	жауап	жауап	X	x	_	12	dep	_	_
12	береді	бер	VERB	v	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
13	.	.	PUNCT	sent	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 vocative	color:blue
1	Қожа	Қожа	PROPN	np	Case=Nom|Gender=Masc	3	nsubj	_	_
2	етті	ет	NOUN	n	Case=Acc	3	obj	_	_
3	жемей	же	VERB	v	Aspect=Perf|Polarity=Neg|VerbForm=Conv	20	advcl	_	SpaceAfter=No
4	,	,	PUNCT	cm	_	3	punct	_	_
5	табаққа	табақ	NOUN	n	Case=Dat	8	obl	_	_
6	шапанының	шапан	NOUN	n	Case=Gen|Number[psor]=Plur,Sing|Person[psor]=3	7	nmod:poss	_	_
7	жеңін	жең	NOUN	n	Case=Acc|Number[psor]=Plur,Sing|Person[psor]=3	8	obj	_	_
8	малып	мал	VERB	v	Aspect=Perf|VerbForm=Conv	20	advcl	_	SpaceAfter=No
9	:	:	PUNCT	sent	_	8	punct	_	_
10	-	-	PUNCT	guio	_	8	punct	_	_
11	Же	же	VERB	v	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	18	ccomp	_	SpaceAfter=No
12	,	,	PUNCT	cm	_	15	punct	_	_
13	шапаным	шапан	NOUN	n	Case=Nom|Number[psor]=Sing|Person[psor]=1	15	vocative	_	SpaceAfter=No
14	,	,	PUNCT	cm	_	13	punct	_	_
15	же	же	VERB	v	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	11	conj	_	SpaceAfter=No
16	!	!	PUNCT	sent	_	15	punct	_	_
17	-	-	PUNCT	guio	_	15	punct	_	_
18	деп	де	VERB	v	Aspect=Perf|VerbForm=Conv	20	advcl	_	SpaceAfter=No
19	,	,	PUNCT	cm	_	18	punct	_	_
20	отыра	отыр	VERB	v	Aspect=Imp|VerbForm=Inf	0	root	_	_
21	береді	бер	AUX	vaux	Aspect=Hab|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	20	aux	_	SpaceAfter=No
22	.	.	PUNCT	sent	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 vocative	color:blue
1	-	-	PUNCT	guio	_	10	punct	_	_
2	Құрметті	құрметті	ADJ	adj	_	3	amod	_	_
3	Президент	президент	NOUN	n	Case=Nom	4	compound	_	_
4	мырза	мырза	NOUN	n	Case=Nom	10	vocative	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	4	punct	_	_
6	мен	мен	PRON	prn	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
7	Сізді	сіз	PRON	prn	Case=Acc|Number=Sing|Person=2|Polite=Form|PronType=Prs	9	obj	_	_
8	Қытайда	Қытай	PROPN	np	Case=Loc	9	obl	_	_
9	көргеніме	көр	VERB	v	Case=Dat|Number[psor]=Sing|Person[psor]=1|Tense=Past|VerbForm=Ger	10	advcl	_	_
10	қуанышты	қуанышты	ADJ	adj	_	0	root	_	_
11	мын	е	AUX	cop	Aspect=Hab|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	10	cop	_	_
12	.	.	PUNCT	sent	_	10	punct	_	_

~~~


