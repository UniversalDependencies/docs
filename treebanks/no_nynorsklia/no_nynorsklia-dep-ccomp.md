---
layout: base
title:  'Statistics of ccomp in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `ccomp`

This relation is universal.

52 nodes (0%) are attached to their parents as `ccomp`.

52 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.67307692307692.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (39; 75% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (5; 10% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADP.html">ADP</a></tt> (2; 4% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	nsubj	_	_
3	du	du	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=2|PronType=Prs	4	nsubj	_	_
4	leverte	levere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	1	ccomp	_	_
5	mjølka	mjølk	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	4	obj	_	_
6	hen	hen	ADP	_	_	4	compound:prt	_	_
7	i	i	ADP	_	_	8	case	_	_
8	Oslo	Oslo	PROPN	_	_	4	obl	_	_
9	da	da	ADV	_	_	4	advmod	_	_
10	?	$?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	og	og	CCONJ	_	_	3	cc	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
3	syntest	synast	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
5	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	cop	_	_
6	fint	fin	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	ccomp	_	_
7	og	og	CCONJ	_	_	13	cc	_	_
8	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	13	nsubj	_	_
9	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	13	cop	_	_
10	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
11	#	#	PUNCT	_	_	13	punct	_	_
12	fin	fin	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	13	amod	_	_
13	misjon	misjon	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	6	conj	_	_
14	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 ccomp	color:blue
1	i	i	ADP	_	_	2	case	_	_
2	niogtjue	niogtjue	NUM	_	Number=Plur|NumType=Card	5	obl	_	_
3	#	#	PUNCT	_	_	5	punct	_	_
4	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	trur	tru	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
6	ikkje	ikkje	PART	_	Polarity=Neg	5	advmod	_	_
7	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	_
8	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	9	cop	_	_
9	med	med	ADP	_	_	5	ccomp	_	_
10	og	og	CCONJ	_	_	11	cc	_	_
11	leverte	levere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	9	conj	_	_
12	#	#	PUNCT	_	_	16	punct	_	_
13	før	før	ADP	_	_	16	case	_	_
14	i	i	ADP	_	_	16	case	_	_
15	niogtjue	niogtjue	NUM	_	Number=Plur|NumType=Card	16	nummod	_	_
16	hektoliter	hektoliter	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	11	obl	_	_
17	.	$.	PUNCT	_	_	5	punct	_	_

~~~


