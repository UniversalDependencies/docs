---
layout: base
title:  'Statistics of cop in UD_Danish'
udver: '2'
---

## Treebank Statistics: UD_Danish: Relations: `cop`

This relation is universal.

1760 nodes (2%) are attached to their parents as `cop`.

1667 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.19034090909091.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="da-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da-pos-AUX.html">AUX</a></tt> (782; 44% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-AUX.html">AUX</a></tt> (656; 37% instances), <tt><a href="da-pos-ADV.html">ADV</a></tt>-<tt><a href="da-pos-AUX.html">AUX</a></tt> (165; 9% instances), <tt><a href="da-pos-PRON.html">PRON</a></tt>-<tt><a href="da-pos-AUX.html">AUX</a></tt> (92; 5% instances), <tt><a href="da-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da-pos-AUX.html">AUX</a></tt> (34; 2% instances), <tt><a href="da-pos-ADP.html">ADP</a></tt>-<tt><a href="da-pos-AUX.html">AUX</a></tt> (15; 1% instances), <tt><a href="da-pos-NUM.html">NUM</a></tt>-<tt><a href="da-pos-AUX.html">AUX</a></tt> (15; 1% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cop	color:blue
1	Med	med	ADP	_	AdpType=Prep	7	mark	_	_
2	andre	anden	DET	_	Number=Plur|PronType=Ind	3	det	_	_
3	ord	ord	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
4	:	:	PUNCT	_	_	1	punct	_	_
5	tobaksrygning	tobaksrygning	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	7	nsubj	_	_
6	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	forbudt	forbudt	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	3	amod	_	_
8	i	i	ADP	_	AdpType=Prep	9	case	_	_
9	ministerbilerne	ministerbil	NOUN	_	Definite=Def|Gender=Com|Number=Plur	7	obl	_	_
10	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 cop	color:blue
1	H.L.	H.L.	PROPN	_	_	8	nsubj	_	_
2	Hansen	Hansen	PROPN	_	_	1	flat	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
4	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	8	det	_	_
5	udsædvanlig	udsædvanlig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	8	amod	_	_
6	og	og	CCONJ	_	_	7	cc	_	_
7	frodig	frodig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	conj	_	_
8	personlighed	personlighed	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	lang	lang	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	4	amod	_	_
4	tid	tid	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	obl:tmod	_	_
5	siden	siden	ADV	_	_	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_
7	"	"	PUNCT	_	_	5	punct	_	_

~~~


