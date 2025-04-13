---
layout: base
title:  'Statistics of aux:pass in UD_Old_East_Slavic-RNC'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-RNC: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="orv_rnc-dep-aux.html">aux</a></tt>.

131 nodes (0%) are attached to their parents as `aux:pass`.

105 instances of `aux:pass` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36641221374046.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="orv_rnc-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (130; 99% instances), <tt><a href="orv_rnc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_rnc-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 aux:pass	color:blue
1	Како	како	ADV	_	Degree=Pos|PronType=Rel	2	advmod	_	upos="ADVPRO"|_
2	снесенно	снести	VERB	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|Variant=Short|VerbForm=Part|Voice=Pass	0	root	_	_
3	бысть	быти	AUX	Tense=Aor	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	aux:pass	_	_
4	о	о	ADP	_	_	5	case	_	_
5	томъ	то	PRON	_	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	2	obl	_	_
6	на	на	ADP	_	_	7	case	_	_
7	исчадия	исчадие	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	2	obl	_	_
8	его	и	PRON	_	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	det	_	_
9	проклятие	проклятие	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	nsubj	_	SpaceAfter=No
10	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 aux:pass	color:blue
1	Вѣдомо	вѣдомо	ADJ	PRED	Degree=Pos	0	root	_	upos="PRAEDIC"|norm="Вѣдомо"|Decl=X|End=омо
2	жъ	же	PART	_	_	1	advmod	_	norm="жъ"
3	бысть	быти	AUX	Tense=Aor	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	aux:pass	_	norm="бысть"|Decl=X|End=ьтс
4	поганымъ	поганый	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	1	iobj	_	norm="поганымъ"|Decl=X|End=ъмы|SpaceAfter=No
5	,	,	PUNCT	_	_	13	punct	_	norm=","
6	яко	яко	SCONJ	_	_	13	mark	_	norm="яко"
7	атамана	атаманъ	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	13	obj	_	norm="атамана"|Decl=2|End=а
8	Івана	Иванъ	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Giv|Number=Sing	7	appos	_	norm="Івана"|Decl=2|End=а|[G]
9	Колца	Кольцо	PROPN	_	Animacy=Anim|Case=Acc|Gender=Masc|NameType=Sur|Number=Sing	8	flat:name	_	norm="Колца"|Decl=2|End=а|[G]
10	с	съ	ADP	_	_	11	case	_	norm="с"|check=@
11	товарыщи	товарищь	NOUN	_	Case=Ins|Gender=Masc|Number=Plur	7	nmod	_	norm="товарыщи"|Decl=2|End=и|check=@
12	Карача	Карача	PROPN	_	Case=Nom|Gender=Masc|NameType=Giv|Number=Sing	13	nsubj	_	norm="Карача"|Decl=2|End=а
13	убилъ	убити	VERB	_	Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	1	ccomp	_	norm="убилъ"|Decl=X|End=ъл|SpaceAfter=No
14	,	,	PUNCT	_	_	13	punct	_	norm=","
15	и	и	CCONJ	_	_	16	cc	_	norm="и"
16	начаша	начати	VERB	Tense=Aor	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	norm="начаша"|Decl=X|End=аш
17	по	по	ADP	_	_	19	case	_	norm="по"|check=@
18	многимъ	многий	DET	_	Case=Dat|Gender=Neut|Number=Plur|PronType=Tot	19	det	_	norm="многимъ"|Decl=X|End=ъми|check=@
19	местамъ	мѣсто	NOUN	_	Case=Dat|Gender=Neut|Number=Plur	28	obl	_	norm="местамъ"|Decl=2|End=ъма|SpaceAfter=No|check=@
20	,	,	PUNCT	_	_	22	punct	_	norm=","
21	по	по	ADP	_	_	22	case	_	norm="по"|check=@
22	волостямъ	волость	NOUN	_	Case=Dat|Gender=Fem|Number=Plur	19	appos	_	norm="волостямъ"|Decl=1a|End=ъмя|check=@
23	и	и	CCONJ	_	_	25	cc	_	norm="и"
24	по	по	ADP	_	_	25	case	_	norm="по"|check=@
25	улусамъ	улусъ	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	22	conj	_	norm="улусамъ"|Decl=2|End=ъма|check=@
26	казаковъ	казакъ	NOUN	_	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	28	obj	_	norm="казаковъ"|Decl=2|End=ъво
27	поганіи	поганый	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	16	nsubj	_	norm="поганіи"|Decl=X|End=иі
28	побивати	побивати	VERB	_	Aspect=Imp|VerbForm=Inf|Voice=Act	16	xcomp	_	norm="побивати"|Decl=X|End=ит|SpaceAfter=No
29	.	.	PUNCT	_	_	1	punct	_	norm="."

~~~


