---
layout: base
title:  'Statistics of fixed in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `fixed`

This relation is universal.

7 nodes (1%) are attached to their parents as `fixed`.

7 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14285714285714.

The following 6 pairs of parts of speech are connected with `fixed`: <tt><a href="el_messinian-pos-PRON.html">PRON</a></tt>-<tt><a href="el_messinian-pos-AUX.html">AUX</a></tt> (2; 29% instances), <tt><a href="el_messinian-pos-ADP.html">ADP</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (1; 14% instances), <tt><a href="el_messinian-pos-ADP.html">ADP</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="el_messinian-pos-ADP.html">ADP</a></tt>-<tt><a href="el_messinian-pos-SCONJ.html">SCONJ</a></tt> (1; 14% instances), <tt><a href="el_messinian-pos-DET.html">DET</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="el_messinian-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="el_messinian-pos-SCONJ.html">SCONJ</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 fixed	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Γι'	για	ADP	AsPpSp	ExtPos=ADV	3	advmod	_	end_char=172|start_char=169
2	αυτό	αυτός	DET	PnDm	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	1	fixed	_	end_char=177|start_char=173
3	λέω	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	end_char=181|start_char=178
4	ότι	ότι	SCONJ	CjSb	_	7	mark	_	end_char=185|start_char=182
5	είμαστε	είμαι	AUX	VbMn	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	7	cop	_	end_char=193|start_char=186
6	πολύ	πολύ	ADV	AdBa	_	7	advmod	_	end_char=198|start_char=194
7	περίεργοι	περίεργος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Plur	3	ccomp	_	end_char=208|start_char=199
8	.	.	PUNCT	PTERMP	_	3	punct	_	end_char=210|start_char=209

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 fixed	color:blue
1	Όλοι	όλος	DET	AjBa	Case=Nom|Gender=Masc|Number=Plur|PronType=Tot	2	det	_	_
2	αυτοί	αυτός	DET	PnDm	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	13	nsubj	_	_
3	που	που	PRON	PnRe	PronType=Rel	9	nsubj	_	_
4	ήσαντε	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
5	από	από	ADP	AsPpSp	_	9	case	_	_
6	την	ο	DET	AtDf	Case=Acc|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
7	εν	εν	ADP	AsPpSp	ExtPos=ADJ	9	amod	_	_
8	λόγο	λόγος	NOUN	NoCm	Gender=Masc|Number=Sing	7	fixed	_	_
9	περιοχή	περιοχή	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	2	acl:relcl	_	_
10	ήτανε	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	cop	_	_
11	σα	σα	SCONJ	AdBa	ExtPos=SCONJ	13	mark	_	_
12	να	να	SCONJ	PtSj	_	11	fixed	_	_
13	μένανε	μένω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
14	σ	σε	ADP	AsPpSp	_	17	case	_	_
15	το	ο	DET	AsPpSp	Case=Acc|Gender=Neut|Number=Sing|PronType=Art	17	det	_	_
16	ίδιο	ίδιος	ADJ	AjBa	Case=Acc|Gender=Neut|Number=Sing	17	amod	_	_
17	χωριό	χωριό	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	13	obl	_	_
18	.	.	PUNCT	PTERMP	_	13	punct	_	PunctType=Peri

~~~


