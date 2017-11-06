---
layout: base
title:  'Statistics of ccomp in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="ro_nonstandard-dep-ccomp-pmod.html">ccomp:pmod</a></tt>.

191 nodes (1%) are attached to their parents as `ccomp`.

178 instances of `ccomp` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.76439790575916.

The following 8 pairs of parts of speech are connected with `ccomp`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (176; 92% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (6; 3% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 ccomp	color:blue
1	(	(	PUNCT	LPAR	_	4	punct	_	ref=MATT 4.4.comment
2	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		4	nsubj	_
3	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Refl|Strength=Weak	4	expl:impers	_	ref=MATT 4.4.comment
4	zice	zice	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT 4.4.comment
5	:	:	PUNCT	COLON	_	9	punct	_	ref=MATT 4.4.comment
6	săva	savai	INTJ	I	_	9	discourse	_	ref=MATT 4.4.comment
7	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	ref=MATT 4.4.comment
8	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		9	obl	_
9	voiaşte	voi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	ref=MATT 4.4.comment
10	Dumnedzeu	Dumnezeu	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	9	nsubj	_	ref=MATT 4.4.comment
11	să	să	PART	Qs	PartType=Sub	13	mark	_	ref=MATT 4.4.comment
12	L	el	Pp3msa--------w 	=	PRON	Pp3msa--------w 	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	13	obj
13	hrănească	hrăni	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	9	ccomp	_	ref=MATT 4.4.comment
14	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MATT 4.4.comment
15	)	)	PUNCT	RPAR	_	4	punct	_	ref=MATT 4.4.comment

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 13 ccomp	color:blue
1	Fată	fată	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	vocative	_	_
2	,	,	PUNCT	COMMA	_	1	punct	_	_
3	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		7	obj	_
4	eu	eu	PRON	Pp1-sr	Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	te	tu	PRON	Pp2-sa--------w	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	7	expl	_	_
6	-aș	avea	AUX	Vaip1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres	7	aux	_	_
7	ruga	ruga	VERB	Vmn	Mood=Inf|VerbForm=Fin	0	root	_	_
8	,	,	PUNCT	COMMA	_	13	punct	_	_
9	Să	să	PART	Qs	PartType=Sub	13	mark	_	_
10	nu	nu	ADV	Qz	Polarity=Neg	13	advmod	_	_
11	fie	fi	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	bănat	bănat	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	7	ccomp	_	_
14	,	,	PUNCT	COMMA	_	16	punct	_	_
15	Unde	unde	ADV	Rw	AdvPronType=Int,Rel		16	advmod	_
16	sună	suna	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	parataxis	_	_
17	scripca	scripcă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	16	nsubj	_	_
18	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	19	case	_	_
19	sat	sat	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	16	obl	_	_
20	?	?	PUNCT	QUEST	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 ccomp	color:blue
1	Vare	oare-	DET	Di3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	4	det	_	ref=MATT 10.11
2	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	ref=MATT 10.11
3	ce	ce	DET	Dw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		4	det	_
4	oraş	oraș	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	8	obl	_	ref=MATT 10.11
5	au	sau	CCONJ	Ccssp	Polarity=Pos	6	cc	_	ref=MATT 10.11
6	sat	sat	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	conj	_	ref=MATT 10.11
7	veţi	vrea	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	8	aux	_	ref=MATT 10.11
8	întra	intra	VERB	Vmn	Mood=Inf|VerbForm=Fin	10	advcl	_	ref=MATT 10.11
9	,	,	PUNCT	COMMA	_	8	punct	_	ref=MATT 10.11
10	întrebaţi	întreba	VERB	Vmm-2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	0	root	_	ref=MATT 10.11
11	cine	cine	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel		15	nsubj	_
12	iaste	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	ref=MATT 10.11
13	într-	întru	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	ref=MATT 10.11
14	însa	îns	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	15	obl	_	ref=MATT 10.11
15	harnic	harnic	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	10	ccomp	_	ref=MATT 10.11
16	şi	și	CCONJ	Ccssp	Polarity=Pos	18	cc	_	ref=MATT 10.11
17	acolo	acolo	ADV	Rg	_	18	advmod	_	ref=MATT 10.11
18	mîneţi	mânea	VERB	Vmm-2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	10	conj	_	ref=MATT 10.11
19	pînă	până	SCONJ	Csssp	Polarity=Pos	21	mark	_	ref=MATT 10.11
20	veţi	vrea	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	21	aux	_	ref=MATT 10.11
21	eşi	ieşi	VERB	Vmn	Mood=Inf|VerbForm=Fin	18	advcl:tcl	_	ref=MATT 10.11
22	.	.	PUNCT	PERIOD	_	10	punct	_	ref=MATT 10.11

~~~


