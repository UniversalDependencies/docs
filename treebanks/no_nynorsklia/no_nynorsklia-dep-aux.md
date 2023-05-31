---
layout: base
title:  'Statistics of aux in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="no_nynorsklia-dep-aux-pass.html">aux:pass</a></tt>.

1027 nodes (2%) are attached to their parents as `aux`.

1024 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.98344693281402.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (901; 88% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (52; 5% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (46; 4% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (7; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="no_nynorsklia-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="no_nynorsklia-pos-NUM.html">NUM</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	jo	jo	ADV	_	_	2	advmod	_	_
4	alle	all	DET	_	Number=Plur|PronType=Tot	6	det	_	_
5	slags	slags	NOUN	_	Gender=Neut	6	nmod	_	_
6	folk	folk	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	nsubj	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	appos	_	_
8	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	måtte	måtte	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	aux	_	_
10	vere	vere	VERB	_	VerbForm=Inf	6	acl:relcl	_	_
11	i	i	ADP	_	_	10	compound:prt	_	_
12	saman	saman	ADV	_	_	11	advmod	_	_
13	med	med	ADP	_	_	12	obl	_	_
14	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 5 aux	color:blue
1	altså	altså	ADV	_	_	13	advmod	_	_
2	#	#	PUNCT	_	_	1	punct	_	_
3	for	for	ADP	_	_	13	obl	_	_
4	kyrkja	kyrkje	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	13	nsubj	_	_
5	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	13	aux	_	_
6	nok	nok	ADV	_	_	13	advmod	_	_
7	#	#	PUNCT	_	_	6	punct	_	_
8	i	i	ADP	_	_	11	case	_	_
9	sin	sin	PRON	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	11	nmod	_	_
10	e	e	X	_	_	11	discourse:filler	_	_
11	vorden	vord	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	13	obl	_	_
12	vore	vere	AUX	_	VerbForm=Part	13	cop	_	_
13	katolsk	katolsk	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
14	her	her	ADV	_	_	13	advmod	_	_
15	.	$.	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 aux	color:blue
1	og	og	CCONJ	_	_	8	cc	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	_	_
3	kunne	kunne	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	8	aux	_	_
4	vere	vere	AUX	_	VerbForm=Inf	8	cop	_	_
5	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
6	ti	ti	NUM	_	Number=Plur|NumType=Card	8	nummod	_	_
7	femten	femten	NUM	_	Number=Plur|NumType=Card	8	nummod	_	_
8	kasser	kasse	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	0	root	_	_
9	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	appos	_	_
10	.	$.	PUNCT	_	_	8	punct	_	_

~~~


