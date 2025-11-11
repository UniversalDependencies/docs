---
layout: base
title:  'Statistics of nsubj:pass in UD_Swedish-Old'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Old: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sv_old-dep-nsubj.html">nsubj</a></tt>.

3 nodes (1%) are attached to their parents as `nsubj:pass`.

2 instances of `nsubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.33333333333333.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sv_old-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt> (2; 67% instances), <tt><a href="sv_old-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_old-pos-PRON.html">PRON</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:pass	color:blue
1	Æn	än	CCONJ	C-	_	4	cc	_	_
2	ther	þär	ADV	Df	_	4	advmod	_	_
3	til	til	ADP	V-	_	4	compound:prt	_	_
4	komber	komma	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	om	um	ADV	Df	ExtPos=ADV	4	advmod	_	_
6	sidher	sidh	ADV	Df	_	5	fixed	_	_
7	at	at	SCONJ	G-	_	9	mark	_	_
8	bordh	borþ	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	9	nsubj:pass	_	_
9	lætz	lata	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	ccomp	_	_
10	fram	fram	ADV	Df	Degree=Pos	9	advmod	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 nsubj:pass	color:blue
1	Fæmpte	fämte	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	2	amod	_	_
2	sinne	sinne	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	_
3	drikker	drikka	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	herra	härra	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	nmod	_	_
5	abote	abbote	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
6	fore	for	ADP	R-	_	8	case	_	_
7	stora	stor	ADJ	A-	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	_
8	klokkona	klokka	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	3	obl	_	_
9	som	sum	PRON	G-	PronType=Rel	10	nsubj	_	_
10	stander	standa	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl:relcl	_	_
11	j	i	ADP	R-	_	12	case	_	_
12	lund	Lund	PROPN	Ne	Case=Dat|Number=Sing	10	obl	_	_
13	at	at	SCONJ	G-	_	15	mark	_	_
14	hon	hon	PRON	Pp	Case=Nom|PronType=Prs	15	nsubj:pass	_	_
15	brytes	bryta	VERB	V-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	advcl	_	_
16	ey	eigh	PART	Df	Polarity=Neg	15	advmod	_	_

~~~


