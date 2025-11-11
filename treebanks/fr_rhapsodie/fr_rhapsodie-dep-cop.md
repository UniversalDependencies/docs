---
layout: base
title:  'Statistics of cop in UD_French-Rhapsodie'
udver: '2'
---

## Treebank Statistics: UD_French-Rhapsodie: Relations: `cop`

This relation is universal.

873 nodes (2%) are attached to their parents as `cop`.

833 instances of `cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.77892325315006.

The following 12 pairs of parts of speech are connected with `cop`: <tt><a href="fr_rhapsodie-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (335; 38% instances), <tt><a href="fr_rhapsodie-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (303; 35% instances), <tt><a href="fr_rhapsodie-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (100; 11% instances), <tt><a href="fr_rhapsodie-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (71; 8% instances), <tt><a href="fr_rhapsodie-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (23; 3% instances), <tt><a href="fr_rhapsodie-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (16; 2% instances), <tt><a href="fr_rhapsodie-pos-DET.html">DET</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (9; 1% instances), <tt><a href="fr_rhapsodie-pos-X.html">X</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="fr_rhapsodie-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="fr_rhapsodie-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_rhapsodie-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	ou	ou	CCONJ	_	_	5	cc	_	AlignBegin=69992|AlignEnd=70184|Overlap=Rhap_D0006-24
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj	_	AlignBegin=70190|AlignEnd=70439|SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	AlignBegin=70439|AlignEnd=70719
4	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	5	det	_	AlignBegin=70719|AlignEnd=70759|Gender[ctxt]=Masc|SpaceAfter=No
5	argent	argent	NOUN	_	_	0	root	_	AlignBegin=70759|AlignEnd=71119|Gender[lex]=Masc|Number[ctxt]=Sing
6	de	de	ADP	_	_	8	case	_	AlignBegin=71119|AlignEnd=71199
7	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	AlignBegin=71119|AlignEnd=71199
8	cinéma	cinéma	NOUN	_	_	5	nmod	_	AlignBegin=71199|AlignEnd=71765|Gender[lex]=Masc|Number[ctxt]=Sing
9	?	?	PUNCT	_	_	5	punct	_	AlignBegin=71765|AlignEnd=71765

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 cop	color:blue
1	et	et	CCONJ	_	_	6	cc	_	AlignBegin=65408|AlignEnd=65690|SpaceAfter=No
2	,	,	PUNCT	_	_	6	punct	_	AlignBegin=65690|AlignEnd=65690
3	euh	euh	INTJ	_	_	6	discourse	_	AlignBegin=65690|AlignEnd=65990|SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	AlignBegin=65990|AlignEnd=65990
5	je	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	AlignBegin=65990|AlignEnd=66130
6	pense	penser	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	AlignBegin=66130|AlignEnd=66370
7	que	que	SCONJ	_	_	12	mark	_	AlignBegin=66370|AlignEnd=66710
8	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	nsubj	_	AlignBegin=68055|AlignEnd=68184|Overlap=Rhap_D0006-23
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	aux:tense	_	AlignBegin=68184|AlignEnd=68214|Overlap=Rhap_D0006-23
10	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	12	cop	_	AlignBegin=68214|AlignEnd=68364|Overlap=Rhap_D0006-23
11	très	très	ADV	_	_	12	advmod	_	AlignBegin=68364|AlignEnd=68554|Overlap=Rhap_D0006-23
12	bénéfique	bénéfique	ADJ	_	_	6	ccomp	_	AlignBegin=68554|AlignEnd=69102|Gender[ctxt]=Masc|Number[ctxt]=Sing|Overlap=Rhap_D0006-23|SpaceAfter=No
13	.	.	PUNCT	_	_	6	punct	_	AlignBegin=69553|AlignEnd=69553|Overlap=Rhap_D0006-16

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	ben	ben	INTJ	_	_	5	discourse	_	AlignBegin=85835|AlignEnd=85925|SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	AlignBegin=85925|AlignEnd=85925
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	expl:subj	_	AlignBegin=85925|AlignEnd=86025|SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	AlignBegin=86025|AlignEnd=86055
5	moi	moi	PRON	_	Emph=Yes|Number=Sing|Person=1|PronType=Prs	0	root	_	AlignBegin=86055|AlignEnd=86165
6	qui	qui	PRON	_	PronType=Rel	9	nsubj	_	AlignBegin=86165|AlignEnd=86295
7	les	eux	PRON	_	Case=Acc|Emph=No|Number=Plur|Person=3|PronType=Prs	9	obj	_	AlignBegin=86295|AlignEnd=86395
8	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	aux:tense	_	AlignBegin=86395|AlignEnd=86445|Filler=subj
9	payés	payer	VERB	_	VerbForm=Part|Voice=Act	5	advcl:cleft	_	AlignBegin=86445|AlignEnd=86946|Gender[ctxt]=Masc|Number[ctxt]=Plur|SpaceAfter=No|Tense[denom]=Past
10	.	.	PUNCT	_	_	5	punct	_	AlignBegin=86946|AlignEnd=86946

~~~


