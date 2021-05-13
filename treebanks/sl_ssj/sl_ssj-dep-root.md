---
layout: base
title:  'Statistics of root in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `root`

This relation is universal.

8000 nodes (6%) are attached to their parents as `root`.

8000 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.9605.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (6205; 78% instances), -<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (1048; 13% instances), -<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (595; 7% instances), -<tt><a href="sl_ssj-pos-X.html">X</a></tt> (58; 1% instances), -<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (31; 0% instances), -<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (20; 0% instances), -<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (13; 0% instances), -<tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt> (10; 0% instances), -<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (10; 0% instances), -<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (5; 0% instances), -<tt><a href="sl_ssj-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), -<tt><a href="sl_ssj-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), -<tt><a href="sl_ssj-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Stala	stati	VERB	Vmpp-sf	Aspect=Imp|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	_	Dep=1|Rel=PPart
3	milijardo	milijarda	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	1	obl	_	Dep=1|Rel=AdvM
4	tolarjev	tolar	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	Dep=3|Rel=Atr
5	in	in	CCONJ	Cc	_	8	cc	_	Dep=8|Rel=Conj
6	dvesto	dvesto	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
7	petdeset	petdeset	NUM	Mlc-pa	Case=Acc|Number=Plur|NumForm=Word|NumType=Card	8	nummod	_	Dep=8|Rel=Atr
8	milijonov	milijon	NOUN	Ncmpg	Case=Gen|Gender=Masc|Number=Plur	3	conj	_	SpaceAfter=No|Dep=3|Rel=Coord
9	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 10 root	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	Dep=6|Rel=Sb
2	in	in	CCONJ	Cc	_	3	cc	_	Dep=3|Rel=Conj
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	Dep=1|Rel=Coord
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	Dep=5|Rel=Atr
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	Dep=3|Rel=Atr
6	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	Dep=0|Rel=Root
7	med	med	ADP	Si	Case=Ins	8	case	_	Dep=8|Rel=Atr
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	10	nmod	_	Dep=10|Rel=Atr
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	Dep=10|Rel=Atr
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	SpaceAfter=No|Dep=6|Rel=Atr
11	.	.	PUNCT	Z	_	10	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Škoda	škoda	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	Dep=2|Rel=Atr
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root
4	da	da	SCONJ	Cs	_	7	mark	_	Dep=7|Rel=Conj
5	slovenski	slovenski	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	Dep=6|Rel=Atr
6	uporabniki	uporabnik	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	Dep=7|Rel=Sb
7	iščejo	iskati	VERB	Vmpr3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	csubj	_	Dep=2|Rel=Sb
8	informacije	informacija	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	7	obj	_	Dep=7|Rel=Obj
9	na	na	ADP	Sl	Case=Loc	11	case	_	Dep=11|Rel=Atr
10	tujih	tuj	ADJ	Agpfpl	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	Dep=11|Rel=Atr
11	straneh	stran	NOUN	Ncfpl	Case=Loc|Gender=Fem|Number=Plur	7	obl	_	SpaceAfter=No|Dep=7|Rel=AdvO
12	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


