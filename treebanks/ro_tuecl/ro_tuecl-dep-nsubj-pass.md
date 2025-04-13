---
layout: base
title:  'Statistics of nsubj:pass in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-nsubj.html">nsubj</a></tt>.

11 nodes (0%) are attached to their parents as `nsubj:pass`.

8 instances of `nsubj:pass` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.09090909090909.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (7; 64% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 18% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 9% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 nsubj:pass	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	2	vocative:mention	_	_
2	WoW	wow	INTJ	_	_	0	root	_	Lang=en
3	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	spart	sparge	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	2	ccomp	_	_
5	de	de	ADP	_	AdpType=Prep|Case=Acc	4	advmod:tmod	_	_
6	curând	curând	ADV	_	Degree=Pos	5	fixed	_	_
7	acest	acest	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Dem	8	det	_	_
8	fund	fund	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nsubj:pass	_	SpaceAfter=No
9	!	!	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Boris	Boris	PROPN	_	_	4	nsubj:pass	_	_
2	Backer	Backer	PROPN	_	_	1	flat	_	_
3	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	acuzat	acuza	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	de	de	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	sexism	sexism	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	_
7	că	că	SCONJ	_	Polarity=Pos	9	mark	_	_
8	a	avea	AUX	_	Number=Sing|Person=3	9	aux	_	_
9	spus	spune	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	4	advcl	_	_
10	că	că	SCONJ	_	Polarity=Pos	15	mark	_	_
11	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	13	det	_	_
12	anumită	anumit	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Ind	13	det	_	_
13	femeie	femeie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	15	nsubj	_	_
14	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
15	drăguță	drăguț	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	9	ccomp	_	SpaceAfter=No
16	😂	😂	SYM	_	_	4	discourse:emo	_	SpaceAfter=No
17	😂	😂	SYM	_	_	4	discourse:emo	_	_
18	Ne-	eu	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs|Strength=Weak|Variant=Short	20	obj	_	SpaceAfter=No
19	am	avea	AUX	_	Number=Plur|Person=1	20	aux	_	_
20	dus	duce	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	4	parataxis	_	_
21	pe	pe	ADP	_	AdpType=Prep|Case=Acc	22	case	_	_
22	pulă	pulă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	20	obl	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	Se	se	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	2	expl:pv	_	_
2	pare	părea	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	că	că	SCONJ	_	Polarity=Pos	7	mark	_	_
4	numai	numai	ADV	_	Degree=Pos	5	advmod	_	_
5	grasele	gras	ADJ	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Plur	7	nsubj:pass	_	_
6	sunt	fi	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
7	considerate	considera	VERB	_	Gender=Fem|Number=Plur|VerbForm=Part	2	csubj	_	_
8	femei	femeie	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	7	obj	_	_
9	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	nesexy	unsexy	ADJ	_	Foreign=Yes|Typo=Yes	8	amod	_	CorrectForm=unsexy|SpaceAfter=No|Lang=en
11	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_
13	Schiloadele	schilod	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Plur	25	nsubj	_	_
14	de	de	ADP	_	AdpType=Prep|Case=Acc	16	case	_	_
15	12	12	NUM	_	Number=Sing|NumForm=Digit|NumType=Card	16	nummod	_	_
16	kile	kil	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	13	nmod	_	_
17	fara	fără	ADP	_	AdpType=Prep|Case=Acc|Typo=Yes	18	case	_	CorrectForm=fără
18	țațe	țâță	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur|Typo=Yes	13	nmod	_	CorrectForm=țâțe
19	-	-	PUNCT	_	_	20	punct	_	SpaceAfter=No
20	fără	fără	ADP	_	AdpType=Prep|Case=Acc	21	case	_	_
21	cur	cur	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	13	conj	_	_
22	sunt	fi	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	25	cop	_	_
23	cele	cel	DET	_	Case=Acc,Nom|Gender=Fem|Number=Plur|PronType=Dem	24	det	_	_
24	mai	mai	ADV	_	_	25	advmod	_	_
25	sexy	sexy	ADJ	_	Definite=Ind|Degree=Pos|Number=Plur	2	parataxis	_	SpaceAfter=No
26	...	...	PUNCT	_	_	25	punct	_	_

~~~


