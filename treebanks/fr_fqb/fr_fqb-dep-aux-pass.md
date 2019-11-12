---
layout: base
title:  'Statistics of aux:pass in UD_French-FQB'
udver: '2'
---

## Treebank Statistics: UD_French-FQB: Relations: `aux:pass`

This relation is a language-specific subtype of .
There are also 2 other language-specific subtypes of `aux`: <tt><a href="fr_fqb-dep-aux-caus.html">aux:caus</a></tt>, <tt><a href="fr_fqb-dep-aux-tense.html">aux:tense</a></tt>.

247 nodes (1%) are attached to their parents as `aux:pass`.

247 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.25910931174089.

The following 1 pairs of parts of speech are connected with `aux:pass`: <tt><a href="fr_fqb-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_fqb-pos-AUX.html">AUX</a></tt> (247; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux:pass	color:blue
1	Comment	comment	ADV	_	PronType=Int	3	advmod	_	_
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	calculée	calculer	VERB	_	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	mon	son	DET	_	Number=Sing|Poss=Yes	5	det	_	_
5	aide	aide	NOUN	_	Number=Sing	3	nsubj:pass	_	_
6	à	à	ADP	_	_	8	case	_	_
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	logement	logement	NOUN	_	Gender=Masc|Number=Sing	5	nmod	_	_
9	si	si	SCONJ	_	_	11	mark	_	_
10	je	il	PRON	_	Number=Sing|Person=1	11	nsubj	_	_
11	vis	vivre	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	advcl	_	_
12	en	en	ADP	_	_	13	case	_	_
13	couple	couple	NOUN	_	Number=Sing	11	obl:mod	_	_
14	?	?	PUNCT	_	_	3	punct	_	_

~~~


