---
layout: base
title:  'Statistics of obl:tmod in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="orv_rnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_rnc-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_rnc-dep-obl-float.html">obl:float</a></tt>, <tt><a href="orv_rnc-dep-obl-pronmod.html">obl:pronmod</a></tt>.

635 nodes (1%) are attached to their parents as `obl:tmod`.

411 instances of `obl:tmod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.83307086614173.

The following 7 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (583; 92% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (17; 3% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt> (15; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (12; 2% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt>-<tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 5 obl:tmod	color:blue
1	На	на	ADP	_	_	2	case	_	wf="На"|_
2	оборотѣ	оборотъ	NOUN	_	Case=Loc|Gender=Masc|Number=Sing	0	root	_	wf="оборотѣ"
3	помѣта	помѣта	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	wf="помѣта"|SpaceAfter=No
4	:	:	PUNCT	_	_	12	punct	_	wf=":"|_
5	205	205	ADJ	_	Case=Gen|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	12	obl:tmod	_	upos="ANUM"|wf="205"|SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	wf=","|_
7	маія	май	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	10	nmod	_	wf="маія"
8	въ	въ	ADP	_	_	10	case	_	wf="въ"|_
9	24	24	ADJ	_	Case=Acc|Gender=Masc|Number=Sing|NumForm=Digit|NumType=Ord	10	amod	_	upos="ANUM"|wf="24"
10	день	день	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	5	nmod	_	wf="день"|SpaceAfter=No
11	,	,	PUNCT	_	_	10	punct	_	wf=","|_
12	взять	взяти	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	3	parataxis	_	wf="взять"
13	къ	къ	ADP	_	_	14	case	_	wf="къ"|_
14	дѣлу	дѣло	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	12	obl	_	wf="дѣлу"|SpaceAfter=No
15	.	.	PUNCT	_	_	2	punct	_	wf="."|_

~~~


