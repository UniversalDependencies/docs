---
layout: base
title:  'Statistics of ccomp in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `ccomp`

This relation is universal.
There are 1 language-specific subtypes of `ccomp`: <tt><a href="ro_nonstandard-dep-ccomp-pmod.html">ccomp:pmod</a></tt>.

1376 nodes (1%) are attached to their parents as `ccomp`.

1317 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.75654069767442.

The following 16 pairs of parts of speech are connected with `ccomp`: <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1182; 86% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt> (68; 5% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (36; 3% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt> (23; 2% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt> (18; 1% instances), <tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (13; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-ADV.html">ADV</a></tt> (13; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_nonstandard-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 ccomp	color:blue
1	Ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	2	obj	_	ref=MATT19.6
2	împreună	împreuna	VERB	Vmip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	ccomp	_	ref=MATT19.6
3	Dumnedzeu	Dumnezeu	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	ref=MATT19.6|SpaceAfter=No
4	,	,	PUNCT	COMMA	_	2	punct	_	ref=MATT19.6
5	omul	om	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	8	nsubj	_	ref=MATT19.6
6	să	să	PART	Qs	PartType=Sub	8	mark	_	ref=MATT19.6
7	nu	nu	ADV	Qz	Polarity=Neg	8	advmod	_	ref=MATT19.6
8	desparță	despărți	VERB	Vmsp3	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	ref=MATT19.6|SpaceAfter=No
9	.	.	PUNCT	PERIOD	_	8	punct	_	ref=MATT19.6

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 ccomp	color:blue
1	Zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=LUCA20.41
2	într-	întru	ADP	Spsa	AdpType=Prep|Case=Acc	3	punct	_	ref=LUCA20.41|SpaceAfter=No
3	aceaia	acela	PRON	Pd3fsr	Case=Acc,Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	1	nmod:tmod	_	ref=LUCA20.41
4	cătră	către	ADP	Spsa	AdpType=Prep|Case=Acc	5	case	_	ref=LUCA20.41
5	ei	el	PRON	Pp3mpa--------s	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs|Strength=Strong	1	nmod:pmod	_	ref=LUCA20.41|SpaceAfter=No
6	:	:	PUNCT	COLON	_	8	punct	_	ref=LUCA20.41
7	cum	cum	ADV	Rw	PronType=Int,Rel	8	advmod	_	ref=LUCA20.41
8	zic	zice	VERB	Vmip3p	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	1	parataxis	_	ref=LUCA20.41
9	Hristos	Hristos	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	12	nsubj	_	ref=LUCA20.41
10	a	avea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	11	mark	_	ref=LUCA20.41
11	fi	fi	VERB	Vmn	VerbForm=Inf	12	cop	_	ref=LUCA20.41
12	fiul	fiu	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	8	ccomp	_	ref=LUCA20.41
13	lui	-ul	DET	Tf-so	Case=Dat,Gen|Definite=Def|Number=Sing|PronType=Art	14	det	_	ref=LUCA20.41
14	David	David	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	12	nmod	_	ref=LUCA20.41|SpaceAfter=No
15	?	?	PUNCT	QUEST	_	8	punct	_	ref=LUCA20.41

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 13 ccomp	color:blue
1	Zise	zice	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	ref=MATT20.7
2	lor	el	PRON	Pp3-pd--------s	Case=Dat|Number=Plur|Person=3|PronType=Prs|Strength=Strong	1	iobj	_	ref=MATT20.7|SpaceAfter=No
3	:	:	PUNCT	COLON	_	4	punct	_	ref=MATT20.7
4	Meargeți	merge	VERB	Vmm-2p	Mood=Imp|Number=Plur|Person=2|VerbForm=Fin	1	parataxis	_	ref=MATT20.7
5	și	și	ADV	Rg	_	6	advmod	_	ref=MATT20.7
6	voi	tu	PRON	Pp2-pr	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	ref=MATT20.7
7	în	în	ADP	Spsa	AdpType=Prep|Case=Acc	8	case	_	ref=MATT20.7
8	vie	vie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	4	obl	_	ref=MATT20.7
9	și	și	CCONJ	Ccssp	Polarity=Pos	16	cc	_	ref=MATT20.7
10	ce	ce	PRON	Pw3--r	Case=Acc,Nom|Person=3|PronType=Int,Rel	13	nsubj	_	ref=MATT20.7
11	va	vrea	AUX	Vaip3s	Mood=Ind|Number=Sing|Person=3|Tense=Pres	12	aux	_	ref=MATT20.7
12	fi	fi	VERB	Vmn	VerbForm=Inf	13	cop	_	ref=MATT20.7
13	derept	drept	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	16	ccomp	_	ref=MATT20.7|SpaceAfter=No
14	,	,	PUNCT	COMMA	_	13	punct	_	ref=MATT20.7
15	veți	vrea	AUX	Vaip2p	Mood=Ind|Number=Plur|Person=2|Tense=Pres	16	aux	_	ref=MATT20.7
16	lua	lua	VERB	Vmii3s	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	conj	_	ref=MATT20.7|SpaceAfter=No
17	.	.	PUNCT	PERIOD	_	1	punct	_	ref=MATT20.7

~~~


