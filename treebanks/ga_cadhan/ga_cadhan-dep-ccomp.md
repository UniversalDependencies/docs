---
layout: base
title:  'Statistics of ccomp in UD_Irish-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Irish-Cadhan: Relations: `ccomp`

This relation is universal.

50 nodes (1%) are attached to their parents as `ccomp`.

48 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.54.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (26; 52% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (5; 10% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (5; 10% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (3; 6% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt>-<tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt> (2; 4% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ga_cadhan-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-ADP.html">ADP</a></tt> (1; 2% instances), <tt><a href="ga_cadhan-pos-VERB.html">VERB</a></tt>-<tt><a href="ga_cadhan-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 ccomp	color:blue
1	"	"	PUNCT	_	_	3	punct	_	SpaceAfter=No
2	An	an	PART	_	PartType=Vb	3	mark:prt	_	_
3	measann	meas	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
4	tú	tú	PRON	_	Number=Sing|Person=2	3	nsubj	_	_
5	go	go	PART	_	PartType=Cmpl	6	mark:prt	_	_
6	ndéanfadh	déan	VERB	_	Form=Ecl|Mood=Cnd	3	ccomp	_	SpaceAfter=No
7	?	?	PUNCT	_	_	3	punct	_	SpaceAfter=No
8	"	"	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Adeir	abair	VERB	_	Mood=Ind|Tense=Pres	0	root	_	_
2	arís	arís	ADV	_	_	1	advmod	_	_
3	gurab	is	AUX	_	Form=VF|Tense=Pres|VerbForm=Cop	4	cop	_	_
4	ionann	ionann	ADJ	_	Degree=Pos	1	ccomp	_	_
5	‘	‘	PUNCT	_	_	6	punct	_	SpaceAfter=No
6	caomhán	caomhán	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No
7	’	’	PUNCT	_	_	6	punct	_	_
8	agus	agus	CCONJ	_	_	9	cc	_	_
9	láidir	láidir	ADJ	_	Degree=Pos	6	conj	_	SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	_
11	agus	agus	CCONJ	_	_	13	cc	_	_
12	gurab	is	AUX	_	Form=VF|Tense=Past|VerbForm=Cop	13	cop	_	_
13	uaidh	ó	ADP	_	Gender=Masc|Number=Sing|Person=3	4	conj	_	_
14	a	a	PART	_	Form=Direct|PartType=Vb|PronType=Rel	15	mark:prt	_	_
15	deirtear	abair	VERB	_	Mood=Ind|Person=0|Tense=Pres	13	csubj:cleft	_	_
16	Caomhánaigh	Caomhánach	PROPN	_	Case=Nom|Gender=Masc|Number=Plur	15	obj	_	SpaceAfter=No
17	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	Cé	cé	PRON	_	PronType=Int	4	advmod	_	_
2	ea	ea	PRON	_	Number=Sing|Person=3	1	fixed	_	_
3	,	,	PUNCT	_	_	1	punct	_	_
4	adeirthear	abair	VERB	_	Mood=Ind|Person=0|Tense=Pres	0	root	_	_
5	gurab	is	AUX	_	Form=VF|Tense=Pres|VerbForm=Cop	7	cop	_	_
6	ó	ó	ADP	_	_	7	case	_	_
7	abhainn	abhainn	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	ccomp	_	_
8	atá	bí	VERB	_	Form=Direct|Mood=Ind|PronType=Rel|Tense=Pres	7	acl:relcl	_	_
9	'san	i	ADP	_	Number=Sing|PronType=Art	10	case	_	_
10	Spáin	Spáinn	PROPN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	8	xcomp:pred	_	_
11	d'á	do	PART	_	Form=Indirect|PartType=Vb|PronType=Rel	12	obl	_	_
12	ngairthear	gair	VERB	_	Form=Ecl|Mood=Ind|Person=0|Tense=Pres	7	acl:relcl	_	_
13	‘	‘	PUNCT	_	_	14	punct	_	SpaceAfter=No
14	Hiberus	Hiberus	PROPN	_	Definite=Def|Foreign=Yes	12	obj	_	SpaceAfter=No
15	’	’	PUNCT	_	_	14	punct	_	_
16	tugthar	tabhair	VERB	_	Mood=Ind|Person=0|Tense=Pres	7	csubj:cleft	_	_
17	‘	‘	PUNCT	_	_	18	punct	_	SpaceAfter=No
18	Hibernia	Hibernia	PROPN	_	Definite=Def|Foreign=Yes	16	obj	_	SpaceAfter=No
19	’	’	PUNCT	_	_	18	punct	_	_
20	uirre	ar	ADP	_	Gender=Fem|Number=Sing|Person=3	16	obl:prep	_	SpaceAfter=No
21	.	.	PUNCT	_	_	4	punct	_	_

~~~


