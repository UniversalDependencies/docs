---
layout: base
title:  'Statistics of discourse in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `discourse`

This relation is universal.

585 nodes (0%) are attached to their parents as `discourse`.

302 instances of `discourse` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.22905982905983.

The following 15 pairs of parts of speech are connected with `discourse`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (293; 50% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (67; 11% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (63; 11% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (31; 5% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (29; 5% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (25; 4% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (21; 4% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (19; 3% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (16; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (12; 2% instances), <tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt>-<tt><a href="orv_rnc-pos-PART.html">PART</a></tt> (5; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-INTJ.html">INTJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	А	а	CCONJ	_	_	2	cc	_	_
2	шли	итти	VERB	_	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	_
3	деи	деи	PART	_	_	2	discourse	_	_
4	назад	назадъ	ADV	_	Degree=Pos	2	advmod	_	_
5	тем	тотъ	DET	_	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	7	det	_	_
6	же	же	PART	_	_	5	advmod	_	_
7	местом	мѣсто	NOUN	_	Case=Ins|Gender=Neut|Number=Sing	2	obl	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	которым	который	DET	_	Case=Ins|Gender=Neut|Number=Sing|PronType=Rel	10	obl	_	_
10	шли	итти	VERB	_	Number=Plur|Tense=Past|VerbForm=PartRes|Voice=Act	7	acl:relcl	_	_
11	к	къ	ADP	_	_	12	case	_	_
12	Асторохани	Асторохань	PROPN	_	Case=Dat|Gender=Fem|NameType=Geo|Number=Sing	10	obl	_	SpaceAfter=No
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 discourse	color:blue
1	А	а	CCONJ	_	_	7	cc	_	wf="А"
2	прикащик	приказчикъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	7	nsubj	_	wf="прикащик"
3	де	де	PART	_	_	2	discourse	_	wf="де"
4	у	у	ADP	_	_	6	case	_	wf="у"
5	тово	тотъ	DET	_	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	wf="тово"
6	белевца	бѣлевецъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	7	obl	_	wf="белевца"
7	кр(е)стьянин	крестьянинъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	wf="креетьянин"
8	Микиткаю	Микитка	PROPN	_	Case=Ins|Gender=Masc|NameType=Giv|Number=Sing	9	xcomp	_	wf="Микиткаю"
9	[зовут]	звати	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	_	wf="."

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 discourse	color:blue
1	[Начало	начало	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	2	nsubj:pass	_	_
2	оторвано]	оторвати	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	10	parataxis	_	_
3	...	...	PUNCT	_	_	10	punct	_	_
4	про	про	ADP	_	_	5	case	_	_
5	то	то	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	10	obl	_	_
6	де	де	PART	_	_	5	discourse	_	_
7	онъ	онъ	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
8	Захарко	Захарко	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	7	appos	_	_
9	не	не	PART	_	Polarity=Neg	10	advmod	_	_
10	вѣдаетъ	вѣдати	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	_	_	10	punct	_	_

~~~


