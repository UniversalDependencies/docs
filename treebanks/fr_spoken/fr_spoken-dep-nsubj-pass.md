---
layout: base
title:  'Statistics of nsubj:pass in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_spoken-dep-nsubj-caus.html">nsubj:caus</a></tt>.

126 nodes (0%) are attached to their parents as `nsubj:pass`.

125 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.26190476190476.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (90; 71% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (36; 29% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	on	on	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj:pass	_	_
3	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	5	aux:pass	_	_
4	pas	pas	ADV	_	Polarity=Neg	5	advmod	_	_
5	payé	payer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	en	en	ADP	_	_	7	case	_	_
7	plus	plus	ADV	_	_	5	obl:mod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 nsubj:pass	color:blue
1	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	réunion	réunion	NOUN	_	Gender=Fem|Number=Sing	5	nsubj:pass	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
4	savamment	savamment	ADV	_	_	5	advmod	_	_
5	minutée	minuter	VERB	_	_	0	root	_	_

~~~


