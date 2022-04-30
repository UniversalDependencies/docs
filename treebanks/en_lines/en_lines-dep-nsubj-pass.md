---
layout: base
title:  'Statistics of nsubj:pass in UD_English-LinES'
udver: '2'
---

## Treebank Statistics: UD_English-LinES: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="en_lines-dep-nsubj.html">nsubj</a></tt>.

680 nodes (1%) are attached to their parents as `nsubj:pass`.

677 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.70294117647059.

The following 11 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (393; 58% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (238; 35% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-PROPN.html">PROPN</a></tt> (34; 5% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-NUM.html">NUM</a></tt> (4; 1% instances), <tt><a href="en_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="en_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="en_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Additional	additional	ADJ	POS	Degree=Pos	2	amod	_	_
2	information	information	NOUN	SG-NOM	Number=Sing	7	nsubj:pass	_	_
3	about	about	ADP	_	_	4	case	_	_
4	XML	XML	PROPN	SG-NOM	Number=Sing	2	nmod	_	_
5	can	can	AUX	PRES-AUX	VerbForm=Fin	7	aux	_	_
6	be	be	AUX	INF	VerbForm=Inf	7	aux:pass	_	_
7	found	find	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
8	on	on	ADP	_	_	11	case	_	_
9	the	the	DET	DEF	Definite=Def|PronType=Art	11	det	_	_
10	web	web	NOUN	SG-NOM	Number=Sing	11	compound	_	_
11	site	site	NOUN	SG-NOM	Number=Sing	7	obl	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	It	it	PRON	PERS-SG	_	4	nsubj:pass	_	SpaceAfter=No
2	's	be	AUX	PRES-AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
3	even	even	ADV	_	_	4	advmod	_	_
4	made	make	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
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
1	Quinn	Quinn	PROPN	SG-NOM	Number=Sing	3	nsubj:pass	_	_
2	was	be	AUX	PAST	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	used	use	VERB	PASS	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
4	to	to	ADP	_	_	5	mark	_	_
5	wandering	wander	VERB	ING	Tense=Pres|VerbForm=Part	3	ccomp	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	3	punct	_	_

~~~


