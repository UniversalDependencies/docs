---
layout: base
title:  'Statistics of xcomp in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `xcomp`

This relation is universal.

109 nodes (1%) are attached to their parents as `xcomp`.

89 instances of `xcomp` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.6605504587156.

The following 8 pairs of parts of speech are connected with `xcomp`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (51; 47% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (24; 22% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (19; 17% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (9; 8% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 xcomp	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	2	cc	_	ref=MATT 16.15
2	zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 16.15
3	lor	el	PRON	Pp3-pd--------s 	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Strong	2	iobj	_	ref=MATT 16.15
4	Iisus	Iisus	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	ref=MATT 16.15
5	:	:	PUNCT	COLON	_	11	punct	_	ref=MATT 16.15
6	Dară	dar	CCONJ	Ccssp	Polarity=Pos	11	cc	_	ref=MATT 16.15
7	voi	tu	PRON	Pp2-pr	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	11	nsubj	_	ref=MATT 16.15
8	,	,	PUNCT	COMMA	_	7	punct	_	ref=MATT 16.15
9	cine	cine	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		13	nsubj	_
10	Mă	eu	PRON	Pp1-sa--------w	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Weak	11	obj	_	ref=MATT 16.15
11	ziceţi	zice	VERB	Vmip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	2	parataxis	_	ref=MATT 16.15
12	a	a	PART	Qn	PartType=Inf	13	mark	_	ref=MATT 16.15
13	fi	fi	VERB	Vmn	Mood=Inf|VerbForm=Fin	11	xcomp	_	ref=MATT 16.15
14	?	?	PUNCT	QUEST	_	11	punct	_	ref=MATT 16.15

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 7 xcomp	color:blue
1	Ferice	ferice	ADV	Rg	_	0	root	_	ref=MATT 5.9
2	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	ref=MATT 5.9
3	împăcătorii	împăcător	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	1	nmod:pmod	_	ref=MATT 5.9
4	,	,	PUNCT	COMMA	_	12	punct	_	ref=MATT 5.9
5	că	că	SCONJ	Csssp	Polarity=Pos	12	mark	_	ref=MATT 5.9
6	aceia	acela	PRON	Pd3mpr	Case=Acc,Nom|Gender=Masc|Number=Plur|Person=3|PronType=Dem	12	nsubj:pass	_	ref=MATT 5.9
7	fii	fiu	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	12	xcomp	_	ref=MATT 5.9
8	lui	-ul	DET	Tf-so	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	9	det	_	ref=MATT 5.9
9	Dumnedzeu	Dumnezeu	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	7	nmod	_	ref=MATT 5.9
10	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Refl|Strength=Weak	12	expl:pass	_	ref=MATT 5.9
11	vor	vrea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	12	aux	_	ref=MATT 5.9
12	chema	chema	VERB	Vmn	Mood=Inf|VerbForm=Fin	1	advcl	_	ref=MATT 5.9
13	.	.	PUNCT	PERIOD	_	1	punct	_	ref=MATT 5.9

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp	color:blue
1	Și	și	CCONJ	Ccssp	Polarity=Pos	5	cc	_	ref=MATT 12.44
2	deaca	dacă	SCONJ	Cscsp	Polarity=Pos|WordForm=Compound	3	mark	_	ref=MATT 12.44
3	vine	veni	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	advcl	_	ref=MATT 12.44
4	,	,	PUNCT	COMMA	_	3	punct	_	ref=MATT 12.44
5	află	afla	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT 12.44
6	deşartă	deșert	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	xcomp	_	ref=MATT 12.44
7	,	,	PUNCT	COMMA	_	8	punct	_	ref=MATT 12.44
8	măturată	mătura	VERB	Vmp--sf-p--r	Case=Acc,Nom|Gender=Fem|Number=Sing|Mood=Part|Polarity=Pos|VerbForm=Fin	6	conj	_	ref=MATT 12.44
9	şi	și	CCONJ	Ccssp	Polarity=Pos	10	cc	_	ref=MATT 12.44
10	înfrîmseţată	înfrumuseța	VERB	Vmp--sf-p--r	Case=Acc,Nom|Gender=Fem|Number=Sing|Mood=Part|Polarity=Pos|VerbForm=Fin	6	conj	_	ref=MATT 12.44
11	.	.	PUNCT	PERIOD	_	5	punct	_	ref=MATT 12.44

~~~


