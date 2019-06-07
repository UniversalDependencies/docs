---
layout: base
title:  'Statistics of acl:relcl in UD_Karelian-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Karelian-KKPP: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="krl_kkpp-dep-acl.html">acl</a></tt>.

27 nodes (1%) are attached to their parents as `acl:relcl`.

27 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.7037037037037.

The following 9 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (13; 48% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (4; 15% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (2; 7% instances), <tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="krl_kkpp-pos-AUX.html">AUX</a></tt> (1; 4% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="krl_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="krl_kkpp-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="krl_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="krl_kkpp-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 acl:relcl	color:blue
1	Karjalan	Karjala	PROPN	PROPN	Case=Gen|Number=Sing	2	nmod:poss	_	PropnType=Top
2	kylissä	kylä	NOUN	NOUN	Case=Ine|Number=Plur	7	obl	_	_
3	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
4	totista	totini	ADJ	ADJ	Case=Par|Number=Sing	7	amod	_	_
5	ta	ta	CCONJ	CCONJ	_	6	cc	_	_
6	alkuperaistä	alkuperäini	ADJ	ADJ	Case=Par|Number=Sing|Typo=Yes	4	conj	_	_
7	voimua	voima	NOUN	NOUN	Case=Par|Number=Sing	0	root	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	mi	mi	PRON	PRON	Case=Nom|Number=Sing	11	nsubj	_	PronType=Interr
10	voit	voija	AUX	AUX	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
11	innoššuttua	innoššuttua	VERB	VERB	VerbForm=Inf	7	acl:relcl	_	_
12	kaupunkilaisie	kaupunkilaini	ADJ	ADJ	Case=Par|Number=Plur	11	obj	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	11	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 acl:relcl	color:blue
1	Konša	konša	ADV	ADV	_	2	advmod	_	_
2	pakajat	paissa	VERB	VERB	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	avomielisešti	avomielisešti	ADV	ADV	_	2	advmod	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	_	_
5	niin	niin	ADV	ADV	_	2	advmod	_	_
6	šiun	sie	PRON	PRON	Case=Gen|Number=Sing|Person=2|PronType=Prs	7	nmod:poss	_	_
7	ehotukšie	ehotuš	NOUN	NOUN	Case=Par|Number=Sing	2	obj	_	_
8	otetah	ottoa	VERB	VERB	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	acl:relcl	_	_
9	vaštah	vaštah	ADP	ADP	_	8	compound	_	_
10	hyvin	hyvin	ADV	ADV	_	8	advmod	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 15 acl:relcl	color:blue
1	Enšin	enšin	ADV	ADV	_	5	advmod	_	_
2	oli	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	vaikie	vaikie	ADJ	ADJ	Case=Nom|Number=Sing	0	root	_	_
4	heti	heti	ADV	ADV	_	5	advmod	_	_
5	ryhtyö	ryhtyö	VERB	VERB	VerbForm=Inf	3	xcomp	_	_
6	pelih	peli	NOUN	NOUN	Case=Ill|Number=Sing	5	obl	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	5	punct	_	_
8	šentäh	sentäh	ADV	ADV	_	5	advmod	_	_
9	kun	kun	SCONJ	SCONJ	_	15	mark	_	_
10	ei	ei	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	_
11	ollun	olla	AUX	AUX	Case=Gen|Number=Sing|Tense=Past|VerbForm=Part	12	cop	_	_
12	šelvä	šelvä	ADJ	ADJ	Case=Nom|Number=Sing	3	conj	_	SpaceAfter=No
13	,	,	PUNCT	PUNCT	_	15	punct	_	_
14	mitein	mitein	ADV	ADV	_	15	advmod	_	_
15	käyttäytyö	käyttäytyö	VERB	VERB	VerbForm=Inf	12	acl:relcl	_	_
16	ta	ta	CCONJ	CCONJ	_	17	cc	_	_
17	mitä	mi	PRON	PRON	Case=Par|Number=Sing	18	obj	_	PronType=Interr
18	luatie	luatie	VERB	VERB	VerbForm=Inf	15	conj	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	18	punct	_	_

~~~


