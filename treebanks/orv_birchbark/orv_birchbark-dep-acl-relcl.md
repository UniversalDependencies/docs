---
layout: base
title:  'Statistics of acl:relcl in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="orv_birchbark-dep-acl.html">acl</a></tt>.

28 nodes (0%) are attached to their parents as `acl:relcl`.

19 instances of `acl:relcl` (68%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.75.

The following 10 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (12; 43% instances), <tt><a href="orv_birchbark-pos-DET.html">DET</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (8; 29% instances), <tt><a href="orv_birchbark-pos-DET.html">DET</a></tt>-<tt><a href="orv_birchbark-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-DET.html">DET</a></tt>-<tt><a href="orv_birchbark-pos-SCONJ.html">SCONJ</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-DET.html">DET</a></tt>-<tt><a href="orv_birchbark-pos-X.html">X</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_birchbark-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-NUM.html">NUM</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt>-<tt><a href="orv_birchbark-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="orv_birchbark-pos-X.html">X</a></tt>-<tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl:relcl	color:blue
1	+	+	SYM	_	_	3	parataxis	_	wf="+"|_
2	[се]и	сеи	DET	_	Case=Nom|Gender=Masc|Number=Sing	3	det	_	wf="сеи"|addr="727:2"|_
3	дн҃[е]	день	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	wf="дн҃е"|addr="727:2"|_
4	+	+	SYM	_	_	6	parataxis	_	wf="+"|_
5	ижь	иже	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	6	obj	_	wf="ижь"|addr="727:3"|line_id=3|_
6	сътвори	створити	VERB	_	Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:relcl	_	wf="сътвори"|tense=aor|ctxt_comment="creare"|addr="727:3"|_
7	господѣ	Господь	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	wf="господѣ"|addr="727:3"|_
8	возрадꙋемъсѧ	возрадоватисѧ	VERB	_	Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Mid	3	parataxis	_	wf="возрадꙋемъсѧ"|comment="tense_nonpast"|addr="727:3"|_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 acl:relcl	color:blue
1	а	а	CCONJ	_	_	3	cc	_	wf="а"|addr="163:2"|line_id=2|_
2	тꙑ	ты	PRON	_	Case=Nom|Number=Sing|Person=2	3	nsubj	_	wf="тꙑ"|addr="163:2"|_
3	прода[е]	продаꙗти	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	wf="продае"|addr="163:2"|_
4	коне	конь	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	3	obj	_	wf="коне"|addr="163:2"|_
5	колико	колько	NUM	_	Case=Acc|NumType=Card	7	obj	_	wf="колико"|ctxt_comment="сколько_тебе_или_сколько_бы_ни"|addr="163:2"|_
6	ти	ты	PRON	_	Case=Dat|Clitic=Yes|Number=Sing|Person=2	7	iobj	_	wf="ти"|comment=PART?|addr="163:2"|_
7	водадѧ	вдати	VERB	_	Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	3	advcl	_	wf="водадѧ"|comment="tense_nonpast"|addr="163:2"|_
8	а	а	CCONJ	_	_	10	cc	_	wf="а"|addr="163:2"|_
9	чето	что	PRON	_	Case=Acc|PronType=Rel	10	obj	_	wf="чето"|addr="163:2"|_
10	потерѧеш[и]	потерѧти	VERB	_	Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	12	acl:relcl	_	wf="потерѧеши"|comment="tense_nonpast"|addr="163:2"|_
11	а	а	CCONJ	_	_	13	cc	_	wf="а"|addr="163:3"|line_id=3|_
12	то	тотъ	DET	_	Case=Acc|Gender=Neut|Number=Sing	13	obj	_	wf="то"|addr="163:3"|_
13	помени	помнити	VERB	_	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	3	conj	_	wf="помени"|addr="163:3"|_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 acl:relcl	color:blue
1	у	у	ADP	_	_	2	case	_	wf="у"|addr="1054:_Оборот:7"|line_id=7|_
2	кого	кто	PRON	_	Case=Gen|Number=Sing	5	acl:relcl	_	wf="кого"|addr="1054:_Оборот:7"|_
3	грамота	грамота	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	wf="грамота"|addr="1054:_Оборот:7"|_
4	у	у	ADP	_	_	5	case	_	wf="у"|addr="1054:_Оборот:7"|_
5	того	тотъ	DET	_	Case=Gen|Gender=Masc|Number=Sing	0	root	_	wf="того"|addr="1054:_Оборот:7"|_
6	полуторъ	полтора	NUM	_	Case=Nom|Gender=Fem|Number=Sing|NumType=Card	7	nummod:gov	_	wf="полуторъ"|addr="1054:_Оборот:8"|line_id=8|_
7	грѣвни	гривна	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	5	nsubj	_	wf="грѣвни"|addr="1054:_Оборот:8"|_

~~~


