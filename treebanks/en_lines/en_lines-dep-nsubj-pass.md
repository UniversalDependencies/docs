---
layout: base
title:  'Statistics of nsubj:pass in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-nsubj.html">nsubj</a></tt>.

580 nodes (1%) are attached to their parents as `nsubj:pass`.

577 instances of `nsubj:pass` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.84310344827586.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (350; 60% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (182; 31% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (39; 7% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Additional	additional	ADJ	POS	_	2	amod	_	_
2	information	information	NOUN	SG-NOM	_	7	nsubj:pass	_	_
3	about	about	ADP	_	_	4	case	_	_
4	XML	xml	PROPN	SG-NOM	_	2	nmod	_	_
5	can	can	AUX	PRES-AUX	_	7	aux	_	_
6	be	be	AUX	INF	_	7	aux	_	_
7	found	find	VERB	PASS	_	0	root	_	_
8	on	on	ADP	_	_	11	case	_	_
9	the	the	DET	DEF	_	11	det	_	_
10	web	web	NOUN	SG-NOM	_	11	compound	_	_
11	site	site	NOUN	SG-NOM	_	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	It	it	PRON	PERS-SG	_	4	nsubj:pass	_	SpaceAfter=No
2	's	be	AUX	PRES-AUX	_	4	aux	_	_
3	even	even	ADV	_	_	4	advmod	_	_
4	made	make	VERB	PASS	_	0	root	_	_
5	out	out	ADV	_	_	4	compound:prt	_	_
6	to	to	ADP	_	_	7	case	_	_
7	you	you	PRON	PERS-P2	_	4	obl	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Office	office	PROPN	SG-NOM	_	3	nsubj:pass	_	_
2	2002	2002	NUM	ID	_	1	nummod	_	_
3	installed	install	VERB	PASS	_	0	root	_	_
4	on	on	ADP	_	_	5	case	_	_
5	computer	computer	NOUN	SG-NOM	_	3	obl	_	_

~~~


