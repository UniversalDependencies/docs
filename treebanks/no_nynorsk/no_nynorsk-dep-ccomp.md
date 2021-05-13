---
layout: base
title:  'Statistics of ccomp in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `ccomp`

This relation is universal.

2043 nodes (1%) are attached to their parents as `ccomp`.

2032 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.9637787567303.

The following 14 pairs of parts of speech are connected with `ccomp`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (1560; 76% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (238; 12% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (191; 9% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt> (21; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (10; 0% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-PART.html">PART</a></tt>-<tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 ccomp	color:blue
1	Eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	plar	pla	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	seia	seie	VERB	_	VerbForm=Inf	2	ccomp	_	_
4	at	at	SCONJ	_	_	6	mark	_	_
5	slikt	slikt	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
6	tek	ta	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	ccomp	_	_
7	ti	ti	NUM	_	Number=Plur|NumType=Card	8	nummod	_	_
8	år	år	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	6	obj	_	SpaceAfter=No
9	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Trur	tru	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
2	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	1	nsubj	_	_
3	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	naiv	naiv	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	1	ccomp	_	SpaceAfter=No
6	?	$?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	Men	men	CCONJ	_	_	3	cc	_	_
2	då	då	ADV	_	_	3	advmod	_	_
3	gløymer	gløyme	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
5	at	at	SCONJ	_	_	9	mark	_	_
6	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
7	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	9	cop	_	_
8	oppgjeven	oppgjeven	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	9	amod	_	_
9	inntekt	inntekt	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	3	ccomp	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	3	punct	_	_

~~~


