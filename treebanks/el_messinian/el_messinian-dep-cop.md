---
layout: base
title:  'Statistics of cop in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `cop`

This relation is universal.

27 nodes (3%) are attached to their parents as `cop`.

25 instances of `cop` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.03703703703704.

The following 6 pairs of parts of speech are connected with `cop`: <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-AUX.html">AUX</a></tt> (10; 37% instances), <tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_messinian-pos-AUX.html">AUX</a></tt> (9; 33% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-AUX.html">AUX</a></tt> (3; 11% instances), <tt><a href="el_messinian-pos-DET.html">DET</a></tt>-<tt><a href="el_messinian-pos-AUX.html">AUX</a></tt> (2; 7% instances), <tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_messinian-pos-AUX.html">AUX</a></tt> (2; 7% instances), <tt><a href="el_messinian-pos-ADV.html">ADV</a></tt>-<tt><a href="el_messinian-pos-AUX.html">AUX</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cop	color:blue
1	Είμαστε	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	4	cop	_	end_char=1583|start_char=1576
2	και	και	CCONJ	CjCo	_	4	cc	_	end_char=1587|start_char=1584
3	λίγο	λίγο	ADV	AdBa	_	4	advmod	_	end_char=1592|start_char=1588
4	γυναίκες	γυναίκα	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Plur	0	root	_	end_char=1601|start_char=1593
5	ό,τι	ό,τι	PRON	_	ExtPos=ADJ|Gender=Neut|Number=Sing|PronType=Rel	4	amod	_	_
6	να	να	AUX	PtSj	_	5	fixed	_	end_char=1611|start_char=1609
7	‘ναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	fixed	_	end_char=1616|start_char=1612
8	.	.	PUNCT	PTERMP	_	4	punct	_	end_char=1618|start_char=1617

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Αυτό	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	end_char=1328|start_char=1324
2	για	για	ADP	AsPpSp	_	3	case	_	end_char=1332|start_char=1329
3	μένα	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	obl	_	end_char=1337|start_char=1333
4	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	end_char=1343|start_char=1338
5	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	end_char=1346|start_char=1344
6	καλύτερο	καλός	ADJ	AjCp	Case=Nom|Degree=Cmp|Gender=Neut|Number=Sing	0	root	_	end_char=1355|start_char=1347
7	.	.	PUNCT	PTERMP	_	6	punct	_	end_char=1357|start_char=1356

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cop	color:blue
1	Όταν	όταν	SCONJ	CjSb	_	7	mark	_	end_char=890|start_char=886
2	,	,	PUNCT	PUNCT	_	3	punct	_	end_char=892|start_char=891
3	όμως	όμως	ADV	AdBa	_	7	advmod	_	end_char=897|start_char=893
4	,	,	PUNCT	PUNCT	_	3	punct	_	end_char=899|start_char=898
5	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	7	cop	_	end_char=905|start_char=900
6	να	να	SCONJ	PtSj	_	7	mark	_	end_char=908|start_char=906
7	πάω	πηγαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	0	root	_	end_char=912|start_char=909
8	σε	σε	ADP	AtDf	_	10	case	_	_
9	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	end_char=917|start_char=913
10	Αθήνα	Αθήνα	PROPN	NoPr	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	end_char=923|start_char=918
11	.	.	PUNCT	PTERMP	_	7	punct	_	end_char=925|start_char=924

~~~


