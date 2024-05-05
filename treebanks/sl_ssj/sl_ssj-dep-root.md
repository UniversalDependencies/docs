---
layout: base
title:  'Statistics of root in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `root`

This relation is universal.

13435 nodes (5%) are attached to their parents as `root`.

13435 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.24555266096018.

The following 16 pairs of parts of speech are connected with `root`: -<tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt> (9764; 73% instances), -<tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt> (1746; 13% instances), -<tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt> (1440; 11% instances), -<tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt> (142; 1% instances), -<tt><a href="sl_ssj-pos-X.html">X</a></tt> (108; 1% instances), -<tt><a href="sl_ssj-pos-DET.html">DET</a></tt> (71; 1% instances), -<tt><a href="sl_ssj-pos-NUM.html">NUM</a></tt> (44; 0% instances), -<tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt> (39; 0% instances), -<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (33; 0% instances), -<tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt> (33; 0% instances), -<tt><a href="sl_ssj-pos-AUX.html">AUX</a></tt> (7; 0% instances), -<tt><a href="sl_ssj-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), -<tt><a href="sl_ssj-pos-INTJ.html">INTJ</a></tt> (2; 0% instances), -<tt><a href="sl_ssj-pos-PUNCT.html">PUNCT</a></tt> (2; 0% instances), -<tt><a href="sl_ssj-pos-ADP.html">ADP</a></tt> (1; 0% instances), -<tt><a href="sl_ssj-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Če	če	SCONJ	Cs	_	2	mark	_	NER=O
2	uporabim	uporabiti	VERB	Vmer1s	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	NER=O
3	prispodobo	prispodoba	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	NER=O|SpaceAfter=No
4	.	.	PUNCT	Z	_	2	punct	_	NER=O

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 10 root	color:blue
1	Zakonodaja	zakonodaja	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	10	nsubj	_	NER=O
2	in	in	CCONJ	Cc	_	3	cc	_	NER=O
3	trg	trg	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	1	conj	_	NER=O
4	delovne	deloven	ADJ	Agpfsg	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	5	amod	_	NER=O
5	sile	sila	NOUN	Ncfsg	Case=Gen|Gender=Fem|Number=Sing	3	nmod	_	NER=O
6	sta	biti	AUX	Va-r3d-n	Mood=Ind|Number=Dual|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	10	cop	_	NER=O
7	med	med	ADP	Si	Case=Ins	8	case	_	NER=O
8	seboj	se	PRON	Px---i	Case=Ins|PronType=Prs|Reflex=Yes	10	nmod	_	NER=O
9	tesno	tesno	ADV	Rgp	Degree=Pos	10	advmod	_	NER=O
10	povezana	povezan	ADJ	Appmdn	Case=Nom|Degree=Pos|Gender=Masc|Number=Dual|VerbForm=Part	0	root	_	NER=O|SpaceAfter=No
11	.	.	PUNCT	Z	_	10	punct	_	NER=O

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Škoda	škoda	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	0	root	_	NER=O
2	je	biti	AUX	Va-r3s-n	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	cop	_	NER=O|SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	_	NER=O
4	da	da	SCONJ	Cs	_	7	mark	_	NER=O
5	slovenski	slovenski	ADJ	Agpmpn	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	6	amod	_	NER=O
6	uporabniki	uporabnik	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	_	NER=O
7	iščejo	iskati	VERB	Vmpr3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	csubj	_	NER=O
8	informacije	informacija	NOUN	Ncfpa	Case=Acc|Gender=Fem|Number=Plur	7	obj	_	NER=O
9	na	na	ADP	Sl	Case=Loc	11	case	_	NER=O
10	tujih	tuj	ADJ	Agpfpl	Case=Loc|Degree=Pos|Gender=Fem|Number=Plur	11	amod	_	NER=O
11	straneh	stran	NOUN	Ncfpl	Case=Loc|Gender=Fem|Number=Plur	7	obl	_	NER=O|SpaceAfter=No
12	.	.	PUNCT	Z	_	1	punct	_	NER=O

~~~


