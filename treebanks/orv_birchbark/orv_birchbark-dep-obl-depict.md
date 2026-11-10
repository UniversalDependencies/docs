---
layout: base
title:  'Statistics of obl:depict in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `obl:depict`

This relation is a language-specific subtype of <tt><a href="orv_birchbark-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="orv_birchbark-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_birchbark-dep-obl-float.html">obl:float</a></tt>, <tt><a href="orv_birchbark-dep-obl-tmod.html">obl:tmod</a></tt>.

1 nodes (0%) are attached to their parents as `obl:depict`.

1 instances of `obl:depict` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `obl:depict`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:depict	color:blue
1	строви	сторовыи	ADJ	A,m,pl,nom,brev	Case=Nom|Gender=Masc|Number=Plur|Variant=Short	0	root	_	wf="строви"|addr="1211:3"
2	же	же	PART	PART	_	1	advmod	_	wf="же"|addr="1211:3"
3	ми	ꙗзъ	PRON	SPRO,sg,1p,dat,cl	Case=Dat|Clitic=Yes|Number=Sing|Person=1|PronType=Prs	1	iobj	_	wf="ми"|addr="1211:3"
4	бѹдите	быти	AUX	V,imper,pl,2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	1	cop	_	wf="будите"|addr="1211:3"
5	вси	весь	DET	APRO,pl,m,nom	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	1	obl:float	_	wf="вси"|addr="1211:3"
6	и	и	CCONJ	CONJ	_	9	cc	_	wf="и"|addr="1211:3"
7	ѧ	ꙗзъ	PRON	SPRO,sg,1p,nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	wf="я"|addr="1211:3"
8	строве	сторовыи	ADJ	A,m,sg,nom,brev	Case=Nom|Gender=Masc|Number=Sing|Variant=Short	9	obl:depict	_	wf="строве"|line_id="4"|addr="1211:4"
9	хожю	ходити	VERB	V,nonpast,sg,1p	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	wf="хожю"|comment="tense_nonpast"|addr="1211:4"

~~~


