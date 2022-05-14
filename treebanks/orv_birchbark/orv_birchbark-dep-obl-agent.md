---
layout: base
title:  'Statistics of obl:agent in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="orv_birchbark-dep-obl.html">obl</a></tt>.

2 nodes (0%) are attached to their parents as `obl:agent`.

1 instances of `obl:agent` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `obl:agent`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (1; 50% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 21 obl:agent	color:blue
1	цто	что	PRON	_	Case=Acc|PronType=Int	7	det	_	wf="цто"|addr="370:2"|line_id=2|SpaceAfter=Yes
2	ѥси	быти	AUX	_	Analyt=Yes|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	wf="ѥси"|addr="370:2"|SpaceAfter=Yes
3	даль	дати	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=PartRes|Voice=Act	12	dislocated	_	wf="даль"|tense=perf|addr="370:2"|SpaceAfter=Yes
4	·	·	PUNCT	_	_	5	punct	_	wf="·"|SpaceAfter=Yes
5	намъ	мы	PRON	_	Case=Dat|Number=Plur|Person=1	3	iobj	_	wf="намъ"|comment="clitic_ton"|addr="370:2"|SpaceAfter=Yes
6	за	за	ADP	_	_	7	case	_	wf="за"|addr="370:2"|SpaceAfter=Yes
7	клуцка	ключникъ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	3	obj	_	wf="клуцка"|addr="370:2"|SpaceAfter=Yes
8	·	·	PUNCT	_	_	3	punct	_	wf="·"|SpaceAfter=Yes
9	за	за	ADP	_	_	10	case	_	wf="за"|addr="370:2"|SpaceAfter=Yes
10	насъ	мы	PRON	_	Case=Acc|Number=Plur|Person=1	12	obl	_	wf="насъ"|comment="clitic_ton"|addr="370:2"|SpaceAfter=Yes
11	не	не	PART	_	_	12	advmod	_	wf="не"|addr="370:2"|SpaceAfter=Yes
12	стоть	стоꙗти	VERB	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="стоть"|comment="tense_nonpast"|addr="370:2"|SpaceAfter=Yes
13	·	·	PUNCT	_	_	15	punct	_	wf="·"|SpaceAfter=Yes
14	насъ	мы	PRON	_	Case=Acc|Number=Plur|Person=1	15	obj	_	wf="насъ"|addr="370:3"|line_id=3|SpaceAfter=Yes
15	продаѥть	продаꙗти	VERB	_	Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	conj	_	wf="продаѥть"|comment="tense_nonpast"|ctxt_comment="штрафует"|addr="370:3"|SpaceAfter=Yes
16	·	·	PUNCT	_	_	18	punct	_	wf="·"|SpaceAfter=Yes
17	и	и	CCONJ	_	_	18	cc	_	wf="и"|addr="370:3"|SpaceAfter=Yes
18	крадони	окрасти	VERB	_	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	12	conj	_	wf="крадони"|addr="370:3"|SpaceAfter=Yes
19	·	·	PUNCT	_	_	21	punct	_	wf="·"|SpaceAfter=Yes
20	ѿ	отъ	ADP	_	_	21	case	_	wf="ѿ"|addr="370:3"|SpaceAfter=Yes
21	ного	и	PRON	_	Case=Gen|Gender=Masc|Number=Sing	18	obl:agent	_	wf="ного"|addr="370:3"|SpaceAfter=Yes
22	·	·	PUNCT	_	_	18	punct	_	wf="·"|SpaceAfter=Yes
23	ѥсми	быти	AUX	_	Analyt=Yes|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	18	aux	_	wf="ѥсми"|addr="370:3"|SpaceAfter=Yes
24	·	·	PUNCT	_	_	12	punct	_	wf="·"|SpaceAfter=Yes

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:agent	color:blue
1	ѹ	у	ADP	_	_	2	case	_	wf="ѹ"|addr="225:2"|line_id=2|SpaceAfter=Yes
2	михалѧ	Михаль	PROPN	_	Case=Gen|Gender=Masc|NameType=Giv|Number=Sing	3	obl:agent	_	wf="михалѧ"|addr="225:2"|SpaceAfter=Yes
3	ѿберан(а	отобрати	VERB	_	Case=Nom|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	wf="ѿберана"|addr="225:2"|SpaceAfter=Yes
4	по)<lbr/>ловина	половина	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	3	nsubj:pass	_	wf="половина"|addr="225:2"|SpaceAfter=Yes
5	беле	бѣла	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	wf="беле"|comment="aggr"|meaning="беличьи_шкурки"|addr="225:3"|line_id=3|SpaceAfter=Yes
6	са--	самъ	DET	_	Case=Nom|Gender=Fem|Number=Sing	7	det	_	wf="са--"|comment=gender_unsure|comment=lemma_unsure|addr="225:3"|SpaceAfter=Yes
7	добра	добрыи	ADJ	_	Case=Nom|Gender=Fem|Number=Sing|Variant=Short	9	nsubj	_	wf="добра"|comment=number_unsure|comment=gender_unsure|comment=case_unsure|addr="225:4"|line_id=4|SpaceAfter=Yes
8	же	же	PART	_	_	7	advmod	_	wf="же"|comment=rupture|addr="225:4"|SpaceAfter=Yes
9	мехе	мѣхъ	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	3	conj	_	wf="мехе"|ctxt_comment="_мех"|meaning="мешок"|addr="225:4"|SpaceAfter=Yes
10	од(ине)	одинъ	NUM	_	Case=Nom|Gender=Masc|NumType=Card	9	nummod	_	wf="одине"|comment=lemma_unsure|addr="225:4"|SpaceAfter=Yes

~~~


