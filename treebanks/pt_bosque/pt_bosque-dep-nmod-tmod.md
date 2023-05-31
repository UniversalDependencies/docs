---
layout: base
title:  'Statistics of nmod:tmod in UD_Portuguese-Bosque'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-Bosque: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="pt_bosque-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="pt_bosque-dep-nmod-npmod.html">nmod:npmod</a></tt>.

193 nodes (0%) are attached to their parents as `nmod:tmod`.

192 instances of `nmod:tmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.46113989637306.

The following 7 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="pt_bosque-pos-NUM.html">NUM</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (91; 47% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (87; 45% instances), <tt><a href="pt_bosque-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="pt_bosque-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="pt_bosque-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pt_bosque-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_bosque-pos-NOUN.html">NOUN</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:tmod	color:blue
1	Até	até	ADP	_	_	2	case	_	_
2	17	17	NUM	_	NumType=Card	0	root	_	_
3	de	de	ADP	_	_	4	case	_	_
4	junho	junho	NOUN	_	Gender=Masc|Number=Sing	2	nmod:tmod	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod:tmod	color:blue
1	Viagem	viagem	NOUN	_	Gender=Fem|Number=Sing	4	nsubj	_	_
2	só	só	ADV	_	_	4	advmod	_	_
3	é	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	viável	viável	ADJ	_	Gender=Fem|Number=Sing	0	root	_	_
5	entre	entre	ADP	_	_	7	case	_	_
6	os	o	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	meses	mês	NOUN	_	Gender=Masc|Number=Plur	4	obl	_	_
8	de	de	ADP	_	_	9	case	_	_
9	fevereiro	fevereiro	NOUN	_	Gender=Masc|Number=Sing	7	nmod:tmod	_	_
10	e	e	CCONJ	_	_	11	cc	_	_
11	abril	abril	NOUN	_	Gender=Masc|Number=Sing	9	conj	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 nmod:tmod	color:blue
1	P.	p.	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	--	--	PUNCT	_	_	1	punct	_	_
3	As	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	5	det	_	_
4	suas	seu	DET	_	Gender=Fem|Number=Plur|PronType=Prs	5	det	_	_
5	filhas	filha	NOUN	_	Gender=Fem|Number=Plur	6	nsubj	_	_
6	compreendem	compreender	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
7	o	o	PRON	_	Gender=Masc|Number=Sing|PronType=Dem	8	det	_	_
8	que	que	PRON	_	Gender=Masc|Number=Sing|PronType=Int	10	nsubj	_	_
9	se	se	PRON	_	Case=Acc|Gender=Unsp|PronType=Prs	10	expl	_	_
10	passou	passar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	ccomp	_	_
11	em	em	ADP	_	_	12	case	_	_
12	Maio	maio	NOUN	_	Gender=Masc|Number=Sing	10	nmod:tmod	_	_
13	68	68	NUM	_	NumType=Card	12	nummod	_	SpaceAfter=No
14	?	?	PUNCT	_	_	1	punct	_	_

~~~


