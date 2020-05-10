---
layout: base
title:  'Statistics of case in UD_Bulgarian-BTB'
udver: '2'
---

## Treebank Statistics: UD_Bulgarian-BTB: Relations: `case`

This relation is universal.

21618 nodes (14%) are attached to their parents as `case`.

21618 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.4644277916551.

The following 8 pairs of parts of speech are connected with `case`: <tt><a href="bg_btb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="bg_btb-pos-ADP.html">ADP</a></tt> (17431; 81% instances), <tt><a href="bg_btb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="bg_btb-pos-ADP.html">ADP</a></tt> (2554; 12% instances), <tt><a href="bg_btb-pos-PRON.html">PRON</a></tt>-<tt><a href="bg_btb-pos-ADP.html">ADP</a></tt> (948; 4% instances), <tt><a href="bg_btb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="bg_btb-pos-ADP.html">ADP</a></tt> (275; 1% instances), <tt><a href="bg_btb-pos-NUM.html">NUM</a></tt>-<tt><a href="bg_btb-pos-ADP.html">ADP</a></tt> (154; 1% instances), <tt><a href="bg_btb-pos-VERB.html">VERB</a></tt>-<tt><a href="bg_btb-pos-ADP.html">ADP</a></tt> (121; 1% instances), <tt><a href="bg_btb-pos-DET.html">DET</a></tt>-<tt><a href="bg_btb-pos-ADP.html">ADP</a></tt> (93; 0% instances), <tt><a href="bg_btb-pos-ADV.html">ADV</a></tt>-<tt><a href="bg_btb-pos-ADP.html">ADP</a></tt> (42; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 case	color:blue
1	На	на	ADP	R	_	2	case	2:case	_
2	заека	заек	NOUN	Ncmsh	Definite=Def|Gender=Masc|Number=Sing	4	iobj	4:iobj	_
3	му	аз	PRON	Ppetds3m	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl	4:expl	_
4	омръзна	омръзне-ми	VERB	Vnpif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	да	да	AUX	Tx	_	6	aux	6:aux	_
6	студува	студувам	VERB	Vpiif-r3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	csubj	4:csubj	SpaceAfter=No
7	.	.	PUNCT	punct	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	След	след	ADP	R	_	2	case	2:case	_
2	седмица	седмица	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	3	obl	3:obl:след	_
3	отиде	отида-(си)	VERB	Vppif-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	у	у	ADP	R	_	5	case	5:case	_
5	Ганини	ганини	PROPN	H-pi	Definite=Ind|Number=Plur	3	iobj	3:iobj	SpaceAfter=No
6	.	.	PUNCT	punct	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Съвсем	съвсем	ADV	Dq	Degree=Pos	2	advmod	2:advmod	_
2	загуби	загубя-(се)	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	власт	власт	NOUN	Ncfsi	Definite=Ind|Gender=Fem|Number=Sing	2	obj	2:obj	_
4	над	над	ADP	R	_	5	case	5:case	_
5	себе	себе	PRON	Ppxla	Case=Acc|PronType=Prs|Reflex=Yes	3	nmod	3:nmod:над	_
6	си	си	PART	T	_	5	fixed	5:fixed	SpaceAfter=No
7	.	.	PUNCT	punct	_	2	punct	2:punct	_

~~~


