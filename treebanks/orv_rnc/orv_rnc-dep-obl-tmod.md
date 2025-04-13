---
layout: base
title:  'Statistics of obl:tmod in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="orv_rnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_rnc-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_rnc-dep-obl-float.html">obl:float</a></tt>, <tt><a href="orv_rnc-dep-obl-pronmod.html">obl:pronmod</a></tt>.

1166 nodes (1%) are attached to their parents as `obl:tmod`.

669 instances of `obl:tmod` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.05660377358491.

The following 13 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1015; 87% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (39; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (38; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (30; 3% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (20; 2% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (6; 1% instances), <tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="orv_rnc-pos-DET.html">DET</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 obl:tmod	color:blue
1	А	а	CCONJ	_	_	5	cc	_	wf="А"|_
2	Тимошка	Тимошка	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	5	nsubj	_	wf="Тимошка"|_
3	и	и	CCONJ	_	_	4	cc	_	wf="и"|_
4	Савка	Савка	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	2	conj	_	wf="Савка"|_
5	живут	жити	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="живут"|_
6	с	съ	ADP	_	_	7	case	_	wf="с"|_
7	овгуста	августъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	wf="овгуста"|_
8	с	съ	ADP	_	_	10	case	_	wf="с"|_
9	7-г(о)	7-й	ADJ	ANUM	Case=Gen|Gender=Neut|Number=Sing|NumForm=Combi|NumType=Ord	10	amod	_	wf="7-го"|_
10	числа	число	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	5	obl:tmod	_	wf="числа"|SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	wf="."|_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:tmod	color:blue
1	буди	быти	AUX	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	4	cop	_	Norm="буди"
2	гсдрь	государь	NOUN	_	Abbr=Yes|Case=Nom|Gender=Masc|Number=Sing	4	vocative	_	Norm="гсдрь"
3	мои	мой	DET	_	Case=Nom|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	2	det	_	Norm="мои"
4	здорово	здоровый	ADJ	_	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Variant=Short	0	root	_	Norm="здорово"
5	на	на	ADP	_	_	7	case	_	Norm="на"
6	многие	многий	DET	_	Case=Acc|Gender=Neut|Number=Plur|PronType=Tot	7	det	_	Norm="многие"
7	лѣта	лѣто	NOUN	_	Case=Acc|Gender=Neut|Number=Plur	4	obl:tmod	_	Norm="лѣта"

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 obl:tmod	color:blue
1	160-го	160-й	ADJ	ORD	Case=Gen|Gender=Masc|Number=Sing|NumForm=Combi|NumType=Ord	6	obl:tmod	_	upos="ANUM"|norm="160-го"|Decl=ANUM|End=ог
2	маия	май	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	norm="маия"|Decl=2|End=яи
3	в	въ	ADP	_	_	5	case	_	norm="в"|check=@
4	9	9	ADJ	ORD	Case=Acc|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	5	amod	_	upos="ANUM"|norm="9"|Decl=ANUM|End=_|check=@
5	день	день	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	1	nmod	_	norm="день"|Decl=2|End=ь0|check=@
6	подал	подати	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	0	root	_	norm="подал"|Decl=X|End=л
7	Семен	Семенъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	6	nsubj	_	norm="Семен"|Decl=2|End=0|[G]
8	Кузьминской	Кузьминский	PROPN	_	Case=Nom|Gender=Masc|NameType=Sur|Number=Sing	7	flat:name	_	norm="Кузьминской"|Decl=A|End=йо|[G]|SpaceAfter=No
9	.	.	PUNCT	_	_	6	punct	_	norm="."

~~~


