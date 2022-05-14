---
layout: base
title:  'Statistics of csubj in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `csubj`

This relation is universal.

11 nodes (0%) are attached to their parents as `csubj`.

7 instances of `csubj` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.63636363636364.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (5; 45% instances), <tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="orv_birchbark-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (1; 9% instances), <tt><a href="orv_birchbark-pos-X.html">X</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj	color:blue
1	нн	нѣ	VERB	_	_	0	root	_	wf="нн"|meaning="нет_не_имеется"|addr="477:5"|line_id=5|SpaceAfter=Yes
2	чимь	что	PRON	_	Case=Ins|Gender=Neut|Number=Sing	3	iobj	_	wf="чимь"|addr="477:5"|SpaceAfter=Yes
3	пособити	пособити	VERB	_	VerbForm=Inf|Voice=Act	1	csubj	_	wf="пособити"|addr="477:5"|SpaceAfter=Yes
4	нѣ	нѣ	VERB	_	_	1	conj	_	wf="нѣ"|meaning="нет_не_имеется"|addr="477:5"|SpaceAfter=Yes
5	ꙩ	о	ADP	_	_	6	case	_	wf="ꙩ"|addr="477:5"|SpaceAfter=Yes
6	че	что	PRON	_	Case=Acc|PronType=Rel	8	obl	_	wf="че"|addr="477:5"|SpaceAfter=Yes
7	и	и	CCONJ	_	_	8	cc	_	wf="и"|addr="477:5"|SpaceAfter=Yes
8	сѣдит[и]	сѣдѣти	VERB	_	VerbForm=Inf|Voice=Act	4	csubj	_	wf="сѣдити"|addr="477:5"|SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 csubj	color:blue
1	а	а	CCONJ	_	_	2	cc	_	wf="а"|addr="765:5"|line_id=5|SpaceAfter=Yes
2	уомилоседри[с]ѧ	умилосердитисѧ	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Mid	0	root	_	wf="уомилоседрисѧ"|addr="765:5"|SpaceAfter=Yes
3	брать	братъ	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	2	vocative	_	wf="брать"|addr="765:5"|SpaceAfter=Yes
4	дае	даꙗти	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	parataxis	_	wf="дае"|addr="765:5"|SpaceAfter=Yes
5	ми	ꙗзъ	PRON	_	Case=Dat|Clitic=Yes|Number=Sing|Person=1	4	iobj	_	wf="ми"|addr="765:5"|SpaceAfter=Yes
6	место	мѣсто	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	4	obj	_	wf="место"|addr="765:5"|SpaceAfter=Yes
7	зади	зади	ADV	_	_	4	advmod	_	wf="зади"|addr="765:5"|SpaceAfter=Yes
8	не	не	PART	_	_	10	advmod	_	wf="не"|addr="765:5"|SpaceAfter=Yes
9	на	на	ADP	_	_	10	case	_	wf="на"|addr="765:5"|SpaceAfter=Yes
10	цеме	что	PRON	_	Case=Loc|PronType=Rel	4	parataxis	_	wf="цеме"|addr="765:5"|SpaceAfter=Yes
11	сѧ	себя	PRON	_	Case=Acc|Clitic=Yes|PronType=Prs|Reflex=Yes	12	expl	_	wf="сѧ"|addr="765:5"|SpaceAfter=Yes
12	ко<lbr/>рмити	кормитисѧ	VERB	_	VerbForm=Inf|Voice=Mid	10	csubj	_	wf="кормити"|stats="no"|addr="765:5"|SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 csubj	color:blue
1	а	а	CCONJ	_	_	5	cc	_	wf="а"|addr="446:6"|SpaceAfter=Yes
2	намъ	мы	PRON	_	Case=Dat|Number=Plur|Person=1	5	iobj	_	wf="намъ"|comment="clitic_ton"|addr="446:6"|SpaceAfter=Yes
3	ѻсподине	осподинъ	NOUN	_	Case=Voc|Gender=Masc|Number=Sing	5	vocative	_	wf="ѻсподине"|addr="446:7"|line_id=7|SpaceAfter=Yes
4	·	·	PUNCT	_	_	5	punct	_	wf="·"|SpaceAfter=Yes
5	немоч[ь]но	немочныи	ADJ	_	Case=Nom|Gender=Neut|Number=Sing|Variant=Short	0	root	_	wf="немочьно"|addr="446:7"|SpaceAfter=Yes
6	жить	жити	VERB	_	VerbForm=Inf|Voice=Act	5	csubj	_	wf="жить"|addr="446:7"|SpaceAfter=Yes
7	·	·	PUNCT	_	_	5	punct	_	wf="·"|SpaceAfter=Yes

~~~


