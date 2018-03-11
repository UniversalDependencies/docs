---
layout: base
title:  'Statistics of csubj:pass in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ro-dep-csubj.html">csubj</a></tt>.

57 nodes (0%) are attached to their parents as `csubj:pass`.

56 instances of `csubj:pass` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.84210526315789.

The following 7 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-VERB.html">VERB</a></tt> (49; 86% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="ro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ro-pos-ADV.html">ADV</a></tt>-<tt><a href="ro-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-ADV.html">ADV</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:pass	color:blue
1	Primele	prim	NUM	Mofprly	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur|NumForm=Word|NumType=Ord	2	nummod	_	_
2	întâlniri	întâlnire	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	nsubj	_	_
3	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pass	_	_
4	așteaptă	aștepta	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	să	să	PART	Qs	Mood=Sub	7	mark	_	_
6	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pv	_	_
7	desfășoare	desfășura	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	4	csubj:pass	_	_
8	marți	marți	ADV	Rgp	Degree=Pos	7	advmod	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj:pass	color:blue
1	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	2	expl:pass	_	_
2	consideră	considera	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
3	că	că	SCONJ	Csssp	Polarity=Pos	7	mark	_	_
4	aceste	acest	DET	Dd3fpr---e	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|Position=Prenom|PronType=Dem	5	det	_	_
5	modificări	modificare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	nsubj	_	_
6	sunt	fi	AUX	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	consecința	consecință	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	csubj:pass	_	_
8	unei	un	DET	Tifso	Case=Dat,Gen|Gender=Fem|Number=Sing|PronType=Ind	9	det	_	_
9	reduceri	reducere	NOUN	Ncfson	Case=Dat,Gen|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	ToDo=nmod
10	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	_
11	creșterii	creștere	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	_
12	ponderale	ponderal	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
13	materne	matern	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 10 csubj:pass	color:blue
1	Trebuie	trebui	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	menționat	menționat	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	csubj	_	_
3	aici	aici	ADV	Rgp	Degree=Pos	2	advmod	_	_
4	că	că	SCONJ	Csssp	Polarity=Pos	10	mark	_	_
5	iazygii	iazygii	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	10	nsubj	_	_
6	și	și	CCONJ	Crssp	Polarity=Pos	7	cc	_	_
7	alanii	alani	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	5	conj	_	_
8	erau	fi	AUX	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	10	cop	_	_
9	doua	doi	NUM	Mofs-l	Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	10	nummod	_	_
10	ramuri	ram	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	2	csubj:pass	_	_
11	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	15	case	_	_
12	cele	cel	DET	Tdfpr	Case=Acc,Nom|Gender=Fem|Number=Plur|PronType=Dem	13	det	_	_
13	trei	trei	NUM	Mc-p-l	Number=Plur|NumForm=Word|NumType=Card	15	nummod	_	_
14	ale	al	DET	Tsfp	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	15	det	_	_
15	sarmaților	sarmați	NOUN	Ncmpoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Plur	10	nmod	_	SpaceAfter=No|ToDo=nmod
16	,	,	PUNCT	COMMA	_	18	punct	_	_
17	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	18	det	_	_
18	treia	trei	NUM	Mofs-l	Gender=Fem|Number=Sing|NumForm=Word|NumType=Ord	20	nsubj	_	_
19	fiind	fi	AUX	Vmg	VerbForm=Ger	18	cop	_	_
20	roxolanii	roxolan	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	10	advcl	_	SpaceAfter=No
21	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


