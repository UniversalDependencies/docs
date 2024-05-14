---
layout: base
title:  'Statistics of xcomp in UD_Old_East_Slavic-Ruthenian'
udver: '2'
---

## Treebank Statistics: UD_Old_East_Slavic-Ruthenian: Relations: `xcomp`

This relation is universal.

923 nodes (1%) are attached to their parents as `xcomp`.

865 instances of `xcomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.13434452871073.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (801; 87% instances), <tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (40; 4% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-ADJ.html">ADJ</a></tt> (35; 4% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt> (26; 3% instances), <tt><a href="orv_ruthenian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="orv_ruthenian-pos-ADV.html">ADV</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt>-<tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="orv_ruthenian-pos-VERB.html">VERB</a></tt>-<tt><a href="orv_ruthenian-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	А	а	CCONJ	СС	_	6	cc	_	wf="А"
2	мы	мы	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	wf="мы"
3	вамъ	вы	PRON	PRP	Case=Dat|Number=Plur|Person=2|PronType=Prs	6	iobj	_	wf="вамъ"
4	також	также	ADV	RB	Degree=Pos	6	advmod	_	wf="також"
5	противу	противу	ADV	RB	Degree=Pos	6	advmod	_	wf="противу"
6	хочем	хотети	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="хочем"
7	приѧти	прияти	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	6	xcomp	_	wf="приѧти"|SpaceAfter=No
8	.	.	PUNCT	-PERIOD-	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp	color:blue
1	А	а	CCONJ	СС	_	3	cc	_	wf="А"
2	я	я	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	wf="я"
3	рад	радъ	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	0	root	_	wf="рад"
4	напротивкꙋ	напротивку	ADP	IN	_	6	case	_	wf="напротивкꙋ"
5	вашои	вашъ	DET	PRP$	Case=Dat|Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	6	det	_	wf="вашои"
6	м(и)л(о)сти	милость	NOUN	NNI	Case=Dat|Gender=Fem|Number=Sing	8	obl	_	wf="милости"
7	любость	любость	NOUN	NNI	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	wf="любость"
8	чинити	чинити	VERB	VB	VerbForm=Inf|Voice=Act	3	xcomp	_	wf="чинити"
9	во	въ	ADP	IN	_	10	case	_	wf="во"
10	всем	весь	DET	DT	Case=Loc|Gender=Neut|Number=Sing|PronType=Tot	8	obl	_	wf="всем"|SpaceAfter=No
11	.	.	PUNCT	-PERIOD-	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	И	и	CCONJ	СС	_	11	cc	_	wf="И"
2	хто	хто	PRON	WP	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	4	nsubj	_	wf="хто"
3	коли	коли	SCONJ	IN	_	4	mark	_	wf="коли"
4	бывает(ь)	бывати	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	dislocated	_	wf="бываеть"
5	виноват	виноватый	ADJ	JJH	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Variant=Short	4	xcomp	_	wf="виноват"
6	вашим	вашъ	DET	PRP$	Case=Dat|Gender=Masc|Number=Plur|Poss=Yes|PronType=Prs	5	iobj	_	wf="вашим"|SpaceAfter=No
7	,	,	PUNCT	-COMMA-	_	4	punct	_	_
8	ино	ино	CCONJ	СС	_	11	cc	_	wf="ино"
9	им	они	PRON	PRP	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	11	iobj	_	wf="им"
10	заплата	заплата	NOUN	NNI	Case=Nom|Gender=Fem|Number=Sing	11	nsubj	_	wf="заплата"
11	бываеть	бывати	VERB	VBC	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	wf="бываеть"|SpaceAfter=No
12	.	.	PUNCT	-PERIOD-	_	11	punct	_	_

~~~


