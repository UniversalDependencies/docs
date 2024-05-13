---
layout: base
title:  'Statistics of nmod in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="sq_tsa-dep-nmod-poss.html">nmod:poss</a></tt>.

29 nodes (3%) are attached to their parents as `nmod`.

28 instances of `nmod` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.79310344827586.

The following 9 pairs of parts of speech are connected with `nmod`: <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (15; 52% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (5; 17% instances), <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt> (2; 7% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt> (1; 3% instances), <tt><a href="sq_tsa-pos-ADV.html">ADV</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sq_tsa-pos-DET.html">DET</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod	color:blue
1	Interesi	interes	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	_
2	për	për	ADP	_	_	3	case	_	_
3	gjuhën	gjuhë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	1	nmod	_	_
4	gjermane	gjerman	ADJ	_	Gender=Fem|Number=Sing	3	amod	_	_
5	në	në	ADP	_	_	6	case	_	_
6	Shqipëri	Shqipëri	PROPN	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	11	obl	_	_
7	ka	kam	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	11	aux	_	_
8	qenë	jam	AUX	_	VerbForm=Part	11	cop	_	_
9	përherë	përherë	ADV	_	_	11	advmod	_	_
10	i	i	DET	_	Gender=Masc	11	det:adj	_	_
11	madh	madh	ADJ	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod	color:blue
1	Ata	ai	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Prs	4	nsubj	_	_
2	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	4	cop	_	_
3	të	i	DET	_	Gender=Masc	4	det:adj	_	_
4	vetmit	vetmi	ADJ	_	Gender=Masc|Number=Plur	0	root	_	_
5	anëtarë	anëtar	NOUN	_	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur	4	nmod	_	_
6	që	që	SCONJ	_	_	8	mark	_	_
7	kanë	kam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	8	aux	_	_
8	mbijetuar	mbijetoj	VERB	_	VerbForm=Part	4	acl:relcl	_	_
9	prej	prej	ADP	_	_	10	case	_	_
10	gjinisë	gjini	NOUN	_	Case=Abl|Definite=Def|Gender=Fem|Number=Sing	8	obl	_	_
11	Homo	homo	PROPN	_	_	10	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 nmod	color:blue
1	Kalimi	kalim	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	_
2	i	i	DET	_	Gender=Masc	3	det	_	_
3	pronës	pronë	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	1	nmod:poss	_	_
4	nga	nga	ADP	_	_	6	case	_	_
5	një	një	NUM	_	_	6	nummod	_	_
6	brez	brez	NOUN	_	Case=Acc|Definite=Ind|Gender=Masc|NounType=Het|Number=Sing	1	nmod	_	_
7	në	në	ADP	_	_	8	case	_	_
8	tjetrin	tjetër	PRON	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	1	nmod	_	_
9	ndihmon	ndihmoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
10	në	në	ADP	_	_	11	case	_	_
11	centralizimin	centralizim	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	9	obl	_	_
12	e	i	DET	_	Gender=Fem	13	det	_	_
13	pasurisë	pasuri	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	11	nmod:poss	_	_
14	dhe	dhe	CCONJ	_	_	16	cc	_	_
15	të	i	DET	_	Gender=Fem	16	det	_	_
16	fuqisë	fuqi	NOUN	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	13	conj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	9	punct	_	_

~~~


