---
layout: base
title:  'Statistics of nmod in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `nmod`

This relation is universal.
There are 3 language-specific subtypes of `nmod`: <tt><a href="ro_simonero-dep-nmod-agent.html">nmod:agent</a></tt>, <tt><a href="ro_simonero-dep-nmod-pmod.html">nmod:pmod</a></tt>, <tt><a href="ro_simonero-dep-nmod-tmod.html">nmod:tmod</a></tt>.

1897 nodes (13%) are attached to their parents as `nmod`.

1884 instances of `nmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.60622034791776.

The following 23 pairs of parts of speech are connected with `nmod`: <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1720; 91% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (27; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (22; 1% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (22; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (21; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (18; 1% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (17; 1% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (17; 1% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (9; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="ro_simonero-pos-X.html">X</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt>-<tt><a href="ro_simonero-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_simonero-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod	color:blue
1	În	în	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	O
2	studiul	studiu	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	obl	_	O
3	DIG	DIG	NOUN	Yn	Abbr=Yes	2	nmod	_	O
4	(	(	PUNCT	LPAR	_	5	punct	_	O
5	Digitalis	Digitalis	X	X	_	2	appos	_	O
6	Intervention	Intervention	X	X	_	5	flat	_	O
7	Group	group	X	X	_	6	nmod	_	O
8	)	)	PUNCT	RPAR	_	5	punct	_	O
9	a	avea	AUX	Va--3s	Number=Sing|Person=3	11	aux	_	O
10	fost	fi	AUX	Vap--sm	Gender=Masc|Number=Sing|VerbForm=Part	11	aux:pass	_	O
11	evaluat	evalua	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	O
12	tratamentul	tratament	NOUN	Ncmsry	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj:pass	_	O
13	cu	cu	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	O
14	digoxin	digoxin	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	12	nmod	_	B-CHEM
15	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	16	case	_	O
16	IC	IC	NOUN	Yn	Abbr=Yes	11	obl	_	B-DISO
17	.	.	PUNCT	PERIOD	_	11	punct	_	O

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 nmod	color:blue
1	Un	un	DET	Timsr	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	3	det	_	O
2	alt	alt	DET	Di3ms----e	Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Ind	3	det	_	O
3	factor	factor	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	9	nsubj	_	O
4	reglator	reglator	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	3	amod	_	O
5	important	important	ADJ	Afpms-n	Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	O
6	al	al	DET	Tsms	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	7	det	_	O
7	gluconeogenezei	gluconeogeneză	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	3	nmod	_	O
8	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	O
9	glucoza	glucoză	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	B-CHEM
10	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	11	case	_	O
11	sine	sine	PRON	Px3--a--------s	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Strong	9	nmod	_	O
12	.	.	PUNCT	PERIOD	_	9	punct	_	O

~~~


