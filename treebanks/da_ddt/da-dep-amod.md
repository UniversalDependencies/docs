---
layout: base
title:  'Statistics of amod in UD_Danish'
udver: '2'
---

## Treebank Statistics: UD_Danish: Relations: `amod`

This relation is universal.

5760 nodes (6%) are attached to their parents as `amod`.

4990 instances of `amod` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77048611111111.

The following 22 pairs of parts of speech are connected with `amod`: <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (4389; 76% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-VERB.html">VERB</a></tt> (433; 8% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (429; 7% instances), <tt><a href="da-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (199; 3% instances), <tt><a href="da-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (86; 1% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-ADV.html">ADV</a></tt> (81; 1% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-X.html">X</a></tt> (44; 1% instances), <tt><a href="da-pos-PRON.html">PRON</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (33; 1% instances), <tt><a href="da-pos-ADV.html">ADV</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (28; 0% instances), <tt><a href="da-pos-X.html">X</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (13; 0% instances), <tt><a href="da-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="da-pos-ADP.html">ADP</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="da-pos-AUX.html">AUX</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="da-pos-AUX.html">AUX</a></tt>-<tt><a href="da-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="da-pos-NUM.html">NUM</a></tt>-<tt><a href="da-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="da-pos-ADV.html">ADV</a></tt>-<tt><a href="da-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="da-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="da-pos-PROPN.html">PROPN</a></tt>-<tt><a href="da-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="da-pos-VERB.html">VERB</a></tt>-<tt><a href="da-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 amod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	Resten	rest	NOUN	_	Definite=Def|Gender=Com|Number=Sing	3	nsubj	_	_
2	skal	skulle	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	komme	komme	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	_
4	fra	fra	ADP	_	AdpType=Prep	7	case	_	_
5	et	en	DET	_	Gender=Neut|Number=Sing|PronType=Ind	7	det	_	_
6	forventet	forvente	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part	7	amod	_	_
7	mersalg	mersalg	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	obl	_	_
8	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 amod	color:blue
1	Lars	Lars	PROPN	_	_	2	nsubj	_	_
2	mumlede	mumle	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	noget	nogen	PRON	_	Gender=Neut|Number=Sing|PronType=Ind	2	obj	_	_
4	om	om	ADP	_	AdpType=Prep	9	mark	_	_
5	,	,	PUNCT	_	_	4	punct	_	_
6	at	at	SCONJ	_	_	9	mark	_	_
7	klokken	klokke	NOUN	_	Definite=Def|Gender=Com|Number=Sing	9	nsubj	_	_
8	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
9	mange	mange	ADJ	_	Degree=Pos|Number=Plur	2	amod	_	_
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


