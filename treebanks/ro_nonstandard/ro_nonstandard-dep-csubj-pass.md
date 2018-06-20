---
layout: base
title:  'Statistics of csubj:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-csubj.html">csubj</a></tt>.

26 nodes (0%) are attached to their parents as `csubj:pass`.

17 instances of `csubj:pass` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.53846153846154.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (24; 92% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (2; 8% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 3 csubj:pass	color:blue
1	Ce-	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	3	obj	_	SpaceAfter=No
2	am	avea	AUX	Vaip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres	3	aux	_	_
3	iubit	iubi	VERB	Vmp	VerbForm=Part	7	csubj:pass	_	_
4	nu	nu	ADV	Qz	Polarity=Neg	7	advmod	_	_
5	se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	7	expl:pass	_	_
6	mai	mai	ADV	Rg	_	7	advmod	_	_
7	vede	vedea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
8	,	,	PUNCT	COMMA	_	11	punct	_	_
9	C-	că	SCONJ	Csssp	Polarity=Pos	11	mark	_	SpaceAfter=No
10	a	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	aux	_	_
11	pus	pune	VERB	Vmp	VerbForm=Part	7	advcl	_	_
12	fața	față	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	11	obj	_	_
13	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	_
14	pământ	pământ	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	11	obl	_	Rhyme=ID18|Type=Paired
15	La	la	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	_
16	biserică	biserică	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No
17	-n	în	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	_
18	mormânt	mormânt	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	11	obl	_	Rhyme=ID14|SpaceAfter=No|Type=Paired
19	.	.	PUNCT	PERIOD	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 13 csubj:pass	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	6	cc	_	ref=IOAN8.17
2	și	și	ADV	Rg	_	4	advmod	_	ref=IOAN8.17
3	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	ref=IOAN8.17
4	leagea	lege	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	obl	_	ref=IOAN8.17
5	voastră	tău	DET	Ds2fsrp	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|PronType=Prs	4	det	_	ref=IOAN8.17
6	scrisu	scrie	VERB	Vmp	VerbForm=Part	0	root	_	ref=IOAN8.17|SpaceAfter=No
7	-i	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	aux:pass	_	ref=IOAN8.17
8	că	că	SCONJ	Csssp	Polarity=Pos	13	mark	_	ref=IOAN8.17
9	a	al	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	ref=IOAN8.17
10	doi	doi	NUM	Mcmp-l	Gender=Masc|Number=Plur|NumForm=Word|NumType=Card	11	nummod	_	ref=IOAN8.17
11	oameni	om	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	12	nmod	_	ref=IOAN8.17
12	mărturiia	mărturie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	13	nsubj	_	ref=IOAN8.17
13	adevărată	adevărat	ADJ	Afpfsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	csubj:pass	_	ref=IOAN8.17
14	iaste	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	ref=IOAN8.17|SpaceAfter=No
15	.	.	PUNCT	PERIOD	_	6	punct	_	ref=IOAN8.17

~~~


