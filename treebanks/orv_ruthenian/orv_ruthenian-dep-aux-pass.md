---
layout: base
title:  'Statistics of aux:pass in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="orv_ruthenian-dep-aux.html">aux</a></tt>.

8 nodes (0%) are attached to their parents as `aux:pass`.

5 instances of `aux:pass` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (8; 100% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:pass	color:blue
1	А	а	CCONJ	_	_	2	cc	_	wf="А"
2	псан(а)	писати	VERB	_	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	wf="псана"
3	быс(ть)	быти	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	aux:pass	_	wf="бысть"
4	грамота	грамота	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubj:pass	_	wf="грамота"
5	сѧ	сей	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	wf="сѧ"
6	оу	въ	ADP	_	_	7	case	_	wf="оу"
7	Могилѣвѣ	Могилѣвъ	PROPN	_	Case=Loc|Gender=Masc|NameType=Sur|Number=Sing	2	obl	_	wf="Могилѣвѣ"|SpaceAfter=No
8	,	,	PUNCT	_	_	11	punct	_	_
9	по	по	ADP	_	_	11	case	_	wf="по"
10	Б(о)жьем	божий	ADJ	_	Case=Loc|Degree=Pos|Gender=Neut|Number=Sing	11	nmod	_	wf="Божьем"
11	нарожѣньи	нарожение	NOUN	_	Case=Loc|Gender=Neut|Number=Sing	13	nmod	_	wf="нарожѣньи"
12	1000	1000	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	11	nummod	_	_
13	лѣт	лѣто	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	2	obl	_	wf="лѣт"
14	и	и	CCONJ	_	_	16	cc	_	wf="и"
15	400	400	NUM	_	Case=Nom|NumForm=Digit|NumType=Card	16	nummod	_	_
16	лѣт	лѣто	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	11	conj	_	wf="лѣт"
17	и	и	CCONJ	_	_	19	cc	_	wf="и"
18	сем(ь)	семь	NUM	_	Case=Acc|NumForm=Word|NumType=Card	19	nummod:gov	_	wf="семь"
19	лѣт	лѣто	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	11	conj	_	wf="лѣт"|SpaceAfter=No
20	.	.	PUNCT	_	_	2	punct	_	_

~~~


