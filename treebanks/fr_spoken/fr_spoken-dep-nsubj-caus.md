---
layout: base
title:  'Statistics of nsubj:caus in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `nsubj:caus`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="fr_spoken-dep-nsubj-pass.html">nsubj:pass</a></tt>.

14 nodes (0%) are attached to their parents as `nsubj:caus`.

14 instances of `nsubj:caus` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.42857142857143.

The following 2 pairs of parts of speech are connected with `nsubj:caus`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (12; 86% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:caus	color:blue
1	et	et	CCONJ	_	_	6	cc	_	_
2	ça	ça	PRON	_	_	6	nsubj:caus	_	_
3	m'	me	PRON	_	_	6	iobj	_	_
4	a	avoir	AUX	_	_	6	aux	_	_
5	fait	faire	AUX	DoubleAux	_	6	aux:caus	_	_
6	voir	voir	VERB	CAUSATIVE	_	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 nsubj:caus	color:blue
1	je	je	PRON	_	_	2	nsubj	_	_
2	sais	savoir	VERB	_	_	0	root	_	_
3	que	que	SCONJ	_	_	10	mark	_	_
4	bien	bien	NOUN	_	_	10	nsubj:caus	_	_
5	de	de	ADP	_	_	7	case	_	_
6	les	le	DET	_	_	7	det	_	_
7	tragédies	tragédie	NOUN	_	_	4	nmod	_	_
8	aujourd'hui	aujourd'	ADV	_	_	10	advmod	_	_
9	font	faire	AUX	_	_	10	aux:caus	_	_
10	douter	douter	VERB	_	_	2	ccomp	_	_
11	de	de	ADP	_	_	13	case	_	_
12	cette	ce	DET	_	_	13	det	_	_
13	espérance	espérance	NOUN	_	_	10	obl:arg	_	_

~~~


