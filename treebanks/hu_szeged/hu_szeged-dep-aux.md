---
layout: base
title:  'Statistics of aux in UD_Hungarian-Szeged'
udver: '2'
---

## Treebank Statistics: UD_Hungarian-Szeged: Relations: `aux`

This relation is universal.

32 nodes (0%) are attached to their parents as `aux`.

22 instances of `aux` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21875.

The following 2 pairs of parts of speech are connected with `aux`: <tt><a href="hu_szeged-pos-VERB.html">VERB</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (29; 91% instances), <tt><a href="hu_szeged-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hu_szeged-pos-AUX.html">AUX</a></tt> (3; 9% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Bár	bár	SCONJ	_	_	3	mark	_	_
2	name	ne	ADV	_	PronType=Neg	3	advmod	_	_
3	tettem	tesz	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	volna	van	AUX	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	SpaceAfter=No
5	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 21 aux	color:blue
1	Ezzel	ez	PRON	_	Case=Ins|Number=Sing|Person=3|PronType=Dem	5	obl	_	_
2	csak	csak	ADV	_	_	5	advmod:mode	_	_
3	azt	az	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Dem	5	obj	_	_
4	akarjuk	akar	VERB	_	Definite=Def|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	mondani	mond	VERB	_	VerbForm=Inf|Voice=Act	4	xcomp	_	SpaceAfter=No
6	:	:	PUNCT	_	_	18	punct	_	_
7	ha	ha	SCONJ	_	_	12	mark	_	_
8	elbeszélésünk	elbeszélés	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Plur|Person[psor]=1	10	nmod:att	_	_
9	első	első	ADJ	_	Case=Nom|Number=Sing|NumType=Ord	10	amod:att	_	_
10	embere	ember	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	12	nsubj	_	_
11	magára	maga	PRON	_	Case=Sbl|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	12	obl	_	_
12	ölti	ölt	VERB	_	Definite=Def|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	advcl	_	_
13	a	a	DET	_	Definite=Def|PronType=Art	14	det	_	_
14	partizán-módit	partizán-módi	NOUN	_	Case=Acc|Number=Sing	12	obj	_	SpaceAfter=No
15	,	,	PUNCT	_	_	12	punct	_	_
16	akár	akár	ADV	_	_	18	advmod:mode	_	_
17	még	még	ADV	_	_	18	advmod:tlocy	_	_
18	képviselő	képviselő	NOUN	_	Case=Nom|Number=Sing	4	ccomp:obj	_	_
19	is	is	ADV	_	_	18	advmod:mode	_	_
20	lehetett	lehet	AUX	_	Definite=Ind|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	18	aux	_	_
21	volna	van	AUX	_	Definite=Ind|Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	18	aux	_	SpaceAfter=No
22	.	.	PUNCT	_	_	4	punct	_	_

~~~


