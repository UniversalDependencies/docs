---
layout: base
title:  'Statistics of nmod:poss in UD_Swedish-Old'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Old: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sv_old-dep-nmod.html">nmod</a></tt>.

10 nodes (2%) are attached to their parents as `nmod:poss`.

9 instances of `nmod:poss` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.3.

The following 2 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_old-pos-PRON.html">PRON</a></tt> (8; 80% instances), <tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_old-pos-NOUN.html">NOUN</a></tt> (2; 20% instances).


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 nmod:poss	color:blue
1	Æn	än	CCONJ	C-	_	11	cc	_	_
2	then	þän	DET	Pd	Case=Nom|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	samma	samber	ADJ	A-	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	_
4	ember	ember	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	_	_
5	som	sum	PRON	G-	PronType=Rel	6	nsubj	_	_
6	gar	ganga	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	_
7	wr	ur	ADP	R-	_	10	case	_	_
8	herra	härra	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	9	nmod	_	_
9	abota	abbote	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	10	nmod:poss	_	_
10	halsse	hals	NOUN	Nb	Case=Dat|Gender=Masc|Number=Sing	6	obl	_	_
11	swemar	svema	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
12	om	um	ADP	R-	_	13	case	_	_
13	ænne	änne	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	11	obl	_	_
14	hans	han	PRON	Pp	Case=Gen|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
15	alt	alder	PRON	Py	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	13	det	_	_
16	och	ok	CCONJ	C-	_	17	cc	_	_
17	hoffwdh	hovuþ	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	13	conj	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 nmod:poss	color:blue
1	Tridhiæ	þriþi	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc,Neut|Number=Sing	2	amod	_	_
2	sin	sin	NOUN	Nb	Case=Acc|Gender=Masc,Neut|Number=Sing	3	obl	_	_
3	drikker	drikka	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	herra	härra	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	5	nmod	_	_
5	abote	abbote	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	_	_
6	fore	for	ADP	R-	_	7	case	_	_
7	synder	synd	NOUN	Nb	Case=Acc|Gender=Fem|Number=Plur	3	obl	_	_
8	och	ok	CCONJ	C-	_	9	cc	_	_
9	glømsko	glömska	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	7	conj	_	_
10	alla	alder	PRON	Py	Case=Gen|Gender=Masc|Number=Plur|PronType=Tot	11	det	_	_
11	brødra	broþir	NOUN	Nb	Case=Gen|Gender=Masc|Number=Plur	7	nmod:poss	_	_

~~~


