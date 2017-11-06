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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	e	e	X	_	_	5	discourse:filler	_	_
2	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	5	nsubj	_	_
3	må	måtte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	nok	nok	ADV	_	_	5	advmod	_	_
5	gi	gi	VERB	_	VerbForm=Inf	0	root	_	_
6	p-	p-	X	_	_	9	discourse:filler	_	_
7	to	to	NUM	_	Number=Plur|NumType=Card	9	nummod	_	_
8	hundre	hundre	NUM	_	Number=Plur|NumType=Card	9	nummod	_	_
9	tusen	tusen	NUM	_	Number=Plur|NumType=Card	5	obj	_	_
10	for	for	ADP	_	_	11	case	_	_
11	ein	ein	PRON	_	Animacy=Hum|Case=Acc|Number=Sing|PronType=Art,Prs	5	obl	_	_
12	men	men	CCONJ	_	_	15	cc	_	_
13	den	den	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
14	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	større	stor	ADJ	_	_	5	conj	_	_
16	da	da	ADV	_	_	15	advmod	_	_
17	.	$.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 aux	color:blue
1	ja	ja	INTJ	_	_	5	discourse	_	_
2	##	##	PUNCT	_	_	5	punct	_	_
3	samvirkelaget	samvirkelag	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
4	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	nedst	nedre	ADJ	_	Definite=Ind|Degree=Sup	0	root	_	_
6	i	i	ADP	_	_	7	case	_	_
7	gata	gate	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	5	obl	_	_
8	så	så	ADV	_	_	5	advmod	_	_
9	.	$.	PUNCT	_	_	5	punct	_	_

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


