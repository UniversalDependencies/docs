---
layout: base
title:  'Statistics of obl:comp in UD_French-Spoken'
udver: '2'
---

## Treebank Statistics: UD_French-Spoken: Relations: `obl:comp`

This relation is a language-specific subtype of <tt><a href="fr_spoken-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_spoken-dep-obl-mod.html">obl:mod</a></tt>, <tt><a href="fr_spoken-dep-obl-periph.html">obl:periph</a></tt>.

668 nodes (2%) are attached to their parents as `obl:comp`.

658 instances of `obl:comp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.23652694610778.

The following 15 pairs of parts of speech are connected with `obl:comp`: <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (539; 81% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (63; 9% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (38; 6% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADV.html">ADV</a></tt> (7; 1% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-DET.html">DET</a></tt> (5; 1% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="fr_spoken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_spoken-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-PART.html">PART</a></tt>-<tt><a href="fr_spoken-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_spoken-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_spoken-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 obl:comp	color:blue
1	ah	ah	INTJ	_	_	4	discourse	_	_
2	oui	oui	INTJ	_	_	4	discourse	_	_
3	en	en	ADP	_	_	4	case	_	_
4	sortant	sortir	VERB	ETRE	_	0	root	_	_
5	de	de	ADP	_	_	7	case	_	_
6	la	le	DET	_	_	7	det	_	_
7	famille	famille	NOUN	_	_	4	obl:comp	_	_
8	quoi	quoi	INTJ	_	_	7	discourse	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:comp	color:blue
1	vous	vous	PRON	_	_	3	nsubj	_	_
2	vous	vous	PRON	_	_	3	iobj	_	_
3	trouvez	trouver	VERB	_	_	0	root	_	_
4	au	à+le	ADP	_	_	5	case	_	_
5	Gosier	Gosier	PROPN	_	_	3	obl:comp	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:comp	color:blue
1	donc	donc	ADV	_	_	4	advmod:periph	_	_
2	alors	alors	ADV	_	_	4	advmod:periph	_	_
3	ça	ça	PRON	_	_	4	nsubj	_	_
4	date	dater	VERB	_	_	0	root	_	_
5	de	de	ADP	_	_	6	case	_	_
6	quand	quand	PRON	_	_	4	obl:comp	_	_
7	à	à	ADP	_	_	8	case	_	_
8	peu	peu	NOUN	_	_	4	obl:mod	_	_
9	près	près	ADV	_	_	8	advmod	_	_
10	ce	ce	DET	_	_	11	det	_	_
11	fauteuil	fauteuil	NOUN	_	_	4	dislocated	_	_
12	-là	là	ADV	_	_	11	advmod	_	_

~~~


