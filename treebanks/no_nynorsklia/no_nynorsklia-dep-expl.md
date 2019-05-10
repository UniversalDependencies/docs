---
layout: base
title:  'Statistics of expl in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `expl`

This relation is universal.

1684 nodes (3%) are attached to their parents as `expl`.

1432 instances of `expl` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.37470308788599.

The following 13 pairs of parts of speech are connected with `expl`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (765; 45% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (410; 24% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (254; 15% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (142; 8% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (37; 2% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (32; 2% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (20; 1% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (12; 1% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (8; 0% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 expl	color:blue
1	så	så	CCONJ	_	_	3	cc	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	e	e	X	_	_	5	discourse:filler	_	_
5	berre	berre	ADV	_	_	3	advmod	_	_
6	litt-	litt-	X	_	_	7	discourse:filler	_	_
7	eitt	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
8	hus	hus	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	3	nsubj	_	_
9	#	#	PUNCT	_	_	10	punct	_	_
10	og	og	CCONJ	_	_	12	cc	_	_
11	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	nsubj	_	_
12	stod	stå	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	conj	_	_
13	på	på	ADP	_	_	12	compound:prt	_	_
14	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 expl	color:blue
1	ja	ja	INTJ	_	_	6	discourse	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	reparandum	_	_
4	e	e	X	_	_	5	discourse:filler	_	_
5	selvfølgelig	selvfølgelig	ADV	_	_	6	advmod	_	_
6	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
8	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	obj	_	_
9	#	#	PUNCT	_	_	10	punct	_	_
10	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
11	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	14	cop	_	_
12	jo	jo	ADV	_	_	14	advmod	_	_
13	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	del	del	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	6	conj	_	_
15	.	$.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 10 expl	color:blue
1	og	og	CCONJ	_	_	4	cc	_	_
2	så	så	ADV	_	_	4	advmod	_	_
3	#	#	PUNCT	_	_	2	punct	_	_
4	vart	verte	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
5	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
6	nå	nå	ADV	_	_	4	advmod	_	_
7	einige	einig	ADJ	_	Degree=Pos|Number=Plur	4	xcomp	_	_
8	om	om	SCONJ	_	_	14	mark	_	_
9	at	at	SCONJ	_	_	14	mark	_	_
10	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
11	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	14	cop	_	_
12	nå	nå	ADV	_	_	14	advmod	_	_
13	mykje	mykje	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	14	advmod	_	_
14	rart	rar	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	4	advcl	_	_
15	å	å	PART	_	_	16	mark	_	_
16	lese	lese	VERB	_	VerbForm=Inf	14	advcl	_	_
17	.	$.	PUNCT	_	_	4	punct	_	_

~~~


