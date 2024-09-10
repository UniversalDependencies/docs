---
layout: base
title:  'Statistics of acl in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `acl`

This relation is universal.

53 nodes (1%) are attached to their parents as `acl`.

53 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.92452830188679.

The following 10 pairs of parts of speech are connected with `acl`: <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (38; 72% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (3; 6% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="ro_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt>-<tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ro_tuecl-pos-SYM.html">SYM</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl	color:blue
1	@Utilizator_fem	@Utilizator_fem	SYM	_	_	3	vocative:mention	_	_
2	Ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	băiat	băiat	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
4	sau	sau	CCONJ	_	Polarity=Pos	5	cc	_	_
5	fată	fată	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	3	conj	_	_
6	că	că	SCONJ	_	Polarity=Pos	9	mark	_	SpaceAfter=No
7	,	,	PUNCT	_	_	9	punct	_	PunctError
8	se	sine	PRON	_	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	9	expl:pass	_	_
9	vede	vedea	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	acl	_	_
10	părul	păr	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	9	nsubj:pass	_	_
11	pe	pe	ADP	_	AdpType=Prep|Case=Acc	12	case	_	_
12	burtă	burtă	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	obl	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl	color:blue
1	Am	avea	AUX	_	Number=Sing|Person=1	0	root	_	_
2	impresia	impresie	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	obj	_	_
3	ca	că	SCONJ	_	Polarity=Pos|Typo=Yes	8	mark	_	CorrectForm=că
4	pasărea	pasăre	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	8	nsubj	_	_
5	ta	tău	DET	_	Case=Acc,Nom|Gender=Fem|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	4	det	_	_
6	preferată	preferat	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
7	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	păunul	păun	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	2	acl	_	SpaceAfter=No
9	,	,	PUNCT	_	_	11	punct	_	_
10	că	că	SCONJ	_	Polarity=Pos	11	mark	_	_
11	ești	fi	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	advcl	_	_
12	când	când	ADV	_	PronType=Int,Rel	11	advmod:tmod	_	_
13	pă’	pe	ADP	_	AdpType=Prep|Case=Acc	14	case	_	_
14	unul	unu	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	11	obl	_	SpaceAfter=No
15	,	,	PUNCT	_	_	18	punct	_	_
16	când	când	ADV	_	PronType=Int,Rel	18	advmod:tmod	_	_
17	pă’	pe	ADP	_	AdpType=Prep|Case=Acc	18	case	_	_
18	altul	alt	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	11	obl	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	ce	ce	ADV	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	2	advmod	_	_
2	ușor	ușor	ADV	_	Degree=Pos	0	root	_	_
3	e	fi	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	cop	_	_
4	sa	să	PART	_	Mood=Sub	6	mark	_	CorrectForm=să
5	fii	fi	AUX	_	Mood=Sub|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	fată	fată	NOUN	_	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	csubj	_	SpaceAfter=No
7	,	,	PUNCT	_	_	8	punct	_	_
8	tot	tot	PRON	_	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	6	appos	_	_
9	ce	ce	PRON	_	Case=Acc,Nom|Person=3|PronType=Int,Rel	12	obj	_	_
10	trebuie	trebuie	VERB	_	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	8	acl	_	_
11	să	să	PART	_	Mood=Sub	12	mark	_	_
12	faci	face	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	10	csubj	_	_
13	e	fi	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis	_	_
14	să	să	PART	_	Mood=Sub	16	mark	_	_
15	îți	tu	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Weak	16	expl:poss	_	_
16	pui	pune	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	13	xcomp	_	_
17	gene	geană	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	16	obj	_	SpaceAfter=No
18	,	,	PUNCT	_	_	19	punct	_	_
19	unghii	unghie	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	17	conj	_	_
20	și	și	CCONJ	_	_	23	cc	_	_
21	să	să	PART	_	Mood=Sub	23	mark	_	_
22	te	tu	PRON	_	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Weak	23	obj	_	_
23	superi	supăra	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	16	conj	_	_
24	din	din	ADP	_	AdpType=Prep|Case=Acc	25	case	_	_
25	orice	orice	PRON	_	Case=Acc,Nom|Number=Sing|Person=3|PronType=Ind	23	obl	_	_

~~~


