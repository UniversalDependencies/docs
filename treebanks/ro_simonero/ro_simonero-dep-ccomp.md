---
layout: base
title:  'Statistics of ccomp in UD_Romanian-SiMoNERo'
udver: '2'
---

## Treebank Statistics: UD_Romanian-SiMoNERo: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="ro_simonero-dep-ccomp-pmod.html">ccomp:pmod</a></tt>.

1160 nodes (1%) are attached to their parents as `ccomp`.

1158 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.22586206896552.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (964; 83% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt> (113; 10% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt> (55; 5% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="ro_simonero-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="ro_simonero-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="ro_simonero-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="ro_simonero-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_simonero-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_simonero-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 ccomp	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 ccomp	color:blue
1	Se	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	2	expl:pv	_	O
2	observă	observa	VERB	Vmip3	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
3	că	că	SCONJ	Csssp	Polarity=Neg	9	mark	_	O
4	ordinea	ordine	NOUN	Ncfsry	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	9	nsubj	_	O
5	folosirii	folosire	NOUN	Ncfsoy	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	4	nmod	_	O
6	acestor	acest	DET	Dd3-po---e	Case=Gen|Number=Plur|Person=3|Position=Prenom|PronType=Dem	7	det	_	O
7	metode	metodă	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	5	nmod	_	O
8	este	fi	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	O
9	diferită	diferit	ADJ	Afpfsrn	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	ccomp	_	O
10	.	.	PUNCT	PERIOD	_	2	punct	_	O

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	Acești	acest	DET	Dd3mpr---e	Case=Nom|Gender=Masc|Number=Plur|Person=3|Position=Prenom|PronType=Dem	2	det	_	O
2	precursori	precursor	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	3	nsubj	_	O
3	pot	putea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	O
4	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	5	aux:pass	_	O
5	aminoacizi	aminoacid	NOUN	Ncmp-n	Definite=Ind|Gender=Masc|Number=Plur	3	ccomp	_	B-CHEM
6	,	,	PUNCT	COMMA	_	7	punct	_	O
7	lactat	lactat	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	conj	_	B-CHEM
8	,	,	PUNCT	COMMA	_	9	punct	_	O
9	piruvat	piruvat	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	conj	_	B-CHEM
10	și	și	CCONJ	Crssp	Polarity=Pos	11	cc	_	O
11	glicerol	glicerol	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	5	conj	_	B-CHEM
12	(	(	PUNCT	LPAR	_	13	punct	_	O
13	18	18	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	3	parataxis	_	O
14	)	)	PUNCT	RPAR	_	13	punct	_	O
15	.	.	PUNCT	PERIOD	_	3	punct	_	O

~~~


