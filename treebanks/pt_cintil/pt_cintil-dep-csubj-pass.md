---
layout: base
title:  'Statistics of csubj:pass in UD_Portuguese-CINTIL'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-CINTIL: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="pt_cintil-dep-csubj.html">csubj</a></tt>.

13 nodes (0%) are attached to their parents as `csubj:pass`.

13 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.92307692307692.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="pt_cintil-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_cintil-pos-VERB.html">VERB</a></tt> (10; 77% instances), <tt><a href="pt_cintil-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_cintil-pos-NOUN.html">NOUN</a></tt> (3; 23% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:pass	color:blue
1	Referiram	referir	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	que	que	SCONJ	CJ	_	4	mark	_	_
3	foi	ser	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
4	solicitado	solicitar,solicitado	VERB	PPA	Gender=Masc|Number=Sing|VerbForm=Part	1	ccomp	_	_
5	que	que	SCONJ	CJ	_	7	mark	_	_
6	isso	isso	DET	DEM	Gender=Masc|Number=Sing|PronType=Dem	7	nsubj	_	_
7	acontecesse	acontecer	VERB	V	Mood=Sub|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	csubj:pass	_	_
8	.	.	PUNCT	PNT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 csubj:pass	color:blue
1	Foi	ser	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	2	cop	_	_
2	dito	dizer,do	VERB	PPA	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
3	que	que	SCONJ	CJ	_	8	mark	_	_
4	os	os	DET	DA	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	5	det	_	_
5	japoneses	japonês	ADJ	ADJ	Gender=Masc|Number=Plur	8	nsubj	_	_
6	eram	ser	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
7	grandes	grande	ADJ	ADJ	Number=Plur	8	amod	_	_
8	compradores	comprador	NOUN	CN	Gender=Masc|Number=Plur	2	csubj:pass	_	_
9	.	.	PUNCT	PNT	_	2	punct	_	_

~~~


