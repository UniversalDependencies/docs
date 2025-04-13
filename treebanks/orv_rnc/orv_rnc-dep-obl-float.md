---
layout: base
title:  'Statistics of obl:float in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `obl:float`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-obl.html">obl</a></tt>.
There are also 4 other language-specific subtypes of `obl`: <tt><a href="orv_rnc-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_rnc-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_rnc-dep-obl-pronmod.html">obl:pronmod</a></tt>, <tt><a href="orv_rnc-dep-obl-tmod.html">obl:tmod</a></tt>.

104 nodes (0%) are attached to their parents as `obl:float`.

69 instances of `obl:float` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.21153846153846.

The following 9 pairs of parts of speech are connected with `obl:float`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (78; 75% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (7; 7% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (5; 5% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (5; 5% instances), <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="orv_rnc-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_rnc-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_rnc-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="orv_rnc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_rnc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 obl:float	color:blue
1	А	а	CCONJ	_	_	2	cc	_	Norm="А"
2	ведают	вѣдати	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Norm="ведают"
3	их	они	PRON	_	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	2	obj	_	Norm="их"
4	и	и	CCONJ	_	_	5	cc	_	Norm="и"
5	судят	судити	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	Norm="судят"
6	Кузма	Кузьма	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	2	nsubj	_	Norm="Кузма"
7	да	да	CCONJ	_	_	8	cc	_	Norm="да"
8	Осип	Осипъ	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	6	conj	_	Norm="Осип"
9	сами	самъ	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Emp	2	obl:float	_	Norm="сами"|SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	Norm="."

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 obl:float	color:blue
1	Однолично	однолично	ADV	_	Degree=Pos	7	advmod	_	norm="Однолично"
2	бы	бы	AUX	_	Analyt=Yes|Mood=Cnd	7	aux	_	norm="бы"|Decl=X|End=0
3	против	противъ	ADP	_	_	5	case	_	norm="против"|check=@
4	сей	сей	DET	_	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	5	det	_	norm="сей"|Decl=X|End=йе|check=@
5	памяти	память	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	7	obl	_	norm="памяти"|Decl=3|End=и|check=@
6	рыба	рыба	NOUN	Case=Nom1	Case=Nom|Gender=Fem|Number=Sing	7	obj	_	norm="рыба"|Decl=1a|End=а
7	изловить	изловити	VERB	_	Aspect=Perf|VerbForm=Inf|Voice=Act	0	root	_	norm="изловить"|Decl=X|End=ьт
8	и	и	CCONJ	_	_	9	cc	_	norm="и"
9	велеть	велѣти	VERB	_	VerbForm=Inf|Voice=Act	7	conj	_	norm="велеть"|Decl=X|End=ьт
10	беречь	беречи	VERB	_	VerbForm=Inf|Voice=Act	9	xcomp	_	norm="беречь"|Decl=X|End=ьч|SpaceAfter=No
11	,	,	PUNCT	_	_	15	punct	_	norm=","
12	чтоб	чтобы	SCONJ	_	_	15	mark	_	norm="чтоб"
13	была	быти	AUX	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	15	cop	_	norm="была"|Decl=X|End=ал
14	вся	весь	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	15	obl:float	_	norm="вся"|Decl=X|End=я
15	жива	живой	ADJ	_	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Variant=Short	10	advcl	_	norm="жива"|Decl=X|End=а|SpaceAfter=No
16	.	.	PUNCT	_	_	7	punct	_	norm="."

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 obl:float	color:blue
1	А	а	CCONJ	_	_	5	cc	_	norm="А"
2	тая	тотъ	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	_	norm="тая"|Decl=X|End=яа|check=@
3	земля	земля	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	norm="земля"|Decl=1a|End=я|check=@
4	и	и	CCONJ	_	_	5	cc	_	norm="и"
5	пожни	пожня	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	3	conj	_	norm="пожни"|Decl=1a|End=и|check=@
6	всѣ	весь	DET	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Tot	8	obl:float	_	norm="всѣ"|Decl=X|End=ѣ|check=@
7	без	безъ	ADP	_	_	8	case	_	norm="без"|check=@
8	вывѣта	вывѣтъ	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	norm="вывѣта"|Decl=2|End=а|check=@
9	святѣи	святой	ADJ	_	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	10	amod	_	norm="святѣи"|Decl=X|End=иѣ|check=@
10	Богородицы	богородица	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	8	nmod	_	norm="Богородицы"|Decl=1a|End=ы|check=@
11	Покрову	покровъ	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	3	orphan	_	norm="Покрову"|Decl=2|End=у
12	и	и	CCONJ	_	_	14	cc	_	norm="и"
13	святому	святой	ADJ	_	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	14	amod	_	norm="святому"|Decl=X|End=умо|check=@
14	Николѣ	Никола	PROPN	_	Case=Dat|Gender=Masc|NameType=Giv|Number=Sing	11	conj	_	norm="Николѣ"|Decl=1a|End=ѣ|check=@
15	на	на	ADP	_	_	16	case	_	norm="на"|check=@
16	Островокъ	Островокъ	PROPN	_	Case=Acc|Gender=Masc|NameType=Geo|Number=Sing	3	orphan	_	norm="Островокъ"|Decl=2|End=ъ0|check=@
17	в	въ	ADP	_	_	18	case	_	norm="в"|check=@
18	вѣки	вѣкъ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	3	orphan	_	norm="вѣки"|Decl=2|End=и|SpaceAfter=No|check=@
19	.	.	PUNCT	_	_	3	punct	_	norm="."

~~~


