---
layout: base
title:  'Statistics of nsubj:caus in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_spoken-dep-nsubj-expl.html">nsubj:expl</a></tt>, <tt><a href="fr_spoken-dep-nsubj-pass.html">nsubj:pass</a></tt>.

18 nodes (0%) are attached to their parents as `nsubj:caus`.

18 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.05555555555556.

The following 2 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (14; 78% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (4; 22% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:caus	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	ça	ça	PRON	_	_	6	nsubj:caus	_	_
3	m'	me	PRON	_	_	6	iobj	_	_
4	a	avoir	VERB	_	_	6	aux	_	_
5	fait	faire	VERB	DoubleAux	_	6	aux:caus	_	_
6	voir	voir	VERB	CAUSATIVE	_	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 nsubj:caus	color:blue
1	alors	alors	ADV	_	_	6	advmod:periph	_	_
2	les	le	DET	_	_	3	det	_	_
3	la	le	DET	_	_	4	det	_	_
4	probabilité	probabilité	NOUN	_	_	8	nsubj:caus	_	_
5	ne	ne	PART	_	_	6	advmod	_	_
6	fait	faire	VERB	_	_	8	aux:caus	_	_
7	qu'	que	SCONJ	_	_	8	advcl	_	_
8	augmenter	augmenter	VERB	CAUSATIVE	_	0	root	_	_
9	avec	avec	ADP	_	_	11	case	_	_
10	le	le	DET	_	_	11	det	_	_
11	temps	temps	NOUN	_	_	8	obl:mod	_	_

~~~


