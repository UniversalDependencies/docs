---
layout: base
title:  'Statistics of nmod:agent in UD_Romanian'
udver: '2'
---

## Treebank Statistics: UD_Romanian: Relations: `nmod:agent`

This relation is a language-specific subtype of <tt><a href="ro-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="ro-dep-nmod-pmod.html">nmod:pmod</a></tt>, <tt><a href="ro-dep-nmod-tmod.html">nmod:tmod</a></tt>.

842 nodes (0%) are attached to their parents as `nmod:agent`.

841 instances of `nmod:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.79572446555819.

The following 11 pairs of parts of speech are connected with `nmod:agent`: <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-NOUN.html">NOUN</a></tt> (651; 77% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-PROPN.html">PROPN</a></tt> (81; 10% instances), <tt><a href="ro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro-pos-NOUN.html">NOUN</a></tt> (37; 4% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-PRON.html">PRON</a></tt> (36; 4% instances), <tt><a href="ro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro-pos-NOUN.html">NOUN</a></tt> (23; 3% instances), <tt><a href="ro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="ro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="ro-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="ro-pos-VERB.html">VERB</a></tt>-<tt><a href="ro-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="ro-pos-ADV.html">ADV</a></tt>-<tt><a href="ro-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod:agent	color:blue
1	Îi	el	PRON	Pp3-sd--------w	Case=Dat|Number=Sing|Person=3|PronType=Prs|Strength=Weak	4	iobj	_	_
2	mai	mai	ADV	Rp	_	4	advmod	_	_
3	fusese	fi	AUX	Vail3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	4	aux:pass	_	_
4	sugerat	sugera	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	_
5	și	și	CCONJ	Crssp	Polarity=Pos	7	advmod	_	_
6	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	7	case	_	_
7	cartea	carte	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	4	nmod:agent	_	_
8	pe	pe	ADP	Spsa	AdpType=Prep|Case=Acc	9	case	_	_
9	care	care	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	11	obj	_	_
10	o	el	PRON	Pp3fsa--------w	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs|Strength=Weak	11	expl	_	_
11	scosese	scoate	VERB	Vmil3s	Mood=Ind|Number=Sing|Person=3|Tense=Pqp|VerbForm=Fin	7	acl	_	_
12	din	din	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
13	sertar	sertar	NOUN	Ncms-n	Definite=Ind|Gender=Masc|Number=Sing	11	obl	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:agent	color:blue
1	Am	avea	AUX	Va--1	Person=1	2	aux	_	_
2	rămas	rămâne	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
3	,	,	PUNCT	COMMA	_	4	punct	_	_
4	acolo	acolo	ADV	Rgp	Degree=Pos	2	advmod	_	SpaceAfter=No
5	,	,	PUNCT	COMMA	_	4	punct	_	_
6	bătut	bate	VERB	Vmp--sm	Gender=Masc|Number=Sing|VerbForm=Part	2	xcomp	_	_
7	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	_
8	Dumnezeu	Dumnezeu	PROPN	Np	_	6	nmod:agent	_	SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 nmod:agent	color:blue
1	durau	dura	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	45	45	NUM	Mc-p-d	Number=Plur|NumForm=Digit|NumType=Card	4	nummod	_	_
3	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	2	case	_	_
4	minute	minut	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	1	obj	_	_
5	și	și	CCONJ	Crssp	Polarity=Pos	7	cc	_	_
6	nu	nu	PART	Qz	Polarity=Neg	7	advmod	_	_
7	puteau	putea	VERB	Vmii3p	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	1	conj	_	_
8	fi	fi	AUX	Vanp	Tense=Pres|VerbForm=Inf	10	aux:pass	_	_
9	nicicând	nicicând	ADV	Rz	PronType=Neg	10	advmod	_	_
10	repetate	repetat	ADJ	Afpfp-n	Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	7	ccomp	_	_
11	de	de	ADP	Spsa	AdpType=Prep|Case=Acc	13	case	_	_
12	alte	alt	DET	Di3fpr---e	Case=Acc,Nom|Gender=Fem|Number=Plur|Person=3|Position=Prenom|PronType=Ind	13	det	_	_
13	persoane	persoană	NOUN	Ncfp-n	Definite=Ind|Gender=Fem|Number=Plur	10	nmod:agent	_	SpaceAfter=No
14	.	.	PUNCT	PERIOD	_	1	punct	_	_

~~~


