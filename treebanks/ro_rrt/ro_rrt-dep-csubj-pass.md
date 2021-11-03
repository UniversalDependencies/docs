---
layout: base
title:  'Statistics of csubj:pass in UD_Romanian-RRT'
udver: '2'
---

## Treebank Statistics: UD_Romanian-RRT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_rrt-dep-csubj.html">csubj</a></tt>.

58 nodes (0%) are attached to their parents as `csubj:pass`.

57 instances of `csubj:pass` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.79310344827586.

The following 6 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (49; 84% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-NOUN.html">NOUN</a></tt> (4; 7% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="ro_rrt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ro_rrt-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_rrt-pos-ADV.html">ADV</a></tt> (1; 2% instances).


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
2	consideră	considera	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	că	că	SCONJ	Csssp	Polarity=Pos	7	mark	_	_
4	aceste	acest	DET	Dd3fpr---e	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|Position=Prenom|PronType=Dem	5	det	_	_
5	modificări	modificare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	nsubj	_	_
6	sunt	fi	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	consecința	consecință	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	csubj:pass	_	_
8	unei	un	DET	Tifso	Case=Dat,Gen|Gender=Fem|Number=Sing|PronType=Ind	9	det	_	_
9	reduceri	reducere	NOUN	Ncfson	Case=Dat,Gen|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
10	a	al	DET	Tsfs	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	11	det	_	_
11	creșterii	creștere	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	9	nmod	_	_
12	ponderale	ponderal	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	_
13	materne	matern	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	11	amod	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 csubj:pass	color:blue
1	E	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	aux:pass	_	_
2	știut	ști	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	_
4	când	când	ADV	Rw	PronType=Int,Rel	3	fixed	_	_
5	lumea	lume	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	2	obl	_	_
6	că	că	SCONJ	Csssp	Polarity=Pos	11	mark	_	_
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	somn	somn	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	obl	_	_
9	omul	om	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	_
10	e	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
11	liber	liber	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	csubj:pass	_	_
12	și	și	CCONJ	Crssp	Polarity=Pos	18	cc	_	_
13	că	că	SCONJ	Csssp	Polarity=Pos	18	mark	_	_
14	noaptea	noaptea	ADV	Rgp	Degree=Pos	18	advmod	_	_
15	sufletul	suflet	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	18	nsubj	_	_
16	omului	om	NOUN	Ncmsoy	Case=Dat,Gen|Definite=Def|Gender=Masc|Number=Sing	15	nmod	_	_
17	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	18	expl:pv	_	_
18	desparte	despărți	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	conj	_	_
19	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	_
20	trup	trup	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	18	obl:pmod	_	_
21	și	și	CCONJ	Crssp	Polarity=Pos	22	cc	_	_
22	devine	deveni	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	conj	_	_
23	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	24	obj	_	_
24	vrea	vrea	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	22	xcomp	_	SpaceAfter=No
25	,	,	PUNCT	COMMA	_	26	punct	_	_
26	infinit	infinit	ADV	Rgp	Degree=Pos	24	conj	_	SpaceAfter=No
27	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


