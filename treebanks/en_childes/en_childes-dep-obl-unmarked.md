---
layout: base
title:  'Statistics of obl:unmarked in UD_English-CHILDES'
udver: '2'
---

## Treebank Statistics: UD_English-CHILDES: Relations: `obl:unmarked`

This relation is a language-specific subtype of <tt><a href="en_childes-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="en_childes-dep-obl-npmod.html">obl:npmod</a></tt>.

494 nodes (0%) are attached to their parents as `obl:unmarked`.

444 instances of `obl:unmarked` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.06275303643725.

The following 20 pairs of parts of speech are connected with `obl:unmarked`: <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (405; 82% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (23; 5% instances), <tt><a href="en_childes-pos-ADV.html">ADV</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (15; 3% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (12; 2% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (11; 2% instances), <tt><a href="en_childes-pos-ADP.html">ADP</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="en_childes-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-AUX.html">AUX</a></tt>-<tt><a href="en_childes-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_childes-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-NUM.html">NUM</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-PRON.html">PRON</a></tt>-<tt><a href="en_childes-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_childes-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_childes-pos-VERB.html">VERB</a></tt>-<tt><a href="en_childes-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obl:unmarked	color:blue
1	You	you	PRON	PRP	_	4	nsubj	4:nsubj	_
2	're	be	AUX	VBP	_	4	aux	4:aux	_
3	not	not	PART	RB	_	4	advmod	4:advmod	_
4	going	go	VERB	VBG	_	0	root	0:root	_
5	tomorrow	tomorrow	NOUN	NN	_	4	obl:unmarked	4:obl:unmarked	_
6	either	either	ADV	RB	_	4	advmod	4:advmod	SpaceAfter=No
7	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:unmarked	color:blue
1	That	that	PRON	DT	_	5	nsubj	5:nsubj	_
2	was	be	AUX	VBD	_	5	cop	5:cop	_
3	a	a	DET	DT	_	5	det	5:det	_
4	nice	nice	ADJ	JJ	_	5	amod	5:amod	_
5	seesaw	seesaw	NOUN	NN	_	0	root	0:root	_
6	at	at	ADP	IN	_	8	case	8:case	_
7	the	the	DET	DT	_	8	det	8:det	_
8	play+ground	play+ground	NOUN	NN	_	5	nmod	5:nmod:at	_
9	yesterday	yesterday	NOUN	NN	_	5	obl:unmarked	5:obl:unmarked	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:unmarked	color:blue
1	Last	last	ADJ	JJ	_	2	amod	2:amod	_
2	summer	summer	NOUN	NN	_	3	obl:unmarked	3:obl:unmarked	_
3	when	when	ADV	WRB	_	4	advmod	4:advmod	_
4	Olivia	Olivia	PROPN	NNP	_	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


