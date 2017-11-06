---
layout: base
title:  'Statistics of obl:agent in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-obl.html">obl</a></tt>.

104 nodes (0%) are attached to their parents as `obl:agent`.

103 instances of `obl:agent` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.78846153846154.

The following 7 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (64; 62% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (20; 19% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (9; 9% instances), <tt><a href="en_lines-pos-NUM.html">NUM</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (4; 4% instances), <tt><a href="en_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:agent	color:blue
1	Food	food	NOUN	SG-NOM	_	3	nsubj:pass	_	_
2	was	be	AUX	PAST	_	3	aux	_	_
3	cooked	cook	VERB	PASS	_	0	root	_	_
4	by	by	ADP	_	_	6	case	_	_
5	many	many	ADJ	POS	_	6	amod	_	_
6	hands	hand	NOUN	PL-NOM	_	3	obl:agent	_	SpaceAfter=No
7	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 obl:agent	color:blue
1	That	that	PRON	DEM-SG	_	4	nsubj:pass	_	_
2	was	be	AUX	PAST	_	4	aux	_	_
3	also	also	ADV	_	_	4	advmod	_	_
4	mentioned	mention	VERB	PASS	_	0	root	_	_
5	by	by	ADP	_	_	10	case	_	_
6	Mrs	Mrs	NOUN	SG-NOM	_	7	compound	_	_
7	Oomen-Ruijten	oomen-ruijten	PROPN	SG-NOM	_	10	compound	_	_
8	and	and	CCONJ	_	_	9	cc	_	_
9	Mrs	Mrs	NOUN	SG-NOM	_	7	conj	_	_
10	Glase	glase	PROPN	SG-NOM	_	4	obl:agent	_	SpaceAfter=No
11	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:agent	color:blue
1	John	john	PROPN	SG-NOM	_	3	nsubj:pass	_	_
2	was	be	AUX	PAST	_	3	aux	_	_
3	delighted	delight	VERB	PASS	_	0	root	_	_
4	by	by	ADP	_	_	5	case	_	_
5	this	this	PRON	DEM-SG	_	3	obl:agent	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	3	punct	_	_

~~~


