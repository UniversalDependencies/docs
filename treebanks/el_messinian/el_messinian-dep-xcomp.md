---
layout: base
title:  'Statistics of xcomp in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `xcomp`

This relation is universal.

11 nodes (1%) are attached to their parents as `xcomp`.

10 instances of `xcomp` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.36363636363636.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-VERB.html">VERB</a></tt> (5; 45% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt> (4; 36% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 xcomp	color:blue
1	Μούζο	Μούζος	PROPN	NoPr	Case=Voc|Gender=Masc|Number=Sing	3	vocative	_	_
2	,	,	PUNCT	PUNCT	_	3	punct	_	PunctType=Comm
3	πήγαινε	πηγαίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	9	ccomp	_	_
4	να	να	SCONJ	PtSj	_	5	mark	_	_
5	ντυθείς	ντύνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Mid	3	xcomp	_	_
6	ρε	ρε	INTJ	AdBa	_	3	discourse	_	_
7	,	,	PUNCT	AdBa	_	9	punct	_	_
8	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	9	iobj	_	_
9	'κανε	κάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	.	.	PUNCT	PTERMP	_	9	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Είχε	έχω	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	2	aux	_	_
2	γίνει	γίνομαι	VERB	VbMn	Aspect=Perf|Person=3|Voice=Pass	0	root	_	_
3	κατακίτρινος	κατακίτρινος	ADJ	AjBa	Case=Nom|Degree=Sup|Gender=Masc|Number=Sing	2	xcomp	_	_
4	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peris

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 xcomp	color:blue
1	Σημασία	σημασία	NOUN	NoPr	Case=Acc|Gender=Fem|Number=Sing	4	discourse	_	end_char=1102|start_char=1095
2	,	,	PUNCT	PUNCT	_	4	punct	_	end_char=1104|start_char=1103
3	εγώ	εγώ	PRON	PrPs	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	end_char=1108|start_char=1105
4	θεωρώ	θεωρώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	end_char=1114|start_char=1109
5	ότι	ότι	SCONJ	CjSb	_	6	mark	_	end_char=1118|start_char=1115
6	πρέπει	πρέπει	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp	_	end_char=1125|start_char=1119
7	να	να	SCONJ	PtSj	_	8	mark	_	end_char=1128|start_char=1126
8	κάνεις	κάνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	6	csubj	_	end_char=1135|start_char=1129
9	αυτό	αυτός	DET	PnDm	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	8	obj	_	end_char=1140|start_char=1136
10	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	11	obj	_	end_char=1144|start_char=1141
11	γουστάρεις	γουστάρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	9	acl:relcl	_	end_char=1155|start_char=1145
12	,	,	PUNCT	PUNCT	_	15	punct	_	end_char=1157|start_char=1156
13	που	που	PRON	PnRe	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	15	nsubj	_	end_char=1161|start_char=1158
14	σε	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=2|PronType=Prs	15	obj	_	end_char=1164|start_char=1162
15	κάνει	κάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj	_	end_char=1170|start_char=1165
16	να	να	SCONJ	PtSj	_	17	mark	_	end_char=1173|start_char=1171
17	νιώθεις	νιώθω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	15	xcomp	_	end_char=1181|start_char=1174
18	καλά	καλά	ADV	AdBa	_	17	xcomp	_	end_char=1186|start_char=1182
19	και	και	CCONJ	CjCo	_	20	cc	_	end_char=1190|start_char=1187
20	δυνατή	δυνατός	ADJ	AjBa	Case=Nom|Gender=Fem|Number=Sing	18	conj	_	end_char=1197|start_char=1191
21	σα	σα	ADP	AsPpSp	_	22	case	_	end_char=1200|start_char=1198
22	γυναίκα	γυναίκα	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	20	obl	_	end_char=1208|start_char=1201
23	.	.	PUNCT	PTERMP	_	4	punct	_	end_char=1210|start_char=1209

~~~


