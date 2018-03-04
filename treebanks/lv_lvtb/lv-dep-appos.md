---
layout: base
title:  'Statistics of appos in UD_Latvian'
udver: '2'
---

## Treebank Statistics: UD_Latvian: Relations: `appos`

This relation is universal.

4 nodes (0%) are attached to their parents as `appos`.

4 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5.

The following 4 pairs of parts of speech are connected with `appos`: <tt><a href="lv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="lv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="lv-pos-NUM.html">NUM</a></tt>-<tt><a href="lv-pos-PROPN.html">PROPN</a></tt> (1; 25% instances), <tt><a href="lv-pos-PRON.html">PRON</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 19 appos	color:blue
1	Ap	ap	ADP	spsa	_	3	case	3:case	_
2	nulto	nultais	ADJ	mosmsa	Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|NumType=Ord	3	amod	3:amod	_
3	gadu	gads	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	11	obl	11:obl:gen	_
4	Romas	Roma	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	5	nmod	5:nmod:gen	_
5	imperators	imperators	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	6	nmod	6:nmod	_
6	Augusts	Augusts	PROPN	npmsn1	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	_
7	visā	visa	DET	pg0fsln	Case=Loc|Gender=Fem|Number=Sing|PronType=Tot	10	det	10:det	_
8	plaši	plaši	ADV	rpm	Degree=Pos	9	advmod	9:advmod	_
9	sazarotajā	sazarot	VERB	vmnpdfslpsyp	Aspect=Perf|Case=Loc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	10	amod	10:amod	_
10	impērijā	impērija	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	11	obl	11:obl:loc	_
11	ieviesa	ieviest	VERB	vmnist130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
12	vienotu	vienota	ADJ	arfsanp	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	14	amod	14:amod	_
13	naudas	nauda	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	14	nmod	14:nmod:gen	_
14	vienību	vienība	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	11	obj	11:obj	_
15	–	–	PUNCT	zd	_	19	punct	19:punct	_
16	tādu	tāda	PRON	pd0fsan	Case=Acc|Gender=Fem|Number=Sing|PronType=Dem	19	det	19:det	_
17	kā	kā	SCONJ	cs	_	19	discourse	19:discourse	_
18	antīku	antīks	ADJ	armsanp	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	19	amod	19:amod	_
19	eiro	eiro	NOUN	nc0000	_	14	appos	14:appos	SpaceAfter=No
20	.	.	PUNCT	zs	_	11	punct	11:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 appos	color:blue
1	Pillar	Pillar	PROPN	np0sg0	Case=Gen|Number=Sing	7	nsubj	7:nsubj|18:nsubj	_
2	Holding	Holding	X	xf	Foreign=Yes	1	flat:name	1:flat:name	_
3	Company	Company	X	xf	Foreign=Yes	1	flat:name	1:flat:name	SpaceAfter=No
4	,	,	PUNCT	zc	_	5	punct	5:punct	_
5	KS	KS	SYM	xx	_	1	acl	1:acl	SpaceAfter=No
6	,	,	PUNCT	zc	_	5	punct	5:punct	_
7	pieder	piederēt	VERB	vmnipi330an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	lielākajai	liela	ADJ	affsdyc	Case=Dat|Degree=Cmp|Gender=Fem|Number=Sing	10	amod	10:amod	_
9	Latvijas	Latvija	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	10	nmod	10:nmod:gen	_
10	privātbankai	privātbanka	NOUN	ncfsd4	Case=Dat|Gender=Fem|Number=Sing	7	iobj	7:iobj	_
11	-	-	PUNCT	zd	_	12	punct	12:punct	_
12	ABLV	ABLV	PROPN	yp	Abbr=Yes	10	appos	10:appos	_
13	Bank	Bank	X	xf	Foreign=Yes	12	flat:name	12:flat:name	SpaceAfter=No
14	,	,	PUNCT	zc	_	15	punct	15:punct	_
15	AS	AS	PROPN	yn	Abbr=Yes	12	acl	12:acl	SpaceAfter=No
16	,	,	PUNCT	zc	_	15	punct	15:punct	_
17	un	un	CCONJ	cc	_	18	cc	18:cc	_
18	apvieno	apvienot	VERB	vmnipt230an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	7:conj	_
19	ABLV	ABLV	PROPN	yp	Abbr=Yes	20	nmod	20:nmod	_
20	grupas	grupa	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	21	nmod	21:nmod:gen	_
21	uzņēmumus	uzņēmums	NOUN	ncmpa1	Case=Acc|Gender=Masc|Number=Plur	18	obj	18:obj	SpaceAfter=No
22	,	,	PUNCT	zc	_	29	punct	29:punct	_
23	kuru	kurš	DET	pr0mpgn	Case=Gen|Gender=Masc|Number=Plur|PronType=Rel	25	det	25:det	_
24	darbības	darbība	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	25	nmod	25:nmod:gen	_
25	virziens	virziens	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	29	nsubj	29:nsubj	_
26	ir	būt	VERB	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	29	cop	29:cop|31:cop|33:cop	_
27	nekustamo	nekustams	ADJ	armpgyp	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	28	amod	28:amod	_
28	īpašumu	īpašums	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	29	nmod	29:nmod:gen|31:nmod:gen|33:nmod:gen	_
29	attīstīšana	attīstīšana	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	21	acl	21:acl	SpaceAfter=No
30	,	,	PUNCT	zc	_	31	punct	31:punct	_
31	pārvaldīšana	pārvaldīšana	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	29	conj	21:acl|29:conj	_
32	un	un	CCONJ	cc	_	33	cc	33:cc	_
33	tirdzniecība	tirdzniecība	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	29	conj	21:acl|29:conj	SpaceAfter=No
34	.	.	PUNCT	zs	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 18 appos	color:blue
1	Savukārt	savukārt	ADV	r0q	_	7	advmod	7:advmod	_
2	jau	jau	ADV	r0t	_	3	advmod	3:advmod	_
3	tuvākajā	tuvs	ADJ	afmslyc	Case=Loc|Degree=Cmp|Gender=Masc|Number=Sing	4	amod	4:amod	_
4	laikā	laiks	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	7	obl	7:obl:loc	_
5	Pillar	Pillar	PROPN	np0sn0	Case=Nom|Number=Sing	7	nsubj	7:nsubj	_
6	pilnībā	pilnībā	ADV	r0m	_	7	advmod	7:advmod	_
7	pabeigs	pabeigt	VERB	vmnift130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	vienu	viens	NUM	mcsmsa	Case=Acc|Gender=Masc|Number=Sing|NumType=Card	7	obj	7:obj	_
9	no	no	ADP	sppd	_	13	case	13:case	_
10	ekskluzīvākajiem	ekskluzīvs	ADJ	afmpdyc	Case=Dat|Degree=Cmp|Gender=Masc|Number=Plur	13	amod	13:amod	_
11	nekustamā	nekustams	ADJ	armsgyp	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	12	amod	12:amod	_
12	īpašuma	īpašums	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	13	nmod	13:nmod:gen	_
13	projektiem	projekts	NOUN	ncmpd1	Case=Dat|Gender=Masc|Number=Plur	8	compound	8:compound	_
14	visā	visa	DET	pg0fsln	Case=Loc|Gender=Fem|Number=Sing|PronType=Tot	15	det	15:det	_
15	Rīgā	Rīga	PROPN	npfsl4	Case=Loc|Gender=Fem|Number=Sing	13	acl	13:acl:loc	_
16	-	-	PUNCT	zd	_	18	punct	18:punct	_
17	"	"	PUNCT	zq	_	18	punct	18:punct	SpaceAfter=No
18	Elizabetes	Elizabete	PROPN	npfsg5	Case=Gen|Gender=Fem|Number=Sing	8	appos	8:appos	_
19	Park	Park	X	xf	Foreign=Yes	18	flat:name	18:flat:name	_
20	House	House	X	xf	Foreign=Yes	18	flat:name	18:flat:name	SpaceAfter=No
21	"	"	PUNCT	zq	_	18	punct	18:punct	_
22	Rīgas	Rīga	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	23	nmod	23:nmod:gen	_
23	centrā	centrs	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	18	acl	18:acl:loc	SpaceAfter=No
24	,	,	PUNCT	zc	_	27	punct	27:punct	_
25	Elizabetes	Elizabete	PROPN	npfsg5	Case=Gen|Gender=Fem|Number=Sing	26	nmod	26:nmod:gen	_
26	ielā	iela	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	27	nmod	27:nmod	_
27	21	21	NUM	xn	NumType=Card	23	conj	18:acl:loc|23:conj	SpaceAfter=No
28	a	a	SYM	xx	_	27	amod	27:amod	SpaceAfter=No
29	.	.	PUNCT	zs	_	7	punct	7:punct	_

~~~


