---
layout: base
title:  'Statistics of nmod:poss in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sq_tsa-dep-nmod.html">nmod</a></tt>.

54 nodes (6%) are attached to their parents as `nmod:poss`.

54 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.44444444444444.

The following 4 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (42; 78% instances), <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-PRON.html">PRON</a></tt> (6; 11% instances), <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt> (5; 9% instances), <tt><a href="sq_tsa-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:poss	color:blue
1	Format	formë	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	7	nsubj	7:nsubj	_
2	e	i	DET	_	Gender=Fem	3	det	3:det	_
3	emërimit	emërim	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|NounType=Het|Number=Sing	1	nmod:poss	1:nmod:poss	_
4	të	i	DET	_	Gender=Masc	5	det	5:det	_
5	qytetit	qytet	NOUN	_	Case=Gen|Definite=Def|Gender=Masc|NounType=Het|Number=Sing	3	nmod:poss	3:nmod:poss	_
6	kanë	kam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	7	aux	7:aux	_
7	ndryshuar	ndryshoj	VERB	_	VerbForm=Part	0	root	0:root	_
8	gjatë	gjatë	ADP	_	_	9	case	9:case	_
9	shekujve	shekull	NOUN	_	Case=Abl|Definite=Def|Gender=Masc|Number=Plur	7	obl	7:obl	SpaceAfter=No
10	.	.	PUNCT	_	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod:poss	color:blue
1	Disa	disa	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	4	nsubj	4:nsubj	_
2	madje	madje	PART	_	_	4	advmod	4:advmod	_
3	e	ai	PRON	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Emp	4	expl	4:expl	_
4	mohojnë	mohoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	0:root	_
5	qenësinë	qenësinë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	4	obj	4:obj	_
6	e	i	DET	_	Gender=Fem	7	det:pron	7:det:pron	_
7	saj	ajo	PRON	_	Case=Gen|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	nmod:poss	5:nmod:poss	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:poss	color:blue
1	Ishulli	ishull	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	6:nsubj	_
2	i	i	DET	_	Gender=Masc	3	det	3:det	_
3	Manit	Mani	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	nmod:poss	1:nmod:poss	_
4	s'	s'	PART	_	Polarity=Neg	6	advmod	6:advmod	SpaceAfter=No
5	është	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	6	cop	6:cop	_
6	pjesë	pjesë	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	0:root	_
7	e	i	DET	_	Gender=Fem	8	det	8:det	_
8	Bashkimit	bashkim	PROPN	_	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	6	nmod:poss	6:nmod:poss	_
9	Evropian	evropian	ADJ	_	Gender=Masc|Number=Sing	8	amod	8:amod	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	6:punct	_

~~~


