---
layout: base
title:  'Statistics of flat in UD_German-HDT'
udver: '2'
---

## Treebank Statistics: UD_German-HDT: Relations: `flat`

This relation is universal.
There are 1 language-specific subtypes of `flat`: <tt><a href="de_hdt-dep-flat-name.html">flat:name</a></tt>.

8704 nodes (1%) are attached to their parents as `flat`.

8704 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.55434283088235.

The following 7 pairs of parts of speech are connected with `flat`: <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (4941; 57% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-X.html">X</a></tt> (1495; 17% instances), <tt><a href="de_hdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (1054; 12% instances), <tt><a href="de_hdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (972; 11% instances), <tt><a href="de_hdt-pos-X.html">X</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (237; 3% instances), <tt><a href="de_hdt-pos-NUM.html">NUM</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="de_hdt-pos-PRON.html">PRON</a></tt>-<tt><a href="de_hdt-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Beteiligung	Beteiligung	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	nsubj	_	_
2	an	an	ADP	APPR	Case=Dat	3	case	_	_
3	Global	Global	X	FM	Person=3	1	nmod	_	_
4	One	One	X	FM	Person=3	3	flat	_	_
5	wird	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	teuer	teuer	ADJ	ADJD	Degree=Pos	5	xcomp	_	_
7	für	für	ADP	APPR	_	8	case	_	_
8	Telekom	Telekom	PROPN	NE	Case=Acc|Gender=Fem|Number=Sing|Person=3	6	obl	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
1	Nokia	Nokia	PROPN	NE	Case=Nom|Number=Sing|Person=3	0	root	_	_
2	6210	6210	NUM	CARD	Number=Plur|Person=3	1	flat	_	_
3	und	und	CCONJ	KON	_	4	cc	_	_
4	7110	7110	NUM	CARD	Number=Plur|Person=3	1	conj	_	_
5	sowie	sowie	CCONJ	KON	_	6	cc	_	_
6	Siemens	Siemens	PROPN	NE	Case=Nom|Number=Sing|Person=3	4	conj	_	_
7	C35	C35	X	FM	Person=3	6	flat	_	_
8	und	und	CCONJ	KON	_	9	cc	_	_
9	S35	S35	X	FM	Person=3	6	conj	_	_
10	.	.	PUNCT	$.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 flat	color:blue
1	Deutsche	deutsch	ADJ	ADJA	Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
2	Bank	Bank	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Person=3	6	nsubj	_	_
3	24	24	NUM	CARD	Number=Plur|Person=3	2	flat	_	_
4	und	und	CCONJ	KON	_	5	cc	_	_
5	Yahoo	Yahoo	PROPN	NE	Case=Nom|Number=Sing|Person=3	2	conj	_	_
6	kooperieren	kooperieren	VERB	VVFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres	0	root	_	_

~~~


