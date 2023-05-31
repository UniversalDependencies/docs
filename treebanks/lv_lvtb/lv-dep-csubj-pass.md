---
layout: base
title:  'Statistics of csubj:pass in UD_Latvian'
udver: '2'
---

## Treebank Statistics: UD_Latvian: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="lv-dep-csubj.html">csubj</a></tt>.

16 nodes (0%) are attached to their parents as `csubj:pass`.

15 instances of `csubj:pass` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.4375.

The following 4 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-VERB.html">VERB</a></tt> (13; 81% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="lv-pos-VERB.html">VERB</a></tt>-<tt><a href="lv-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj:pass	color:blue
1	Zinātniskajā	zinātniska	ADJ	arfslyp	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
2	literatūrā	literatūra	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	4	obl	4:obl:loc	_
3	nav	nebūt	VERB	vcnipii30ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	paskaidrots	paskaidrot	VERB	vmnpdmsnpsnp	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	zc	_	7	punct	7:punct	_
6	kā	kā	ADV	r0m	PronType=Int	7	advmod	7:advmod	_
7	izveidot	izveidot	VERB	vmnn0t2000n	Polarity=Pos|VerbForm=Inf	4	csubj:pass	4:csubj:pass	_
8	vērtību	vērtība	NOUN	ncfpg4	Case=Gen|Gender=Fem|Number=Plur	9	nmod	9:nmod:gen	_
9	ķēdi	ķēde	NOUN	ncfsa5	Case=Acc|Gender=Fem|Number=Sing	7	obj	7:obj	SpaceAfter=No
10	.	.	PUNCT	zs	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 16 csubj:pass	color:blue
1	Pašlaik	pašlaik	ADV	r0t	_	3	advmod	3:advmod	_
2	plāns	plāns	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
3	ir	būt	VERB	vmnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	apstiprināšanas	apstiprināšana	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	5	nmod	5:nmod:gen	_
5	procesā	process	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	3	obl	3:obl:loc	_
6	un	un	CCONJ	cc	_	9	cc	9:cc	_
7	tajā	tas	PRON	pd0msln	Case=Loc|Gender=Masc|Number=Sing|PronType=Dem	9	obl	9:obl:loc	_
8	nav	nebūt	VERB	vcnipii30ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	9:aux	_
9	noteikts	noteikt	VERB	vmnpdmsnpsnp	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj	3:conj	SpaceAfter=No
10	,	,	PUNCT	zc	_	16	punct	16:punct	_
11	ka	ka	SCONJ	cs	_	16	mark	16:mark	_
12	reģionālo	reģionāls	ADJ	armpgyp	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	13	amod	13:amod	_
13	plānu	plāns	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	14	nmod	14:nmod:gen	_
14	izstrāde	izstrāde	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	16	nsubj	16:nsubj	_
15	ir	būt	VERB	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	16:cop	_
16	obligāta	obligāta	ADJ	arfsnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	9	csubj:pass	9:csubj:pass	SpaceAfter=No
17	.	.	PUNCT	zs	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 21 csubj:pass	color:blue
1	Pirmie	pirmais	ADJ	mosmpn	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur|NumType=Ord	2	amod	2:amod	_
2	svētki	svētki	NOUN	ncmdn1	Case=Nom|Gender=Masc|Number=Ptan	3	nsubj	3:nsubj	_
3	patikuši	patikt	VERB	vmnpdmpnasnp	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	0:root	_
4	visai	visa	PRON	pg0fsdn	Case=Dat|Gender=Fem|Number=Sing|PronType=Tot	9	obl	9:obl:dat	_
5	lielajai	liela	ADJ	affsdyp	Case=Dat|Degree=Pos|Gender=Fem|Number=Sing	9	amod	9:amod	_
6	"	"	PUNCT	zq	_	7	punct	7:punct	SpaceAfter=No
7	Pasaciņas	pasaciņa	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	9	nmod	9:nmod:gen	SpaceAfter=No
8	"	"	PUNCT	zq	_	7	punct	7:punct	_
9	saimei	saime	NOUN	ncfsd5	Case=Dat|Gender=Fem|Number=Sing	3	iobj	3:iobj	SpaceAfter=No
10	,	,	PUNCT	zc	_	12	punct	12:punct	_
11	tāpēc	tāpēc	ADV	r0c	_	12	cc	12:cc	_
12	nolemts	nolemt	VERB	vmnpdmsnpsnp	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj	3:conj	SpaceAfter=No
13	,	,	PUNCT	zc	_	21	punct	21:punct	_
14	ka	ka	SCONJ	cs	_	21	mark	21:mark	_
15	to	tā	DET	pd0fpgn	Case=Gen|Gender=Fem|Number=Plur|PronType=Dem	16	det	16:det	_
16	rīkošana	rīkošana	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	21	nsubj	21:nsubj	_
17	būs	būt	VERB	vcnifii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	21	cop	21:cop	_
18	vēl	vēl	ADV	r0t	_	19	advmod	19:advmod	_
19	viena	viena	NUM	mcsfsn	Case=Nom|Gender=Fem|Number=Sing|NumType=Card	21	nummod	21:nummod	_
20	jauna	jauna	ADJ	affsnnp	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	21	amod	21:amod	_
21	tradīcija	tradīcija	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	12	csubj:pass	12:csubj:pass	SpaceAfter=No
22	.	.	PUNCT	zs	_	3	punct	3:punct	_

~~~


