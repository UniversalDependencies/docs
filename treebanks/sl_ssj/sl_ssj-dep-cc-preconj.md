---
layout: base
title:  'Statistics of cc:preconj in UD_Slovenian-SSJ'
udver: '2'
---

## Treebank Statistics: UD_Slovenian-SSJ: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="sl_ssj-dep-cc.html">cc</a></tt>.

62 nodes (0%) are attached to their parents as `cc:preconj`.

62 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87096774193548.

The following 11 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-CCONJ.html">CCONJ</a></tt> (30; 48% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-CCONJ.html">CCONJ</a></tt> (11; 18% instances), <tt><a href="sl_ssj-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (8; 13% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-CCONJ.html">CCONJ</a></tt> (3; 5% instances), <tt><a href="sl_ssj-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sl_ssj-pos-CCONJ.html">CCONJ</a></tt> (3; 5% instances), <tt><a href="sl_ssj-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="sl_ssj-pos-ADV.html">ADV</a></tt>-<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="sl_ssj-pos-DET.html">DET</a></tt>-<tt><a href="sl_ssj-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_ssj-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="sl_ssj-pos-PRON.html">PRON</a></tt>-<tt><a href="sl_ssj-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="sl_ssj-pos-VERB.html">VERB</a></tt>-<tt><a href="sl_ssj-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	Tako	tako	CCONJ	Cc	_	2	cc:preconj	_	Dep=2|Rel=Conj
2	ravnatelj	ravnatelj	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Dep=0|Rel=Root
3	kot	kot	SCONJ	Cs	_	4	cc	_	Dep=4|Rel=Conj
4	profesorji	profesor	NOUN	Ncmpn	Case=Nom|Gender=Masc|Number=Plur	2	conj	_	SpaceAfter=No|Dep=2|Rel=Coord
5	.	.	PUNCT	Z	_	2	punct	_	SpaceAfter=No|Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc:preconj	color:blue
1	Zgodovina	zgodovina	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	Dep=3|Rel=Sb
2	človeštva	človeštvo	NOUN	Ncnsg	Case=Gen|Gender=Neut|Number=Sing	1	nmod	_	Dep=1|Rel=Atr
3	ni	biti	AUX	Va-r3s-y	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	5	cop	_	Dep=0|Rel=Root
4	niti	niti	CCONJ	Cc	_	5	cc:preconj	_	Dep=5|Rel=Conj
5	logična	logičen	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	Dep=3|Rel=Atr
6	niti	niti	CCONJ	Cc	_	7	cc	_	Dep=7|Rel=Conj
7	pravična	pravičen	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	5	conj	_	SpaceAfter=No|Dep=5|Rel=Coord
8	.	.	PUNCT	Z	_	5	punct	_	Dep=0|Rel=Root

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 cc:preconj	color:blue
1	Zveza	zveza	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	Dep=4|Rel=Sb
2	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	4	aux	_	Dep=4|Rel=PPart
3	lahko	lahko	ADV	Rgp	Degree=Pos	4	advmod	_	Dep=4|Rel=PPart
4	naredila	narediti	VERB	Vmep-sf	Aspect=Perf|Gender=Fem|Number=Sing|VerbForm=Part	0	root	_	Dep=0|Rel=Root
5	veliko	veliko	DET	Rgp	PronType=Ind	4	advmod	_	Dep=4|Rel=AdvM
6	za	za	ADP	Sa	Case=Acc	7	case	_	Dep=7|Rel=Atr
7	to	ta	DET	Pd-nsa	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obl	_	SpaceAfter=No|Dep=4|Rel=AdvO
8	,	,	PUNCT	Z	_	13	punct	_	Dep=0|Rel=Root
9	da	da	SCONJ	Cs	_	13	mark	_	Dep=13|Rel=Conj
10	bi	biti	AUX	Va-c	Mood=Cnd|VerbForm=Fin	13	aux	_	Dep=13|Rel=PPart
11	Slovenci	Slovenec	PROPN	Npmpn	Case=Nom|Gender=Masc|Number=Plur	13	nsubj	_	Dep=13|Rel=Sb
12	golf	golf	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	13	obj	_	Dep=13|Rel=Obj
13	razumeli	razumeti	VERB	Vmbp-pm	Gender=Masc|Number=Plur|VerbForm=Part	7	acl	_	Dep=7|Rel=Atr
14	ne	ne	PART	Q	Polarity=Neg	17	cc:preconj	_	Dep=17|Rel=Conj
15	kot	kot	SCONJ	Cs	_	17	case	_	Dep=17|Rel=Conj
16	elitno	eliten	ADJ	Agpnsa	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	17	amod	_	Dep=17|Rel=Atr
17	druženje	druženje	NOUN	Ncnsa	Case=Acc|Gender=Neut|Number=Sing	13	obl	_	SpaceAfter=No|Dep=13|Rel=AdvM
18	,	,	PUNCT	Z	_	23	punct	_	Dep=0|Rel=Root
19	temveč	temveč	CCONJ	Cc	_	23	cc	_	Dep=23|Rel=Conj
20	kot	kot	SCONJ	Cs	_	23	cc	_	Dep=23|Rel=Conj
21	neizkoriščen	neizkoriščen	ADJ	Agpmsan	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	23	amod	_	Dep=23|Rel=Atr
22	turistični	turističen	ADJ	Agpmsay	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	23	amod	_	Dep=23|Rel=Atr
23	potencial	potencial	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	17	conj	_	SpaceAfter=No|Dep=17|Rel=Coord
24	.	.	PUNCT	Z	_	4	punct	_	Dep=0|Rel=Root

~~~


