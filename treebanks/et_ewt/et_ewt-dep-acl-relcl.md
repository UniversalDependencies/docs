---
layout: base
title:  'Statistics of acl:relcl in UD_Estonian-EWT'
udver: '2'
---

## Treebank Statistics: UD_Estonian-EWT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="et_ewt-dep-acl.html">acl</a></tt>.

440 nodes (1%) are attached to their parents as `acl:relcl`.

439 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.16590909090909.

The following 23 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (269; 61% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (80; 18% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (18; 4% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (12; 3% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (10; 2% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (6; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-VERB.html">VERB</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-DET.html">DET</a></tt>-<tt><a href="et_ewt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-DET.html">DET</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-NUM.html">NUM</a></tt>-<tt><a href="et_ewt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PRON.html">PRON</a></tt>-<tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="et_ewt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="et_ewt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl:relcl	color:blue
1	Füüsilist	füüsiline	ADJ	A	Case=Par|Degree=Pos|Number=Sing	2	amod	2:amod	_
2	keha	keha	NOUN	S	Case=Par|Number=Sing	12	obj	12:obj	SpaceAfter=No
3	,	,	PUNCT	Z	_	8	punct	8:punct	_
4	mis	mis	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	8	obj	8:obj	_
5	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	8:aux	_
6	sulle	sina	PRON	P	Case=All|Number=Sing|Person=2|PronType=Prs	8	obl	8:obl	_
7	eluks	elu	NOUN	S	Case=Tra|Number=Sing	8	obl	8:obl	_
8	antud	andma	VERB	V	Tense=Past|VerbForm=Part|Voice=Pass	2	acl:relcl	2:acl	SpaceAfter=No
9	,	,	PUNCT	Z	_	8	punct	8:punct	_
10	tuleks	tulema	VERB	V	Mood=Cnd|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
11	ikka	ikka	ADV	D	_	10	advmod	10:advmod	_
12	austada	austama	VERB	V	VerbForm=Inf	10	csubj	10:csubj	SpaceAfter=No
13	.	.	PUNCT	Z	_	10	punct	10:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	väljaminnes	välja_minema	VERB	V	VerbForm=Conv	4	advcl	4:advcl	_
2	peaks	pidama	AUX	V	Mood=Cnd|Number=Sing|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	arve	arve	NOUN	S	Case=Gen|Number=Sing	4	obj	4:obj	_
4	tasuma	tasuma	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	0	root	0:root	_
5	see	see	PRON	P	Case=Nom|Number=Sing|PronType=Dem	4	nsubj	4:nsubj	SpaceAfter=No
6	,	,	PUNCT	Z	_	9	punct	9:punct	_
7	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	9	nsubj	9:nsubj	_
8	välja	välja	ADV	D	_	9	compound:prt	9:compound	_
9	kutsub	kutsuma	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	5:acl	SpaceAfter=No
10	.	.	PUNCT	Z	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl:relcl	color:blue
1	Või	või	CCONJ	J	_	2	cc	2:cc	_
2	poisile	poiss	NOUN	S	Case=All|Number=Sing	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	Z	_	7	punct	7:punct	_
4	kes	kes	PRON	P	Case=Nom|Number=Sing|PronType=Int,Rel	7	nsubj:cop	7:nsubj	_
5	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	nii	nii	ADV	D	_	7	advmod	7:advmod	_
7	andekas	andekas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	acl:relcl	2:acl	SpaceAfter=No
8	,	,	PUNCT	Z	_	11	punct	11:punct	_
9	et	et	SCONJ	J	_	11	mark	11:mark	_
10	nutma	nutma	VERB	V	Case=Ill|VerbForm=Sup|Voice=Act	11	xcomp	11:xcomp	_
11	ajab	ajama	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	7:advcl	SpaceAfter=No
12	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


