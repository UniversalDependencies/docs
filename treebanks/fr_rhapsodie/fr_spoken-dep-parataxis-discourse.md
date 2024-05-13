---
layout: base
title:  'Statistics of parataxis:discourse in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `parataxis:discourse`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `parataxis`: <tt><a href="fr_spoken-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="fr_spoken-dep-parataxis-obj.html">parataxis:obj</a></tt>, <tt><a href="fr_spoken-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

131 nodes (0%) are attached to their parents as `parataxis:discourse`.

98 instances of `parataxis:discourse` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.72519083969466.

The following 12 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (41; 31% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (26; 20% instances), <tt><a href="fr_spoken-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (19; 15% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (12; 9% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (5; 4% instances), <tt><a href="fr_spoken-pos-DET.html">DET</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="fr_spoken-pos-PART.html">PART</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_spoken-pos-X.html">X</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 parataxis:discourse	color:blue
1	c'	ce	PRON	_	_	4	nsubj	_	_
2	est	être	AUX	_	_	4	cop	_	_
3	les	le	DET	_	_	4	det	_	_
4	parents	parent	NOUN	_	_	0	root	_	_
5	je	je	PRON	_	_	6	nsubj	_	_
6	pense	penser	VERB	DISCOURSE	_	4	parataxis:discourse	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 parataxis:discourse	color:blue
1	je	je	PRON	_	_	2	nsubj	_	_
2	vois	voir	VERB	DISCOURSE	_	10	parataxis:discourse	_	_
3	euh	euh	INTJ	_	_	2	discourse	_	_
4	moi	lui	PRON	_	_	10	dislocated	_	_
5	la	le	DET	_	_	6	det	_	_
6	fac	fac	NOUN	_	_	10	dislocated	_	_
7	ça	ça	PRON	_	_	10	nsubj	_	_
8	m'	me	PRON	_	_	10	iobj	_	_
9	a	avoir	AUX	_	_	10	aux	_	_
10	fait	faire	VERB	_	_	0	root	_	_
11	beaucoup	beaucoup	PRON	_	_	10	obj	_	_
12	de	de	ADP	_	_	13	case	_	_
13	bien	bien	NOUN	_	_	11	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 parataxis:discourse	color:blue
1	bon	bon	INTJ	_	_	5	discourse	_	_
2	ben	ben	INTJ	_	_	5	discourse	_	_
3	écoute	écouter	VERB	DISCOURSE	_	2	parataxis:discourse	_	_
4	j'	je	PRON	_	_	5	nsubj	_	_
5	essaierai	essayer	VERB	_	_	0	root	_	_

~~~


