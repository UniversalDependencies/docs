---
layout: base
title:  'Statistics of xcomp in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `xcomp`

This relation is universal.

102 nodes (1%) are attached to their parents as `xcomp`.

95 instances of `xcomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.92156862745098.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (35; 34% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (26; 25% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (19; 19% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (3; 3% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 xcomp	color:blue
1	gjekk	gå	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	_
3	klar	klar	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	1	xcomp	_	_
4	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	appos	_	_
5	.	$.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	4	cop	_	_
3	fire	fire	NUM	_	Number=Plur|NumType=Card	4	nummod	_	_
4	øre	øre	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
5	hugsar	hugse	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
6	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
7	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	xcomp	_	_
8	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 16 xcomp	color:blue
1	og	og	CCONJ	_	_	6	cc	_	_
2	da	da	ADV	_	_	5	reparandum	_	_
3	e	e	X	_	_	6	discourse:filler	_	_
4	#	#	PUNCT	_	_	6	punct	_	_
5	da	da	ADV	_	_	6	advmod	_	_
6	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	11	parataxis:deletion	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
8	jo	jo	ADV	_	_	6	advmod	_	_
9	#	#	PUNCT	_	_	11	punct	_	_
10	da	da	ADV	_	_	11	advmod	_	_
11	vart	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
12	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	11	expl	_	_
13	jo	jo	ADV	_	_	11	advmod	_	_
14	vel	vel	ADV	_	_	11	advmod	_	_
15	noko	noko	DET	_	Gender=Fem|Number=Sing|PronType=Ind	16	det	_	_
16	handtering	handtering	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	11	xcomp	_	_
17	.	$.	PUNCT	_	_	11	punct	_	_

~~~


