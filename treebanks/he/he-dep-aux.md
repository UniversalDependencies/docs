---
layout: base
title:  'Statistics of aux in UD_Hebrew'
udver: '2'
---

## Treebank Statistics: UD_Hebrew: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="he-dep-aux-q.html">aux:q</a></tt>.

773 nodes (0%) are attached to their parents as `aux`.

714 instances of `aux` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90038809831824.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="he-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (308; 40% instances), <tt><a href="he-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (190; 25% instances), <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (144; 19% instances), <tt><a href="he-pos-AUX.html">AUX</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (104; 13% instances), <tt><a href="he-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (13; 2% instances), <tt><a href="he-pos-ADV.html">ADV</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="he-pos-PRON.html">PRON</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="he-pos-NUM.html">NUM</a></tt>-<tt><a href="he-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="he-pos-VERB.html">VERB</a></tt>-<tt><a href="he-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det:def	_	_
2	משבר	משבר	NOUN	NOUN	Gender=Masc|Number=Sing	10	nsubj	_	_
3	ב	ב	ADP	ADP	_	5	case	_	_
4	ה_	ה	DET	DET	PronType=Art	5	det:def	_	_
5	מפרץ	מפרץ	NOUN	NOUN	Gender=Masc|Number=Sing	2	nmod	_	_
6	ה	ה	DET	DET	PronType=Art	7	det:def	_	_
7	פרסי	פרסי	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	_
8	לא	לא	ADV	ADV	Polarity=Neg	10	advmod	_	_
9	היה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	10	aux	_	_
10	נושא	נושא	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	0	root	_	_
11	בחירות	בחירות	NOUN	NOUN	Gender=Fem|Number=Plur	10	compound:smixut	_	_
12	מרכזי	מרכזי	ADJ	ADJ	Gender=Masc|Number=Sing	10	amod	_	_
13	ב	ב	ADP	ADP	_	14	case	_	_
14	איובה	איובה	PROPN	PROPN	_	10	nmod	_	_
15	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	מסתבר	הסתבר	VERB	VERB	Gender=Masc|HebBinyan=HITPAEL|Number=Sing|Person=1,2,3|VerbForm=Part	0	root	_	_
2	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
3	הייתי	היה	VERB	VERB	Gender=Fem,Masc|Number=Sing|Person=1|Polarity=Pos|Tense=Past|VerbType=Cop	4	aux	_	_
4	תמים	תמים	ADJ	ADJ	Gender=Masc|Number=Sing	1	advcl	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 aux	color:blue
1	נראה	נראה	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Mid	0	root	_	_
2	היה	היה	VERB	VERB	Gender=Masc|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	1	aux	_	_
3	ש	ש	SCONJ	SCONJ	_	5	mark	_	_
4	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	זיווג	זיווג	NOUN	NOUN	Gender=Masc|Number=Sing	1	ccomp	_	_
6	טוב	טוב	ADJ	ADJ	Gender=Masc|Number=Sing	5	amod	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


