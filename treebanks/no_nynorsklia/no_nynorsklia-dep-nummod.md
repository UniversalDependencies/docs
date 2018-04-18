---
layout: base
title:  'Statistics of nummod in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `nummod`

This relation is universal.

106 nodes (1%) are attached to their parents as `nummod`.

102 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.39622641509434.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (85; 80% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (15; 14% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nummod	color:blue
1	med	med	ADP	_	_	3	case	_	_
2	to	to	NUM	_	Number=Plur|NumType=Card	3	nummod	_	_
3	bilar	bil	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	0	root	_	_
4	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	trur	tru	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	reparandum	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
4	tre	tre	NUM	_	Number=Plur|NumType=Card	5	nummod	_	_
5	tusen	tusen	NUM	_	Number=Plur|NumType=Card	1	xcomp	_	_
6	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	parataxis	_	_
7	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	svigerbroren	svigerbror	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
2	min	min	PRON	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	1	nmod	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
4	med	med	ADP	_	_	0	root	_	_
5	og	og	CCONJ	_	_	6	reparandum	_	_
6	og	og	CCONJ	_	_	10	cc	_	_
7	#	#	PUNCT	_	_	10	punct	_	_
8	to	to	NUM	_	Number=Plur|NumType=Card	10	nummod	_	_
9	tre	tre	NUM	_	Number=Plur|NumType=Card	10	nummod	_	_
10	andre	annan	DET	_	Number=Plur|PronType=Dem	1	conj	_	_
11	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	15	nsubj	_	_
12	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	15	cop	_	_
13	tre	tre	NUM	_	Number=Plur|NumType=Card	15	nummod	_	_
14	fire	fire	NUM	_	Number=Plur|NumType=Card	15	nummod	_	_
15	mann	mann	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	19	reparandum	_	_
16	#	#	PUNCT	_	_	19	punct	_	_
17	fire	fire	NUM	_	Number=Plur|NumType=Card	19	nummod	_	_
18	fem	fem	NUM	_	Number=Plur|NumType=Card	19	nummod	_	_
19	mann	mann	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	conj	_	_
20	eller	eller	CCONJ	_	_	22	cc	_	_
21	fem	fem	NUM	_	Number=Plur|NumType=Card	22	nummod	_	_
22	mann	mann	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	19	conj	_	_
23	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	19	cop	_	_
24	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	19	nsubj	_	_
25	.	$.	PUNCT	_	_	4	punct	_	_

~~~


