---
layout: base
title:  'Statistics of nsubj:pass in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="no_nynorsk-dep-nsubj-outer.html">nsubj:outer</a></tt>.

789 nodes (0%) are attached to their parents as `nsubj:pass`.

786 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.52471482889734.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (528; 67% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (149; 19% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (79; 10% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (20; 3% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (6; 1% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	Denne	denne	DET	det	Gender=Masc|PronType=Dem	2	det	_	_
2	skatten	skatt	NOUN	subst	Gender=Masc	4	nsubj:pass	_	_
3	vert	verte	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	lagd	leggje	ADJ	adj	Definite=Ind|Gender=Fem,Masc|VerbForm=Part	0	root	_	_
5	på	på	ADP	prep	_	6	case	_	_
6	kraftrekninga	kraftrekning	NOUN	subst	Gender=Fem	4	obl	_	SpaceAfter=No
7	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Jaudå	jaudå	INTJ	interj	_	4	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	<komma>	_	1	punct	_	_
3	eg	eg	PRON	pron	Animacy=Hum|Case=Nom|Person=1|PronType=Prs	4	nsubj	_	_
4	har	ha	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
6	,	$,	PUNCT	<komma>	_	10	punct	_	_
7	og	og	CCONJ	konj	_	10	cc	_	_
8	den	den	PRON	pron	Gender=Fem,Masc|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	vert	verte	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	brukt	bruke	ADJ	adj	Definite=Ind|Gender=Fem,Masc|VerbForm=Part	4	conj	_	_
11	rett	rett	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	10	advmod	_	_
12	som	som	SCONJ	sbu	_	14	mark	_	_
13	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	14	expl	_	_
14	er	vere	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	11	advcl	_	SpaceAfter=No
15	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 nsubj:pass	color:blue
1	Sist	sist	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc	2	amod	_	_
2	gong	gong	NOUN	subst	Definite=Ind|Gender=Masc	5	nsubj	_	_
3	var	vere	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
4	i	i	ADP	prep	_	5	case	_	_
5	1958	1958	NUM	det	Number=Plur|NumType=Card	0	root	_	_
6	då	då	SCONJ	sbu	_	10	mark	_	_
7	Kilen	Kilen	PROPN	subst	_	10	nsubj:pass	_	_
8	kapell	kapell	NOUN	subst	Definite=Ind|Gender=Neut	7	flat:name	_	_
9	vart	verte	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	10	aux:pass	_	_
10	vigsla	vigsle	ADJ	adj	Definite=Ind|Gender=Neut|VerbForm=Part	5	advcl	_	SpaceAfter=No
11	.	$.	PUNCT	clb	_	5	punct	_	_

~~~


