---
layout: base
title:  'Statistics of expl in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `expl`

This relation is universal.
There are 4 language-specific subtypes of `expl`: <tt><a href="ro_nonstandard-dep-expl-impers.html">expl:impers</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pass.html">expl:pass</a></tt>, <tt><a href="ro_nonstandard-dep-expl-poss.html">expl:poss</a></tt>, <tt><a href="ro_nonstandard-dep-expl-pv.html">expl:pv</a></tt>.

61 nodes (0%) are attached to their parents as `expl`.

35 instances of `expl` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.49180327868852.

The following 4 pairs of parts of speech are connected with `expl`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (56; 92% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 expl	color:blue
1	Pîinea	pâine	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	obj	_	ref=MATT 6.11
2	noastră	meu	DET	Ds1fsrp	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Plur|Person=1|PronType=Poss	1	det	_	ref=MATT 6.11
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	ref=MATT 6.11
4	toate	tot	DET	Di3fpr	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|PronType=Ind	5	det	_	ref=MATT 6.11
5	zilele	zi	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	1	nmod	_	ref=MATT 6.11
6	dă	da	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	ref=MATT 6.11
7	-ne	eu	PRON	Pp1-pd--------w	Case=Dat|Number=Plur|Person=1|PronType=Prs|Strength=Weak	6	iobj	_	ref=MATT 6.11
8	-o	el	PRON	Pp3fsa--------w 	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	6	expl	_	ref=MATT 6.11
9	noao	eu	PRON	Pp1-pd--------s	Case=Dat|Number=Plur|Person=1|PronType=Prs|Strength=Strong	6	expl	_	ref=MATT 6.11
10	astăzi	astăzi	ADV	Rg	_	6	advmod:tmod	_	ref=MATT 6.11
11	.	.	PUNCT	PERIOD	_	6	punct	_	ref=MATT 6.11

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 14 expl	color:blue
1	Dară	dar	CCONJ	Ccssp	Polarity=Pos	6	cc	_	ref=MATT 18.28
2	eșind	când	ADV	Rw	AdvPronType=Int,Rel		6	advmod:tmod	_
3	sluga	slugă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	6	nsubj	_	ref=MATT 18.28
4	aceaia	acela	DET	Dd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	3	det	_	ref=MATT 18.28
5	,	,	PUNCT	COMMA	_	3	punct	_	ref=MATT 18.28
6	află	afla	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 18.28
7	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	ref=MATT 18.28
8	unul	unul	PRON	Pi3msr	Case=Acc,Nom||Gender=Masc|Number=Sing|Person=3|PronType=Ind	6	obj	_	ref=MATT 18.28
9	din	din	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	10	case	_	ref=MATT 18.28
10	soţii	soț	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	8	nmod	_	ref=MATT 18.28
11	săi	său	DET	Ds3mp-s	Gender=Masc|Number=Plur|Number[psor]=Sing|Person=3|PronType=Poss	10	det	_	ref=MATT 18.28
12	,	,	PUNCT	COMMA	_	17	punct	_	ref=MATT 18.28
13	carele	care	PRON	Pw3msry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	17	nsubj	_	ref=MATT 18.28
14	-i	el	PRON	Pp3-sd--------w 	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	17	expl	_	ref=MATT 18.28
15	era	fi	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	17	cop	_	ref=MATT 18.28
16	lui	el	PRON	Pp3msd--------s 	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	17	iobj	_	ref=MATT 18.28
17	deatoriu	dator	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	8	acl	_	ref=MATT 18.28
18	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	22	case	_	ref=MATT 18.28
19	o	un	DET	Tifsr	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	20	compound	_	ref=MATT 18.28
20	sută	sută	NUM	Mcfsrln	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|NumForm=Word|NumType=Card	22	nummod	_	ref=MATT 18.28
21	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	20	case	_	ref=MATT 18.28
22	bani	ban	NOUN	Ncmprn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Plur	17	obl	_	ref=MATT 18.28
23	.	.	PUNCT	PERIOD	_	6	punct	_	ref=MATT 18.28

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 expl	color:blue
1	Agiunge	Agiunge	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT 6.34
2	-i	el	PRON	Pp3-sd--------w 	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	1	iobj	_	ref=MATT 6.34
3	zilei	zi	NOUN	Ncfsoy	Case=Dat,Gen|Definite=Def|Gender=Fem|Number=Sing	1	expl	_	ref=MATT 6.34
4	grijea	grijă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	nsubj	_	ref=MATT 6.34
5	ei	el	PRON	Pp3fso 	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nmod	_	ref=MATT 6.34
6	.	.	PUNCT	PERIOD	_	1	punct	_	ref=MATT 6.34

~~~


