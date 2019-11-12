---
layout: base
title:  'Statistics of obj in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `obj`

This relation is universal.

317 nodes (2%) are attached to their parents as `obj`.

312 instances of `obj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62776025236593.

The following 10 pairs of parts of speech are connected with `obj`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (296; 93% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (7; 2% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 obj	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
2	acest	acest	DET	Dd3msr---e	Case=Nom|Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Dem	3	det	_	O
3	moment	moment	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	6	obl	_	O
4	peptidul	peptid	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	nsubj	_	B-CHEM
5	C	C	NOUN	Ncm--n	Definite=Ind|Gender=Masc	4	nmod	_	I-CHEM
6	poate	putea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
7	prezenta	prezenta	VERB	Vmnp	Tense=Pres|VerbForm=Inf	6	ccomp	_	O
8	valori	valoare	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	7	obj	_	O
9	variabile	variabil	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	8	amod	_	O
10	.	.	PUNCT	PERIOD	_	6	punct	_	O

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obj	color:blue
1	Vârstnicii	vârstnic	NOUN	Ncmpry	Case=Nom|Definite=Def|Gender=Masc|Number=Plur	4	nsubj	_	O
2	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	O
3	EI	EI	NOUN	Yn	Abbr=Yes	1	nmod	_	B-DISO
4	au	avea	AUX	Va--3p	Number=Plur|Person=3|VerbForm=Fin	0	root	_	O
5	o	un	DET	Tifsr	Case=Nom|Gender=Fem|Number=Sing|PronType=Ind	6	det	_	O
6	tendință	tendință	NOUN	Ncfsrn	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obj	_	O
7	mai	mai	ADV	Rp	_	8	advmod	_	O
8	mare	mare	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	O
9	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	11	mark	_	O
10	a	a	PART	Qn	PartType=Inf	11	mark	_	O
11	dezvolta	dezvolta	VERB	Vmnp	Tense=Pres|VerbForm=Inf	6	acl	_	O
12	abcese	abces	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	11	obj	_	B-DISO
13	intracardiace	intracardiac	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	12	amod	_	I-DISO
14	sau	sau	CCONJ	Ccssp	Polarity=Pos	15	cc	_	O
15	complicații	complicație	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	12	conj	_	B-DISO
16	paravalvulare	paravalvular	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	15	amod	_	I-DISO
17	la	la	ADP	Spsa	AdpType=Prep|Case=Acc	18	case	_	O
18	nivelul	nivel	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	obl	_	O
19	protezelor	proteză	NOUN	Ncfpoy	Case=Gen|Definite=Def|Gender=Fem|Number=Plur	18	nmod	_	O
20	valvulare	valvular	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	19	amod	_	O
21	(	(	PUNCT	LPAR	_	22	punct	_	O
22	7	7	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	4	parataxis	_	O
23	)	)	PUNCT	RPAR	_	22	punct	_	O
24	.	.	PUNCT	PERIOD	_	4	punct	_	O

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 obj	color:blue
1	Acest	acest	DET	Dd3msr---e	Case=Nom|Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Dem	2	det	_	O
2	fapt	fapt	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	nsubj	_	O
3	reflectă	reflecta	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
4	impactul	impact	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	3	obj	_	O
5	negativ	negativ	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	4	amod	_	O
6	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	O
7	care	care	PRON	Pw3--r	Case=Nom|Person=3|PronType=Int,Rel	9	obj	_	O
8	îl	el	PRON	Pp3msa--------w	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Weak	9	expl	_	O
9	au	avea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	acl	_	O
10	comorbiditățile	comorbiditate	NOUN	Ncfpry	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	9	nsubj	_	B-DISO
11	asupra	asupra	ADP	Spsg	AdpType=Prep|Case=Gen	12	case	_	O
12	mortalității	mortalitate	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	10	nmod	_	O
13	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
14	IC	IC	NOUN	Yn	Abbr=Yes	12	nmod	_	B-DISO
15	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	O
16	FE	FE	NOUN	Yn	Abbr=Yes	12	nmod	_	O
17	păstrată	păstrat	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	16	amod	_	O
18	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


