---
layout: base
title:  'Statistics of obl:tmod in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="orv_birchbark-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="orv_birchbark-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_birchbark-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_birchbark-dep-obl-float.html">obl:float</a></tt>.

2 nodes (0%) are attached to their parents as `obl:tmod`.

1 instances of `obl:tmod` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 1 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:tmod	color:blue
1	а	а	CCONJ	CONJ	_	4	cc	_	wf="а"|addr="521:_Вторая_запись:4б"
2	то	тотъ	DET	APRO,sg,n,nom	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj	_	wf="то"|addr="521:_Вторая_запись:4б"
3	се	сѧ	PRON	SPRO,dat,refl,ton	Case=Dat|PronType=Prs|Reflex=Yes	4	expl:pv	_	wf="се"|addr="521: Вторая запись:4б"
4	деѧло	дѣꙗтисѧ	VERB	V,l-partcp,perf,sg,3p,n,without_copula	Gender=Neut|Number=Sing|Person=3|Tense=Past|VerbForm=PartRes|Voice=Mid	0	root	_	wf="деяло"|tense=perf|comment="without_copula"|addr="521: Вторая запись:4б"
5	…	…	PUNCT	_	_	6	punct	_	wf="…"|line_id="5б"|addr="521: Вторая запись:5б"
6	дн҃и	день	NOUN	S,m,sg?,loc?	Case=Loc|Gender=Masc|Number=Sing	4	obl:tmod	_	wf="дни"|comment="sg?,loc?,case_unsure"|addr="521: Вторая запись:5б"
7	межи	межи	ADP	PR,gvrn:ins	_	8	case	_	wf="межи"|comment="gvrn:ins"|addr="521:_Вторая_запись:5б"
8	гор(а)ми	Горы	PROPN	S,topon,f,pl,ins,fragment	Case=Ins|Fragment=Yes|Gender=Fem|NameType=Geo|Number=Plur	4	obl	_	wf="горами"|addr="521:_Вторая_запись:5б"
9	горками	Горкы	PROPN	S,topon,f,pl,ins	Case=Ins|Gender=Fem|NameType=Geo|Number=Plur	8	conj	_	wf="горками"|addr="521:_Вторая_запись:5б"
10	на	на	ADP	PR,gvrn:loc	_	11	case	_	wf="на"|comment="gvrn:loc"|line_id="6б"|addr="521:_Вторая_запись:6б"
11	бору	боръ	PROPN	S,persn?,m,sg,loc	Case=Loc|Gender=Masc|NameType=Giv|Number=Sing	8	nmod	_	wf="бору"|comment="persn?"|meaning="побор, налог"|addr="521:_Вторая_запись:6б"

~~~


