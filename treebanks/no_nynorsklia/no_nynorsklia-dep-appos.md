---
layout: base
title:  'Statistics of appos in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `appos`

This relation is universal.

77 nodes (1%) are attached to their parents as `appos`.

77 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.62337662337662.

The following 14 pairs of parts of speech are connected with `appos`: <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (45; 58% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (8; 10% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (7; 9% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (4; 5% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 appos	color:blue
1	nei	nei	INTJ	_	_	3	discourse	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	nå	nå	ADV	_	_	3	advmod	_	_
5	i	i	ADP	_	_	6	case	_	_
6	tredvetala	tredvetale	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	3	obl	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	appos	_	_
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 14 appos	color:blue
1	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	rekna	rekne	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	ut	ut	ADP	_	_	2	compound:prt	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
5	at	at	SCONJ	_	_	7	mark	_	_
6	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
7	kunne	kunne	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	8	parataxis:deletion	_	_
8	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	14	reparandum	_	_
9	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
10	#	#	PUNCT	_	_	14	punct	_	_
11	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	14	cop	_	_
12	sju	sju	NUM	_	Number=Plur|NumType=Card	13	nummod	_	_
13	øre	øre	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	14	nmod	_	_
14	liter	liter	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	4	appos	_	_
15	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
2	M13	M13	PROPN	_	_	1	appos	_	_
3	å	_	X	_	_	8	obl	_	_
4	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	conj	_	_
5	M14	M14	PROPN	_	_	4	appos	_	_
6	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	8	cop	_	_
7	jo	jo	ADV	_	_	8	advmod	_	_
8	mindre	liten	ADJ	_	_	0	root	_	_
9	så	så	ADV	_	_	10	cc	_	_
10	han	han	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	conj	_	_
11	.	$.	PUNCT	_	_	8	punct	_	_

~~~


