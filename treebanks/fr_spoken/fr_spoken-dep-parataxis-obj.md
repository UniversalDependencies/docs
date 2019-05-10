---
layout: base
title:  'Statistics of parataxis:obj in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `parataxis:obj`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `parataxis`: <tt><a href="fr_spoken-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="fr_spoken-dep-parataxis-insert.html">parataxis:insert</a></tt>, <tt><a href="fr_spoken-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

41 nodes (0%) are attached to their parents as `parataxis:obj`.

40 instances of `parataxis:obj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.36585365853659.

The following 3 pairs of parts of speech are connected with `parataxis:obj`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (34; 83% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (4; 10% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt> (3; 7% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 parataxis:obj	color:blue
1	vraiment	vraiment	ADV	_	_	5	advmod:periph	_	_
2	la	le	DET	_	_	3	det	_	_
3	psychiatrie	psychiatrie	NOUN	_	_	5	dislocated	_	_
4	il	il	PRON	_	_	5	nsubj	_	_
5	faut	falloir	VERB	_	_	0	root	_	_
6	ê~	ê~	VERB	CCOMP	_	5	parataxis:obj	_	_
7	il	il	PRON	_	_	8	nsubj	_	_
8	faut	falloir	VERB	_	_	5	conj:dicto	_	_
9	être	être	AUX	conj:reform	_	8	xcomp	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 parataxis:obj	color:blue
1	elle	il	PRON	_	_	3	nsubj	_	_
2	a	avoir	AUX	_	_	3	aux	_	_
3	commencé	commencer	VERB	_	_	0	root	_	_
4	par	par	ADP	_	_	6	mark	_	_
5	nous	nous	PRON	_	_	6	iobj	_	_
6	dire	dire	VERB	_	_	3	xcomp	_	_
7	euh	euh	INTJ	_	_	6	discourse	_	_
8	on	on	PRON	_	_	11	nsubj	_	_
9	est	être	AUX	_	_	11	cop	_	_
10	aux	à+le	ADP	_	_	11	case	_	_
11	affaires	affaire	NOUN	CCOMP	_	6	parataxis:obj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 parataxis:obj	color:blue
1	sois	être	AUX	CCOMP	_	3	parataxis:obj	_	_
2	purifié	purifier	VERB	_	_	1	xcomp	_	_
3	entend	entendre	VERB	_	_	0	root	_	_
4	-on	on	PRON	_	_	3	nsubj	_	_
5	dans	dans	ADP	_	_	7	case	_	_
6	l'	le	DET	_	_	7	det	_	_
7	évangile	évangile	NOUN	_	_	3	obl:mod	_	_

~~~


