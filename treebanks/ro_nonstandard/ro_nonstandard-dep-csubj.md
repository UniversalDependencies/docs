---
layout: base
title:  'Statistics of csubj in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="ro_nonstandard-dep-csubj-pass.html">csubj:pass</a></tt>.

81 nodes (0%) are attached to their parents as `csubj`.

49 instances of `csubj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.93827160493827.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (55; 68% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (11; 14% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	Să	să	PART	Qs	PartType=Sub	4	mark	_	ref=MATT10.34
2	nu	nu	ADV	Qz	Polarity=Neg	4	advmod	_	ref=MATT10.34
3	vă	tu	PRON	Pp2-pd--------w	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Weak	4	iobj	_	ref=MATT10.34
4	pare	părea	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT10.34
5	că	că	SCONJ	Csssp	Polarity=Pos	7	mark	_	ref=MATT10.34
6	am	avea	AUX	Vaip1p	Mood=Ind|Number=Plur|Person=1|Tense=Pres	7	aux	_	ref=MATT10.34
7	venit	veni	VERB	Vmp	VerbForm=Part	4	csubj	_	ref=MATT10.34
8	să	să	PART	Qs	PartType=Sub	9	mark	_	ref=MATT10.34
9	las	lăsa	VERB	Vmsp1s	Mood=Sub|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	7	advcl	_	ref=MATT10.34
10	pace	pace	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	9	obj	_	ref=MATT10.34
11	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	ref=MATT10.34
12	pămînt	pământ	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	9	obl	_	ref=MATT10.34|SpaceAfter=No
13	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MATT10.34

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 15 csubj	color:blue
1	Ce	ci	CCONJ	Ccssz	Polarity=Neg	11	cc	_	ref=MATT5.37
2	să	să	PART	Qs	PartType=Sub	3	mark	_	ref=MATT5.37
3	fie	fi	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	ref=MATT5.37
4	cuvîntul	cuvânt	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	11	nsubj	_	ref=MATT5.37
5	vostru	tău	DET	Ds2ms-p	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=2|Poss=Yes|PronType=Prs	4	det	_	ref=MATT5.37|SpaceAfter=No
6	,	,	PUNCT	COMMA	_	11	punct	_	ref=MATT5.37
7	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	9	nsubj	_	ref=MATT5.37|SpaceAfter=No
8	-i	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	ref=MATT5.37
9	așa	așa	ADV	Rg	_	11	csubj	_	ref=MATT5.37|SpaceAfter=No
10	,	,	PUNCT	COMMA	_	11	punct	_	ref=MATT5.37
11	așa	așa	ADV	Rg	_	0	root	_	ref=MATT5.37|SpaceAfter=No
12	,	,	PUNCT	COMMA	_	17	punct	_	ref=MATT5.37
13	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	15	nsubj	_	ref=MATT5.37
14	nu	nu	ADV	Qz	Polarity=Neg	15	advmod	_	ref=MATT5.37|SpaceAfter=No
15	-i	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	csubj	_	ref=MATT5.37|SpaceAfter=No
16	,	,	PUNCT	COMMA	_	17	punct	_	ref=MATT5.37
17	nu	nu	ADV	Qz	Polarity=Neg	11	conj	_	ref=MATT5.37|SpaceAfter=No
18	.	.	PUNCT	PERIOD	_	11	punct	_	ref=MATT5.37

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	(	(	PUNCT	LPAR	_	4	punct	_	ref=MATT19.24.comment|SpaceAfter=No
2	Cămila	cămilă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	nsubj	_	ref=MATT19.24.comment
3	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	4	expl:pv	_	ref=MATT19.24.comment
4	zice	zice	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT19.24.comment
5	că	că	SCONJ	Csssp	Polarity=Pos	7	mark	_	ref=MATT19.24.comment|SpaceAfter=No
6	-i	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	ref=MATT19.24.comment
7	funea	funie	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	csubj	_	ref=MATT19.24.comment
8	corabii	corabie	NOUN	Ncmpry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Plur	7	nmod	_	ref=MATT19.24.comment|SpaceAfter=No
9	,	,	PUNCT	COMMA	_	16	punct	_	ref=MATT19.24.comment
10	iar	iar	CCONJ	Ccssp	Polarity=Pos	16	cc	_	ref=MATT19.24.comment
11	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	ref=MATT19.24.comment
12	cest	acesta	DET	Dd3msr---e	Case=Acc,Nom|Gender=Masc|Number=Sing|Person=3|Position=Prenom|PronType=Dem	13	det	_	ref=MATT19.24.comment
13	loc	loc	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	16	obl	_	ref=MATT19.24.comment|SpaceAfter=No
14	,	,	PUNCT	COMMA	_	13	punct	_	ref=MATT19.24.comment
15	să	sine	PRON	Px3--a--------w	Case=Acc|Person=3|PronType=Prs|Reflex=Yes|Strength=Weak	16	expl:pv	_	ref=MATT19.24.comment
16	înțăleage	înțelege	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	ref=MATT19.24.comment
17	cămila	cămilă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	16	nsubj	_	ref=MATT19.24.comment|SpaceAfter=No
18	)	)	PUNCT	RPAR	_	4	punct	_	ref=MATT19.24.comment|SpaceAfter=No
19	.	.	PUNCT	PERIOD	_	4	punct	_	ref=MATT19.24.comment

~~~


