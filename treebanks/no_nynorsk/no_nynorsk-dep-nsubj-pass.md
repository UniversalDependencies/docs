---
layout: base
title:  'Statistics of nsubj:pass in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-nsubj.html">nsubj</a></tt>.

952 nodes (0%) are attached to their parents as `nsubj:pass`.

949 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.41281512605042.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (547; 57% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (302; 32% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (70; 7% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (20; 2% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (7; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt> (5; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Denne	denne	DET	_	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	_
2	skatten	skatt	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	4	nsubj:pass	_	_
3	vert	verte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	lagd	leggje	VERB	_	Definite=Ind|Number=Sing|VerbForm=Part	0	root	_	_
5	på	på	ADP	_	_	6	case	_	_
6	kraftrekninga	kraftrekning	NOUN	_	Definite=Def|Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
7	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Jaudå	jaudå	INTJ	_	_	4	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	_	_	1	punct	_	_
3	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	10	punct	_	_
7	og	og	CCONJ	_	_	10	cc	_	_
8	den	den	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	vert	verte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	brukt	bruke	VERB	_	Definite=Ind|Number=Sing|VerbForm=Part	4	conj	_	_
11	rett	rett	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	10	advmod	_	_
12	som	som	PRON	_	PronType=Rel	14	nsubj	_	_
13	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
14	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	11	advcl	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 nsubj:pass	color:blue
1	Sist	sist	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	2	amod	_	_
2	gong	gong	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	nsubj	_	_
3	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
4	i	i	ADP	_	_	5	case	_	_
5	1958	1958	NUM	_	Number=Plur|NumType=Card	0	root	_	_
6	då	då	SCONJ	_	_	10	mark	_	_
7	Kilen	Kilen	PROPN	_	_	10	nsubj:pass	_	_
8	kapell	kapell	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	7	flat:name	_	_
9	vart	verte	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	10	aux:pass	_	_
10	vigsla	vigsle	VERB	_	Definite=Ind|Gender=Neut|Number=Sing|VerbForm=Part	5	advcl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	5	punct	_	_

~~~


