---
layout: base
title:  'Statistics of flat:name in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-flat.html">flat</a></tt>.

273 nodes (1%) are attached to their parents as `flat:name`.

273 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.22344322344322.

The following 5 pairs of parts of speech are connected with `flat:name`: <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (245; 90% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (15; 5% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (4; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat:name	color:blue
1	Mae	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	SpaceAfter=No
2	'n	yn	PART	pred	_	3	case:pred	_	_
3	fab	mab	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
4	i	i	ADP	prep	_	6	case	_	SpaceAfter=No
5	'r	y	DET	art	_	6	det	_	_
6	hanesydd	hanesydd	NOUN	noun	Gender=Masc|Number=Sing	3	nmod	_	_
7	Richard	Richard	PROPN	person	_	6	flat	_	_
8	Cyril	Cyril	PROPN	person	_	7	flat:name	_	_
9	Hughes	Hughes	PROPN	person	_	7	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	Mudiad	mudiad	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
2	ieuenctid	ieuenctid	NOUN	noun	Gender=Masc|Number=Sing	1	nmod	_	_
3	Cymraeg	Cymraeg	ADJ	pos	Degree=Pos	2	amod	_	_
4	yw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	_
5	Urdd	urdd	NOUN	noun	Gender=Fem|Number=Sing	1	nsubj	_	_
6	Gobaith	gobaith	NOUN	noun	Gender=Masc|Number=Sing	5	flat:name	_	_
7	Cymru	Cymru	PROPN	place	Gender=Fem|Number=Sing	6	flat:name	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\n

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:name	color:blue
1	Fe	fe	PART	aff	_	3	advmod	_	SpaceAfter=No
2	'i	hi	PRON	dep	Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
3	sefydlwyd	sefydlu	VERB	verb	Mood=Ind|Person=0|Tense=Past|VerbForm=Fin	0	root	_	_
4	yn	yn	ADP	prep	_	5	case	_	_
5	1922	1922	NUM	num	_	3	obl	_	_
6	gan	gan	ADP	prep	_	7	case	_	_
7	Syr	syr	NOUN	noun	Gender=Masc|Number=Sing	3	obl:agent	_	_
8	Ifan	Ifan	PROPN	person	_	7	flat	_	_
9	ab	ap	NOUN	noun	Gender=Masc|Number=Sing	8	flat:name	_	_
10	Owen	Owen	PROPN	person	_	8	flat:name	_	_
11	Edwards	Edwards	PROPN	person	_	8	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	3	punct	_	SpacesAfter=\n

~~~


