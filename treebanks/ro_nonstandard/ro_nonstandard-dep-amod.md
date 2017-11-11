---
layout: base
title:  'Statistics of amod in UD_Romanian-Nonstandard'
udver: '2'
---

## Treebank Statistics: UD_Romanian-Nonstandard: Relations: `amod`

This relation is universal.

255 nodes (1%) are attached to their parents as `amod`.

232 instances of `amod` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.20392156862745.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (200; 78% instances), <tt><a href="ro_nonstandard-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (32; 13% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (8; 3% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (8; 3% instances), <tt><a href="ro_nonstandard-pos-PRON.html">PRON</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_nonstandard-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="ro_nonstandard-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_nonstandard-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 amod	color:blue
1	DE	de	ADP	Spsa	AdpType=Prep|Case=Acc	3	case	_	ref=MATT.title
2	LA	la	ADP	Spsa	AdpType=Prep|Case=Acc	1	fixed	_	ref=MATT.title
3	MATTEIU	MATEI	PROPN	Npmsrn	Case=Acc,Nom|Definite=Ind|Gender=Masc|Number=Sing	5	nmod	_	ref=MATT.title
4	SFÎNTA	sfânt	ADJ	Afpfsry	Case=Acc,Nom|Definite=Def|Degree=Pos|Gender=Fem	5	amod	_	ref=MATT.title
5	EVANGHELIE	evanghelie	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	0	root	_	ref=MATT.title|SpaceAfter=No
6	.	.	PUNCT	PERIOD	_	5	punct	_	ref=MATT.title

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	Casa	casă	NOUN	Ncfsry	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	0	root	_	ref=MATT7.24.content
2	temeiată	întemeia	VERB	Vmp--sf-p--r	Case=Acc,Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part	1	amod	_	ref=MATT7.24.content
3	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	4	case	_	ref=MATT7.24.content
4	piatră	piatră	NOUN	Ncfsrn	Case=Acc,Nom|Definite=Ind|Gender=Fem|Number=Sing	2	obl	_	ref=MATT7.24.content|SpaceAfter=No
5	.	.	PUNCT	PERIOD	_	1	punct	_	ref=MATT7.24.content

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 amod	color:blue
1	Iară	iar	CCONJ	Ccssp	Polarity=Pos	8	cc	_	ref=MATT18.15
2	să	să	PART	Qs	PartType=Sub	3	mark	_	ref=MATT18.15
3	greși	greși	VERB	Vmis3s	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	8	advcl	_	ref=MATT18.15
4	fratele	frate	NOUN	Ncmsry	Case=Acc,Nom|Definite=Def|Gender=Masc|Number=Sing	3	nsubj	_	ref=MATT18.15
5	tău	tău	DET	Ds2ms-s	Gender=Masc|Number=Sing|Number[psor]=Sing|Person=2|Poss=Yes|PronType=Prs	4	det	_	ref=MATT18.15
6	ție	tu	PRON	Pp2-sd--------s	Case=Dat|Number=Sing|Person=2|PronType=Prs|Strength=Strong	3	iobj	_	ref=MATT18.15|SpaceAfter=No
7	,	,	PUNCT	COMMA	_	3	punct	_	ref=MATT18.15
8	pasă	păsa	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	0	root	_	ref=MATT18.15
9	și	și	CCONJ	Ccssp	Polarity=Pos	10	cc	_	ref=MATT18.15
10	ceartă	certa	VERB	Vmm-2s--p	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin	8	conj	_	ref=MATT18.15
11	pre	pe	ADP	Spsa	AdpType=Prep|Case=Acc	12	case	_	ref=MATT18.15
12	el	el	PRON	Pp3msa--------s	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	10	obj	_	ref=MATT18.15
13	între	între	ADP	Spsa	AdpType=Prep|Case=Acc	14	case	_	ref=MATT18.15
14	tine	tu	PRON	Pp2-sa--------s	Case=Acc|Number=Sing|Person=2|PronType=Prs|Strength=Strong	10	obl	_	ref=MATT18.15
15	și	și	CCONJ	Ccssp	Polarity=Pos	17	cc	_	ref=MATT18.15
16	între	între	ADP	Spsa	AdpType=Prep|Case=Acc	17	case	_	ref=MATT18.15
17	el	el	PRON	Pp3msa--------s	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs|Strength=Strong	14	conj	_	ref=MATT18.15
18	sîngur	singur	ADJ	Afpmsrn	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	17	amod	_	ref=MATT18.15|SpaceAfter=No
19	.	.	PUNCT	PERIOD	_	8	punct	_	ref=MATT18.15

~~~


