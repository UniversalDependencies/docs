---
layout: base
title:  'Statistics of acl in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="fr_parisstories-dep-acl-relcl.html">acl:relcl</a></tt>.

140 nodes (0%) are attached to their parents as `acl`.

138 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.09285714285714.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (124; 89% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (5; 4% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl	color:blue
1	et	et	CCONJ	_	_	4	cc	_	_
2	là	là	ADV	_	_	4	advmod	_	_
3	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
4	va	aller	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	être	être	AUX	_	VerbForm=Inf	7	cop	_	Subject=SubjRaising
6	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	galère	galère	NOUN	_	_	4	xcomp	_	Gender[lex]=Fem|Number[ctxt]=Sing
8	pour	pour	ADP	_	_	9	mark	_	_
9	mélanger	mélanger	VERB	_	VerbForm=Inf	7	acl	_	Subject=NoRaising
10	et	et	CCONJ	_	_	12	cc	_	_
11	tout	tout	ADJ	_	Gender=Masc	12	amod	_	Number[ctxt]=Sing
12	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	conj	_	SpaceAfter=No
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 acl	color:blue
1	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	4	dislocated	_	AlignBegin=36331|AlignEnd=36594|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=36594|AlignEnd=36594
3	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	AlignBegin=36594|AlignEnd=36858
4	savais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	7	reparandum	_	AlignBegin=36858|AlignEnd=37121|SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	AlignBegin=37121|AlignEnd=37121
6	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	AlignBegin=37121|AlignEnd=37384|SpaceAfter=No
7	avais	avoir	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	AlignBegin=37384|AlignEnd=37648
8	de	de	ADP	_	ExtPos=DET	10	det	_	AlignBegin=37648|AlignEnd=37911|Idiom=Yes
9	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	fixed	_	AlignBegin=37911|AlignEnd=38174|InIdiom=Yes
10	conscience	conscience	NOUN	_	_	7	obj	_	AlignBegin=38174|AlignEnd=38438|Gender[lex]=Fem|Number[ctxt]=Sing
11	que	que	SCONJ	_	_	15	mark	_	AlignBegin=38438|AlignEnd=38701
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	nsubj	_	AlignBegin=38701|AlignEnd=38964|SpaceAfter=No
13	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	cop	_	AlignBegin=38964|AlignEnd=39228
14	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	15	det	_	AlignBegin=39228|AlignEnd=39491
15	père	père	NOUN	_	_	10	acl	_	AlignBegin=39491|AlignEnd=39754|Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
16	.	.	PUNCT	_	_	7	punct	_	AlignBegin=39754|AlignEnd=39754

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 11 acl	color:blue
1	et	et	CCONJ	_	_	5	cc	_	_
2	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
3	me	moi	PRON	_	Emph=No|Number=Sing|Person=1|PronType=Prs	5	expl:comp	_	_
4	suis	être	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	rendu	rendre	VERB	_	VerbForm=Part|Voice=Pass	0	root	_	Gender[ctxt]=Masc|Number[ctxt]=Sing|Tense[denom]=Past
6	compte	compte	NOUN	_	_	5	obj:lvc	_	Gender[lex]=Masc|Number[ctxt]=Sing
7	que	que	SCONJ	_	_	11	mark	_	_
8	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	SpaceAfter=No
9	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	11	cop	_	_
10	assez	assez	ADV	_	_	11	advmod	_	_
11	difficile	difficile	ADJ	_	_	6	acl	_	Gender[ctxt]=Masc|Number[ctxt]=Sing
12	pour	pour	ADP	_	_	14	case	_	_
13	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	14	det	_	_
14	maîtresses	maîtresse	NOUN	_	_	11	obl:mod	_	Gender[lex]=Fem|Number[ctxt]=Plur|SpaceAfter=No
15	,	,	PUNCT	_	_	22	punct	_	_
16	parce	parce	ADV	_	ExtPos=SCONJ	22	mark	_	Idiom=Yes
17	que	que	SCONJ	_	_	16	fixed	_	InIdiom=Yes
18	euh	euh	INTJ	_	_	22	discourse	_	_
19	elles	lui	PRON	_	Case=Nom|Emph=No|Gender=Fem|Number=Plur|Person=3|PronType=Prs	22	nsubj	_	_
20	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	22	aux:pass	_	_
21	confron~	confron~	X	_	ExtPos=VERB	22	reparandum	_	_
22	confrontées	confronter	VERB	_	VerbForm=Part	11	advcl	_	Gender[ctxt]=Fem|Number[ctxt]=Plur|Tense[denom]=Past
23	à	à	ADP	_	_	25	case	_	_
24	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	25	det	_	_
25	élèves	élève	NOUN	_	_	22	obl:mod	_	Gender[lex]=Masc|Number[ctxt]=Plur
26	avec	avec	ADP	_	_	28	case	_	_
27	leurs	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=3|Poss=Yes|PronType=Prs	28	det	_	_
28	difficultés	difficulté	NOUN	_	_	25	nmod	_	Gender[lex]=Fem|Number[ctxt]=Plur|SpaceAfter=No
29	.	.	PUNCT	_	_	5	punct	_	_

~~~


