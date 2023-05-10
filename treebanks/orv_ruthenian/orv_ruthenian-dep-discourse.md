---
layout: base
title:  'Statistics of discourse in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `discourse`

This relation is universal.

12 nodes (0%) are attached to their parents as `discourse`.

8 instances of `discourse` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.58333333333333.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-CCONJ.html">CCONJ</a></tt> (3; 25% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt> (3; 25% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt> (2; 17% instances), <tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt> (1; 8% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt> (1; 8% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-PART.html">PART</a></tt> (1; 8% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Ино	ино	CCONJ	_	_	2	discourse	_	wf="Ино"
2	прошю	просити	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="прошю"
3	васъ	вы	PRON	_	Case=Gen|Number=Plur|Person=2|PronType=Prs	2	obj	_	wf="васъ"|SpaceAfter=No
4	,	,	PUNCT	_	_	2	punct	_	_
5	штобы	чтобы	SCONJ	_	Mood=Cnd	9	mark	_	wf="штобы"
6	есте	быти	AUX	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	wf="есте"
7	мене	я	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	9	obl	_	wf="мене"
8	делѧ	дѣля	ADP	_	_	7	case	_	wf="делѧ"
9	досъмотрели	досмотрѣти	VERB	_	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	2	advcl	_	wf="досъмотрели"
10	правды	правда	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	9	iobj	_	wf="правды"|SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	На	на	ADP	_	_	2	case	_	wf="На"
2	то	то	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obl	_	wf="то"
3	жь	же	PART	_	_	4	discourse	_	wf="жь"
4	дали	дати	VERB	_	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="дали"
5	есмы	быти	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	wf="есмы"
6	сю	сей	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	7	det	_	wf="сю"
7	грамоту	грамота	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	wf="грамоту"
8	и	и	CCONJ	_	_	11	cc	_	wf="и"
9	под	подъ	ADP	_	_	11	case	_	wf="под"
10	нашею	нашъ	DET	_	Case=Ins|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	wf="нашею"
11	печатью	печать	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	7	nmod	_	wf="печатью"
12	завеситою	завесиcтый	ADJ	_	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	wf="завеситою"|SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 discourse	color:blue
1	Также	также	CCONJ	_	_	5	cc	_	wf="Также"
2	оу	въ	ADP	_	_	3	case	_	wf="оу"
3	Полоцку	Полоцкъ	PROPN	_	Case=Loc|Gender=Masc|NameType=Geo|Number=Sing	5	obl	_	wf="Полоцку"
4	соль	соль	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	wf="соль"
5	вѣсити	вѣсити	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	wf="вѣсити"
6	на	на	ADP	_	_	7	case	_	wf="на"
7	скалвахъ	скалва	NOUN	_	Case=Loc|Gender=Fem|Number=Plur	5	obl	_	wf="скалвахъ"
8	тым	тотъ	DET	_	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	10	det	_	wf="тым"
9	же	же	PART	_	_	8	discourse	_	wf="же"
10	вѣсомъ	вѣсъ	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	5	obl	_	wf="вѣсомъ"|SpaceAfter=No
11	,	,	PUNCT	_	_	14	punct	_	_
12	што	что	SCONJ	_	_	14	mark	_	wf="што"
13	воскъ	воскъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	14	nsubj	_	wf="воскъ"
14	вѣсѧть	вѣсити	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	acl	_	wf="вѣсѧть"|SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	тыми	тотъ	DET	_	Case=Ins|Gender=Masc|Number=Plur|PronType=Dem	18	det	_	wf="тыми"
17	же	же	PART	_	_	16	discourse	_	wf="же"
18	колоколы	колоколъ	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	14	obl	_	wf="колоколы"|SpaceAfter=No
19	.	.	PUNCT	_	_	5	punct	_	_

~~~


