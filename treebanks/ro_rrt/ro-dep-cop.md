---
layout: base
title:  'Statistics of cop in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Relations: `cop`

This relation is universal.

2109 nodes (1%) are attached to their parents as `cop`.

1987 instances of `cop` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75391180654339.

The following 10 pairs of parts of speech are connected with `cop`: <tt><a href="ro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (771; 37% instances), <tt><a href="ro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (631; 30% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (277; 13% instances), <tt><a href="ro-pos-ADV.html">ADV</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (269; 13% instances), <tt><a href="ro-pos-PRON.html">PRON</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (83; 4% instances), <tt><a href="ro-pos-ADP.html">ADP</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (30; 1% instances), <tt><a href="ro-pos-NUM.html">NUM</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (30; 1% instances), <tt><a href="ro-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (14; 1% instances), <tt><a href="ro-pos-DET.html">DET</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="ro-pos-SYM.html">SYM</a></tt>-<tt><a href="ro-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Scrisul	scris	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	_
2	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	_
3	sine	sine	PRON	Px3--a--------s	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Strong	1	amod	_	_
4	era	fi	AUX	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	6	cop	_	_
5	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	6	det	_	_
6	treabă	treabă	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	_
7	ușoară	ușor	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	SpaceAfter=No
8	.	.	PUNCT	PERIOD	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cop	color:blue
1	Aproape	aproape	ADV	Rgp	Degree=Pos	2	advmod	_	_
2	toți	tot	DET	Di3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Ind	3	det	_	_
3	copiii	copil	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	9	nsubj	_	_
4	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
5	ziua	zi	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	3	nmod	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	azi	azi	ADV	Rgp	Degree=Pos	5	advmod	_	_
8	erau	fi	AUX	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	9	cop	_	_
9	îngrozitori	îngrozitor	ADJ	Afpmp-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	0	root	_	SpaceAfter=No
10	.	.	PUNCT	PERIOD	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cop	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	7	advmod	_	_
2	realitate	realitate	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	2	punct	_	_
4	nici	nici	ADV	Rz	PronType=Neg	7	advmod	_	_
5	nu	nu	PART	Qz	Polarity=Neg	7	advmod	_	_
6	era	fi	AUX	Vaii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	cop	_	_
7	obișnuit	obișnui	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
8	să	să	PART	Qs	Mood=Sub	9	mark	_	_
9	scrie	scrie	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	7	ccomp:pmod	_	_
10	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	_
11	mână	mână	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	obl	_	SpaceAfter=No
12	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


