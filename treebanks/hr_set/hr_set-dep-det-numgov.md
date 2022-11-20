---
layout: base
title:  'Statistics of det:numgov in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-det.html">det</a></tt>.

357 nodes (0%) are attached to their parents as `det:numgov`.

353 instances of `det:numgov` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30532212885154.

The following 9 pairs of parts of speech are connected with `det:numgov`: <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (333; 93% instances), <tt><a href="hr_set-pos-PRON.html">PRON</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (9; 3% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="hr_set-pos-DET.html">DET</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-NUM.html">NUM</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 det:numgov	color:blue
1	Toliko	toliko	DET	Rgp	Degree=Pos|PronType=Dem	3	det:numgov	_	_
2	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	radnika	radnik	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	4	obj	_	_
4	otpušteno	otpustiti	ADJ	Appnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Z	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 det:numgov	color:blue
1	Neki	neki	DET	Pi-mpn	Case=Nom|Gender=Masc|Number=Plur|PronType=Ind	2	det	_	_
2	ljudi	čovjek	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	3	nsubj	_	_
3	vjeruju	vjerovati	VERB	Vmr3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	u	u	ADP	Sa	Case=Acc	6	case	_	_
5	jednog	jedan	NUM	Mlcmsay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing|NumType=Card	6	nummod	_	_
6	boga	bog	NOUN	Ncmsay	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	8	punct	_	_
8	drugi	drugi	ADJ	Mlompn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	3	conj	_	orig_deprel=nsubj
9	u	u	ADP	Sa	Case=Acc	11	case	_	_
10	više	mnogo	DET	Rgc	Degree=Cmp	11	det:numgov	_	_
11	njih	oni	PRON	Pp3-pg	Case=Gen|Number=Plur|Person=3|PronType=Prs	8	orphan	_	orig_deprel=obl|SpaceAfter=No
12	.	.	PUNCT	Z	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 det:numgov	color:blue
1	Niti	niti	PART	Qz	Polarity=Neg	2	discourse	_	_
2	jedna	jedan	NUM	Mlcfsn	Case=Nom|Gender=Fem|Number=Sing|NumType=Card	3	nummod	_	_
3	stranka	stranka	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	_
4	nije	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	aux	_	_
5	objavila	objaviti	VERB	Vmp-sf	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
6	koliko	koliko	DET	Rgp	Degree=Pos|PronType=Int,Rel	9	det:numgov	_	_
7	će	htjeti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
8	novca	novac	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	9	obj	_	_
9	potrošiti	potrošiti	VERB	Vmn	VerbForm=Inf	5	ccomp	_	_
10	u	u	ADP	Sl	Case=Loc	11	case	_	_
11	kampanji	kampanja	NOUN	Ncfsl	Case=Loc|Gender=Fem|Number=Sing	9	obl	_	_
12	niti	niti	CCONJ	Cc	_	13	cc	_	_
13	imena	ime	NOUN	Ncnpa	Case=Acc|Gender=Neut|Number=Plur	9	conj	_	_
14	glavnih	glavni	ADJ	Agpmpgy	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	15	amod	_	_
15	donatora	donator	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	13	nmod	_	SpaceAfter=No
16	,	,	PUNCT	Z	_	19	punct	_	_
17	ali	ali	CCONJ	Cc	_	19	cc	_	_
18	su	biti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	19	aux	_	_
19	obećale	obećati	VERB	Vmp-pf	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Act	5	conj	_	_
20	kako	kako	SCONJ	Cs	_	23	mark	_	_
21	će	htjeti	AUX	Var3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	23	aux	_	_
22	to	taj	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	23	obj	_	_
23	učiniti	učiniti	VERB	Vmn	VerbForm=Inf	19	ccomp	_	_
24	nakon	nakon	ADP	Sg	Case=Gen	25	case	_	_
25	izbora	izbor	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	23	obl	_	SpaceAfter=No
26	.	.	PUNCT	Z	_	5	punct	_	_

~~~


