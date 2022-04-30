---
layout: base
title:  'Statistics of det:numgov in UD_Croatian-SET'
udver: '2'
---

## Treebank Statistics: UD_Croatian-SET: Relations: `det:numgov`

This relation is a language-specific subtype of <tt><a href="hr_set-dep-det.html">det</a></tt>.

364 nodes (0%) are attached to their parents as `det:numgov`.

360 instances of `det:numgov` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.30494505494505.

The following 9 pairs of parts of speech are connected with `det:numgov`: <tt><a href="hr_set-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (339; 93% instances), <tt><a href="hr_set-pos-PRON.html">PRON</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (9; 2% instances), <tt><a href="hr_set-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="hr_set-pos-VERB.html">VERB</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="hr_set-pos-ADJ.html">ADJ</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="hr_set-pos-DET.html">DET</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="hr_set-pos-ADV.html">ADV</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-AUX.html">AUX</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="hr_set-pos-NUM.html">NUM</a></tt>-<tt><a href="hr_set-pos-DET.html">DET</a></tt> (1; 0% instances).


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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det:numgov	color:blue
1	Devetnaestog	devetnaesti	ADJ	Mlomsg	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	_
2	studenog	studeni	NOUN	Ncmsg	Case=Gen|Gender=Masc|Number=Sing	3	obl	_	_
3	uhićeno	uhititi	ADJ	Appnsny	Case=Nom|Definite=Def|Degree=Pos|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
4	je	biti	AUX	Var3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux	_	_
5	15	15	NUM	Mdc	NumType=Card	6	nummod	_	_
6	osumnjičenika	osumnjičenik	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Z	_	8	punct	_	_
8	uključujući	uključivati	ADV	Rr	Tense=Pres|VerbForm=Conv	3	xcomp	_	_
9	nekoliko	nekoliko	DET	Rgp	Degree=Pos|PronType=Ind	10	det:numgov	_	_
10	Turaka	Turčin	PROPN	Npmpg	Case=Gen|Gender=Masc|Number=Plur	8	obj	_	_
11	i	i	CCONJ	Cc	_	12	cc	_	_
12	Hrvata	Hrvat	PROPN	Npmpg	Case=Gen|Gender=Masc|Number=Plur	10	conj	_	SpaceAfter=No
13	.	.	PUNCT	Z	_	3	punct	_	_

~~~


