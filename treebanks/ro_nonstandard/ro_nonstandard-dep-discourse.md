---
layout: base
title:  'Statistics of discourse in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `discourse`

This relation is universal.

101 nodes (0%) are attached to their parents as `discourse`.

91 instances of `discourse` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.67326732673267.

The following 12 pairs of parts of speech are connected with `discourse`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt> (68; 67% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (11; 11% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt> (6; 6% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt> (5; 5% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt> (2; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt>-<tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_nonstandard-feat-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 discourse	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 discourse	color:blue
1	Derept	Drept	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	ref=MATT 12.12
2	aceaia	acela	PRON	Pd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	discourse	_	ref=MATT 12.12
3	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	aux	_	ref=MATT 12.12
4	face	face	VERB	Vmn	Mood=Inf|VerbForm=Fin	0	root	_	ref=MATT 12.12
5	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	6	case	_	ref=MATT 12.12
6	sîmbete	sâmbătă	NOUN	Ncfprn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	4	nmod:tmod	_	ref=MATT 12.12
7	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MATT 12.12

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	Au	au	INTJ	I	_	2	discourse	_	ref=MATT 11.8
2	om	om	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	0	root	_	ref=MATT 11.8
3	întru	întru	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	ref=MATT 11.8
4	veşminte	veșmânt	NOUN	Ncfprn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	6	obl	_	ref=MATT 11.8
5	moi	moale	ADJ	Afpfprn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	4	amod	_	ref=MATT 11.8
6	îmbrăcat	îmbrăca	VERB	Vmp--sm-p	Gender=Masc|Number=Sing|Mood=Part|Polarity=Pos|VerbForm=Fin	2	amod	_	ref=MATT 11.8
7	?	?	PUNCT	QUEST	_	2	punct	_	ref=MATT 11.8

~~~


