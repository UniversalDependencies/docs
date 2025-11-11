---
layout: base
title:  'Statistics of discourse in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `discourse`

This relation is universal.

13 nodes (1%) are attached to their parents as `discourse`.

10 instances of `discourse` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.92307692307692.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-INTJ.html">INTJ</a></tt> (6; 46% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-ADV.html">ADV</a></tt> (2; 15% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-INTJ.html">INTJ</a></tt> (1; 8% instances), <tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_messinian-pos-INTJ.html">INTJ</a></tt> (1; 8% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-SCONJ.html">SCONJ</a></tt> (1; 8% instances), <tt><a href="el_messinian-pos-X.html">X</a></tt>-<tt><a href="el_messinian-pos-INTJ.html">INTJ</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Λοιπόν	λοιπόν	INTJ	AdBa	_	3	discourse	_	_
2	,	,	PUNCT	PUNCT	_	1	punct	_	PunctType=Comm
3	πες	λέω	VERB	VbMn	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
4	για	για	ADP	AsPpSp	_	6	case	_	_
5	τις	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	σεζόν	σεζόν	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	3	obl	_	_
7	σου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	6	nmod	_	_
8	,	,	PUNCT	PUNCT	_	10	punct	_	PunctType=Comm
9	πώς	πώς	ADV	AdBa	PronType=Int	10	advmod	_	_
10	πάνε,	πηγαίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	ccomp	_	_
11	πώς	πώς	ADV	AdBa	PronType=Int	12	advmod	_	_
12	πηγαίνανε	πηγαίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	parataxis	_	_
13	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 discourse	color:blue
1	Ωραία	ωραία	ADV	AdBa	_	3	discourse	_	end_char=2806|start_char=2801
2	,	,	PUNCT	PUNCT	_	3	punct	_	end_char=2808|start_char=2807
3	κάτσε	κάθομαι	VERB	VbMn	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	end_char=2814|start_char=2809
4	.	.	PUNCT	PTERMP	_	3	punct	_	end_char=2816|start_char=2815

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 discourse	color:blue
1	Ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	end_char=303|start_char=302
2	άλλος	άλλος	DET	PnId	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	4	nsubj	_	end_char=309|start_char=304
3	δε	δεν	PART	PtNg	Polarity=Neg	4	advmod	_	end_char=312|start_char=310
4	δίνει	δίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	end_char=319|start_char=313
5	σημασία	σημασία	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	end_char=327|start_char=320
6	,	,	PUNCT	PUNCT	_	8	punct	_	end_char=329|start_char=328
7	ρε	ρε	INTJ	Ij	_	8	discourse	_	end_char=332|start_char=330
8	παιδιά	παιδί	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	4	vocative	_	end_char=339|start_char=333
9	.	.	PUNCT	PTERMP	_	4	punct	_	end_char=341|start_char=340

~~~


