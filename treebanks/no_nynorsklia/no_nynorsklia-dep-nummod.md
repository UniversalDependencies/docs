---
layout: base
title:  'Statistics of nummod in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `nummod`

This relation is universal.

286 nodes (1%) are attached to their parents as `nummod`.

274 instances of `nummod` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.51398601398601.

The following 8 pairs of parts of speech are connected with `nummod`: <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (240; 84% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (37; 13% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (3; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (1; 0% instances).


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
6	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
7	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	reparandum	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	_
4	berre	berre	ADV	_	_	5	advmod	_	_
5	de	de	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=2|PronType=Prs	0	root	_	_
6	to	to	NUM	_	Number=Plur|NumType=Card	5	nummod	_	_
7	?	$?	PUNCT	_	_	5	punct	_	_

~~~


