---
layout: base
title:  'Statistics of obl:agent in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="ro_tuecl-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="ro_tuecl-dep-obl-pmod.html">obl:pmod</a></tt>, <tt><a href="ro_tuecl-dep-obl-tmod.html">obl:tmod</a></tt>.

13 nodes (0%) are attached to their parents as `obl:agent`.

13 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.15384615384615.

The following 5 pairs of parts of speech are connected with `obl:agent`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (8; 62% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt> (2; 15% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 obl:agent	color:blue
1	Cu	cu	ADP	_	AdpType=Prep|Case=Acc	3	case	_	_
2	o	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	3	det	_	_
3	femeie	femeie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	13	obl	_	_
4	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	7	nsubj:pass	_	_
5	nu	nu	PART	_	Polarity=Neg	7	advmod	_	SpaceAfter=No
6	-i	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Variant=Short|VerbForm=Fin	7	aux:pass	_	_
7	impresionată	impresiona	VERB	_	Gender=Fem|Number=Sing|VerbForm=Part	3	acl	_	_
8	de	de	ADP	_	AdpType=Prep|Case=Acc	9	case	_	_
9	bani	ban	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	7	obl:agent	_	SpaceAfter=No
10	,	,	PUNCT	_	_	3	punct	_	_
11	puțini	puțin	DET	_	Gender=Masc|Number=Plur|Person=3|PronType=Ind	12	det	_	_
12	bărbați	bărbat	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	13	nsubj	_	_
13	știu	ști	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
14	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	16	obj	_	_
15	să	să	PART	_	Mood=Sub	16	mark	_	_
16	facă	face	VERB	_	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	13	ccomp	_	SpaceAfter=No
17	.	.	PUNCT	_	_	13	punct	_	_
18	🙂	🙂	SYM	_	_	13	discourse:emo	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Comportamentul	comportament	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj	_	_
2	feminin	feminin	ADJ	_	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	amod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	4	punct	_	_
4	standardizat	standardiza	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	1	acl	_	_
5	de	de	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	Ştefan	Ştefan	PROPN	_	_	4	obl:agent	_	_
7	Gheorghidiu	Gheorghidiu	PROPN	_	_	6	flat	_	SpaceAfter=No
8	,	,	PUNCT	_	_	4	punct	_	_
9	propune	propune	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
10	imaginea	imagine	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	9	obj	_	_
11	unei	un	DET	_	Case=Dat,Gen|Gender=Fem|Number=Sing|PronType=Ind	12	det	_	_
12	fiinţe	fiinţă	NOUN	_	Case=Dat,Gen|Definite=Ind|Gender=Fem|Number=Sing	10	nmod	_	_
13	slabe	slab	ADJ	_	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	SpaceAfter=No
14	,	,	PUNCT	_	_	15	punct	_	_
15	neajutorate	neajutorat	ADJ	_	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	13	conj	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	ascultătoare	ascultător	ADJ	_	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	13	conj	_	_
18	şi	şi	CCONJ	_	Polarity=Pos	21	cc	_	_
19	în	în	ADP	_	AdpType=Prep|Case=Acc	21	case	_	_
20	permanentă	permanent	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	21	amod	_	_
21	admiraţie	admiraţie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	12	conj	_	_
22	faţă	faţă	ADV	_	_	24	advmod	_	_
23	de	de	ADP	_	AdpType=Prep|Case=Acc	22	fixed	_	_
24	bărbat	bărbat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	21	obl	_	SpaceAfter=No
25	,	,	PUNCT	_	_	26	punct	_	_
26	bagamias	băga	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|Typo=Yes|VerbForm=Fin	9	parataxis	_	CorrectForm=băga-mi-aş

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl:agent	color:blue
1	O	un	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|PronType=Ind	2	det	_	_
2	femeie	femeie	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nsubj	_	_
3	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
4	deja	deja	ADV	_	Degree=Pos	7	advmod	_	_
5	pe	pe	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	jumătate	jumătate	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	7	nmod	_	_
7	îndragostită	îndrăgostit	ADJ	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing|Typo=Yes	0	root	_	CorrectForm=îndrăgostită
8	de	de	ADP	_	AdpType=Prep|Case=Acc	10	case	_	_
9	un	un	DET	_	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Ind	10	det	_	_
10	bărbat	bărbat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	7	obl:agent	_	_
11	care	care	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	12	nsubj	_	_
12	stă	sta	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	acl	_	_
13	s-	să	PART	_	Mood=Sub|Variant=Short	15	mark	_	SpaceAfter=No
14	o	el	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	15	obj	_	_
15	asculte	asculta	VERB	_	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	12	xcomp	_	SpaceAfter=No
16	.	.	PUNCT	_	_	7	punct	_	_

~~~


