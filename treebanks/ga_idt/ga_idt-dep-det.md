---
layout: base
title:  'Statistics of det in UD_Irish-IDT'
udver: '2'
---

## Treebank Statistics: UD_Irish-IDT: Relations: `det`

This relation is universal.

1978 nodes (8%) are attached to their parents as `det`.

1600 instances of `det` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.06319514661274.

The following 13 pairs of parts of speech are connected with `det`: <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1755; 89% instances), <tt><a href="ga_idt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (126; 6% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (19; 1% instances), <tt><a href="ga_idt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (17; 1% instances), <tt><a href="ga_idt-pos-ADP.html">ADP</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (15; 1% instances), <tt><a href="ga_idt-pos-X.html">X</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (12; 1% instances), <tt><a href="ga_idt-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (9; 0% instances), <tt><a href="ga_idt-pos-NUM.html">NUM</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (7; 0% instances), <tt><a href="ga_idt-pos-DET.html">DET</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="ga_idt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ga_idt-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="ga_idt-pos-ADV.html">ADV</a></tt>-<tt><a href="ga_idt-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	AN	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	2	det	_	_
2	FILE	file	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
3	i	i	ADP	Simp	_	4	case	_	_
4	gcead	cead	NOUN	Noun	Case=NomAcc|Form=Ecl|Gender=Masc|Number=Sing	2	nmod	_	_
5	do	do	ADP	Simp	_	6	case	_	_
6	George	George	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	4	nmod	_	_
7	Mackay	Mackay	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	flat:name	_	_
8	Brown	Brown	PROPN	Noun	Case=NomAcc|Gender=Masc|Number=Sing	6	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 det	color:blue
1	(	(	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	'	'	PUNCT	Punct	_	3	punct	_	_
3	Oidhe	oidhe	NOUN	Noun	Case=NomAcc|Gender=Fem|Number=Sing	0	root	_	_
4	Réalt	réalta	NOUN	Noun	Case=Gen|Gender=Fem|Number=Sing	3	compound	_	_
5	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	6	det	_	_
6	Ghleanna	Gleanna	PROPN	Noun	Case=Gen|Gender=Masc|Number=Sing	4	compound	_	_
7	'	'	PUNCT	Punct	_	9	punct	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	9	punct	_	_
9	CP	CP	X	Abr	Abbr=Yes	3	appos	_	SpaceAfter=No
10	)	)	PUNCT	Punct	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 det	color:blue
1	Is	is	AUX	Cop	Tense=Pres|VerbForm=Cop	2	cop	_	_
2	é	é	PRON	Pers	Gender=Masc|Number=Sing|Person=3	0	root	_	_
3	sin	sin	PRON	Dem	PronType=Dem	2	det	_	_
4	an	an	DET	Art	Definite=Def|Number=Sing|PronType=Art	5	det	_	_
5	córas	córas	NOUN	Noun	Case=NomAcc|Definite=Def|Gender=Masc|Number=Sing	2	nsubj	_	_
6	'	'	PUNCT	Punct	_	7	punct	_	SpaceAfter=No
7	liosta	liosta	NOUN	Noun	Case=Gen|Gender=Masc|Number=Sing	5	compound	_	SpaceAfter=No
8	'	'	PUNCT	Punct	_	7	punct	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


