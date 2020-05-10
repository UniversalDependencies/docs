---
layout: base
title:  'Statistics of nsubj in UD_Albanian-TSA'
udver: '2'
---

## Treebank Statistics: UD_Albanian-TSA: Relations: `nsubj`

This relation is universal.

68 nodes (7%) are attached to their parents as `nsubj`.

58 instances of `nsubj` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.17647058823529.

The following 9 pairs of parts of speech are connected with `nsubj`: <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (38; 56% instances), <tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (8; 12% instances), <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-PRON.html">PRON</a></tt> (8; 12% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (6; 9% instances), <tt><a href="sq_tsa-pos-VERB.html">VERB</a></tt>-<tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="sq_tsa-pos-PRON.html">PRON</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="sq_tsa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sq_tsa-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sq_tsa-pos-ADV.html">ADV</a></tt>-<tt><a href="sq_tsa-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sq_tsa-pos-DET.html">DET</a></tt>-<tt><a href="sq_tsa-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
1	Shpesh	shpesh	ADV	_	_	5	advmod	5:advmod	_
2	këto	kjo	PRON	_	Gender=Fem|Number=Plur|PronType=Dem	3	det	3:det	_
3	rryma	rrym	NOUN	_	Case=Nom|Definite=Ind|Gender=Fem|Number=Plur	5	nsubj	5:nsubj	_
4	janë	jam	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	5	aux	5:aux	_
5	krijuar	krijoj	VERB	_	VerbForm=Part	0	root	0:root	_
6	dhe	dhe	CCONJ	_	_	7	cc	7:cc	_
7	bartur	bart	VERB	_	VerbForm=Part	5	conj	5:conj	_
8	nga	na	ADP	_	_	9	case	9:case	_
9	misionarët	misionar	NOUN	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur	5	obl	5:obl	SpaceAfter=No
10	.	.	PUNCT	_	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	Disa	disa	PRON	_	Gender=Masc|Number=Plur|PronType=Ind	4	nsubj	4:nsubj	_
2	madje	madje	PART	_	_	4	advmod	4:advmod	_
3	e	ai	PRON	_	Gender=Fem|Number=Sing|PronType=Emp	4	expl	4:expl	_
4	mohojnë	mohoj	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|Voice=Act	0	root	0:root	_
5	qenësinë	qenësinë	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	4	obj	4:obj	_
6	e	i	DET	_	Gender=Fem	7	det:pron	7:det:pron	_
7	saj	ajo	PRON	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	5	nmod:poss	5:nmod:poss	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	4:punct	_

~~~


