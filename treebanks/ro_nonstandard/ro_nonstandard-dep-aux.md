---
layout: base
title:  'Statistics of aux in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="ro_nonstandard-dep-aux-pass.html">aux:pass</a></tt>.

709 nodes (3%) are attached to their parents as `aux`.

663 instances of `aux` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08039492242595.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-feat-AUX.html">AUX</a></tt> (674; 95% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (19; 3% instances), <tt><a href="ro_nonstandard-feat-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-feat-AUX.html">AUX</a></tt> (12; 2% instances), <tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_nonstandard-feat-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 aux	color:blue
1	Zicînd	zice	VERB	Vmg-----p	Mood=Ger|Polarity=Pos|VerbForm=Fin	0	root	_	ref=MATT 2.2
2	:	:	PUNCT	COLON	_	4	punct	_	ref=MATT 2.2
3	Unde	unde	ADV	Rw	AdvPronType=Int,Rel		4	advmod	_
4	iaste	fi	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	ref=MATT 2.2
5	cel	cel	DET	Tdmsr	Case=Acc,Nom|Gender=Masc|Number=Sing|PronType=Dem	6	det	_	ref=MATT 2.2
6	craiu	crai	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	4	nsubj	_	ref=MATT 2.2
7	jidovesc	jidovesc	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	6	amod	_	ref=MATT 2.2
8	carele	care	PRON	Pw3msry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing|Person=3|PronType=Int,Rel	10	nsubj:pass	_	ref=MATT 2.2
9	au	avea	AUX	Vaip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres	10	aux	_	ref=MATT 2.2
10	născut	naște	VERB	Vmp	Mood=Part|VerbForm=Fin	6	acl	_	ref=MATT 2.2
11	?	?	PUNCT	QUEST	_	4	punct	_	ref=MATT 2.2

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Adevăr	adevăr	NOUN	Ncmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	2	obj	_	ref=MATT 6.16
2	zic	zice	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT 6.16
3	voao	tu	PRON	Pp2-pd--------s	Case=Dat|Number=Plur|Person=2|PronType=Prs|Strength=Strong	2	iobj	_	ref=MATT 6.16
4	că	că	SCONJ	Csssp	Polarity=Pos	7	mark	_	ref=MATT 6.16
5	-și	sine	PRON	Px3--d--------w	Case=Dat|Person=3|PronType=Refl|Strength=Weak	7	expl:poss	_	ref=MATT 6.16
6	vor	vrea	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	ref=MATT 6.16
7	lua	lua	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	2	ccomp	_	ref=MATT 6.16
8	plata	plată	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	7	obj	_	ref=MATT 6.16
9	lor	el	PRON	Pp3-po	Case=Dat, Gen|Number=Plur|Person=3|PronType=Prs	8	nmod	_	ref=MATT 6.16
10	.	.	PUNCT	PERIOD	_	2	punct	_	ref=MATT 6.16

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Aşia	aşa	ADV	Rg	_	3	advmod	_	ref=MATT 12.45
2	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	3	aux	_	ref=MATT 12.45
3	fi	fi	AUX	Van	Mood=Inf	0	root	_	ref=MATT 12.45
4	şi	și	ADV	Rg	_	6	advmod	_	ref=MATT 12.45
5	aceştii	acesta	DET	Dd3fso	Case=Dat,Gen|Gender=Fem|Number=Sing|Person=3|PronType=Dem	6	det	_	ref=MATT 12.45
6	rude	rudă	NOUN	Ncfson	Case=Dat,Gen|Definite=Ind|Gender=Fem|Number=Sing	3	iobj	_	ref=MATT 12.45
7	reale	rău	ADJ	Afpfson	Case=Dat,Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	ref=MATT 12.45
8	.	.	PUNCT	PERIOD	_	3	punct	_	ref=MATT 12.45

~~~


