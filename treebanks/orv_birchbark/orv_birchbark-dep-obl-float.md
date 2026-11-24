---
layout: base
title:  'Statistics of obl:float in UD_Old_East_Slavic-Birchbark'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Birchbark: Relations: `obl:float`

This relation is a language-specific subtype of <tt><a href="orv_birchbark-dep-obl.html">obl</a></tt>.
There are also 3 other language-specific subtypes of `obl`: <tt><a href="orv_birchbark-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="orv_birchbark-dep-obl-depict.html">obl:depict</a></tt>, <tt><a href="orv_birchbark-dep-obl-tmod.html">obl:tmod</a></tt>.

5 nodes (0%) are attached to their parents as `obl:float`.

3 instances of `obl:float` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.6.

The following 3 pairs of parts of speech are connected with `obl:float`: <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-DET.html">DET</a></tt> (2; 40% instances), <tt><a href="orv_birchbark-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_birchbark-pos-X.html">X</a></tt> (2; 40% instances), <tt><a href="orv_birchbark-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_birchbark-pos-DET.html">DET</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 obl:float	color:blue
1	…	…	PUNCT	_	_	2	punct	_	wf="…"|line_id="2"|addr="1162:2"
2	(б)[у]демо	быти	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	_	wf="будемо"|addr="1162:2"
3	ꙋ	у	ADP	PR,gvrn:gen	_	4	case	_	wf="у"|comment="gvrn:gen"|addr="1162:2"
4	тебе	ты	PRON	SPRO	Case=Gen|Number=Sing|Person=2|PronType=Prs	2	obl	_	wf="тебе"|addr="1162:2"
5	на	на	ADP	PR,gvrn:loc	_	6	case	_	wf="на"|comment="gvrn:loc"|addr="1162:2"
6	поли	поле	NOUN	S	Case=Loc|Gender=Neut|Number=Sing	2	obl	_	wf="поли"|addr="1162:2"
7	в…	вохъ	DET	APRO	Case=Nom|Fragment=Yes|Gender=Masc|Number=Plur|PronType=Tot	2	obl:float	_	wf="в…"|comment="lemma_unsure"|meaning="весь"|addr="1162:2"

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:float	color:blue
1	…	…	PUNCT	_	_	4	punct	_	wf="…"|line_id="1"|addr="066:1"
2	…ъ	_	X	NONLEX	_	4	obl:float	_	wf="…ъ"|addr="066:1"
3	нь	не	PART	PART	Polarity=Neg	4	advmod	_	wf="нь"|addr="066:1"
4	ѡслушаисѧ	ослушатисѧ	VERB	V,imper,sg,2p	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Mid	0	root	_	wf="ослушаися"|addr="066:1"
5	…му	_	X	NONLEX	_	4	dep	_	wf="…му"|line_id="2"|addr="066:2"

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obl:float	color:blue
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


