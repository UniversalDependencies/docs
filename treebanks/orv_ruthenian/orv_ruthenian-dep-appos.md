---
layout: base
title:  'Statistics of appos in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `appos`

This relation is universal.

240 nodes (2%) are attached to their parents as `appos`.

240 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.38333333333333.

The following 10 pairs of parts of speech are connected with `appos`: <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (90; 38% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (81; 34% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (32; 13% instances), <tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (25; 10% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_ruthenian-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	Дали	дати	VERB	_	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	wf="Дали"
2	есмы	быти	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	aux	_	wf="есмы"
3	Федору	Федоръ	PROPN	_	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	1	iobj	_	wf="Федору"
4	и	и	CCONJ	_	_	5	cc	_	wf="и"
5	сыну	сынъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	3	conj	_	wf="сыну"
6	его	онъ	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	det	_	wf="его"
7	Дмитрию	Дмитрий	PROPN	_	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	5	appos	_	wf="Дмитрию"
8	село	село	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	1	obj	_	wf="село"
9	Семенцово	Семенцово	PROPN	_	Case=Acc|Gender=Neut|NameType=Geo|Number=Sing	8	amod	_	wf="Семенцово"
10	на	на	ADP	_	_	11	case	_	wf="на"
11	Березвячи	Березвячи	PROPN	_	Case=Loc|Gender=Fem|NameType=Geo|Number=Sing	1	obl	_	wf="Березвячи"|SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Кнѧ(зю)	князь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	0	root	_	wf="Кнѧзю"
2	местерю	местерь	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	1	appos	_	wf="местерю"
3	и	и	CCONJ	_	_	5	cc	_	wf="и"
4	всемъ	весь	DET	_	Case=Dat|Gender=Masc|Number=Plur|PronType=Tot	5	det	_	wf="всемъ"
5	ратьманомъ	ратманъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	2	conj	_	wf="ратьманомъ"

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 appos	color:blue
1	А	а	CCONJ	_	_	3	cc	_	wf="А"
2	ѧзъ	азъ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	wf="ѧзъ"
3	кланѧюсѧ	кланятися	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	wf="кланѧюсѧ"
4	и	и	CCONJ	_	_	5	cc	_	wf="и"
5	бласловлѧю	благословляти	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	wf="бласловлѧю"
6	і	и	CCONJ	_	_	8	cc	_	wf="і"
7	Бога	богъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	8	obj	_	wf="Бога"
8	молю	молити	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	wf="молю"
9	за	за	ADP	_	_	10	case	_	wf="за"
10	васъ	вы	PRON	_	Case=Acc|Number=Plur|Person=2|PronType=Prs	8	obl	_	wf="васъ"|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	дѣти	дѣтя	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	10	appos	_	wf="дѣти"
13	своѣ	свой	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	12	det	_	wf="своѣ"|SpaceAfter=No
14	.	.	PUNCT	_	_	3	punct	_	_

~~~


