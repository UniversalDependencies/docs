---
layout: base
title:  'Statistics of flat:name in UD_Welsh-CCG'
udver: '2'
---

## Treebank Statistics: UD_Welsh-CCG: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="cy_ccg-dep-flat.html">flat</a></tt>.

134 nodes (1%) are attached to their parents as `flat:name`.

134 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.26119402985075.

The following 5 pairs of parts of speech are connected with `flat:name`: <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (116; 87% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt> (7; 5% instances), <tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="cy_ccg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cy_ccg-pos-NUM.html">NUM</a></tt> (3; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	yr	y	PART	aff	_	2	advmod	_	_
2	wy	bod	VERB	verb	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	'n	yn	AUX	impf	_	4	aux	_	_
4	eilio	eilio	NOUN	verbnoun	Number=Sing|VerbForm=Vnoun	2	xcomp	_	_
5	Elin	Elin	PROPN	person	_	4	obj	_	_
6	Jones	Jones	PROPN	person	_	5	flat:name	_	_
7	ar	ar	ADP	prep	_	8	case	_	_
8	gyfer	cyfer	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	4	obl	_	_
9	swydd	swydd	NOUN	noun	Gender=Fem|Number=Sing	8	nmod	_	_
10	y	y	DET	art	_	11	det	_	_
11	Llywydd	llywydd	NOUN	noun	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	punct	_	2	punct	_	SpacesAfter=\n

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
4	yw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	cop	_	_
5	Urdd	urdd	NOUN	noun	Gender=Fem|Number=Sing	1	nsubj	_	_
6	Gobaith	gobaith	NOUN	noun	Gender=Masc|Number=Sing	5	flat:name	_	_
7	Cymru	Cymru	PROPN	place	Gender=Fem|Number=Sing	6	flat:name	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\s\n

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:name	color:blue
1	Mudiad	mudiad	NOUN	noun	Gender=Masc|Mutation=SM|Number=Sing	0	root	_	_
2	ieuenctid	ieuenctid	NOUN	noun	Gender=Masc|Number=Sing	1	nmod	_	_
3	Cymraeg	Cymraeg	ADJ	pos	Degree=Pos	2	amod	_	_
4	yw	bod	AUX	aux	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	cop	_	_
5	Urdd	urdd	NOUN	noun	Gender=Fem|Number=Sing	1	nsubj	_	_
6	Gobaith	gobaith	NOUN	noun	Gender=Masc|Number=Sing	5	flat:name	_	_
7	Cymru	Cymru	PROPN	place	Gender=Fem|Number=Sing	6	flat:name	_	SpaceAfter=No
8	.	.	PUNCT	punct	_	1	punct	_	SpacesAfter=\s\n

~~~


