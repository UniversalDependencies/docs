---
layout: base
title:  'Statistics of nsubj:pass in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_nonstandard-dep-nsubj.html">nsubj</a></tt>.

59 nodes (0%) are attached to their parents as `nsubj:pass`.

41 instances of `nsubj:pass` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.03389830508475.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (29; 49% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (16; 27% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (10; 17% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nsubj:pass	color:blue
1	Iartă	ierta	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT 9.5
2	ți	tu	PRON	Pp2-sd--------w	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	1	iobj	_	ref=MATT 9.5
3	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Refl|Strength=Weak	1	expl:pass	_	ref=MATT 9.5
4	ţie	tu	PRON	Pp2-pd--------s	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Strong	1	expl	_	ref=MATT 9.5
5	păcatele	păcat	NOUN	Ncfpry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	1	nsubj:pass	_	ref=MATT 9.5
6	tale	tău	Ds2fp-s	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=2|PronType=Poss	5	det	_	ref=MATT 9.5	
7	sau	sau	CCONJ	Ccssp	Polarity=Pos	9	cc	_	ref=MATT 9.5
8	a	a	PART	Qn	PartType=Inf	9	mark	_	ref=MATT 9.5
9	zice	zice	VERB	Vmn	Mood=Inf|VerbForm=Fin	1	conj	_	ref=MATT 9.5
10	:	:	PUNCT	COLON	_	11	punct	_	ref=MATT 9.5
11	scoală	scula	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	9	parataxis	_	ref=MATT 9.5
12	şi	și	CCONJ	Ccssp	Polarity=Pos	13	cc	_	ref=MATT 9.5
13	îmblă	umbla	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	11	conj	_	ref=MATT 9.5
14	?	?	PUNCT	QUEST	_	1	punct	_	ref=MATT 9.5

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 nsubj:pass	color:blue
1	Zicînd	zice	VERB	Vmg-----p	Mood=Ger|Polarity=Pos|VerbForm=Fin	0	root	_	ref=MATT 2.2
2	:	:	PUNCT	COLON	_	4	punct	_	ref=MATT 2.2
3	Unde	unde	ADV	Rw	AdvPronType=Int,Rel		4	advmod	_
4	iaste	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	ref=MATT 2.2
5	cel	cel	DET	Tdmsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	ref=MATT 2.2
6	craiu	crai	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	ref=MATT 2.2
7	jidovesc	jidovesc	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	ref=MATT 2.2
8	carele	care	PRON	Pw3msry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	10	nsubj:pass	_	ref=MATT 2.2
9	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	10	aux	_	ref=MATT 2.2
10	născut	naște	VERB	Vmp	Mood=Part|VerbForm=Fin	6	acl	_	ref=MATT 2.2
11	?	?	PUNCT	QUEST	_	4	punct	_	ref=MATT 2.2

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Hristos	Hristos	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	3	nsubj:pass	_	ref=MATT 4.1.content
2	Să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Refl|Strength=Weak	3	expl:pass	_	ref=MATT 4.1.content
3	ispiteaşte	ispiti	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT 4.1.content
4	,	,	PUNCT	COMMA	_	8	punct	_	ref=MATT 4.1.content
5	și	și	CCONJ	Ccssp	Polarity=Pos	8	cc	_	ref=MATT 4.1.content
6	L-	el	Pp3msa--------w 	=	PRON	Pp3msa--------w 	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	8	obj
7	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	8	aux	_	ref=MATT 4.1.content
8	învencut	învinge	VERB	Vmp	Mood=Part|VerbForm=Fin	3	conj	_	ref=MATT 4.1.content
9	den	dn	ADP	Spca	AdpType=Prep|Case=Acc|Compound=Yes	10	case	_	ref=MATT 4.1.content
10	Scriptură	scriptură	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	8	obl	_	ref=MATT 4.1.content
11	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 4.1.content

~~~


