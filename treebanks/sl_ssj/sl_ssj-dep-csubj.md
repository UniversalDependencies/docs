---
layout: base
title:  'Statistics of csubj in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `csubj`

This relation is universal.

558 nodes (0%) are attached to their parents as `csubj`.

521 instances of `csubj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.79569892473118.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (252; 45% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (204; 37% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (49; 9% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (25; 4% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (13; 2% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt>-<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 csubj	color:blue
1	Prvo	prvi	ADJ	Mlonsn	Case=Nom|Gender=Neut|Number=Sing|NumType=Ord	2	amod	_	Dep=2|Rel=Atr
2	pravilo	pravilo	NOUN	Ncnsn	Case=Nom|Gender=Neut|Number=Sing	7	parataxis	_	SpaceAfter=No|Dep=0|Rel=Root
3	:	:	PUNCT	Z	_	2	punct	_	Dep=0|Rel=Root
4	Za	za	ADP	Sa	Case=Acc	5	case	_	Dep=5|Rel=Atr
5	nakup	nakup	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obl	_	Dep=9|Rel=AdvO
6	si	se	PRON	Px---d--y	Case=Dat|PronType=Prs|Reflex=Yes|Variant=Short	9	expl	_	Dep=9|Rel=PPart
7	je	biti	VERB	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
8	treba	treba	ADV	Rgp	Degree=Pos	7	advmod	_	Dep=7|Rel=AdvM
9	vzeti	vzeti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	7	csubj	_	Dep=7|Rel=Sb
10	čas	čas	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No|Dep=9|Rel=Obj
11	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	Pomembno	pomemben	ADJ	Agpnsn	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	Dep=2|Rel=Atr
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No|Dep=0|Rel=Root
3	,	,	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root
4	da	da	SCONJ	Cs	_	5	mark	_	Dep=5|Rel=Conj
5	zaužijete	zaužiti	VERB	Vmer2p	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	1	csubj	_	Dep=2|Rel=Sb
6	tri	trije	NUM	Mlcmpa	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	10	nummod	_	Dep=10|Rel=Atr
7	do	do	ADP	Sg	Case=Gen	8	case	_	Dep=8|Rel=Conj
8	štiri	štirje	NUM	Mlcmpa	Case=Acc|Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	6	conj	_	Dep=6|Rel=Coord
9	manjše	majhen	ADJ	Agcmpa	Case=Acc|Degree=Cmp|Gender=Masc|Number=Plur	10	amod	_	Dep=10|Rel=Atr
10	obroke	obrok	NOUN	Ncmpa	Case=Acc|Gender=Masc|Number=Plur	5	obj	_	Dep=5|Rel=Obj
11	na	na	ADP	Sa	Case=Acc	12	case	_	Dep=12|Rel=Atr
12	dan	dan	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	5	obl	_	SpaceAfter=No|Dep=5|Rel=AdvO
13	.	.	PUNCT	Z	_	1	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj	color:blue
1	Seveda	seveda	PART	Q	_	3	advmod	_	Dep=0|Rel=Root
2	pa	pa	CCONJ	Cc	_	3	advmod	_	Dep=0|Rel=Root
3	dobiti	dobiti	VERB	Vmen	Aspect=Perf|VerbForm=Inf	7	csubj	_	Dep=5|Rel=Sb
4	podpis	podpis	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	3	obj	_	Dep=3|Rel=Obj
5	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	7	cop	_	Dep=0|Rel=Root
6	lahka	lahek	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	Dep=7|Rel=Atr
7	stvar	stvar	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|Dep=5|Rel=Atr
8	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root

~~~


