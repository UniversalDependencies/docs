---
layout: base
title:  'Statistics of csubj in UD_Dutch-LassySmall'
udver: '2'
---

## Treebank Statistics: UD_Dutch-LassySmall: Relations: `csubj`

This relation is universal.

55 nodes (0%) are attached to their parents as `csubj`.

54 instances of `csubj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.56363636363636.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (17; 31% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (15; 27% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (11; 20% instances), <tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (5; 9% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl_lassysmall-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-DET.html">DET</a></tt>-<tt><a href="nl_lassysmall-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl_lassysmall-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 11 csubj	color:blue
1	Uit	uit	ADP	VZ|init	_	3	case	_	_
2	genetisch	genetisch	ADJ	ADJ|prenom|basis|zonder	Degree=Pos	3	amod	_	_
3	onderzoek	onderzoek	NOUN	N|soort|ev|basis|onz|stan	Gender=Neut|Number=Sing	4	obl	_	_
4	blijkt	blijken	VERB	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	_
5	echter	echter	ADV	BW	_	4	advmod	_	_
6	dat	dat	SCONJ	VG|onder	_	11	mark	_	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	9	det	_	_
8	huidige	huidig	ADJ	ADJ|prenom|basis|met-e|stan	Degree=Pos	9	amod	_	_
9	Belgen	Belg	PROPN	N|eigen|mv|basis	Number=Plur	11	nsubj	_	_
10	niet	niet	ADV	BW	_	11	advmod	_	_
11	afstammen	afstammen	VERB	WW|pv|tgw|mv	Number=Plur|Tense=Pres|VerbForm=Fin	4	csubj	_	_
12	van	van	ADP	VZ|init	_	14	case	_	_
13	de	de	DET	LID|bep|stan|rest	Definite=Def	14	det	_	_
14	Belgae	Belga	PROPN	N|eigen|mv|basis	Number=Plur	11	obl	_	SpaceAfter=No
15	.	.	PUNCT	LET	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 13 csubj	color:blue
1	Het	het	PRON	VNW|pers|pron|stan|red|3|ev|onz	Person=3|PronType=Prs	5	expl	_	_
2	was	zijn	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	5	cop	_	_
3	de	de	DET	LID|bep|stan|rest	Definite=Def	5	det	_	_
4	eerste	één	ADJ	TW|rang|prenom|stan	_	5	amod	_	_
5	keer	keer	NOUN	N|soort|ev|basis|genus|stan	Gender=Com,Neut|Number=Sing	0	root	_	_
6	dat	dat	SCONJ	VG|onder	_	13	mark	_	_
7	de	de	DET	LID|bep|stan|rest	Definite=Def	8	det	_	_
8	Staatsprijs	staatsprijs	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	13	nsubj:pass	_	_
9	aan	aan	ADP	VZ|init	_	11	case	_	_
10	een	een	DET	LID|onbep|stan|agr	Definite=Ind	11	det	_	_
11	schilder	schilder	NOUN	N|soort|ev|basis|zijd|stan	Gender=Com|Number=Sing	13	obl	_	_
12	werd	worden	AUX	WW|pv|verl|ev	Number=Sing|Tense=Past|VerbForm=Fin	13	aux:pass	_	_
13	toegekend	toekennen	VERB	WW|vd|vrij|zonder	VerbForm=Part	5	csubj	_	SpaceAfter=No
14	.	.	PUNCT	LET	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 csubj	color:blue
1	Wanneer	wanneer	ADV	BW	_	6	advmod	_	_
2	ze	ze	PRON	VNW|pers|pron|stan|red|3|ev|fem	Person=3|PronType=Prs	6	nsubj	_	_
3	Leopold	Leopold	PROPN	SPEC|deeleigen	_	6	obj	_	_
4	III	III	PROPN	SPEC|deeleigen	_	3	flat:name	_	_
5	heeft	hebben	AUX	WW|pv|tgw|met-t	Number=Sing|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	ontmoet	ontmoeten	VERB	WW|vd|vrij|zonder	VerbForm=Part	10	csubj	_	SpaceAfter=No
7	,	,	PUNCT	LET	_	6	punct	_	_
8	is	zijn	AUX	WW|pv|tgw|ev	Number=Sing|Tense=Pres|VerbForm=Fin	10	cop	_	_
9	niet	niet	ADV	BW	_	10	advmod	_	_
10	bekend	bekend	ADJ	ADJ|vrij|basis|zonder	Degree=Pos	0	root	_	SpaceAfter=No
11	.	.	PUNCT	LET	_	10	punct	_	_

~~~


