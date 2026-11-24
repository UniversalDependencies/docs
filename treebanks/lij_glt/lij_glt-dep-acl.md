---
layout: base
title:  'Statistics of acl in UD_Ligurian-GLT'
udver: '2'
---

## Treebank Statistics: UD_Ligurian-GLT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="lij_glt-dep-acl-relcl.html">acl:relcl</a></tt>.

35 nodes (1%) are attached to their parents as `acl`.

35 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.4.

The following 4 pairs of parts of speech are connected with `acl`: <tt><a href="lij_glt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (26; 74% instances), <tt><a href="lij_glt-pos-PRON.html">PRON</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (6; 17% instances), <tt><a href="lij_glt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="lij_glt-pos-ADV.html">ADV</a></tt>-<tt><a href="lij_glt-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	Ò	avei	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	coæ	coæ	NOUN	_	Gender=Fem|Number=Sing	1	obj	_	_
3	d'	de	ADP	_	_	4	mark	_	SpaceAfter=No
4	assazzâ	assazzâ	VERB	_	Tense=Pres|VerbForm=Inf	2	acl	_	_
5	e	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	6	det	_	_
6	speçialitæ	speçialitæ	NOUN	_	Gender=Fem|Number=Plur	4	obj	_	_
7	de	de	ADP	_	_	9	case	_	_
8	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	region	region	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Gh'	ghe	PRON	_	PronType=Dem	2	expl	_	SpaceAfter=No
2	é	ëse	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	ciù	ciù	ADV	_	_	2	advmod	_	_
4	ninte	ninte	PRON	_	Number=Sing|PronType=Neg	2	nsubj	_	_
5	da	da	ADP	_	_	6	mark	_	_
6	fâ	fâ	VERB	_	Tense=Pres|VerbForm=Inf	4	acl	_	SpaceAfter=No
7	?	?	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 17 acl	color:blue
1	O	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	personaggio	personaggio	NOUN	_	Gender=Masc|Number=Sing	7	nsubj	_	_
3	prinçipâ	prinçipâ	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
4	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
5	l'	l'	PART	_	_	7	dep	_	SpaceAfter=No
6	é	ëse	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	Tintin	Tintin	PROPN	_	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
8	,	,	PUNCT	_	_	10	punct	_	_
9	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	zoeno	zoeno	NOUN	_	Gender=Masc|Number=Sing	7	appos	_	_
11	ch'	che	PRON	_	PronType=Rel	13	nsubj	_	SpaceAfter=No
12	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	expl	_	_
13	travaggia	travaggiâ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	acl:relcl	_	_
14	da	da	ADP	_	_	15	case	_	_
15	reporter	reporter	NOUN	_	Gender=Masc|Number=Sing	13	obl	_	SpaceAfter=No
16	,	,	PUNCT	_	_	17	punct	_	_
17	accompagnou	accompagnâ	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	7	acl	_	_
18	inte	inte	ADP	_	_	21	case	_	_
19	e	o	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	21	det	_	_
20	seu	seu	DET	_	Poss=Yes|PronType=Prs	21	det	_	_
21	avventue	avventua	NOUN	_	Gender=Fem|Number=Plur	17	obl	_	_
22	da	da	ADP	_	_	24	case	_	_
23	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	24	det	_	_
24	cagnetto	cagnetto	NOUN	_	Degree=Dim|Gender=Masc|Number=Sing	17	obl:agent	_	_
25	Milou	Milou	PROPN	_	Gender=Masc|Number=Sing	24	appos	_	SpaceAfter=No
26	.	.	PUNCT	_	_	7	punct	_	_

~~~


