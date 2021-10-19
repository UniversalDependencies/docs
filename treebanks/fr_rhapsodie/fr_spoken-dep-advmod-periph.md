---
layout: base
title:  'Statistics of advmod:periph in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `advmod:periph`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-advmod.html">advmod</a></tt>.

439 nodes (1%) are attached to their parents as `advmod:periph`.

391 instances of `advmod:periph` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.53075170842825.

The following 16 pairs of parts of speech are connected with `advmod:periph`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (278; 63% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (53; 12% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (38; 9% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (28; 6% instances), <tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (16; 4% instances), <tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (4; 1% instances), <tt><a href="fr_spoken-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-DET.html">DET</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 advmod:periph	color:blue
1	là	là	ADV	_	_	3	advmod:periph	_	_
2	je	je	PRON	_	_	3	nsubj	_	_
3	viens	venir	VERB	_	_	0	root	_	_
4	de	de	ADP	_	_	5	mark	_	_
5	faire	faire	VERB	_	_	3	xcomp	_	_
6	mes	son	DET	_	_	8	det	_	_
7	des	de+le	ADP	de	_	6	conj:dicto	_	_
8	vaccins	vaccin	NOUN	_	_	5	obj	_	_
9	par	par	ADP	_	_	10	case	_	_
10	exemple	exemple	NOUN	_	_	3	obl:periph	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 advmod:periph	color:blue
1	donc	donc	ADV	_	_	6	advmod:periph	_	_
2	ça	ça	PRON	_	_	6	dislocated	_	_
3	c'	ce	PRON	_	_	6	nsubj	_	_
4	est	être	AUX	_	_	6	cop	_	_
5	un	un	DET	_	_	6	det	_	_
6	endroit	endroit	NOUN	_	_	0	root	_	_
7	que	que	PRON	_	_	9	obj	_	_
8	j'	je	PRON	_	_	9	nsubj	_	_
9	aime	aimer	VERB	_	_	6	acl:relcl	_	_
10	pas	pas	PART	_	_	11	advmod	_	_
11	trop	trop	ADV	_	_	9	advmod	_	_
12	euh	euh	INTJ	_	_	11	discourse	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 advmod:periph	color:blue
1	et	et	CCONJ	_	_	8	cc	_	_
2	vraiment	vraiment	ADV	_	_	8	advmod:periph	_	_
3	c'	ce	PRON	_	_	8	nsubj	_	_
4	est	être	AUX	_	_	8	cop	_	_
5	c'	ce	PRON	_	_	6	nsubj	_	_
6	est	être	AUX	conj:reform	_	8	dep	_	_
7	pas	pas	PART	_	_	8	advmod	_	_
8	uni	unir	ADJ	_	_	0	root	_	_

~~~


