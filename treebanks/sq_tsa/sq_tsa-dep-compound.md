---
layout: base
title:  'Statistics of compound in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `compound`

This relation is universal.

2 nodes (0%) are attached to their parents as `compound`.

2 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 compound	color:blue
1	Shtëpitë	shtëpi	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	11	nsubj	_	_
2	që	që	SCONJ	_	_	4	mark	_	_
3	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	4	cop	_	_
4	vendbanim	vendbanim	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	1	acl:relcl	_	_
5	i	i	DET	_	Gender=Masc	6	det	_	_
6	personave	person	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	4	nmod:poss	_	_
7	mbi	mbi	ADP	_	_	9	case	_	_
8	70	70	NUM	_	_	9	nummod	_	_
9	vjeç	vjeç	ADJ	_	Gender=Masc|Number=Sing	6	nmod	_	_
10	nuk	nuk	PART	_	Polarity=Neg	11	advmod	_	_
11	mirren	marr	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Pass	0	root	_	_
12	parasysh	parasysh	ADV	_	_	11	compound	_	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 compound	color:blue
1	Kam	kam	VERB	_	_	0	root	_	_
2	kujdesin	kujdes	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	1	compound	_	_
3	të	të	PART	_	_	4	mark	_	_
4	përmend	përmend	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	1	xcomp	_	_
5	se	se	SCONJ	_	_	8	mark	_	_
6	lumturia	lumturi	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	nsubj	_	_
7	është	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	8	cop	_	_
8	kuptim	kuptim	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Sing	4	ccomp	_	_
9	abstrakt	abstrakt	ADJ	_	Gender=Masc|Number=Sing	8	amod	_	_
10	dhe	dhe	CCONJ	_	_	11	cc	_	_
11	personal	personal	ADJ	_	Gender=Masc|Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


