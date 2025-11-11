---
layout: base
title:  'Statistics of parataxis:parenth in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `parataxis:parenth`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-parataxis.html">parataxis</a></tt>.

27 nodes (0%) are attached to their parents as `parataxis:parenth`.

17 instances of `parataxis:parenth` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.07407407407407.

The following 12 pairs of parts of speech are connected with `parataxis:parenth`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (9; 33% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (7; 26% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (2; 7% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 parataxis:parenth	color:blue
1	mais	mais	CCONJ	_	_	4	cc	_	AlignBegin=88171|AlignEnd=88323
2	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	AlignBegin=88323|AlignEnd=88474
3	y	y	PRON	_	Person=3|PronType=Prs	4	expl:comp	_	AlignBegin=88474|AlignEnd=88625
4	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	reparandum	_	AlignBegin=88625|AlignEnd=88776|SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	AlignBegin=88776|AlignEnd=88776
6	euh	euh	INTJ	_	_	4	discourse	_	AlignBegin=88776|AlignEnd=88927|SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	AlignBegin=88927|AlignEnd=88927
8	tu	toi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=2|PronType=Prs	9	nsubj	_	AlignBegin=88927|AlignEnd=89068
9	sais	savoir	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	4	parataxis:parenth	_	AlignBegin=89068|AlignEnd=89210
10	ce	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	obj	_	AlignBegin=89210|AlignEnd=89351
11	que	que	PRON	_	PronType=Rel	10	acl:relcl	_	AlignBegin=89351|AlignEnd=89492
12	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	11	nsubj	_	AlignBegin=89492|AlignEnd=89634|SpaceAfter=No
13	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	AlignBegin=89634|AlignEnd=89775|SpaceAfter=No
14	,	,	PUNCT	_	_	4	punct	_	AlignBegin=89775|AlignEnd=89775
15	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	16	det	_	AlignBegin=89775|AlignEnd=89916
16	génération	génération	NOUN	_	_	0	root	_	AlignBegin=89916|AlignEnd=90058|Gender[lex]=Fem|Number[ctxt]=Sing|SpaceAfter=No
17	.	.	PUNCT	_	_	16	punct	_	AlignBegin=90058|AlignEnd=90058

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 parataxis:parenth	color:blue
1	donc	donc	ADV	_	_	15	advmod	_	_
2	mon	son	DET	_	Gender=Masc|Number=Sing|Number[psor]=Sing|Person[psor]=1|Poss=Yes|PronType=Prs	3	det	_	_
3	frère	frère	NOUN	_	_	15	nsubj	_	Gender[lex]=Masc|Number[ctxt]=Sing|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl:subj	_	_
6	y	y	PRON	_	Person=3|PronType=Prs	7	expl:comp	_	_
7	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	parataxis:parenth	_	_
8	un	un	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Ind	7	obj	_	_
9	de	des	ADP	_	_	11	case	_	wordform=des
10	les	les	DET	_	Definite=Def|PronType=Art	11	det	_	_
11	deux	deux	NUM	_	_	8	nmod	_	_
12	,	,	PUNCT	_	_	7	punct	_	_
13	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	aux:tense	_	_
14	déjà	déjà	ADV	_	_	15	advmod	_	_
15	braqué	braquer	VERB	_	VerbForm=Part	0	root	_	Gender[ctxt]=Masc|Number[ctxt]=Sing|SpaceAfter=No|Tense[denom]=Past
16	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 8 parataxis:parenth	color:blue
1	et	et	CCONJ	_	_	15	cc	_	SpaceAfter=No
2	,	,	PUNCT	_	_	15	punct	_	_
3	euh	euh	INTJ	_	_	15	discourse	_	_
4	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	8	nsubj	_	_
5	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
6	avec	avec	ADP	_	_	8	case	_	_
7	nos	son	DET	_	Number=Plur|Number[psor]=Plur|Person[psor]=1|Poss=Yes|PronType=Prs	8	det	_	_
8	correspondantes	correspondant	NOUN	_	_	15	parataxis:parenth	_	Gender[lex]=Fem|Number[ctxt]=Plur|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	euh	euh	INTJ	_	_	8	discourse	_	SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	allemandes	allemande	ADJ	_	_	8	amod	_	Gender[ctxt]=Fem|Number[ctxt]=Plur|SpaceAfter=No
13	,	,	PUNCT	_	_	8	punct	_	_
14	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	15	nsubj	_	_
15	avait	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
16	du	du	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	mal	mal	NOUN	_	Number=Sing	15	obj:lvc	_	Gender[lex]=Masc
18	à	à	ADP	_	_	20	mark	_	_
19	y	y	PRON	_	Person=3|PronType=Prs	20	obj	_	_
20	croire	croire	VERB	_	VerbForm=Inf	15	xcomp	_	SpaceAfter=No|Subject=SubjRaising
21	.	.	PUNCT	_	_	15	punct	_	_

~~~


