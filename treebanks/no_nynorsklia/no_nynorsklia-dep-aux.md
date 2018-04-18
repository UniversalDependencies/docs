---
layout: base
title:  'Statistics of aux in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="no_nynorsklia-dep-aux-pass.html">aux:pass</a></tt>.

187 nodes (1%) are attached to their parents as `aux`.

186 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8716577540107.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (162; 87% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (12; 6% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (9; 5% instances), <tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsklia-pos-AUX.html">AUX</a></tt> (1; 1% instances).


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
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	parataxis	_	_
8	han	han	PRON	_	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	måtte	måtte	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	aux	_	_
10	vere	vere	VERB	_	VerbForm=Inf	6	acl:relcl	_	_
11	i	i	ADP	_	_	10	compound:prt	_	_
12	saman	saman	ADV	_	_	11	advmod	_	_
13	med	med	ADP	_	_	12	obl	_	_
14	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 aux	color:blue
1	for	for	CCONJ	_	_	8	cc	_	_
2	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	_
3	skulle	skulle	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	8	aux	_	_
4	jo	jo	ADV	_	_	8	advmod	_	_
5	vere	vere	AUX	_	VerbForm=Inf	8	cop	_	_
6	f-	f-	X	_	_	8	discourse:filler	_	_
7	#	#	PUNCT	_	_	8	punct	_	_
8	ferdig	ferdig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
9	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	appos	_	_
10	au	au	ADV	_	_	9	advmod	_	_
11	da	da	ADV	_	_	8	advmod	_	_
12	.	$.	PUNCT	_	_	8	punct	_	_

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


