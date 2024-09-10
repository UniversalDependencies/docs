---
layout: base
title:  'Statistics of ccomp in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `ccomp`

This relation is universal.

284 nodes (0%) are attached to their parents as `ccomp`.

272 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.14788732394366.

The following 15 pairs of parts of speech are connected with `ccomp`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (224; 79% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (19; 7% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (12; 4% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-ADP.html">ADP</a></tt>-<tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	а	а	CCONJ	_	_	3	cc	_	_
2	он	онъ	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	сказывалъ	сказывати	VERB	_	Aspect=Imp|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	_
4	что	что	SCONJ	_	_	7	mark	_	_
5	тою	тотъ	DET	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	_
6	челобитную	челобитная	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	_
7	отдалъ	отдати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	3	ccomp	_	_
8	де	де	PART	_	_	7	discourse	_	_
9	Савы	Сава	PROPN	_	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	7	iobj	_	_
10	Еѳимовичю	Ефимовичь	PROPN	_	Case=Dat|Gender=Masc|NameType=Pat|Number=Sing	9	flat:name	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	И	и	CCONJ	_	_	5	cc	_	Norm="И"
2	не	не	PART	_	Polarity=Neg	3	advmod	_	Norm="не"
3	вотще	вотще	ADV	_	Degree=Pos	5	advmod	_	Norm="вотще"
4	сіꙗ	сей	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	3	nsubj:pass	_	Norm="сіꙗ"
5	рекошасꙗ	рещи	VERB	Tense=Imp	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Reflex=Yes|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Norm="рекошасꙗ"|SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	Norm=","
7	ꙗко	яко	SCONJ	_	_	9	mark	_	Norm="ꙗко"
8	всꙗ	весь	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Tot	9	det	_	Norm="всꙗ"
9	стран(н)аꙗ	странный	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Plur	5	ccomp	_	Norm="страннаꙗ"
10	etc.	etc.	X	_	Foreign=Yes	9	dep	_	Norm="etc."

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 12 ccomp	color:blue
1	Не	не	PART	_	Polarity=Neg	2	advmod	_	_
2	ведаете	вѣдати	VERB	_	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ли	ли	PART	_	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	12	punct	_	_
5	что	что	SCONJ	_	_	12	mark	_	_
6	всее	весь	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Tot	8	det	_	_
7	Русские	русский	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	земли	земля	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	9	nmod	_	_
9	владыки	владыка	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	12	nsubj	_	_
10	под	подъ	ADP	_	_	12	case	_	_
11	моею	мой	DET	_	Case=Ins|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	12	det	_	_
12	властию	власть	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	2	ccomp	_	_
13	суть	быти	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	cop	_	_
14	и	и	CCONJ	_	_	17	cc	_	_
15	в	въ	ADP	_	_	17	case	_	_
16	моей	мой	DET	_	Case=Loc|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	17	det	_	_
17	воли	воля	NOUN	_	Case=Loc|Gender=Fem|Number=Sing	12	conj	_	SpaceAfter=No
18	?	?	PUNCT	_	_	2	punct	_	_

~~~


