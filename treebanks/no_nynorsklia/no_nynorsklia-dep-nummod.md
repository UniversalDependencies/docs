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
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 nummod	color:blue
1	ja	ja	INTJ	_	_	3	discourse	_	_
2	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	slutta	slutte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	jo	jo	ADV	_	_	3	advmod	_	_
5	da	da	SCONJ	_	_	7	mark	_	_
6	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	blei	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	11	reparandum	_	_
8	#	#	PUNCT	_	_	7	punct	_	_
9	da	da	SCONJ	_	_	11	mark	_	_
10	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	blei	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	ccomp	_	_
12	sytti	sytti	NUM	_	Number=Plur|NumType=Card	13	nummod	_	_
13	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	11	xcomp	_	_
14	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	10	appos	_	_
15	veit	vite	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	11	parataxis	_	_
16	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	15	nsubj	_	_
17	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	fjorten	fjorten	NUM	_	Number=Plur|NumType=Card	2	nummod	_	_
2	tusen	tusen	NUM	_	Number=Plur|NumType=Card	0	root	_	_
3	?	$?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	svigerbroren	svigerbror	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	4	nsubj	_	_
2	min	min	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	1	nmod	_	_
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


