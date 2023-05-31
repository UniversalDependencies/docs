---
layout: base
title:  'Statistics of discourse in UD_Old_Church_Slavonic'
udver: '2'
---

## Treebank Statistics: UD_Old_Church_Slavonic: Relations: `discourse`

This relation is universal.

2035 nodes (4%) are attached to their parents as `discourse`.

1411 instances of `discourse` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.63734643734644.

The following 13 pairs of parts of speech are connected with `discourse`: <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (1952; 96% instances), <tt><a href="cu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (29; 1% instances), <tt><a href="cu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (13; 1% instances), <tt><a href="cu-pos-INTJ.html">INTJ</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (8; 0% instances), <tt><a href="cu-pos-NUM.html">NUM</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (7; 0% instances), <tt><a href="cu-pos-PROPN.html">PROPN</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="cu-pos-VERB.html">VERB</a></tt>-<tt><a href="cu-pos-INTJ.html">INTJ</a></tt> (5; 0% instances), <tt><a href="cu-pos-ADV.html">ADV</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="cu-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="cu-pos-PRON.html">PRON</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="cu-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="cu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="cu-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), <tt><a href="cu-pos-ADP.html">ADP</a></tt>-<tt><a href="cu-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 discourse	color:blue
1	аще	аще	SCONJ	G-	_	6	mark	_	ref=MATT_5.29
2	же	же	ADV	Df	_	8	discourse	_	ref=MATT_5.29
3	око	око	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	ref=MATT_5.29
4	твое	твои	ADJ	Ps	Case=Nom|Gender=Neut|Number=Sing|Person=2|Poss=Yes	3	nmod	_	ref=MATT_5.29
5	десное	деснъ	ADJ	A-	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing|Strength=Weak	3	amod	_	ref=MATT_5.29
6	съблажнаатъ	съблажнꙗти	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	advcl	_	ref=MATT_5.29
7	тѧ	тꙑ	PRON	Pp	Case=Acc|Number=Sing|Person=2|PronType=Prs	6	obj:dir	_	ref=MATT_5.29
8	ꙇзьми	изѧти	VERB	V-	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=MATT_5.29
9	е	и	PRON	Pp	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	obj:dir	_	ref=MATT_5.29
10	и	и	CCONJ	C-	_	8	cc	_	ref=MATT_5.29
11	връзи	врѣщи	VERB	V-	Mood=Imp|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	ref=MATT_5.29
12	отъ	отъ	ADP	R-	_	13	case	_	ref=MATT_5.29
13	тебе	тꙑ	PRON	Pp	Case=Gen|Number=Sing|Person=2|PronType=Prs	11	obl	_	ref=MATT_5.29

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 discourse	color:blue
1	тѣмь	тъ	ADJ	Pd	Case=Ins|Gender=Neut|Number=Sing	6	obl	_	ref=LUKE_7.7
2	же	же	ADV	Df	_	1	discourse	_	ref=LUKE_7.7
3	ни	ни	ADV	Df	Polarity=Neg	6	advmod	_	ref=LUKE_7.7
4	себе	себе	PRON	Pk	Case=Gen|Number=Sing|Person=3|PronType=Prs|Reflex=Yes	6	obj:dir	_	ref=LUKE_7.7
5	достоина	достоинъ	ADJ	A-	Case=Gen|Degree=Pos|Gender=Masc,Neut|Number=Sing|Strength=Strong	6	xcomp	_	ref=LUKE_7.7
6	сътворихъ	сътворити	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=LUKE_7.7
7	прити	прити	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	5	ccomp	_	ref=LUKE_7.7
8	къ	къ	ADP	R-	_	9	case	_	ref=LUKE_7.7
9	тебѣ	тꙑ	PRON	Pp	Case=Dat|Number=Sing|Person=2|PronType=Prs	7	obl	_	ref=LUKE_7.7

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	вьсѣ	вьсь	DET	Px	Case=Nom|Gender=Neut|Number=Plur	3	det	_	ref=MATT_24.8
2	же	же	ADV	Df	_	4	discourse	_	ref=MATT_24.8
3	си	сь	ADJ	Pd	Case=Nom|Gender=Neut|Number=Plur	4	nsubj	_	ref=MATT_24.8
4	начѧло	начѧло	NOUN	Nb	Case=Nom|Gender=Neut|Number=Sing	0	root	_	ref=MATT_24.8
5	болѣзнии	болѣзнь	NOUN	Nb	Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	ref=MATT_24.8

~~~


